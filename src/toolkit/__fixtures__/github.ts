import type { context as Context } from '@actions/github'
import { mockOctokitInstance } from '../__utils__/octokit.js'

/**
 * Mocked GitHub Octokit instance for testing purposes.
 */
export const getOctokit = () => mockOctokitInstance

/**
 * Represents the payload of a GitHub webhook event.
 */
type WebhookPayload = (typeof Context)['payload']

/**
 * Mocked GitHub context for testing purposes.
 *
 * This context object is mutable and can be modified in tests to simulate different GitHub events and payloads.
 */
const mockedContext = {
	payload: {
		// issue: { number: 1, html_url: '', body: '' },
		// pull_request: { number: 2, html_url: '', body: '' },
		repository: {
			full_name: '',
			owner: { login: '' },
			name: '',
		},
	} as WebhookPayload,
	repo: {
		owner: 'mock-owner',
		repo: 'mock-repo',
	},
	eventName: '',
	sha: '',
	ref: '',
	workflow: '',
	action: '',
	actor: '',
	runNumber: 0,
	runId: 0,
	apiUrl: 'https://api.github.com',
	serverUrl: 'https://github.com',
	graphqlUrl: 'https://api.github.com/graphql',
}

export const context = mockedContext
