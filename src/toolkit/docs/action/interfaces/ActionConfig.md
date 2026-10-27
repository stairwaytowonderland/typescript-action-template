[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [action](../README.md) / ActionConfig

# Interface: ActionConfig

Defined in: [src/toolkit/action.ts:29](https://github.com/stairwaytowonderland/typescript-action-template/blob/46bb225f258293693f25e124862b1e5274fd8140/src/toolkit/action.ts#L29)

Represents the base configuration for a GitHub Actions run.

## Properties

### context

> **context**: [`GitHubContext`](GitHubContext.md)

Defined in: [src/toolkit/action.ts:34](https://github.com/stairwaytowonderland/typescript-action-template/blob/46bb225f258293693f25e124862b1e5274fd8140/src/toolkit/action.ts#L34)

The GitHub context object.

***

### dryRun

> **dryRun**: `boolean`

Defined in: [src/toolkit/action.ts:31](https://github.com/stairwaytowonderland/typescript-action-template/blob/46bb225f258293693f25e124862b1e5274fd8140/src/toolkit/action.ts#L31)

Indicates if the action should run in dry-run mode.

***

### repo

> **repo**: [`SimpleRepository`](SimpleRepository.md)

Defined in: [src/toolkit/action.ts:37](https://github.com/stairwaytowonderland/typescript-action-template/blob/46bb225f258293693f25e124862b1e5274fd8140/src/toolkit/action.ts#L37)

The repository associated with the GitHub Action.

***

### inputs?

> `optional` **inputs?**: `object`

Defined in: [src/toolkit/action.ts:40](https://github.com/stairwaytowonderland/typescript-action-template/blob/46bb225f258293693f25e124862b1e5274fd8140/src/toolkit/action.ts#L40)

The action inputs provided to the GitHub Action.

#### Index Signature

\[`key`: `string`\]: `unknown`

The action input key-value pairs.

#### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.
