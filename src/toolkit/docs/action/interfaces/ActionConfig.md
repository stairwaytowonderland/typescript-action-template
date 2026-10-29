[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [action](../README.md) / ActionConfig

# Interface: ActionConfig

Defined in: [src/toolkit/action.ts:36](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/action.ts#L36)

Represents the base configuration for a GitHub Actions run.

## Properties

### actor

> **actor**: `string`

Defined in: [src/toolkit/action.ts:44](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/action.ts#L44)

The actor (user) who triggered the GitHub Action.

***

### context

> **context**: `Context`

Defined in: [src/toolkit/action.ts:41](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/action.ts#L41)

The GitHub context object.

***

### dryRun

> **dryRun**: `boolean`

Defined in: [src/toolkit/action.ts:38](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/action.ts#L38)

Indicates if the action should run in dry-run mode.

***

### repo

> **repo**: [`SimpleRepository`](SimpleRepository.md)

Defined in: [src/toolkit/action.ts:47](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/action.ts#L47)

The repository associated with the GitHub Action.

***

### inputs?

> `optional` **inputs?**: `object`

Defined in: [src/toolkit/action.ts:50](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/action.ts#L50)

The action inputs provided to the GitHub Action.

#### Index Signature

\[`key`: `string`\]: `unknown`

The action input key-value pairs.

#### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.
