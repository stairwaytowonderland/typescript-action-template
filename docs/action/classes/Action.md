[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [action](../README.md) / Action

# Class: Action

Defined in: [src/action.ts:129](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L129)

Main action class for the GitHub Action.

Implements the RepoAction interface and provides methods to run the action.

## Implements

- [`ActionConfig`](../../toolkit/interfaces/ActionConfig.md)
- [`ActionRun`](../../toolkit/interfaces/ActionRun.md)

## Constructors

### Constructor

```ts
new Action(
   context, 
   inputs, 
   dryRun?
): Action;
```

Defined in: [src/action.ts:155](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L155)

Creates a new instance of the Action class.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `context` | `Context` | The GitHub context object. |
| `inputs` | [`Inputs`](Inputs.md) | Optional action inputs. |
| `dryRun?` | `boolean` | Optional flag indicating if the action should run in dry-run mode. |

#### Returns

`Action`

## Properties

### context

```ts
context: Context;
```

Defined in: [src/action.ts:131](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L131)

The GitHub context object.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`context`](../../toolkit/interfaces/ActionConfig.md#context)

***

### inputs

```ts
inputs: Inputs;
```

Defined in: [src/action.ts:133](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L133)

The action inputs provided to the GitHub Action.

#### Implementation of

[`ActionRun`](../../toolkit/interfaces/ActionRun.md).[`inputs`](../../toolkit/interfaces/ActionRun.md#inputs)

***

### dryRun

```ts
dryRun: boolean;
```

Defined in: [src/action.ts:135](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L135)

Indicates if the action should run in dry-run mode.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`dryRun`](../../toolkit/interfaces/ActionConfig.md#dryrun)

## Accessors

### safeInputs

#### Get Signature

```ts
get safeInputs(): ReturnType<Inputs["getSafeInputs"]>;
```

Defined in: [src/action.ts:167](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L167)

Returns the action inputs with sensitive keys removed.

This is useful for safely logging or processing action inputs without exposing sensitive information such as tokens.

##### Returns

`ReturnType`\<[`Inputs`](Inputs.md)\[`"getSafeInputs"`\]\>

The action inputs with sensitive keys removed.

#### Implementation of

[`ActionRun`](../../toolkit/interfaces/ActionRun.md).[`safeInputs`](../../toolkit/interfaces/ActionRun.md#safeinputs)

***

### actor

#### Get Signature

```ts
get actor(): string;
```

Defined in: [src/action.ts:174](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L174)

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

Defined in: [src/action.ts:181](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L181)

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

Defined in: [src/action.ts:144](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L144)

Executes the main logic of the GitHub Action.

Runs the main function of the action with the current configuration.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.

#### Implementation of

[`ActionRun`](../../toolkit/interfaces/ActionRun.md).[`run`](../../toolkit/interfaces/ActionRun.md#run)
