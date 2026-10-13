[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / ActionSetup

# Interface: ActionSetup

Defined in: [src/toolkit/action.ts:28](https://github.com/stairwaytowonderland/typescript-action-template/blob/92ac5e301492fbe5517e01833ed2482e81932584/src/toolkit/action.ts#L28)

Represents the base configuration for a GitHub Actions run.

## Properties

### context

> **context**: [`GitHubContext`](GitHubContext.md)

Defined in: [src/toolkit/action.ts:33](https://github.com/stairwaytowonderland/typescript-action-template/blob/92ac5e301492fbe5517e01833ed2482e81932584/src/toolkit/action.ts#L33)

The GitHub context object.

***

### dryRun

> **dryRun**: `boolean`

Defined in: [src/toolkit/action.ts:30](https://github.com/stairwaytowonderland/typescript-action-template/blob/92ac5e301492fbe5517e01833ed2482e81932584/src/toolkit/action.ts#L30)

Indicates if the action should run in dry-run mode.

***

### inputs?

> `optional` **inputs?**: `object`

Defined in: [src/toolkit/action.ts:39](https://github.com/stairwaytowonderland/typescript-action-template/blob/92ac5e301492fbe5517e01833ed2482e81932584/src/toolkit/action.ts#L39)

The action inputs provided to the GitHub Action.

#### Index Signature

\[`key`: `string`\]: `unknown`

The action input key-value pairs.

#### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.

***

### repo

> **repo**: [`SimpleRepository`](SimpleRepository.md)

Defined in: [src/toolkit/action.ts:36](https://github.com/stairwaytowonderland/typescript-action-template/blob/92ac5e301492fbe5517e01833ed2482e81932584/src/toolkit/action.ts#L36)

The repository associated with the GitHub Action.
