[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [action](../README.md) / ActionRun

# Interface: ActionRun

Defined in: [src/toolkit/action.ts:16](https://github.com/stairwaytowonderland/typescript-action-template/blob/19bd1a39b90946fe2c0f8a62ab329d00ad9ee1b9/src/toolkit/action.ts#L16)

Represents the configuration for a GitHub Action that includes a `run` method.

## Methods

### loadContext()

> **loadContext**(): `Promise`\<`ActionRun`\>

Defined in: [src/toolkit/action.ts:29](https://github.com/stairwaytowonderland/typescript-action-template/blob/19bd1a39b90946fe2c0f8a62ab329d00ad9ee1b9/src/toolkit/action.ts#L29)

Retrieves the GitHub context object for the action.

#### Returns

`Promise`\<`ActionRun`\>

A promise that resolves with the GitHub context object.

***

### run()

> **run**(): `Promise`\<`unknown`\>

Defined in: [src/toolkit/action.ts:22](https://github.com/stairwaytowonderland/typescript-action-template/blob/19bd1a39b90946fe2c0f8a62ab329d00ad9ee1b9/src/toolkit/action.ts#L22)

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.
