[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / SimpleRepository

# Interface: SimpleRepository

Defined in: [src/toolkit/action.ts:143](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L143)

Represents basic information about a GitHub repository.

Extends the Partial type to allow optional repository properties.

## See

 - https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
 - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#mapped-types

## Extends

- `Partial`\<[`GitHubContext`](../type-aliases/GitHubContext.md)\[`"repo"`\]\>

## Properties

### owner?

```ts
owner?: string;
```

Defined in: node\_modules/@actions/github/lib/context.d.ts:30

#### Inherited from

`Partial.owner`

***

### repo?

```ts
repo?: string;
```

Defined in: node\_modules/@actions/github/lib/context.d.ts:31

#### Inherited from

`Partial.repo`

***

### fullName?

```ts
fullName?: string;
```

Defined in: [src/toolkit/action.ts:145](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L145)

The full repository name in the format "owner/repo".
