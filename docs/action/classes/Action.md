[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [action](../README.md) / Action

# Class: Action

Defined in: [src/action.ts:130](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L130)

Main action class for the GitHub Action.

Implements the RepoAction interface and provides methods to run the action.

## Implements

- [`ActionConfig`](../../toolkit/interfaces/ActionConfig.md)
- [`ActionRun`](../../toolkit/interfaces/ActionRun.md)

## Constructors

### Constructor

```ts
new Action(
   context?,
   inputs?,
   dryRun?
): Action;
```

Defined in: [src/action.ts:156](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L156)

Creates a new instance of the Action class.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `context?` | `Context` | `githubContext` | The GitHub context object. |
| `inputs?` | [`Inputs`](../type-aliases/Inputs.md) | `undefined` | Optional action inputs. |
| `dryRun?` | `boolean` | `undefined` | Optional flag indicating if the action should run in dry-run mode. |

#### Returns

`Action`

## Properties

### context

```ts
context: Context;
```

Defined in: [src/action.ts:132](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L132)

The GitHub context object.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`context`](../../toolkit/interfaces/ActionConfig.md#context)

***

### inputs?

```ts
inputs?: Inputs;
```

Defined in: [src/action.ts:134](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L134)

The action inputs provided to the GitHub Action.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`inputs`](../../toolkit/interfaces/ActionConfig.md#inputs)

***

### dryRun

```ts
dryRun: boolean;
```

Defined in: [src/action.ts:136](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L136)

Indicates if the action should run in dry-run mode.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`dryRun`](../../toolkit/interfaces/ActionConfig.md#dryrun)

## Accessors

### safeInputs

#### Get Signature

```ts
get safeInputs(): ReturnType<typeof getSafeInputs>;
```

Defined in: [src/action.ts:168](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L168)

Returns the action inputs with sensitive keys removed.

This is useful for safely logging or processing action inputs without exposing sensitive information such as tokens.

##### Returns

`ReturnType`\<*typeof* [`getSafeInputs`](../../toolkit/functions/getSafeInputs.md)\>

The action inputs with sensitive keys removed.

#### Implementation of

[`ActionRun`](../../toolkit/interfaces/ActionRun.md).[`safeInputs`](../../toolkit/interfaces/ActionRun.md#safeinputs)

***

### actor

#### Get Signature

```ts
get actor(): string;
```

Defined in: [src/action.ts:175](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L175)

Returns the actor (user) who triggered the GitHub Action.

##### Returns

`string`

The actor (user) who triggered the GitHub Action.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`actor`](../../toolkit/interfaces/ActionConfig.md#actor)

***

### repo

#### Get Signature

```ts
get repo(): SimpleRepository;
```

Defined in: [src/action.ts:182](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L182)

Returns the repository associated with the GitHub Action.

##### Returns

[`SimpleRepository`](../../toolkit/interfaces/SimpleRepository.md)

The repository associated with the GitHub Action.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`repo`](../../toolkit/interfaces/ActionConfig.md#repo)

## Methods

### run()

```ts
run(): Promise<unknown>;
```

Defined in: [src/action.ts:145](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L145)

Executes the main logic of the GitHub Action.

Runs the main function of the action with the current configuration.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.

#### Implementation of

[`ActionRun`](../../toolkit/interfaces/ActionRun.md).[`run`](../../toolkit/interfaces/ActionRun.md#run)
