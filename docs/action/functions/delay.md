[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [action](../README.md) / delay

# Function: delay()

```ts
function delay(milliseconds): Promise<string>;
```

Defined in: [src/action.ts:102](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L102)

Waits for a number of milliseconds.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `milliseconds` | `number` | The number of milliseconds to wait. |

## Returns

`Promise`\<`string`\>

Resolves with 'done!' after the wait is over.
