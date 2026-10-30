[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / isOctokitAuthenticated

# Function: isOctokitAuthenticated()

```ts
function isOctokitAuthenticated(octokit, failOnError?): Promise<boolean>;
```

Defined in: [src/toolkit/api.ts:34](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L34)

Checks if the provided Octokit client is authenticated for the given repository action.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `octokit` | `Octokit` & `Api` & \{ `paginate`: `PaginateInterface`; \} | `undefined` | The Octokit client to check authentication for. |
| `failOnError?` | `boolean` | `false` | Whether to throw an error if authentication fails. Defaults to false. |

## Returns

`Promise`\<`boolean`\>

A promise that resolves to true if authenticated, false otherwise.
