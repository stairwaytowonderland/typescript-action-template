[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [api](../README.md) / getAuth

# Function: getAuth()

> **getAuth**(`ghToken`, `failOnError?`): `Promise`\<`Octokit` & `Api` & `object` \| `undefined`\>

Defined in: [src/toolkit/api.ts:66](https://github.com/stairwaytowonderland/typescript-action-template/blob/63bd4def94f90d318287a7fef80fd1eabbf24664/src/toolkit/api.ts#L66)

Retrieves an authenticated Octokit client using the provided GitHub token or the token from the action inputs.

If the environment is set to 'test', the function will skip live GitHub API authentication and return a mock Octokit client.

## Parameters

### ghToken

`string`

Optional GitHub token to use for authentication. If not provided, it will be read from the action inputs.

### failOnError?

`boolean` = `false`

Whether to throw an error if authentication fails. Defaults to false.

## Returns

`Promise`\<`Octokit` & `Api` & `object` \| `undefined`\>

A promise that resolves to an authenticated Octokit client instance, or undefined if authentication fails.
