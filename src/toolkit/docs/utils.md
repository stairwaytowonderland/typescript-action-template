[**Toolkit**](README.md)

***

[Toolkit](README.md) / utils

# utils

Utility functions for the toolkit

## Functions

### kebabToCamel()

```ts
function kebabToCamel(str): string;
```

Defined in: [src/toolkit/utils.ts:29](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/utils.ts#L29)

Converts a kebab-case string to camelCase.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The kebab-case string to be converted. |

#### Returns

`string`

The converted camelCase string.

#### Example

```ts
kebabToCamel('kebab-case-string') // 'kebabCaseString'
```

***

### normalizeOptional()

```ts
function normalizeOptional(value?): string | undefined;
```

Defined in: [src/toolkit/utils.ts:16](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/utils.ts#L16)

Normalizes an optional string value.

Converts empty strings or undefined values to undefined.
This is useful for handling optional string values where empty strings should be treated as undefined.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value?` | `string` | The string value to normalize. If the value is an empty string or undefined, it will be converted to undefined. |

#### Returns

`string` \| `undefined`

The normalized string value or undefined.
