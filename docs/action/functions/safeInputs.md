[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [action](../README.md) / safeInputs

# Function: safeInputs()

> **safeInputs**(`inputs?`): `Omit`\<\{\[`key`: `string`\]: `unknown`; `dryRun`: `boolean`; \}, `"ghToken"`\>

Takes the action inputs and returns a sanitized version with sensitive keys removed.

Removes sensitive keys such as 'ghToken', 'secretOne', and 'secretTwo' from the inputs.
This helps prevent accidental exposure of sensitive information in logs or outputs.

## Parameters

### inputs?

[`Inputs`](../type-aliases/Inputs.md)

The action inputs to be sanitized.

## Returns

`Omit`\<\{\[`key`: `string`\]: `unknown`; `dryRun`: `boolean`; \}, `"ghToken"`\>

The sanitized action inputs with sensitive keys removed.
