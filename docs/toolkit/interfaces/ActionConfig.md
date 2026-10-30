[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / ActionConfig

# Interface: ActionConfig

Defined in: [src/toolkit/action.ts:41](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L41)

Represents the base configuration for a GitHub Actions run.

## Properties

### dryRun

```ts
dryRun: boolean;
```

Defined in: [src/toolkit/action.ts:43](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L43)

Indicates if the action should run in dry-run mode.

***

### context

```ts
context: Context;
```

Defined in: [src/toolkit/action.ts:46](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L46)

The GitHub context object.

***

### actor

```ts
actor: string;
```

Defined in: [src/toolkit/action.ts:49](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L49)

The actor (user) who triggered the GitHub Action.

***

### repo

```ts
repo: SimpleRepository;
```

Defined in: [src/toolkit/action.ts:52](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L52)

The repository associated with the GitHub Action.

***

### inputs?

```ts
inputs?: {
[key: string]: unknown;
  dryRun: boolean;
};
```

Defined in: [src/toolkit/action.ts:55](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L55)

The action inputs provided to the GitHub Action.

#### Index Signature

```ts
[key: string]: unknown
```

The action input key-value pairs.

#### dryRun

```ts
dryRun: boolean;
```

Indicates if the action should run in dry-run mode.
