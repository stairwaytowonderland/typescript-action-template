/// <reference types="jest" />

// Import Jest testing utilities
import { jest } from '@jest/globals'

// Import mocked GitHub module from fixtures
import * as github from './__fixtures__/github.js'

// Import mocked Octokit utilities from the octokit.js module
import { mockRateLimitGet } from './__utils__/octokit.js'
// Import utility function to create a mocked Octokit client
import { toOctokit } from './__utils__/mocks.js'

/**
 * Import the source to be tested
 */

// Import types
import type { ActionConfig, SimpleRepository, GitHubContext } from './action.js'
import type { OctokitClient } from './api.js'
// Import functions and classes
import {
	getAuth,
	isOctokitAuthenticated,
	searchIssuesAndPullRequests,
	getIssueFromContext,
	getPrFromContext,
} from './api.js'

describe('Octokit/API', () => {
	let action: ActionConfig

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

			const brokenAction: ActionConfig = {
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
