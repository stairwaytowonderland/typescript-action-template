[**typescript-action-template**](../../../README.md)

***

[typescript-action-template](../../../README.md) / [toolkit/action](../README.md) / ActionSetup

# Interface: ActionSetup

Represents the base configuration for a GitHub Actions run.

## Properties

### context

> **context**: [`GitHubContext`](GitHubContext.md)

The GitHub context object.

***

### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.

***

### inputs?

> `optional` **inputs?**: `object`

The action inputs provided to the GitHub Action.

#### Index Signature

\[`key`: `string`\]: `unknown`

#### dryRun

> **dryRun**: `boolean`

***

### repo

> **repo**: [`SimpleRepository`](SimpleRepository.md)

The repository associated with the GitHub Action.
