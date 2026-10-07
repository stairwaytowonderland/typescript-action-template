/**
 * Action logic
 *
 * Contains the main logic for the GitHub Action
 */

import * as core from '@actions/core'
import type { RepoAction } from './types.js'
import type { ActionConfig } from './config.js'

/**
 * Waits for the specified number of milliseconds as defined in the action's inputs.
 *
 * @param action (RepoAction) The action object.
 * @returns Resolves when the example logic is complete.
 */
export default async (action: RepoAction): Promise<string> => {
	// Octokit instance for GitHub API requests
	// const ghToken = (action.inputs?.ghToken as string)?.trim()
	// const octokit: OctokitClient = getOctokit(ghToken)

	// Change RepoAction dynamic key from `unknown` -> `any`
	// to not require casting for basic operations
	const ms: number = millisecondsFromInput(action.inputs?.milliseconds)

	// Consider gathering action information into a single object
	// for reporting purposes
	const actionConfig: ActionConfig = {
		milliseconds: ms,
		...action,
	}

	core.debug(`Waiting ${actionConfig.milliseconds} milliseconds ...`)

	const result = await delay(actionConfig.milliseconds)

	core.debug(`Result after waiting: ${result}`)

	return result
}

/**
 * Waits for a number of milliseconds.
 *
 * @param milliseconds The number of milliseconds to wait.
 * @returns Resolves with 'done!' after the wait is over.
 */
export async function delay(milliseconds: number): Promise<string> {
	return new Promise((resolve) => {
		if (isNaN(milliseconds)) throw new Error('milliseconds is not a number')

		setTimeout(() => resolve('done!'), milliseconds)
	})
}

/**
 * Utility function to parse milliseconds from input, used to convert string inputs to numeric values.
 *
 * @param input - The input value to be parsed as milliseconds.
 * @returns The parsed number of milliseconds.
 */
export function millisecondsFromInput(input: unknown): number {
	return parseInt(String(input ?? ''), 10)
}
