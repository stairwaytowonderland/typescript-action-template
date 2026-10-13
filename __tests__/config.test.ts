/// <reference types="jest" />

/**
 * Unit tests for src/common.ts
 *
 * To mock dependencies in ESM, you can create fixtures that export mock
 * functions and objects. For example, the GitHub module is mocked in this test,
 * so that the actual '@actions/github' module is not imported.
 */

// Import Jest testing utilities
// import { jest } from '@jest/globals'

// Import mocked GitHub module from fixtures
import * as github from '#toolkit/__fixtures__/github.js'

// Import the source to be tested
import type { GitHubContext } from '#toolkit'
import Config from '../src/config.js'

describe('Config', () => {
	describe('Action', () => {
		test('initializes with default values', () => {
			const action = new Config(github.context as GitHubContext)
			expect(action.dryRun).toBe(false)
			expect(action.actor).toBeDefined()
			expect(action.repo).toBeDefined()
			expect(action.inputs).toBeDefined()
		})

		test('get actor from action', () => {
			const action = new Config(github.context as GitHubContext)
			expect(action.actor).toBeDefined()
		})

		test('get repo from action', () => {
			const action = new Config(github.context as GitHubContext)
			expect(action.repo).toBeDefined()
		})
	})
})
