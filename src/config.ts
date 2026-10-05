/**
 * Configuration for the GitHub Action.
 *
 * Contains the configuration interface for the GitHub Action.
 */

import * as core from '@actions/core'
import { RepoAction, GitHubContext, ActionInputs, SimpleRepository, ActionRepository } from './types.js'
import { wait } from './action.js'

/**
 * Represents a flat configuration for the GitHub Action.
 *
 * * Customize this interface to include any additional configuration options required for your action.
 */
export interface ActionConfig extends RepoAction {
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
		const dryRunInput = (core.getInput('dry-run') ?? '').trim()
		this.dryRun = dryRun ?? dryRunInput === 'true'
		this.context = context

		this.inputs = inputs ?? {
			dryRun: dryRunInput,
			milliseconds: (core.getInput('milliseconds') ?? '').trim(),
		}
	}

	/**
	 * Executes the main logic of the GitHub Action.
	 *
	 * @returns resolves when the action has completed execution.
	 */
	async run(): Promise<void> {
		core.debug(`Action created with actor: ${this.actor} and repo: ${this.repo.fullName}`)
		core.debug(`Action dryRun: ${this.dryRun}`)
		core.debug(`Action inputs: ${JSON.stringify(this.inputs)}`)

		core.debug(new Date().toTimeString())
		const result = await wait(this)
		core.debug(`Result: ${result}`)
		core.debug(new Date().toTimeString())
		core.setOutput('time', new Date().toTimeString())
	}
}
