[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [action](../README.md) / Action

# Class: Action

Represents the main action class that extends the base configuration.

Provides the `run` method to execute the action's logic.
Extends the base configuration class to inherit common action properties and methods.

## Extends

- [`Config`](../../config/classes/Config.md)

## Implements

- [`ActionConfig`](../../toolkit/action/interfaces/ActionConfig.md)

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

##### dryRun?

`boolean`

Optional flag indicating if the action should run in dry-run mode.

#### Returns

`Action`

#### Inherited from

[`Config`](../../config/classes/Config.md).[`constructor`](../../config/classes/Config.md#constructor)

## Properties

### context

> **context**: [`GitHubContext`](../../toolkit/action/interfaces/GitHubContext.md)

The GitHub context object.

#### Inherited from

[`Config`](../../config/classes/Config.md).[`context`](../../config/classes/Config.md#context)

***

### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.

#### Inherited from

[`Config`](../../config/classes/Config.md).[`dryRun`](../../config/classes/Config.md#dryrun)

***

### inputs?

> `optional` **inputs?**: `object`

The action inputs provided to the GitHub Action.

#### Index Signature

\[`key`: `string`\]: `unknown`

#### dryRun

> **dryRun**: `boolean`

#### Inherited from

[`Config`](../../config/classes/Config.md).[`inputs`](../../config/classes/Config.md#inputs)

## Accessors

### actor

#### Get Signature

> **get** **actor**(): `string`

Returns the actor (user) who triggered the GitHub Action.

##### Returns

`string`

#### Inherited from

[`Config`](../../config/classes/Config.md).[`actor`](../../config/classes/Config.md#actor)

***

### repo

#### Get Signature

> **get** **repo**(): [`SimpleRepository`](../../toolkit/action/interfaces/SimpleRepository.md)

Returns the repository associated with the GitHub Action.

##### Returns

[`SimpleRepository`](../../toolkit/action/interfaces/SimpleRepository.md)

The repository associated with the GitHub Action.

#### Inherited from

[`Config`](../../config/classes/Config.md).[`repo`](../../config/classes/Config.md#repo)

## Methods

### run()

> **run**(): `Promise`\<`void`\>

Executes the main logic of the GitHub Action.

#### Returns

`Promise`\<`void`\>

resolves when the action has completed execution.

#### Implementation of

[`ActionConfig`](../../toolkit/action/interfaces/ActionConfig.md).[`run`](../../toolkit/action/interfaces/ActionConfig.md#run)
