[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [action](../README.md) / getSafeInputs

# Function: getSafeInputs()

> **getSafeInputs**\<`K`\>(`inputs?`, ...`keys`): `Omit`\<[`ActionInputs`](../type-aliases/ActionInputs.md), `K`\>

Defined in: [src/toolkit/action.ts:84](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L84)

Filters out specified keys from the action inputs object.

This is useful for removing sensitive information such as tokens from the inputs before logging or further processing.

## Type Parameters

### K

`K` *extends* `string` \| `number`

## Parameters

### inputs?

The action inputs object to filter.

#### dryRun

`boolean`

Indicates if the action should run in dry-run mode.

### keys

...`K`[]

The keys to remove from the inputs object.

## Returns

`Omit`\<[`ActionInputs`](../type-aliases/ActionInputs.md), `K`\>

A new object with the specified keys removed from the inputs.

## Example

```ts
const safeInputs = getSafeInputs(inputs, 'ghToken', 'anotherKeyToRemove')
```
