/**
 * Rollup Configuration for the project
 *
 * @see https://rollupjs.org/introduction/
 */

import commonjs from '@rollup/plugin-commonjs'
import license from 'rollup-plugin-license'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

const allowedLicenses = [
	// 'MIT',
	// 'Apache-2.0',
	// 'BSD-2-Clause',
	// 'BSD-3-Clause',
	// 'ISC',
	// 'CC0-1.0',
	// 'GPL-2.0',
	// 'GPL-3.0',
]

if (!allowedLicenses.length) {
	console.warn('No allowed licenses specified. Defaulting to "all".')
	allowedLicenses.push('')
	allowedLicenses.pop()
}

const allowedSpdxString =
	allowedLicenses
		?.filter((license) => license?.trim())
		// .map((license) => license.toUpperCase())
		.join(' OR ') || allowedLicenses.pop()

console.log('Allowed Licenses (rollup-plugin-license) SPDX String:', `'${allowedSpdxString}'`)

export default defineConfig({
	input: 'src/index.ts',
	output: {
		/**
		 * Enable ES module interop
		 *
		 * This ensures that the generated ES module can be imported correctly
		 * in both CommonJS and ES module environments.
		 */
		esModule: true,
		/**
		 * Use dist/index.cjs if you want CommonJS output
		 *
		 * The package.json "exports" field, and the action.yaml "main" field
		 * should match accordingly.
		 *
		 */
		// dir: 'dist',
		file: 'dist/index.js',
		/**
		 * Use 'cjs' for CommonJS output
		 */
		format: 'es',
		/**
		 * Include source maps for easier debugging
		 */
		sourcemap: true,
		/**
		 * Preserve the module structure from the src/ directory in the output
		 *
		 * This tells Rollup to mirror exact src/ structure inside dist/.
		 */
		// preserveModules: true,
		/**
		 * Preserve the root directory for the preserved modules
		 *
		 * This keeps the output clean without nesting under an extra 'src' directory
		 */
		// preserveModulesRoot: 'src',
	},
	// onwarn(warning, warn) {
	// 	if (warning.code === 'CIRCULAR_DEPENDENCY' && warning.message?.includes(IGNORED_CIRCULAR_DEPENDENCY)) {
	// 		return;
	// 	}

	// 	warn(warning);
	// },
	plugins: [
		nodeResolve({ preferBuiltins: true }),
		typescript({
			cacheDir: './node_modules/.cache/rollup-typescript',
			compilerOptions: {
				sourceMap: true, // Forces the plugin to feed raw mappings to Rollup
				// composite: false, // Disables project compilation mode
				// incremental: false, // Disables incremental compilation
				declaration: false, // Generate .d.ts files for every TypeScript or JavaScript file inside your project.
				// declarationMap: false, // Generates a source map for .d.ts files which map back to the original .ts source file.
				listEmittedFiles: true, // Lists all files emitted during the compilation
			},
		}),
		commonjs(),
		license({
			banner: 'Copyright <%= moment().format("YYYY") %> <%= pkg.author %>',
			thirdParty: { output: 'dist/licenses.txt' }, // codespell:ignore thirdparty
		}),
	],
})
