[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / ActionConfig

# Interface: ActionConfig

Defined in: [src/toolkit/action.ts:16](https://github.com/stairwaytowonderland/typescript-action-template/blob/92ac5e301492fbe5517e01833ed2482e81932584/src/toolkit/action.ts#L16)

Represents the configuration for a GitHub Action that includes a `run` method.

## Properties

### run

> **run**: () => `Promise`\<`void`\>

Defined in: [src/toolkit/action.ts:22](https://github.com/stairwaytowonderland/typescript-action-template/blob/92ac5e301492fbe5517e01833ed2482e81932584/src/toolkit/action.ts#L22)

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the action has completed its run.
