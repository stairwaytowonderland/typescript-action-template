[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / ActionRun

# Interface: ActionRun

Defined in: [src/toolkit/action.ts:24](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L24)

Represents the configuration for a GitHub Action that includes a `run` method.

## Properties

### safeInputs

> **safeInputs**: `ReturnType`\<*typeof* [`getSafeInputs`](../functions/getSafeInputs.md)\>

Defined in: [src/toolkit/action.ts:28](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L28)

The action inputs with sensitive keys removed.

## Methods

### run()

> **run**(): `Promise`\<`unknown`\>

Defined in: [src/toolkit/action.ts:35](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L35)

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.
