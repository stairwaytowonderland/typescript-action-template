[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / isOctokitAuthenticated

# Function: isOctokitAuthenticated()

> **isOctokitAuthenticated**(`octokit`, `action`, `failOnError?`): `Promise`\<`boolean`\>

Defined in: [src/toolkit/api.ts:28](https://github.com/stairwaytowonderland/typescript-action-template/blob/dfe4700b4333676f5c451c1a501bb788791362f8/src/toolkit/api.ts#L28)

Checks if the provided Octokit client is authenticated for the given repository action.

## Parameters

### octokit

`Octokit` & `Api` & `object`

The Octokit client to check authentication for.

### action

[`ActionSetup`](../interfaces/ActionSetup.md)

The repository action containing repository and input details.

### failOnError?

`boolean` = `false`

Whether to throw an error if authentication fails. Defaults to false.

## Returns

`Promise`\<`boolean`\>

A promise that resolves to true if authenticated, false otherwise.
