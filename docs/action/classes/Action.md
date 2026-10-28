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

> **new Action**(): `Action`

Default constructor for the Action class.

#### Returns

`Action`

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

### context

#### Get Signature

> **get** **context**(): [`GitHubContext`](../../toolkit/interfaces/GitHubContext.md)

Retrieves the GitHub context object for the action.

##### Returns

[`GitHubContext`](../../toolkit/interfaces/GitHubContext.md)

The GitHub context object.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`context`](../../toolkit/interfaces/ActionConfig.md#context)

***

### actor

#### Get Signature

> **get** **actor**(): `string`

Returns the actor (user) who triggered the GitHub Action.

##### Returns

`string`

The actor (user) who triggered the GitHub Action.

#### Implementation of

[`ActionConfig`](../../toolkit/interfaces/ActionConfig.md).[`actor`](../../toolkit/interfaces/ActionConfig.md#actor)

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

Runs the main function of the action with the current configuration.

If the context has not been loaded yet, it will be fetched here.

*One caveat of relying on the run() method to load the context is that any code*
*executed before the context is loaded may not have access to the proper GitHub context.*
*In such cases, consider explicitly calling loadContext() with the refresh flag set to true.*

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.

#### Implementation of

[`ActionRun`](../../toolkit/interfaces/ActionRun.md).[`run`](../../toolkit/interfaces/ActionRun.md#run)

***

### loadContext()

> **loadContext**(`refresh?`): `Promise`\<[`GitHubContext`](../../toolkit/interfaces/GitHubContext.md)\>

Loads the GitHub context if it hasn't been loaded yet or if a refresh is requested.

#### Parameters

##### refresh?

`boolean`

Optional flag indicating if the context should be refreshed.

#### Returns

`Promise`\<[`GitHubContext`](../../toolkit/interfaces/GitHubContext.md)\>

A promise that resolves with the GitHub context object.

#### Implementation of

[`ActionRun`](../../toolkit/interfaces/ActionRun.md).[`loadContext`](../../toolkit/interfaces/ActionRun.md#loadcontext)
