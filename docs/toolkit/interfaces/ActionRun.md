[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / ActionRun

# Interface: ActionRun

Represents the configuration for a GitHub Action that includes a `run` method.

## Properties

### safeInputs

> **safeInputs**: `ReturnType`\<*typeof* [`getSafeInputs`](../functions/getSafeInputs.md)\>

The action inputs with sensitive keys removed.

## Methods

### run()

> **run**(): `Promise`\<`unknown`\>

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.
