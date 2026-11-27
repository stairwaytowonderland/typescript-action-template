[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / ActionRun

# Interface: ActionRun

Defined in: [src/toolkit/action.ts:24](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L24)

Represents the configuration for a GitHub Action that includes a `run` method.

## Properties

### inputs?

```ts
inputs?: {
[key: string]: unknown;
  dryRun: boolean;
};
```

Defined in: [src/toolkit/action.ts:26](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L26)

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

***

### safeInputs

```ts
safeInputs: ReturnType<typeof getSafeInputs>;
```

Defined in: [src/toolkit/action.ts:36](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L36)

The action inputs with sensitive keys removed.

## Methods

### run()

```ts
run(): Promise<unknown>;
```

Defined in: [src/toolkit/action.ts:43](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L43)

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.
