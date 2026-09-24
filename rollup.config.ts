// See: https://rollupjs.org/introduction/

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

const config = defineConfig({
	input: 'src/index.ts',
	output: {
		esModule: true,
		file: 'dist/index.js',
		format: 'es',
		sourcemap: true,
	},
	plugins: [
		typescript(),
		nodeResolve({ preferBuiltins: true }),
		commonjs(),
		// prettier-ignore
		license({ banner: 'Copyright <%= moment().format("YYYY") %> <%= pkg.author %>', thirdParty: { output: 'dist/licenses.txt' } }), // codespell:ignore thirdparty pkg
	],
})

export default config
