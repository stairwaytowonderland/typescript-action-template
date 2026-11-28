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

// Type-only imports are safe at the top
import type { GitHubContext } from '#toolkit'
import { millisecondsFromInput } from '../src/utils.js'

// 1. Declare module mocks FIRST (do NOT mock ../src/action.js here)
jest.unstable_mockModule('@actions/core', () => core)

// 2. Dynamically import the modules under test AFTER mocks are registered
const { Action, Inputs } = await import('../src/action.js')

describe('Action Logic', () => {
	let inputs: InstanceType<typeof Inputs>

	beforeEach(() => {
		// Clear any previous mocks to ensure a clean state for each test
		jest.clearAllMocks()
		// Restore any mocks or spies that were set up during the tests
		jest.restoreAllMocks()
	})

	beforeEach(() => {
		inputs = new Inputs({
			// token: 'mock-token',
			dryRun: false,
			milliseconds: '500',
		})
	})

	describe('Inputs', () => {
		test('falls back to empty string when milliseconds input is undefined', () => {
			mockGetBooleanInput({ 'dry-run': false })
			mockGetInput({ milliseconds: undefined as unknown as string })

			const emptyInputs = new Inputs()
			expect(emptyInputs.milliseconds).toBe('')
		})

		describe('getInputs', () => {
			beforeEach(() => {
				mockGetInput({
					// 'github-token': inputs.token as string,
					milliseconds: inputs.milliseconds as string,
				})
				mockGetBooleanInput({
					'dry-run': true,
				})
			})

			test('returns an object with the specified inputs', () => {
				const retrievedInputs = Inputs.getInputs()
				expect(retrievedInputs).toHaveProperty('dryRun')
				expect(typeof retrievedInputs.dryRun).toBe('boolean')
				expect(retrievedInputs.dryRun).toBe(true)
				expect(retrievedInputs).toHaveProperty('milliseconds')
				expect(retrievedInputs.milliseconds).toBe('500')
				// expect(retrievedInputs).toHaveProperty('token')
				// expect(retrievedInputs.token).toBe('mock-token')
			})
		})
	})

	describe('Action', () => {
		test('initializes with default values', () => {
			const action = new Action(github.context as GitHubContext, inputs)
			expect(action.dryRun).toBe(false)
			expect(action.actor).toBeDefined()
			expect(action.repo).toBeDefined()
			expect(action.inputs).toBeDefined()
		})

		test('falls back to false when inputs.dryRun is undefined', () => {
			const noDryRunInputs = { ...inputs, dryRun: undefined } as unknown as InstanceType<typeof Inputs>
			const action = new Action(github.context as GitHubContext, noDryRunInputs)
			expect(action.dryRun).toBe(false)
		})

		test('get actor from action', () => {
			const action = new Action(github.context as GitHubContext, inputs)
			expect(action.actor).toBeDefined()
		})

		test('get repo from action', () => {
			const action = new Action(github.context as GitHubContext, inputs)
			expect(action.repo).toBeDefined()
		})

		test('get safeInputs from action', () => {
			const action = new Action(github.context as GitHubContext, inputs)
			expect(action.safeInputs).toBeDefined()
			expect(action.safeInputs).not.toHaveProperty('token')
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
})
