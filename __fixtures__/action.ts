import { createAsyncMock } from '../__utils__/mocks.js'

/**
 * Mock for the asynchronous action function, used to simulate its behavior during tests.
 */
export const actionMock = createAsyncMock()

/**
 * Mock for the configuration module, used to replace the actual Action class with a controlled mock during tests.
 *
 * @returns An object containing the mocked Action class.
 */
export const actionRunMock = () => ({
	Action: class {
		async run(): Promise<void> {
			return actionMock()
		}
	},
})

/**
 * Mock for the wait function, used to simulate delays during tests.
 *
 * Currently commented out, as the mocked implementation is not needed for the tests.
 */
// export const wait = jest.fn<typeof import('../src/action.js').wait>()
