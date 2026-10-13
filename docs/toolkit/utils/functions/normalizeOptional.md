[**typescript-action-template**](../../../README.md)

***

[typescript-action-template](../../../README.md) / [toolkit/utils](../README.md) / normalizeOptional

# Function: normalizeOptional()

> **normalizeOptional**(`value?`): `string` \| `undefined`

Normalizes an optional string value.

Converts empty strings or undefined values to undefined.
This is useful for handling optional string values where empty strings should be treated as undefined.

## Parameters

### value?

`string`

The string value to normalize. If the value is an empty string or undefined, it will be converted to undefined.

## Returns

`string` \| `undefined`

The normalized string value or undefined.
