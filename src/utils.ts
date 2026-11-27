/**
 * Utility functions for the GitHub Action.
 *
 * @packageDocumentation
 * @module
 * @category Utilities
 */

/**
 * Utility function to parse milliseconds from input, used to convert string inputs to numeric values.
 *
 * @param input - The input value to be parsed as milliseconds.
 * @returns The parsed number of milliseconds.
 */
export const millisecondsFromInput = (input: unknown): number => parseInt(String(input ?? ''), 10)

/**
 * Sleeps for the specified number of milliseconds.
 *
 * @param ms The number of milliseconds to sleep.
 * @param msg Optional message to resolve with after the sleep duration.
 * @returns A promise that resolves after the specified time.
 * @throws Will reject the promise if the provided milliseconds value is not a number.
 */
export const sleep = (ms: number, msg?: string): Promise<void | (string | undefined)> => {
	return new Promise((resolve, reject) => {
		if (isNaN(ms)) {
			reject(new Error('milliseconds is not a number'))
			return
		}

		setTimeout(() => resolve(msg?.trim() || undefined), ms)
	})
}
