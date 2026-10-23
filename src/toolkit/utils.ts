/*
 * Utility functions for string manipulation.
 */

/**
 * Normalizes an optional string value.
 *
 * Converts empty strings or undefined values to undefined.
 * This is useful for handling optional string values where empty strings should be treated as undefined.
 *
 * @param value The string value to normalize. If the value is an empty string or undefined, it will be converted to undefined.
 * @returns The normalized string value or undefined.
 */
export const normalizeOptional = (value?: string): string | undefined => value || undefined

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
export const kebabToCamel = (str: string): string => str.replace(/-./g, (m) => m.toUpperCase()[1])
