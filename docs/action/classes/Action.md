[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [action](../README.md) / Action

# Class: Action

Main action class for the GitHub Action.

Implements the RepoAction interface and provides methods to run the action.

## Implements

- [`ActionConfig`](../../toolkit/interfaces/ActionConfig.md)
- [`ActionRun`](../../toolkit/interfaces/ActionRun.md)

## Constructors

### Constructor

> **new Action**(`context`, `inputs?`, `dryRun?`): `Action`

Creates a new instance of the Action class.

#### Parameters

##### context

[`GitHubContext`](../../toolkit/interfaces/GitHubContext.md)

The GitHub context object.

##### inputs?

Optional action inputs.

###### dryRun

`boolean`

Indicates if the action should run in dry-run mode.

##### dryRun?

`boolean`

Optional flag indicating if the action should run in dry-run mode.

#### Returns

`Action`

## Properties

### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`dryRun`](../../toolkit/interfaces/ActionConfig.md#dryrun)

***

### context

> **context**: [`GitHubContext`](../../toolkit/interfaces/GitHubContext.md)

The GitHub context object.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`context`](../../toolkit/interfaces/ActionConfig.md#context)

***

### inputs?

> `optional` **inputs?**: `object`

The action inputs provided to the GitHub Action.

#### Index Signature

\[`key`: `string`\]: `unknown`

The action input key-value pairs.

#### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`inputs`](../../toolkit/interfaces/ActionConfig.md#inputs)

## Accessors

### actor

#### Get Signature

> **get** **actor**(): `string`

Returns the actor (user) who triggered the GitHub Action.

##### Returns

`string`

***

### repo

#### Get Signature

> **get** **repo**(): [`SimpleRepository`](../../toolkit/interfaces/SimpleRepository.md)

Returns the repository associated with the GitHub Action.

##### Returns

[`SimpleRepository`](../../toolkit/interfaces/SimpleRepository.md)

The repository associated with the GitHub Action.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`repo`](../../toolkit/interfaces/ActionConfig.md#repo)

## Methods

### run()

> **run**(): `Promise`\<`unknown`\>

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.

#### Implementation of

[`ActionRun`](../../toolkit/interfaces/ActionRun.md).[`run`](../../toolkit/interfaces/ActionRun.md#run)
