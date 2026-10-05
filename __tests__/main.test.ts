/// <reference types="node" />
/// <reference types="jest" />

/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * To mock dependencies in ESM, you can create fixtures that export mock
 * functions and objects. For example, the core module is mocked in this test,
 * so that the actual '@actions/core' module is not imported.
 */

// Import mocked core and GitHub modules from fixtures
import * as core from '../__fixtures__/core.js'
import * as github from '../__fixtures__/github.js'

// Import the action mocks from fixtures
import { actionMock, actionRunMock } from '../__fixtures__/action.js'

// Import utility functions for mocking inputs and capturing outputs during tests
import { mockGetInput, mockSetOutput } from '../__utils__/mocks.js'

// Import Jest testing utilities
import { jest } from '@jest/globals'

/*
 * Mocks should be declared before the module being tested is imported.
 *
 * This ensures that the main module uses the mocked versions of its dependencies.
 */

// Mock the core and GitHub modules before importing the main module.
jest.unstable_mockModule('@actions/core', () => core)
jest.unstable_mockModule('@actions/github', () => github)

// Mock the Action class from the action module to control its behavior during tests
jest.unstable_mockModule('../src/config.js', actionRunMock)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
const { default: run } = await import('../src/main.js')

describe('Main Entry', () => {
	let exitSpy: jest.SpiedFunction<typeof process.exit>
	let outputs: Record<string, string>
	let inputs: Record<string, string>

	beforeEach(() => {
		// Clear any previous mocks to ensure a clean state for each test.
		jest.clearAllMocks()

		// Intercept process.exit so it doesn't physically crash the Jest runner
		exitSpy = jest.spyOn(process, 'exit').mockImplementation(() => undefined as never)

		// Mock the process.stdout.write method to prevent actual console output during tests.
		jest.spyOn(process.stdout, 'write').mockImplementation(() => true)
	})

	beforeEach(() => {
		inputs = {
			dryRun: 'false',
			milliseconds: '500',
		}
	})

	beforeEach(() => {
		mockGetInput(inputs)

		// Mock the actionMock to always resolve successfully for testing purposes.
		// actionMock.mockImplementation(() => Promise.resolve())

		actionMock.mockImplementation(async () => {
			const ms = parseInt(core.getInput('milliseconds'), 10)
			if (isNaN(ms)) throw new Error('milliseconds is not a number')

			core.setOutput('time', new Date().toTimeString())
		})

		// Capture output during tests
		outputs = mockSetOutput()
	})

	// Restore the process.exit mock after each test
	afterEach(() => {
		exitSpy.mockRestore()
		jest.resetAllMocks()
	})

	test('Sets the time output', async () => {
		await run()

		// Verify that the outputs object contains the expected time output.
		// Use objectContaining to allow other outputs to exist.
		// This ensures that the outputs object contains at least the expected time output,
		// while allowing other outputs to exist as well.
		expect(outputs).toEqual(
			expect.objectContaining({
				time: expect.stringMatching(/^\d{2}:\d{2}:\d{2}/),
			})
		)

		// Verify the time output was set.
		// Use the nth call to verify the correct output was set.
		// This ensures that the correct output was set in the correct order.
		expect(core.setOutput).toHaveBeenNthCalledWith(
			1,
			'time',
			// Simple regex to match a time string in the format HH:MM:SS.
			expect.stringMatching(/^\d{2}:\d{2}:\d{2}/)
		)
	})

	test('Sets a failed status', async () => {
		inputs.milliseconds = 'this is not a number'

		await run()

		// Verify that the action was marked as failed.
		expect(core.setFailed).toHaveBeenNthCalledWith(1, 'milliseconds is not a number')
	})

	// Unlikely scenario: the rejection is not an instance of Error
	// This test satisfies missing coverage for non-Error rejections
	test('handles a rejection catch block flow with a non-Error rejection', async () => {
		const error = { message: 'Mocked Failure' }

		actionMock.mockRejectedValueOnce(error)

		await run()

		expect(exitSpy).toHaveBeenCalledWith(1)
	})
})
