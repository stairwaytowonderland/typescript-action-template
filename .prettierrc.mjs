import githubConfig from '@github/prettier-config'
import localConfig from './.prettier.json' with { type: 'json' }

/** @type {import("prettier").Config} */
export default {
	...githubConfig,
	...localConfig,
	printWidth: 120,
}
