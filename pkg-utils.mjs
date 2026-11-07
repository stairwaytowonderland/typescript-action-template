import { existsSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { pathToFileURL } from 'node:url'

const basePath = 'src/toolkit/docs'

export function rewriteToolkitDocsLinks(content) {
	return content
		.replace(/\[([A-Za-z0-9_-]+)\]\(\/\/readme\)/g, (_match, name) => `[${name}](/module/${name})`)
		.replace(
			/\[([A-Za-z0-9_-]+)\]\(\/(?:docs\/)?([A-Za-z0-9_-]+)(?:\/readme)?\)/g,
			(_match, label, name) => `[${label}](/module/${name})`
		)
		.replace(/\]\((?:\.\/)?([A-Za-z0-9_-]+)\.md(#[^)]+)?\)/g, (_match, name) => `](/module/${name})`)
}

export async function generateToolkitDocsIndex(
	sourcePath = `${basePath}/README.md`,
	outputPath = `${basePath}/.index.md`
) {
	if (!existsSync(sourcePath)) {
		throw new Error(`Missing ${sourcePath}`)
	}

	const source = await readFile(sourcePath, 'utf8')
	const output = rewriteToolkitDocsLinks(source)

	await mkdir(dirname(outputPath), { recursive: true })
	await writeFile(outputPath, output)

	return { sourcePath, outputPath }
}

const commands = {
	'build-docs-fix-links': generateToolkitDocsIndex,
}

async function main() {
	const command = process.argv[2]
	const run = command ? commands[command] : undefined

	if (!run) {
		throw new Error(
			`Unknown or missing command: ${command ?? '(none)'}. Available: ${Object.keys(commands).join(', ')}`
		)
	}

	const args = process.argv.slice(3)
	const result = await run(...args)
	console.log(`Generated ${result.outputPath} from ${result.sourcePath}`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	await main()
}
