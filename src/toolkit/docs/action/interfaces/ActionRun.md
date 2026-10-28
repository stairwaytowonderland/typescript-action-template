[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [action](../README.md) / ActionRun

# Interface: ActionRun

Defined in: [src/toolkit/action.ts:16](https://github.com/stairwaytowonderland/typescript-action-template/blob/f45eeeb057a3c7ec60800606e54a4ee56aac184d/src/toolkit/action.ts#L16)

Represents the configuration for a GitHub Action that includes a `run` method.

## Methods

### loadContext()

> **loadContext**(): `Promise`\<[`GitHubContext`](GitHubContext.md)\>

Defined in: [src/toolkit/action.ts:29](https://github.com/stairwaytowonderland/typescript-action-template/blob/f45eeeb057a3c7ec60800606e54a4ee56aac184d/src/toolkit/action.ts#L29)

Retrieves the GitHub context object for the action.

#### Returns

`Promise`\<[`GitHubContext`](GitHubContext.md)\>

A promise that resolves with the GitHub context object.

***

### run()

> **run**(): `Promise`\<`unknown`\>

Defined in: [src/toolkit/action.ts:22](https://github.com/stairwaytowonderland/typescript-action-template/blob/f45eeeb057a3c7ec60800606e54a4ee56aac184d/src/toolkit/action.ts#L22)

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.
