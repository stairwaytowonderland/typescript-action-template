/// <reference types="jest" />

// Import Jest testing utilities
import { jest } from '@jest/globals'

// Import mocked GitHub module from fixtures
import * as github from './__fixtures__/github.js'

/**
 * Import the source to be tested
 */

// Import types
import type { GitHubContext } from './action.js'
import type { OctokitClient } from './api.js'
// Import functions and classes
import { getSafeInputs } from './action.js'
import { getIssueFromContext, getPrFromContext, searchIssuesAndPullRequests } from './api.js'
// Import additional utility functions
import { normalizeOptional, kebabToCamel } from './utils.js'

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
