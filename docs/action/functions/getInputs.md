[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [action](../README.md) / getInputs

# Function: getInputs()

> **getInputs**(): `object`

Retrieves and normalizes GitHub Action inputs based on the provided labels.

Converts the input labels from kebab-case to camelCase and returns an object containing the corresponding input values.

## Returns

An object containing the normalized action inputs keyed by camelCase names.

### dryRun

> **dryRun**: `boolean`

Indicates if the action should run in dry-run mode.
