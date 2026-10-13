[**typescript-action-template**](../../../README.md)

***

[typescript-action-template](../../../README.md) / [toolkit/action](../README.md) / SimpleRepository

# Interface: SimpleRepository

Represents basic information about a GitHub repository.

Extends the Partial type to allow optional repository properties.

## See

 - https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
 - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#mapped-types

## Extends

- `Partial`\<[`GitHubContext`](GitHubContext.md)\[`"repo"`\]\>

## Properties

### fullName?

> `optional` **fullName?**: `string`

The full repository name in the format "owner/repo".

***

### owner?

> `optional` **owner?**: `string`

#### Inherited from

`Partial.owner`

***

### repo?

> `optional` **repo?**: `string`

#### Inherited from

`Partial.repo`
