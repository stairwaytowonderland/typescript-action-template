[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / normalizeOptional

# Function: normalizeOptional()

> **normalizeOptional**(`value?`): `string` \| `undefined`

Defined in: [src/toolkit/utils.ts:14](https://github.com/stairwaytowonderland/typescript-action-template/blob/b0312f8e102f6849fc0255e2172a66854b32b61d/src/toolkit/utils.ts#L14)

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
