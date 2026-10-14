/**
 * Action logic
 *
 * Contains the main logic for the GitHub Action
 */

import * as core from '@actions/core'
import type { ActionConfig, ActionSetup, ActionInputs } from '#toolkit'
import { getSafeInputs } from '#toolkit'
import { Config } from './config.js'
import { millisecondsFromInput } from './utils.js'

// * Define an optional flat configuration interface for persisting action information
/**
 * Represents a flat configuration for the GitHub Action.
 *
 * Customize this interface to include any additional configuration options required for your action.
 */
interface ActionInfo extends ActionInputs {
	/** The number of milliseconds to wait during the action execution. */
	milliseconds: number
}

// * Implement the main action logic using the defined configuration and inputs
/**
 * Waits for the specified number of milliseconds as defined in the action's inputs.
 *
 * @param action (RepoAction) The action object.
 * @returns Resolves when the example logic is complete.
 */
export const main = async (action: ActionSetup): Promise<string | void> => {
	/*
	// Octokit instance for GitHub API requests
	const octokit = await getAuth(action)

	if (!octokit) {
		const authFailedMsg = 'Failed to obtain an authenticated Octokit instance.'
		core.setFailed(authFailedMsg)
		return
	}
	*/

	// Change RepoAction dynamic key from `unknown` -> `any`
	// to not require casting for basic operations
	const ms: number = millisecondsFromInput(action.inputs?.milliseconds)

	// Consider gathering action information into a single object
	// for reporting purposes
	const actionInfo: ActionInfo = {
		milliseconds: ms,
		...action,
	}

	core.debug(`Waiting ${actionInfo.milliseconds} milliseconds ...`)

	const result = await delay(actionInfo.milliseconds)

	core.debug(`Result after waiting: ${result}`)

	core.setOutput('time', new Date().toTimeString())

	return result
}

// Export the main action function as the default export.
export default main

/**
 * Waits for a number of milliseconds.
 *
 * @param milliseconds The number of milliseconds to wait.
 * @returns Resolves with 'done!' after the wait is over.
 */
export const delay = (milliseconds: number): Promise<string> => {
	if (isNaN(milliseconds)) return Promise.reject(new Error('milliseconds is not a number'))

	return new Promise((resolve) => {
		setTimeout(() => resolve('done!'), milliseconds)
	})
}

// * =======================================================
// * The main action class that extends the base configuration ...
// * this class doesn't need to be modified, as it primarily serves
// * as a container for the action setup and context information.
/**
 * Represents the main action class that extends the base configuration.
 *
 * Provides the `run` method to execute the action's logic.
 * Extends the base configuration class to inherit common action properties and methods.
 */
export class Action extends Config implements ActionConfig {
	/**
	 * Executes the main logic of the GitHub Action.
	 *
	 * @returns resolves when the action has completed execution.
	 */
	async run(): Promise<void> {
		core.debug(
			`Action created with actor: ${this.actor}, repo: ${this.repo.fullName}, inputs (safe): ${JSON.stringify(getSafeInputs(this.inputs, 'ghToken'), null, 2)}`
		)

		core.debug(`Start time: ${new Date().toTimeString()}`)
		const result = await main(this)
		core.debug(`End time: ${new Date().toTimeString()}`)
		if (result) core.debug(`Result: ${result}`)
	}
}
