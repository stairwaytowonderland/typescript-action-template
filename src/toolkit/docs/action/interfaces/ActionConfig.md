[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [action](../README.md) / ActionConfig

# Interface: ActionConfig

Defined in: [src/toolkit/action.ts:35](https://github.com/stairwaytowonderland/typescript-action-template/blob/19bd1a39b90946fe2c0f8a62ab329d00ad9ee1b9/src/toolkit/action.ts#L35)

Represents the base configuration for a GitHub Actions run.

## Properties

### actor

> **actor**: `string`

Defined in: [src/toolkit/action.ts:43](https://github.com/stairwaytowonderland/typescript-action-template/blob/19bd1a39b90946fe2c0f8a62ab329d00ad9ee1b9/src/toolkit/action.ts#L43)

The actor (user) who triggered the GitHub Action.

***

### context

> **context**: `Context`

Defined in: [src/toolkit/action.ts:40](https://github.com/stairwaytowonderland/typescript-action-template/blob/19bd1a39b90946fe2c0f8a62ab329d00ad9ee1b9/src/toolkit/action.ts#L40)

The GitHub context object.

***

### dryRun

> **dryRun**: `boolean`

Defined in: [src/toolkit/action.ts:37](https://github.com/stairwaytowonderland/typescript-action-template/blob/19bd1a39b90946fe2c0f8a62ab329d00ad9ee1b9/src/toolkit/action.ts#L37)

Indicates if the action should run in dry-run mode.

***

### repo

> **repo**: [`SimpleRepository`](SimpleRepository.md)

Defined in: [src/toolkit/action.ts:46](https://github.com/stairwaytowonderland/typescript-action-template/blob/19bd1a39b90946fe2c0f8a62ab329d00ad9ee1b9/src/toolkit/action.ts#L46)

The repository associated with the GitHub Action.

***

### inputs?

> `optional` **inputs?**: `object`

Defined in: [src/toolkit/action.ts:49](https://github.com/stairwaytowonderland/typescript-action-template/blob/19bd1a39b90946fe2c0f8a62ab329d00ad9ee1b9/src/toolkit/action.ts#L49)

The action inputs provided to the GitHub Action.

#### Index Signature

\[`key`: `string`\]: `unknown`

The action input key-value pairs.

#### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.
