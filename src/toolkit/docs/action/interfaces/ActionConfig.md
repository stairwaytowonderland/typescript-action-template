[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [action](../README.md) / ActionConfig

# Interface: ActionConfig

Defined in: [src/toolkit/action.ts:41](https://github.com/stairwaytowonderland/typescript-action-template/blob/63bd4def94f90d318287a7fef80fd1eabbf24664/src/toolkit/action.ts#L41)

Represents the base configuration for a GitHub Actions run.

## Properties

### actor

> **actor**: `string`

Defined in: [src/toolkit/action.ts:49](https://github.com/stairwaytowonderland/typescript-action-template/blob/63bd4def94f90d318287a7fef80fd1eabbf24664/src/toolkit/action.ts#L49)

The actor (user) who triggered the GitHub Action.

***

### context

> **context**: `Context`

Defined in: [src/toolkit/action.ts:46](https://github.com/stairwaytowonderland/typescript-action-template/blob/63bd4def94f90d318287a7fef80fd1eabbf24664/src/toolkit/action.ts#L46)

The GitHub context object.

***

### dryRun

> **dryRun**: `boolean`

Defined in: [src/toolkit/action.ts:43](https://github.com/stairwaytowonderland/typescript-action-template/blob/63bd4def94f90d318287a7fef80fd1eabbf24664/src/toolkit/action.ts#L43)

Indicates if the action should run in dry-run mode.

***

### repo

> **repo**: [`SimpleRepository`](SimpleRepository.md)

Defined in: [src/toolkit/action.ts:52](https://github.com/stairwaytowonderland/typescript-action-template/blob/63bd4def94f90d318287a7fef80fd1eabbf24664/src/toolkit/action.ts#L52)

The repository associated with the GitHub Action.

***

### inputs?

> `optional` **inputs?**: `object`

Defined in: [src/toolkit/action.ts:55](https://github.com/stairwaytowonderland/typescript-action-template/blob/63bd4def94f90d318287a7fef80fd1eabbf24664/src/toolkit/action.ts#L55)

The action inputs provided to the GitHub Action.

#### Index Signature

\[`key`: `string`\]: `unknown`

The action input key-value pairs.

#### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.
