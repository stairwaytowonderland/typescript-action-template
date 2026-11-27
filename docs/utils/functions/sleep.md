[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [utils](../README.md) / sleep

# Function: sleep()

```ts
function sleep(ms, msg?): Promise<string | void | undefined>;
```

Defined in: [src/utils.ts:25](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/utils.ts#L25)

Sleeps for the specified number of milliseconds.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ms` | `number` | The number of milliseconds to sleep. |
| `msg?` | `string` | Optional message to resolve with after the sleep duration. |

## Returns

`Promise`\<`string` \| `void` \| `undefined`\>

A promise that resolves after the specified time.

## Throws

Will reject the promise if the provided milliseconds value is not a number.
