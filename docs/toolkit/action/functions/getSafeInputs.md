[**typescript-action-template**](../../../README.md)

***

[typescript-action-template](../../../README.md) / [toolkit/action](../README.md) / getSafeInputs

# Function: getSafeInputs()

> **getSafeInputs**\<`K`\>(`inputs?`, ...`keys`): `Omit`\<[`ActionInputs`](../type-aliases/ActionInputs.md), `K`\>

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
