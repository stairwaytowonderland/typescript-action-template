[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / getSafeInputs

# Function: getSafeInputs()

```ts
function getSafeInputs<K>(inputs?, ...keys): Omit<ActionInputs, K>;
```

Defined in: [src/toolkit/action.ts:84](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L84)

Filters out specified keys from the action inputs object.

This is useful for removing sensitive information such as tokens from the inputs before logging or further processing.

## Type Parameters

| Type Parameter |
| ------ |
| <a id="type-parameter-k"></a> `K` *extends* `string` \| `number` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputs?` | \{ \[`key`: `string`\]: `unknown`; `dryRun`: `boolean`; \} | The action inputs object to filter. |
| `inputs.dryRun` | `boolean` | Indicates if the action should run in dry-run mode. |
| ...`keys?` | `K`[] | The keys to remove from the inputs object. |

## Returns

`Omit`\<[`ActionInputs`](../type-aliases/ActionInputs.md), `K`\>

A new object with the specified keys removed from the inputs.

## Example

```ts
const safeInputs = getSafeInputs(inputs, 'ghToken', 'anotherKeyToRemove')
```
