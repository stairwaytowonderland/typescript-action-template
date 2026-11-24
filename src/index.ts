/**
 * Barrel file for the GitHub Action.
 *
 * This file simply imports and runs the main logic of the action.
 *
 * @remarks
 * - The leading zero *("0-")* in the module name is for ordering purposes in the documentation.
 * - It also serves so as not to conflict with the default 'index' file behavior in the documentation.
 *
 * @packageDocumentation
 * @module 0-index
 * @category Barrel
 */

import run from './main.js'

// Re-export the run function for external usage
// export { run }

/* istanbul ignore next */
run()
