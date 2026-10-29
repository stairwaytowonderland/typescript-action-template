[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [action](../README.md) / ActionConfig

# Interface: ActionConfig

Defined in: [src/toolkit/action.ts:43](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/action.ts#L43)

Represents the base configuration for a GitHub Actions run.

## Properties

### actor

> **actor**: `string`

Defined in: [src/toolkit/action.ts:51](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/action.ts#L51)

The actor (user) who triggered the GitHub Action.

***

### context

> **context**: `Context`

Defined in: [src/toolkit/action.ts:48](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/action.ts#L48)

The GitHub context object.

***

### dryRun

> **dryRun**: `boolean`

Defined in: [src/toolkit/action.ts:45](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/action.ts#L45)

Indicates if the action should run in dry-run mode.

***

### repo

> **repo**: [`SimpleRepository`](SimpleRepository.md)

Defined in: [src/toolkit/action.ts:54](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/action.ts#L54)

The repository associated with the GitHub Action.

***

### inputs?

> `optional` **inputs?**: `object`

Defined in: [src/toolkit/action.ts:57](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/action.ts#L57)

The action inputs provided to the GitHub Action.

#### Index Signature

\[`key`: `string`\]: `unknown`

The action input key-value pairs.

#### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.
