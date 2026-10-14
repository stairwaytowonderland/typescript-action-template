/// <reference types="jest" />

/**
 * Unit tests for #toolkit subpath
 *
 * To mock dependencies in ESM, you can create fixtures that export mock
 * functions and objects. For example, the GitHub module is mocked in this test,
 * so that the actual '@actions/github' module is not imported.
 */

// Import Jest testing utilities
import { jest } from '@jest/globals'

// Import mocked GitHub module from fixtures
import * as github from '../__fixtures__/github.js'

// Import mocked Octokit utilities from the octokit.js module
import { mockRateLimitGet } from '../__utils__/octokit.js'
// Import utility function to create a mocked Octokit client
import { toOctokit } from '../__utils__/mocks.js'

/**
 * Import the source to be tested
 */

// Import types
import type { ActionSetup, SimpleRepository, GitHubContext } from '../action.js'
import type { OctokitClient } from '../api.js'
// Import functions and classes
import { ActionRepository, getSafeInputs } from '../action.js'
import {
	getAuth,
	isOctokitAuthenticated,
	getIssueFromContext,
	getPrFromContext,
	searchIssuesAndPullRequests,
} from '../api.js'
// Import additional utility functions
import { normalizeOptional, kebabToCamel } from '../utils.js'

describe('Action Setup', () => {
	describe('ActionRepository', () => {
		test('parses repository information from a string', () => {
			const repo = new ActionRepository('owner/repo')
			expect(repo.owner).toBe('owner')
			expect(repo.repo).toBe('repo')
			expect(repo.fullName).toBe('owner/repo')
		})

		test('uses explicit owner argument when provided', () => {
			const repo = new ActionRepository('repo', 'explicit-owner')
			expect(repo.owner).toBe('explicit-owner')
			expect(repo.repo).toBe('repo')
			expect(repo.fullName).toBe('explicit-owner/repo')
		})

		test('parses repository information from a SimpleRepository object', () => {
			const repo = new ActionRepository({ owner: 'owner', repo: 'repo' })
			expect(repo.owner).toBe('owner')
			expect(repo.repo).toBe('repo')
			expect(repo.fullName).toBe('owner/repo')
		})

		test('handles repo names without an explicit owner', () => {
			const repo = new ActionRepository('repo')
			expect(repo.owner).toBeUndefined()
			expect(repo.repo).toBe('repo')
			expect(repo.fullName).toBeUndefined()
		})

		test('treats empty and slash-only inputs as unset', () => {
			expect(new ActionRepository('').owner).toBeUndefined()
			expect(new ActionRepository('').repo).toBeUndefined()
			expect(new ActionRepository('/').owner).toBeUndefined()
			expect(new ActionRepository('/').repo).toBeUndefined()
			expect(new ActionRepository({}).owner).toBeUndefined()
			expect(new ActionRepository({ repo: '/' }).owner).toBeUndefined()
			expect(new ActionRepository({ repo: '/' }).repo).toBeUndefined()
		})

		test('normalizes a full repo string when owner is omitted', () => {
			const repo = new ActionRepository({ repo: 'stairwaytowonderland/add-to-project' })
			expect(repo.owner).toBe('stairwaytowonderland')
			expect(repo.repo).toBe('add-to-project')
			expect(repo.fullName).toBe('stairwaytowonderland/add-to-project')
		})

		test('normalizes owner-only repo input without duplicating the owner', async () => {
			const repo = new ActionRepository({ repo: 'stairwaytowonderland/' }) as SimpleRepository
			expect(repo).toMatchObject({ owner: 'stairwaytowonderland' })
			expect(repo.repo).toBeUndefined()
		})

		test('treats a trailing slash string as owner-only', () => {
			const repo = new ActionRepository('octocat/')
			expect(repo.owner).toBe('octocat')
			expect(repo.repo).toBeUndefined()
			expect(repo.fullName).toBeUndefined()
		})

		test('parses repository information from an API URL', () => {
			const repo = new ActionRepository().fromApiUrl('https://api.github.com/repos/owner/repo')
			expect(repo.owner).toBe('owner')
			expect(repo.repo).toBe('repo')
			expect(repo.fullName).toBe('owner/repo')
		})

		test('handles invalid API URL gracefully', () => {
			const repo = new ActionRepository().fromApiUrl('https://api.github.com/repos/owner')
			expect(repo.owner).toBeUndefined()
			expect(repo.repo).toBeUndefined()
			expect(repo.fullName).toBeUndefined()
		})

		test('parses repository information from the GitHub context', () => {
			github.context.actor = 'actor'
			github.context.repo = { owner: 'owner', repo: 'repo' }

			const repo = new ActionRepository().fromContextRepo(github.context as GitHubContext)
			expect(repo.owner).toBe('owner')
			expect(repo.repo).toBe('repo')
			expect(repo.fullName).toBe('owner/repo')
		})
	})
})

describe('Octokit/API', () => {
	let action: ActionSetup

	beforeEach(() => {
		jest.clearAllMocks()

		action = {
			dryRun: false,
			context: github.context as GitHubContext,
			repo: github.context.repo as SimpleRepository,
			inputs: {
				dryRun: false,
				ghToken: 'secret',
			},
		}
	})

	describe('isOctokitAuthenticated', () => {
		test('returns true if Octokit is authenticated', async () => {
			const octokit = toOctokit()
			const isAuthenticated = await isOctokitAuthenticated(octokit, action)
			expect(isAuthenticated).toBe(true)
		})

		test('returns false if Octokit is not authenticated', async () => {
			const octokit = toOctokit()
			mockRateLimitGet.mockRejectedValueOnce({
				status: 403,
				message: 'API rate limit exceeded',
			})
			const isAuthenticated = await isOctokitAuthenticated(octokit, action)
			expect(isAuthenticated).toBe(false)
		})

		test('returns false if repo and owner are undefined', async () => {
			const octokit = toOctokit()
			action.repo = { owner: undefined, repo: undefined }
			const isAuthenticated = await isOctokitAuthenticated(octokit, action)
			expect(isAuthenticated).toBe(false)
		})

		test('throws error if repo and owner are undefined and failOnError is true', async () => {
			const octokit = toOctokit()
			action.repo = { owner: undefined, repo: undefined }
			await expect(isOctokitAuthenticated(octokit, action, true)).rejects.toThrow('Missing owner or repo')
		})

		test('throws error if failure occurs and failOnError is true', async () => {
			const octokit = toOctokit()
			mockRateLimitGet.mockRejectedValueOnce({
				status: 500,
				message: 'Internal Server Error',
			})
			await expect(isOctokitAuthenticated(octokit, action, true)).rejects.toThrow('Internal Server Error')
		})
	})

	describe('getAuth', () => {
		afterEach(() => {
			mockRateLimitGet.mockReset()
			mockRateLimitGet.mockResolvedValue({
				status: 200,
				data: { rate: { limit: 5000 } },
			})
		})

		test('returns an authenticated Octokit instance', async () => {
			const authOctokit = await getAuth(action)
			expect(authOctokit).toBeDefined()
		})

		test('should fail if GitHub token is missing', async () => {
			if (action.inputs) {
				action.inputs.ghToken = ''
			}

			const result = await getAuth(action, false)

			expect(result).toBeUndefined()
		})

		test('throws error if GitHub token is missing and failOnError is true', async () => {
			if (action.inputs) {
				action.inputs.ghToken = ''
			}

			await expect(getAuth(action, true)).rejects.toThrow('GitHub token is empty or missing.')
		})

		test('returns undefined if authentication fails', async () => {
			// Change the mock function response signature directly on the plain mock reference object
			mockRateLimitGet.mockResolvedValueOnce({
				status: 403,
				data: { rate: { limit: 0 } }, // Forces isOctokitAuthenticated to evaluate to false
			})

			const result = await getAuth(action, false)

			expect(result).toBeUndefined()
		})

		test('throws error if authentication fails and failOnError is true', async () => {
			mockRateLimitGet.mockRejectedValueOnce({
				status: 500,
				message: 'Internal Server Error',
			})
			await expect(getAuth(action, true)).rejects.toThrow('Internal Server Error')
		})

		test('returns undefined and logs error if an unexpected exception occurs during authentication check', async () => {
			const explodingRepo: SimpleRepository = {
				get owner(): string {
					throw new Error('Catastrophic repository read failure')
				},
				get repo(): string {
					return 'placeholder-repo'
				},
			}

			const brokenAction: ActionSetup = {
				dryRun: false,
				context: {} as unknown as GitHubContext, // Standard simple cast permitted for unrelated properties if needed, or map a valid empty context
				repo: explodingRepo,
				inputs: {
					dryRun: false,
					ghToken: 'valid-format-token',
				},
			}

			const result = await getAuth(brokenAction, false)

			expect(result).toBeUndefined()
		})
	})
})

describe('Utilities', () => {
	describe('getSafeInputs', () => {
		test('removes specified keys from the inputs object', () => {
			const inputs = { ghToken: 'secret', dryRun: true, milliseconds: '1000' }
			const safeInputs = getSafeInputs(inputs, 'ghToken')
			expect(safeInputs).toEqual({ dryRun: true, milliseconds: '1000' })
		})

		test('returns an empty object if inputs is undefined', () => {
			const safeInputs = getSafeInputs(undefined, 'ghToken')
			expect(safeInputs).toEqual({})
		})
	})

	describe('normalizeOptional', () => {
		test('converts empty string to undefined', () => {
			expect(normalizeOptional('')).toBeUndefined()
			expect(normalizeOptional(undefined)).toBeUndefined()
			expect(normalizeOptional('value')).toBe('value')
		})

		test('does not modify non-empty strings', () => {
			expect(normalizeOptional('non-empty')).toBe('non-empty')
		})
	})

	describe('kebabToCamel', () => {
		test('converts kebab-case to camelCase', () => {
			expect(kebabToCamel('kebab-case-string')).toBe('kebabCaseString')
			expect(kebabToCamel('another-example')).toBe('anotherExample')
			expect(kebabToCamel('no-change')).toBe('noChange')
		})
	})

	describe('Context Payload', () => {
		test('getIssueFromContext returns the issue from the context payload', () => {
			github.context.payload.issue = { number: 1 }
			const issue = getIssueFromContext(github.context as GitHubContext)
			expect(issue).toEqual({ number: 1 })
		})

		test('getPrFromContext returns the pull request from the context payload', () => {
			github.context.payload.pull_request = { number: 2 }
			const pr = getPrFromContext(github.context as GitHubContext)
			expect(pr).toEqual({ number: 2 })
		})

		test('getIssueFromContext returns the issue using the default fallback context', () => {
			github.context.payload.issue = { number: 1 }
			const issue = getIssueFromContext()
			expect(issue).toEqual({ number: 1 })
		})

		test('getPrFromContext returns the pull request using the default fallback context', () => {
			github.context.payload.pull_request = { number: 2 }
			const pr = getPrFromContext()
			expect(pr).toEqual({ number: 2 })
		})
	})

	describe('searchIssuesAndPullRequests', () => {
		test('should return search results for a given query', async () => {
			const mockIssuesAndPullRequests = jest.fn()

			const mockPaginate = jest.fn<(...args: unknown[]) => Promise<unknown>>().mockResolvedValue([
				{
					node_id: '12345',
					number: 1,
					labels: [{ name: 'bug' }],
					title: 'Issue 1',
					html_url: 'https://github.com/owner/repo/issues/1',
					repository_url: 'https://api.github.com/repos/owner/repo',
					created_at: new Date(),
				},
			])

			const octokit = {
				paginate: mockPaginate,
				rest: {
					search: {
						issuesAndPullRequests: mockIssuesAndPullRequests,
					},
				},
			}

			const results = await searchIssuesAndPullRequests('repo:owner/repo is:issue', octokit as unknown as OctokitClient)

			expect(results).toHaveLength(1)
			expect(results[0].node_id).toBe('12345')
			expect(results[0].number).toBe(1)
			expect(results[0].labels).toEqual([{ name: 'bug' }])
			expect(results[0].title).toBe('Issue 1')
			expect(results[0].html_url).toBe('https://github.com/owner/repo/issues/1')
			expect(results[0].repository_url).toBe('https://api.github.com/repos/owner/repo')
		})
	})
})
