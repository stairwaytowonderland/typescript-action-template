import { jest } from '@jest/globals'

import type * as core from '@actions/core'

/** Mocked core.debug function for testing purposes */
export const debug = jest.fn<typeof core.debug>()
/** Mocked core.error function for testing purposes */
export const error = jest.fn<typeof core.error>()
/** Mocked core.info function for testing purposes */
export const info = jest.fn<typeof core.info>()
/** Mocked core.getInput function for testing purposes */
export const getInput = jest.fn<typeof core.getInput>()
/** Mocked core.getBooleanInput function for testing purposes */
export const getBooleanInput = jest.fn<typeof core.getBooleanInput>()
/** Mocked core.setOutput function for testing purposes */
export const setOutput = jest.fn<typeof core.setOutput>()
/** Mocked core.setFailed function for testing purposes */
export const setFailed = jest.fn<typeof core.setFailed>()
/** Mocked core.warning function for testing purposes */
export const warning = jest.fn<typeof core.warning>()

/**
 * Mocked summary object for testing purposes.
 *
 * Each method returns `this` to allow call chaining.
 */
export const summary = {
	addHeading: jest.fn().mockReturnThis(),
	addRaw: jest.fn().mockReturnThis(),
	addTable: jest.fn().mockReturnThis(),
	write: jest.fn().mockImplementation(() => Promise.resolve()),
}
