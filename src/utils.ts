/**
 * Shared utility functions
 */

// Re-export utility functions
export { normalizeOptional } from './_common.js'

/**
 * Converts a kebab-case string to camelCase.
 *
 * @example
 * ```ts
 * kebabToCamel('kebab-case-string') // 'kebabCaseString'
 * ```
 *
 * @param str The kebab-case string to be converted.
 * @returns The converted camelCase string.
 */
export const kebabToCamel = (str: string): string => {
	return str.replace(/-./g, (m) => m.toUpperCase()[1])
}
