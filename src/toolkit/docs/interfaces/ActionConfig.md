[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / ActionConfig

# Interface: ActionConfig

Defined in: [src/toolkit/action.ts:16](https://github.com/stairwaytowonderland/typescript-action-template/blob/b0312f8e102f6849fc0255e2172a66854b32b61d/src/toolkit/action.ts#L16)

Represents the configuration for a GitHub Action that includes a `run` method.

## Properties

### run

> **run**: () => `Promise`\<`void`\>

Defined in: [src/toolkit/action.ts:22](https://github.com/stairwaytowonderland/typescript-action-template/blob/b0312f8e102f6849fc0255e2172a66854b32b61d/src/toolkit/action.ts#L22)

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the action has completed its run.
