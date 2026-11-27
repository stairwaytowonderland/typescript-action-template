[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / ActionConfig

# Interface: ActionConfig

Defined in: [src/toolkit/action.ts:49](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L49)

Represents the base configuration for a GitHub Actions run.

## Properties

### dryRun

```ts
dryRun: boolean;
```

Defined in: [src/toolkit/action.ts:51](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L51)

Indicates if the action should run in dry-run mode.

***

### context

```ts
context: Context;
```

Defined in: [src/toolkit/action.ts:54](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L54)

The GitHub context object.

***

### actor

```ts
actor: string;
```

Defined in: [src/toolkit/action.ts:57](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L57)

The actor (user) who triggered the GitHub Action.

***

### repo

```ts
repo: SimpleRepository;
```

Defined in: [src/toolkit/action.ts:60](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L60)

The repository associated with the GitHub Action.
