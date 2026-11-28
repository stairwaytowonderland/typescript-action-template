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
import { context } from '@actions/github'
import { Action, Inputs } from './action.js'

/**
 * Runs the main logic for the GitHub Action.
 *
 * Gathers inputs and invokes the run function.
 *
 * @returns Resolves when the action is complete.
 */
export const run = async (): Promise<void> => {
	try {
		core.debug('Starting your GitHub action...')
		const inputs = Inputs.getInputs()
		const action = new Action(context, inputs)
		await action.run()

		core.debug('Your GitHub action completed successfully!')
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
