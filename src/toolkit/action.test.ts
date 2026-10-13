/// <reference types="jest" />

// Import mocked GitHub module from fixtures
import * as github from './__fixtures__/github.js'

/**
 * Import the source to be tested
 */

// Import types
import type { SimpleRepository, GitHubContext } from './action.js'
// Import functions and classes
import { ActionRepository, getSafeInputs } from './action.js'

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
})
