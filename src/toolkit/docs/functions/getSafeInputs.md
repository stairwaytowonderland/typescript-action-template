[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / getSafeInputs

# Function: getSafeInputs()

> **getSafeInputs**\<`K`\>(`inputs?`, ...`keys`): `Omit`\<[`ActionInputs`](../type-aliases/ActionInputs.md), `K`\>

Defined in: [src/toolkit/action.ts:68](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/action.ts#L68)

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
