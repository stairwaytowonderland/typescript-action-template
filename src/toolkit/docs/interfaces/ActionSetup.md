[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / ActionSetup

# Interface: ActionSetup

Defined in: [src/toolkit/action.ts:21](https://github.com/stairwaytowonderland/typescript-action-template/blob/1e6d883ed23c71e7fabe6e66c779477a478fcbbe/src/toolkit/action.ts#L21)

Represents the base configuration for a GitHub Actions run.

## Properties

### context

> **context**: [`GitHubContext`](GitHubContext.md)

Defined in: [src/toolkit/action.ts:26](https://github.com/stairwaytowonderland/typescript-action-template/blob/1e6d883ed23c71e7fabe6e66c779477a478fcbbe/src/toolkit/action.ts#L26)

The GitHub context object.

***

### dryRun

> **dryRun**: `boolean`

Defined in: [src/toolkit/action.ts:23](https://github.com/stairwaytowonderland/typescript-action-template/blob/1e6d883ed23c71e7fabe6e66c779477a478fcbbe/src/toolkit/action.ts#L23)

Indicates if the action should run in dry-run mode.

***

### inputs?

> `optional` **inputs?**: `object`

Defined in: [src/toolkit/action.ts:32](https://github.com/stairwaytowonderland/typescript-action-template/blob/1e6d883ed23c71e7fabe6e66c779477a478fcbbe/src/toolkit/action.ts#L32)

The action inputs provided to the GitHub Action.

#### Index Signature

\[`key`: `string`\]: `unknown`

#### dryRun

> **dryRun**: `boolean`

***

### repo

> **repo**: [`SimpleRepository`](SimpleRepository.md)

Defined in: [src/toolkit/action.ts:29](https://github.com/stairwaytowonderland/typescript-action-template/blob/1e6d883ed23c71e7fabe6e66c779477a478fcbbe/src/toolkit/action.ts#L29)

The repository associated with the GitHub Action.
