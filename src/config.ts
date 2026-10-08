/**
 * Configuration for the GitHub Action.
 *
 * Contains the configuration interface for the GitHub Action.
 */

import * as core from '@actions/core'
import type { RepoAction, GitHubContext, ActionInputs, SimpleRepository } from './types.js'
import { ActionRepository } from './types.js'
import { getSafeInputs } from './utils.js'
import action from './action.js'

/**
 * Retrieves and normalizes GitHub Action inputs based on the provided labels.
 *
 * Converts the input labels from kebab-case to camelCase and returns an object containing the corresponding input values.
 *
 * @returns An object containing the normalized action inputs keyed by camelCase names.
 */
export const getInputs = (): ActionInputs => {
	const dryRunInput = core.getBooleanInput('dry-run')
	return {
		// ghToken: (core.getInput('github-token') ?? '').trim(),
		dryRun: dryRunInput,
		milliseconds: (core.getInput('milliseconds') ?? '').trim(),
	}
}

/**
 * Represents a flat configuration for the GitHub Action.
 *
 * * Customize this interface to include any additional configuration options required for your action.
 */
export interface ActionConfig extends RepoAction {
	/** The GitHub token used for authentication with the GitHub API. */
	// ghToken: string
	/** The number of milliseconds to wait during the action execution. */
	milliseconds: number
}

/**
 * Main action class for the GitHub Action.
 *
 * * Implements the RepoAction interface and provides methods to run the action.
 * * Customize this class to include any additional inputs, methods, or properties required for your action.
 */
export class Action implements RepoAction {
	/** Indicates if the action should run in dry-run mode. */
	dryRun: boolean
	/** The GitHub context object. */
	context: GitHubContext
	/** The action inputs provided to the GitHub Action. */
	inputs?: ActionInputs

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
		const result = await action(this)
		core.debug(`End time: ${new Date().toTimeString()}`)
		core.debug(`Result: ${result}`)
		core.setOutput('time', new Date().toTimeString())
	}
}

// Export the Action class as the default export for external usage
export default Action
