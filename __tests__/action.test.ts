/// <reference types="node" />
/// <reference types="jest" />

/**
 * Unit tests for the action's logic, src/action.ts
 */

// Import Jest testing utilities
import { jest } from '@jest/globals'

// Import mocked core and GitHub modules from fixtures
import * as core from '#toolkit/__fixtures__/core.js'
import * as github from '#toolkit/__fixtures__/github.js'

// Import utility functions for mocking inputs and capturing outputs during tests
import { mockGetInput, mockGetBooleanInput } from '#toolkit/__utils__/mocks.js'

// Import custom types and utilities from the project
import type { ActionInputs, GitHubContext } from '#toolkit'
import { getInputs } from '../src/action.js'
import { millisecondsFromInput } from '../src/utils.js'

// Import the mocked core module and wait function from fixtures
import main, { Action, delay } from '../src/action.js'

describe('Action Logic', () => {
	let inputs: ActionInputs

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
		} as ActionInputs
	})

	describe('Action', () => {
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

	describe('main', () => {
		test('main executes and returns done!', async () => {
			const action = new Action(github.context as GitHubContext, inputs)
			const ms = millisecondsFromInput(inputs.milliseconds)

			jest.useFakeTimers()
			try {
				const resultPromise = main(action)
				jest.advanceTimersByTime(ms)
				await expect(resultPromise).resolves.toBe('done!')
			} finally {
				jest.useRealTimers()
			}
		})
	})

	describe('delay', () => {
		test('Throws an invalid number', async () => {
			const input = parseInt('foo', 10)

			expect(isNaN(input)).toBe(true)

			await expect(delay(input)).rejects.toThrow('milliseconds is not a number')
		})

		// eslint-disable-next-line jest/no-commented-out-tests
		/*
		// Test the delay function with a valid number and real timers.
		test('Waits with a valid number', async () => {
			const ms: number = parseInt(inputs.milliseconds as string, 10)

			const start = new Date()
			const result = await delay(ms)
			const end = new Date()

			const delta = Math.abs(end.getTime() - start.getTime())

			expect(delta).toBeGreaterThan(ms - 1)
			expect(result).toBe('done!')
		})
		*/

		// Test the delay function using fake timers to simulate the passage of time.
		test('Waits with a valid number', async () => {
			const ms: number = parseInt(inputs.milliseconds as string, 10)
			jest.useFakeTimers()

			try {
				const result = delay(ms)
				jest.advanceTimersByTime(ms)
				await expect(result).resolves.toBe('done!')
			} finally {
				jest.useRealTimers()
			}
		})
	})
})
