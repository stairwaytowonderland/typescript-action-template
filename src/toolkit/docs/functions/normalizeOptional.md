[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / normalizeOptional

# Function: normalizeOptional()

> **normalizeOptional**(`value?`): `string` \| `undefined`

Defined in: [src/toolkit/utils.ts:14](https://github.com/stairwaytowonderland/typescript-action-template/blob/1e6d883ed23c71e7fabe6e66c779477a478fcbbe/src/toolkit/utils.ts#L14)

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
