/**
 * Utility functions for the GitHub Action.
 */

/**
 * Utility function to parse milliseconds from input, used to convert string inputs to numeric values.
 *
 * @param input - The input value to be parsed as milliseconds.
 * @returns The parsed number of milliseconds.
 */
export const millisecondsFromInput = (input: unknown): number => parseInt(String(input ?? ''), 10)
