import * as core from '@actions/core'
import * as github from '@actions/github'
import { Action } from './action.js'

/**
 * Main entry for the GitHub Action.
 *
 * This file contains the main entry for the GitHub Action,
 * which gathers inputs and invokes the run function.
 *
 * @returns Resolves when the action is complete.
 */
export const run = async (): Promise<void> => {
	try {
		console.debug('Starting your GitHub action...')
		const action = new Action(github.context)
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
