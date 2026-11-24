/// <reference types="node" />
/// <reference types="jest" />

/**
 * Unit tests for the utility functions, src/utils.ts
 */

// Import custom types and utilities from the project
import { millisecondsFromInput } from '../src/utils.js'
import { sleep } from '../src/utils.js'

describe('Utilities', () => {
	describe('millisecondsFromInput', () => {
		test('parses correctly', () => {
			const input = '1234'
			const result = millisecondsFromInput(input)
			expect(result).toBe(1234)
		})
		test('returns NaN for invalid input', () => {
			const input = 'foo'
			const result = millisecondsFromInput(input)
			expect(isNaN(result)).toBe(true)
		})
		test('returns NaN for empty input', () => {
			const input = ''
			const result = millisecondsFromInput(input)
			expect(isNaN(result)).toBe(true)
		})
		test('returns NaN for null input', () => {
			const input = null
			const result = millisecondsFromInput(input)
			expect(isNaN(result)).toBe(true)
		})
		test('returns NaN for undefined input', () => {
			const input = undefined
			const result = millisecondsFromInput(input)
			expect(isNaN(result)).toBe(true)
		})
	})

	describe('sleep', () => {
		test('resolves after the specified time', async () => {
			const input = parseInt('500', 10)
			const start = new Date()
			await sleep(input)
			const end = new Date()
			const delta = Math.abs(end.getTime() - start.getTime())
			expect(delta).toBeGreaterThanOrEqual(input - 50)
		})
		test('rejects for invalid milliseconds', async () => {
			const input = parseInt('foo', 10)
			expect(isNaN(input)).toBe(true)
			await expect(sleep(input)).rejects.toThrow('milliseconds is not a number')
		})
	})
})
