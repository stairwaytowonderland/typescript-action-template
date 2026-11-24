/// <reference types="node" />
/// <reference types="jest" />

/**
 * Unit tests for the action's logic, src/action.ts
 */

// Import Jest testing utilities
import { jest } from '@jest/globals'

// Import mocked core and GitHub modules from fixtures
import * as core from '../__fixtures__/core.js'
import * as github from '../__fixtures__/github.js'

// Import utility functions for mocking inputs and capturing outputs during tests
import { mockGetInput, mockGetBooleanInput } from '#toolkit/__utils__/mocks.js'

// Import custom types and utilities from the project
import type { GitHubContext } from '#toolkit'
import { type Inputs, getInputs } from '../src/action.js'
import { millisecondsFromInput } from '../src/utils.js'

// Import the mocked core module and delay function from fixtures
// import { delay } from '../__fixtures__/action.js'
import { Action, delay } from '../src/action.js'

jest.unstable_mockModule('@actions/core', () => core)
jest.unstable_mockModule('../src/action.js', () => ({ delay }))

describe('Action Logic', () => {
	let inputs: Inputs

	beforeEach(() => {
		// Clear any previous mocks to ensure a clean state for each test
		jest.clearAllMocks()
		// Restore any mocks or spies that were set up during the tests
		jest.restoreAllMocks()
	})

	beforeEach(() => {
		inputs = {
			// ghToken: 'mock-token',
			dryRun: false,
			milliseconds: '500',
		} as Inputs
	})

	describe('Action', () => {
		test('initializes with no values', () => {
			const action = new Action()
			expect(action.context).toEqual(github.context)
		})

		test('initializes with default values', () => {
			const action = new Action(github.context as GitHubContext)
			expect(action.dryRun).toBe(false)
			expect(action.actor).toBeDefined()
			expect(action.repo).toBeDefined()
			expect(action.inputs).toBeDefined()
		})

		test('get actor from action', () => {
			const action = new Action(github.context as GitHubContext)
			expect(action.actor).toBeDefined()
		})

		test('get repo from action', () => {
			const action = new Action(github.context as GitHubContext)
			expect(action.repo).toBeDefined()
		})

		test('get safeInputs from action', () => {
			const action = new Action(github.context as GitHubContext, inputs)
			expect(action.safeInputs).toBeDefined()
			expect(action.safeInputs).not.toHaveProperty('ghToken')
		})

		test('run logs result and sets time output', async () => {
			jest.useFakeTimers()
			const action = new Action(github.context as GitHubContext, inputs)
			const ms = millisecondsFromInput(inputs.milliseconds)

			try {
				const runPromise = action.run()
				await jest.runAllTimersAsync()
				jest.advanceTimersByTime(ms)
				await runPromise
			} finally {
				jest.useRealTimers()
			}

			expect(core.setOutput).toHaveBeenCalledWith('time', expect.stringMatching(/^\d{2}:\d{2}:\d{2}/))
		})
	})

	describe('getInputs', () => {
		beforeEach(() => {
			mockGetInput({
				// 'github-token': inputs.ghToken as string,
				milliseconds: inputs.milliseconds as string,
			})
			mockGetBooleanInput({
				'dry-run': true,
			})
		})

		test('returns an object with the specified inputs', () => {
			const retrievedInputs = getInputs()
			expect(retrievedInputs).toHaveProperty('dryRun')
			expect(typeof retrievedInputs.dryRun).toBe('boolean')
			expect(retrievedInputs.dryRun).toBe(true)
			expect(retrievedInputs).toHaveProperty('milliseconds')
			expect(retrievedInputs.milliseconds).toBe('500')
			// expect(retrievedInputs).toHaveProperty('ghToken')
			// expect(retrievedInputs.ghToken).toBe('mock-token')
		})
	})
})
