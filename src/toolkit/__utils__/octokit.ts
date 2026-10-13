import { jest } from '@jest/globals'

/**
 * Mocked get repository helper function for testing purposes.
 */
export const mockGetRepo = jest.fn<() => Promise<unknown>>().mockResolvedValue({
	status: 200,
	data: {
		id: 123456,
		name: 'mock-repo',
		full_name: 'mock-owner/mock-repo',
	},
})

/**
 * Mocked get rate limit helper function for testing purposes.
 */
export const mockRateLimitGet = jest.fn<() => Promise<unknown>>().mockResolvedValue({
	status: 200,
	data: {
		rate: {
			limit: 5000,
		},
	},
})

/**
 * Mocked Octokit instance for testing purposes.
 */
export const mockOctokitInstance = {
	rest: {
		rateLimit: {
			get: mockRateLimitGet,
		},
		repos: {
			get: mockGetRepo,
		},
	},
	// If pagination helpers are needed ...
	paginate: jest.fn<() => Promise<unknown>>().mockResolvedValue([]),
}
