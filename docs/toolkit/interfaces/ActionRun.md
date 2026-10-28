[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / ActionRun

# Interface: ActionRun

Represents the configuration for a GitHub Action that includes a `run` method.

## Methods

### run()

> **run**(): `Promise`\<`unknown`\>

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.

***

### loadContext()

> **loadContext**(): `Promise`\<[`GitHubContext`](GitHubContext.md)\>

Retrieves the GitHub context object for the action.

#### Returns

`Promise`\<[`GitHubContext`](GitHubContext.md)\>

A promise that resolves with the GitHub context object.
