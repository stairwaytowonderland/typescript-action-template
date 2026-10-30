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
import type { GitHubContext } from './action.js'
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
	const mockToken: string = 'mock-token'

	beforeEach(() => {
		jest.clearAllMocks()
	})

	describe('isOctokitAuthenticated', () => {
		test('returns true if Octokit is authenticated', async () => {
			const octokit = toOctokit()
			const isAuthenticated = await isOctokitAuthenticated(octokit)
			expect(isAuthenticated).toBe(true)
		})

		test('returns false if Octokit is not authenticated', async () => {
			const octokit = toOctokit()
			mockRateLimitGet.mockRejectedValueOnce({
				status: 403,
				message: 'API rate limit exceeded',
			})
			const isAuthenticated = await isOctokitAuthenticated(octokit)
			expect(isAuthenticated).toBe(false)
		})

		test('throws error if failure occurs and failOnError is true', async () => {
			const octokit = toOctokit()
			mockRateLimitGet.mockRejectedValueOnce({
				status: 500,
				message: 'Internal Server Error',
			})
			await expect(isOctokitAuthenticated(octokit, true)).rejects.toThrow('Internal Server Error')
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
			const authOctokit = await getAuth(mockToken)
			expect(authOctokit).toBeDefined()
		})

		test('should fail if GitHub token is missing', async () => {
			const result = await getAuth('', false)
			expect(result).toBeUndefined()
		})

		test('throws error if GitHub token is missing and failOnError is true', async () => {
			await expect(getAuth('', true)).rejects.toThrow('GitHub token is empty or missing.')
		})

		test('returns undefined if authentication fails', async () => {
			mockRateLimitGet.mockResolvedValueOnce({
				status: 403,
				data: { rate: { limit: 0 } }, // Forces isOctokitAuthenticated to evaluate to false
			})
			const result = await getAuth(mockToken as string, false)
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
