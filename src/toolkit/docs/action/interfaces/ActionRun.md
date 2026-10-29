[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [action](../README.md) / ActionRun

# Interface: ActionRun

Defined in: [src/toolkit/action.ts:24](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/action.ts#L24)

Represents the configuration for a GitHub Action that includes a `run` method.

## Methods

### loadContext()

> **loadContext**(): `Promise`\<`ActionRun`\>

Defined in: [src/toolkit/action.ts:37](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/action.ts#L37)

Retrieves the GitHub context object for the action.

#### Returns

`Promise`\<`ActionRun`\>

A promise that resolves with the GitHub context object.

***

### run()

> **run**(): `Promise`\<`unknown`\>

Defined in: [src/toolkit/action.ts:30](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/action.ts#L30)

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.
