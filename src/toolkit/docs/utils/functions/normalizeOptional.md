[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [utils](../README.md) / normalizeOptional

# Function: normalizeOptional()

> **normalizeOptional**(`value?`): `string` \| `undefined`

Defined in: [src/toolkit/utils.ts:16](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/utils.ts#L16)

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
