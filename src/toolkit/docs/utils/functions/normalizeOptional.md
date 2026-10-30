[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [utils](../README.md) / normalizeOptional

# Function: normalizeOptional()

> **normalizeOptional**(`value?`): `string` \| `undefined`

Defined in: [src/toolkit/utils.ts:16](https://github.com/stairwaytowonderland/typescript-action-template/blob/63bd4def94f90d318287a7fef80fd1eabbf24664/src/toolkit/utils.ts#L16)

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
