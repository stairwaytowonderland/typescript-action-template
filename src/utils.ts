/**
 * Shared utility functions
 */

// Re-export utility functions
export { normalizeOptional, kebabToCamel } from './_common.js'
export { getInputs } from './config.js'

/*
 * Project-specific utility functions for general use.
 */

/**
 * Utility function to parse milliseconds from input, used to convert string inputs to numeric values.
 *
 * @param input - The input value to be parsed as milliseconds.
 * @returns The parsed number of milliseconds.
 */
export const millisecondsFromInput = (input: unknown): number => {
	return parseInt(String(input ?? ''), 10)
}
