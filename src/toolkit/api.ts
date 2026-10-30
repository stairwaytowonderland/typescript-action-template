/**
 * GitHub API related helper functions and types for the toolkit.
 *
 * Provides helper functions and types to interact with the GitHub API.
 *
 * @packageDocumentation
 */

import * as core from '@actions/core'
import * as github from '@actions/github'

import type { GitHubContext } from './action.js'

/*
 * Octokit client
 */

/**
 * Represents the Octokit client returned by the `getOctokit` function from the `@actions/github` library.
 */
export type OctokitClient = ReturnType<typeof github.getOctokit>

/*
 * Utility functions for GitHub API interactions.
 */

/**
 * Checks if the provided Octokit client is authenticated for the given repository action.
 *
 * @param octokit The Octokit client to check authentication for.
 * @param failOnError Whether to throw an error if authentication fails. Defaults to false.
 * @returns A promise that resolves to true if authenticated, false otherwise.
 */
export async function isOctokitAuthenticated(octokit: OctokitClient, failOnError = false): Promise<boolean> {
	try {
		const { data, status } = await octokit.rest.rateLimit.get()
		const result = status === 200 && data?.rate?.limit !== undefined
		if (result) {
			core.debug('Octokit successfully authenticated with the GitHub API.')
		}
		return result
	} catch (err: unknown) {
		const msg = (err as Error).message
		const status = (err as Error & { status?: number }).status
		const statusMsg = `Octokit failed to authenticate with the GitHub API: ${JSON.stringify({ status, msg }, null, 2)}`

		if (failOnError) {
			// eslint-disable-next-line preserve-caught-error
			throw new Error(statusMsg)
		}

		core.debug(statusMsg)
		return false
	}
}

/**
 * Retrieves an authenticated Octokit client using the provided GitHub token or the token from the action inputs.
 *
 * If the environment is set to 'test', the function will skip live GitHub API authentication and return a mock Octokit client.
 *
 * @param ghToken Optional GitHub token to use for authentication. If not provided, it will be read from the action inputs.
 * @param failOnError Whether to throw an error if authentication fails. Defaults to false.
 * @returns A promise that resolves to an authenticated Octokit client instance, or undefined if authentication fails.
 */
export async function getAuth(ghToken: string, failOnError = false): Promise<OctokitClient | undefined> {
	const token = ghToken?.trim()

	if (!token) {
		const noTokenMsg = 'GitHub token is empty or missing.'
		if (failOnError) throw new Error(noTokenMsg)
		core.debug(noTokenMsg)
		return undefined
	}

	const octokit: OctokitClient = github.getOctokit(token)

	const isAuthenticated = await isOctokitAuthenticated(octokit)
	// console.debug('Octokit authentication check completed.')
	// console.debug(`Octokit authentication result: ${isAuthenticated}`)
	if (!isAuthenticated) return undefined
	return octokit
}

/*
 * GitHub context payload utility functions.
 */

/**
 * Get the issue object from the GitHub context payload.
 *
 * @param context The GitHub context object containing the payload for the current action.
 * @returns The issue object from the GitHub context payload, or undefined if not present.
 */
export const getIssueFromContext = (context: GitHubContext = github.context) => context.payload.issue

/**
 * Get the pull request object from the GitHub context payload.
 *
 * @param context The GitHub context object containing the payload for the current action.
 * @returns The pull request object from the GitHub context payload, or undefined if not present.
 */
export const getPrFromContext = (context: GitHubContext = github.context) => context.payload.pull_request

/*
 * REST API related types and functions
 * Provides types and functions for interacting with the GitHub REST API.
 */

/**
 * Represents a single search result item from the GitHub API.
 */
export interface SearchItem {
	/** The unique node ID of the search result item. */
	node_id: string
	/** The issue or pull request number. */
	number: number
	/** The labels associated with the issue or pull request. */
	labels: {
		/** The name of the label. */
		name: string
	}[]
	/** The title of the issue or pull request. */
	title: string
	/** The URL of the issue or pull request on GitHub. */
	html_url: string
	/** The URL of the repository containing the issue or pull request. */
	repository_url: string
	/** The date and time when the issue or pull request was created. */
	created_at: Date
}

/**
 * Searches for issues and pull requests based on the provided query using the GitHub REST API.
 * Returns a list of search result items matching the query.
 *
 * @see https://docs.github.com/en/rest/search/search?apiVersion=2026-03-10#search-issues-and-pull-requests
 *
 * @param query The search query string used to find issues and pull requests.
 * @param octokit The Octokit client instance used to interact with the GitHub REST API.
 * @returns A promise that resolves to an array of search result items matching the query.
 */
export const searchIssuesAndPullRequests = async (query: string, octokit: OctokitClient): Promise<SearchItem[]> =>
	(await octokit.paginate(octokit.rest.search.issuesAndPullRequests, {
		q: query,
		per_page: 100,
	})) as unknown as SearchItem[]
