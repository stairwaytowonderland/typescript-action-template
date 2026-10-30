[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [action](../README.md) / main

# Function: main()

```ts
function main(action): Promise<string | void>;
```

Defined in: [src/action.ts:60](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L60)

Waits for the specified number of milliseconds as defined in the action's inputs.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `action` | [`Action`](../classes/Action.md) | The instance of the Action class containing the configuration and inputs. |

## Returns

`Promise`\<`string` \| `void`\>

Resolves with a string indicating the result of the action.
