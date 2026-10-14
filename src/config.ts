/**
 * Configuration for the GitHub Action.
 *
 * Contains the configuration interface for the GitHub Action.
 */

import * as core from '@actions/core'
import type { ActionSetup, GitHubContext, ActionInputs, SimpleRepository } from '#toolkit'
import { ActionRepository } from '#toolkit'

// * Retrieve raw inputs from the GitHub Action
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

// * =======================================================
// * The main action configuration class doesn't need to be modified,
// * as it's the base configuration class for setting up the GitHub Action.
/**
 * Main action class for the GitHub Action.
 *
 * Implements the RepoAction interface and provides methods to run the action.
 */
export class Config implements ActionSetup {
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
}

// Export the Action class as the default export for external usage
export default Config
