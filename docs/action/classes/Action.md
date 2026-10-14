[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [action](../README.md) / Action

# Class: Action

Main action class for the GitHub Action.

Implements the RepoAction interface and provides methods to run the action.

## Implements

- [`ActionConfig`](../../toolkit/action/interfaces/ActionConfig.md)
- [`ActionExec`](../../toolkit/action/interfaces/ActionExec.md)

## Constructors

### Constructor

> **new Action**(`context`, `inputs?`, `dryRun?`): `Action`

Creates a new instance of the Action class.

#### Parameters

##### context

[`GitHubContext`](../../toolkit/action/interfaces/GitHubContext.md)

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

### context

> **context**: [`GitHubContext`](../../toolkit/action/interfaces/GitHubContext.md)

The GitHub context object.

#### Implementation of

[`ActionConfig`](../../toolkit/action/interfaces/ActionConfig.md).[`context`](../../toolkit/action/interfaces/ActionConfig.md#context)

***

### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.

#### Implementation of

[`ActionConfig`](../../toolkit/action/interfaces/ActionConfig.md).[`dryRun`](../../toolkit/action/interfaces/ActionConfig.md#dryrun)

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

[`ActionConfig`](../../toolkit/action/interfaces/ActionConfig.md).[`inputs`](../../toolkit/action/interfaces/ActionConfig.md#inputs)

***

### run

> **run**: () => `Promise`\<`unknown`\>

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.

#### Implementation of

[`ActionExec`](../../toolkit/action/interfaces/ActionExec.md).[`run`](../../toolkit/action/interfaces/ActionExec.md#run)

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

> **get** **repo**(): [`SimpleRepository`](../../toolkit/action/interfaces/SimpleRepository.md)

Returns the repository associated with the GitHub Action.

##### Returns

[`SimpleRepository`](../../toolkit/action/interfaces/SimpleRepository.md)

The repository associated with the GitHub Action.

#### Implementation of

[`ActionConfig`](../../toolkit/action/interfaces/ActionConfig.md).[`repo`](../../toolkit/action/interfaces/ActionConfig.md#repo)
