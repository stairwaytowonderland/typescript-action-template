[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / ActionExec

# Interface: ActionExec

Defined in: [src/toolkit/action.ts:16](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/action.ts#L16)

Represents the configuration for a GitHub Action that includes a `run` method.

## Properties

### run

> **run**: () => `Promise`\<`unknown`\>

Defined in: [src/toolkit/action.ts:22](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/action.ts#L22)

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.
