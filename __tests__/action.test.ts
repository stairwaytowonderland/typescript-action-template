/// <reference types="node" />
/// <reference types="jest" />

/**
 * Unit tests for the action's logic, src/action.ts
 */

// Import mocked core and GitHub modules from fixtures
import * as core from '../__fixtures__/core.js'
import * as github from '../__fixtures__/github.js'

// Import the wait mocks from fixtures.
// import { wait } from '../__fixtures__/action.js'

// Import Jest testing utilities
import { jest } from '@jest/globals'

// Mocks should be declared before the module being tested is imported
jest.unstable_mockModule('@actions/core', () => core)
jest.unstable_mockModule('@actions/github', () => github)

// Import custom types from the project
import { ActionInputs, GitHubContext } from '../src/types.js'

// Import the mocked core module and wait function from fixtures
import { wait, delay, millisecondsFromInput } from '../src/action.js'
import { Action } from '../src/config.js'

describe('Action Logic', () => {
	let inputs: ActionInputs

	beforeEach(() => {
		// Clear any previous mocks to ensure a clean state for each test
		jest.clearAllMocks()
	})

	beforeEach(() => {
		inputs = {
			dryRun: 'false',
			milliseconds: '500',
		} as ActionInputs
	})

	afterEach(() => {
		// Restore any mocks or spies that were set up during the tests
		jest.restoreAllMocks()
	})

	describe('Action', () => {
		test('run logs result and sets time output', async () => {
			jest.useFakeTimers()
			const action = new Action(github.context as GitHubContext, inputs)
			const ms = millisecondsFromInput(inputs.milliseconds)

			try {
				const runPromise = action.run()
				jest.advanceTimersByTime(ms)
				await runPromise
			} finally {
				jest.useRealTimers()
			}

			expect(core.setOutput).toHaveBeenCalledWith('time', expect.stringMatching(/^\d{2}:\d{2}:\d{2}/))
		})
	})

	describe('delay', () => {
		test('Throws an invalid number', async () => {
			const input = parseInt('foo', 10)

			expect(isNaN(input)).toBe(true)

			await expect(delay(input)).rejects.toThrow('milliseconds is not a number')
		})

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

	describe('wait', () => {
		test('repo action parsed correctly', async () => {
			jest.useFakeTimers()
			const action = new Action(github.context as GitHubContext, inputs)
			const ms = millisecondsFromInput(inputs.milliseconds)

			try {
				const resultPromise = wait(action)
				jest.advanceTimersByTime(ms)
				await expect(resultPromise).resolves.toBe('done!')
			} finally {
				jest.useRealTimers()
			}
		})
	})
})

describe('Utilities', () => {
	describe('millisecondsFromInput', () => {
		test('parses correctly', () => {
			const input = '1234'
			const result = millisecondsFromInput(input)
			expect(result).toBe(1234)
		})
		test('returns NaN for invalid input', () => {
			const input = 'foo'
			const result = millisecondsFromInput(input)
			expect(isNaN(result)).toBe(true)
		})
		test('returns NaN for empty input', () => {
			const input = ''
			const result = millisecondsFromInput(input)
			expect(isNaN(result)).toBe(true)
		})
		test('returns NaN for null input', () => {
			const input = null
			const result = millisecondsFromInput(input)
			expect(isNaN(result)).toBe(true)
		})
		test('returns NaN for undefined input', () => {
			const input = undefined
			const result = millisecondsFromInput(input)
			expect(isNaN(result)).toBe(true)
		})
	})
})
