[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [config](../README.md) / Config

# Class: Config

Main action class for the GitHub Action.

* Implements the RepoAction interface and provides methods to run the action.
* Customize this class to include any additional inputs, methods, or properties required for your action.

## Extended by

- [`Action`](../../action/classes/Action.md)

## Implements

- [`ActionSetup`](../../toolkit/action/interfaces/ActionSetup.md)

## Constructors

### Constructor

> **new Config**(`context`, `inputs?`, `dryRun?`): `Config`

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

`Config`

## Properties

### context

> **context**: [`GitHubContext`](../../toolkit/action/interfaces/GitHubContext.md)

The GitHub context object.

#### Implementation of

[`ActionSetup`](../../toolkit/action/interfaces/ActionSetup.md).[`context`](../../toolkit/action/interfaces/ActionSetup.md#context)

***

### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.

#### Implementation of

[`ActionSetup`](../../toolkit/action/interfaces/ActionSetup.md).[`dryRun`](../../toolkit/action/interfaces/ActionSetup.md#dryrun)

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

[`ActionSetup`](../../toolkit/action/interfaces/ActionSetup.md).[`inputs`](../../toolkit/action/interfaces/ActionSetup.md#inputs)

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

[`ActionSetup`](../../toolkit/action/interfaces/ActionSetup.md).[`repo`](../../toolkit/action/interfaces/ActionSetup.md#repo)
