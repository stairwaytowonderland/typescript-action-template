/**
 * Action logic
 *
 * Contains the main logic for the GitHub Action
 */

import * as core from '@actions/core'
import type { ActionRun, ActionConfig, ActionInputs, GitHubContext, SimpleRepository } from '#toolkit'
import { ActionRepository } from '#toolkit'
import { millisecondsFromInput } from './utils.js'

// * STEP 1: Retrieve raw inputs from the GitHub Action
/**
 * Retrieves and normalizes GitHub Action inputs based on the provided labels.
 *
 * Converts the input labels from kebab-case to camelCase and returns an object containing the corresponding input values.
 *
 * @returns An object containing the normalized action inputs keyed by camelCase names.
 */
export const getInputs = (): ActionInputs => {
	return {
		// ghToken: (core.getInput('github-token') ?? '').trim(),
		dryRun: core.getBooleanInput('dry-run'),
		milliseconds: (core.getInput('milliseconds') ?? '').trim(),
	}
}

// * STEP 2: Implement the main action logic using the defined configuration and inputs
/**
 * Waits for the specified number of milliseconds as defined in the action's inputs.
 *
 * @param action The instance of the Action class containing the configuration and inputs.
 * @returns Resolves with a string indicating the result of the action.
 */
export const main = async (action: Action): Promise<string | void> => {
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
		...(action as ActionConfig),
	}

	core.debug(`Waiting ${actionInfo.milliseconds} milliseconds ...`)

	const result = await delay(actionInfo.milliseconds)

	core.debug(`Result after waiting: ${result}`)

	core.setOutput('time', new Date().toTimeString())

	return result
}

// Export the main action function as the default export.
export default main

// * STEP 3: Define an optional flat configuration interface for persisting action information
/**
 * Represents a flat configuration for the GitHub Action.
 *
 * Customize this interface to include any additional configuration options required for your action.
 */
interface ActionInfo extends ActionInputs {
	/** The number of milliseconds to wait during the action execution. */
	milliseconds: number
}

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
// * The main action configuration class doesn't need to be modified,
// * as it's the base configuration class for setting up the GitHub Action.
/**
 * Main action class for the GitHub Action.
 *
 * Implements the RepoAction interface and provides methods to run the action.
 */
export class Action implements ActionConfig, ActionRun {
	/** Indicates if the action should run in dry-run mode. */
	dryRun: boolean
	/** The GitHub context object. */
	context: GitHubContext
	/** The action inputs provided to the GitHub Action. */
	inputs?: ActionInputs

	run(): Promise<unknown> {
		return main(this)
	}

	/**
	 * Returns the actor (user) who triggered the GitHub Action.
	 */
	get actor(): string {
		return this.context.actor
	}

	/**
	 * Returns the repository associated with the GitHub Action.
	 */
	get repo(): SimpleRepository {
		return new ActionRepository(this.context.repo) as SimpleRepository
	}

	/**
	 * Creates a new instance of the Action class.
	 *
	 * @param context The GitHub context object.
	 * @param inputs Optional action inputs.
	 * @param dryRun Optional flag indicating if the action should run in dry-run mode.
	 */
	constructor(context: GitHubContext, inputs?: ActionInputs, dryRun?: boolean) {
		this.context = context
		this.inputs = inputs ?? getInputs()
		this.dryRun = dryRun ?? this.inputs?.dryRun ?? false
		core.debug(`Initializing Action with dryRun: ${this.dryRun}`)
	}
}
