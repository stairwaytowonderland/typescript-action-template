/**
 * Main entry for the GitHub Action.
 *
 * This file contains the main entry for the GitHub Action,
 * which gathers inputs and invokes the run function.
 *
 * @packageDocumentation
 * @category Main Logic
 */

import * as core from '@actions/core'
import * as github from '@actions/github'
import { Action, Inputs } from './action.js'

/**
 * Retrieves and returns the sanitized action inputs as an instance of the Inputs class.
 *
 * @returns An object containing the normalized action inputs keyed by camelCase names.
 */
export function getInputs() {
	return new Inputs()
}

/**
 * Runs the main logic for the GitHub Action.
 *
 * Gathers inputs and invokes the run function.
 *
 * @returns Resolves when the action is complete.
 */
export const run = async (): Promise<void> => {
	try {
		console.debug('Starting your GitHub action...')
		const inputs = getInputs()
		const action = new Action(github.context, inputs)
		await action.run()

		console.debug('Your GitHub action completed successfully!')
		process.exit(0)
	} catch (error: unknown) {
		if (error instanceof Error) {
			core.setFailed(error.message)
		} else {
			core.setFailed(String(error))
		}
		process.exit(1)
	}
}

// Export the run function as the default export for external usage
export default run
