[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / ActionConfig

# Interface: ActionConfig

Represents the base configuration for a GitHub Actions run.

## Properties

### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.

***

### context

> **context**: [`GitHubContext`](GitHubContext.md)

The GitHub context object.

***

### actor

> **actor**: `string`

The actor (user) who triggered the GitHub Action.

***

### repo

> **repo**: [`SimpleRepository`](SimpleRepository.md)

The repository associated with the GitHub Action.

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
