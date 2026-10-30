[**Toolkit**](README.md)

***

[Toolkit](README.md) / api

# api

GitHub API related helper functions and types for the toolkit.

Provides helper functions and types to interact with the GitHub API.

## Interfaces

### SearchItem

Defined in: [src/toolkit/api.ts:113](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L113)

Represents a single search result item from the GitHub API.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="created_at"></a> `created_at` | `Date` | The date and time when the issue or pull request was created. | [src/toolkit/api.ts:130](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L130) |
| <a id="html_url"></a> `html_url` | `string` | The URL of the issue or pull request on GitHub. | [src/toolkit/api.ts:126](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L126) |
| <a id="labels"></a> `labels` | \{ `name`: `string`; \}[] | The labels associated with the issue or pull request. | [src/toolkit/api.ts:119](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L119) |
| <a id="node_id"></a> `node_id` | `string` | The unique node ID of the search result item. | [src/toolkit/api.ts:115](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L115) |
| <a id="number"></a> `number` | `number` | The issue or pull request number. | [src/toolkit/api.ts:117](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L117) |
| <a id="repository_url"></a> `repository_url` | `string` | The URL of the repository containing the issue or pull request. | [src/toolkit/api.ts:128](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L128) |
| <a id="title"></a> `title` | `string` | The title of the issue or pull request. | [src/toolkit/api.ts:124](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L124) |

## Type Aliases

### OctokitClient

```ts
type OctokitClient = ReturnType<typeof github.getOctokit>;
```

Defined in: [src/toolkit/api.ts:21](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L21)

Represents the Octokit client returned by the `getOctokit` function from the `@actions/github` library.

## Functions

### getAuth()

```ts
function getAuth(ghToken, failOnError?): Promise<
  | Octokit & Api & {
  paginate: PaginateInterface;
}
| undefined>;
```

Defined in: [src/toolkit/api.ts:66](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L66)

Retrieves an authenticated Octokit client using the provided GitHub token or the token from the action inputs.

If the environment is set to 'test', the function will skip live GitHub API authentication and return a mock Octokit client.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `ghToken` | `string` | `undefined` | Optional GitHub token to use for authentication. If not provided, it will be read from the action inputs. |
| `failOnError?` | `boolean` | `false` | Whether to throw an error if authentication fails. Defaults to false. |

#### Returns

`Promise`\<
  \| `Octokit` & `Api` & \{
  `paginate`: `PaginateInterface`;
\}
  \| `undefined`\>

A promise that resolves to an authenticated Octokit client instance, or undefined if authentication fails.

***

### getIssueFromContext()

```ts
function getIssueFromContext(context?):
  | {
[key: string]: any;
  number: number;
  body?: string;
  html_url?: string;
}
  | undefined;
```

Defined in: [src/toolkit/api.ts:95](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L95)

Get the issue object from the GitHub context payload.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `context?` | `Context` | `github.context` | The GitHub context object containing the payload for the current action. |

#### Returns

  \| \{
\[`key`: `string`\]: `any`;
  `number`: `number`;
  `body?`: `string`;
  `html_url?`: `string`;
\}
  \| `undefined`

The issue object from the GitHub context payload, or undefined if not present.

***

### getPrFromContext()

```ts
function getPrFromContext(context?):
  | {
[key: string]: any;
  number: number;
  body?: string;
  html_url?: string;
}
  | undefined;
```

Defined in: [src/toolkit/api.ts:103](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L103)

Get the pull request object from the GitHub context payload.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `context?` | `Context` | `github.context` | The GitHub context object containing the payload for the current action. |

#### Returns

  \| \{
\[`key`: `string`\]: `any`;
  `number`: `number`;
  `body?`: `string`;
  `html_url?`: `string`;
\}
  \| `undefined`

The pull request object from the GitHub context payload, or undefined if not present.

***

### isOctokitAuthenticated()

```ts
function isOctokitAuthenticated(octokit, failOnError?): Promise<boolean>;
```

Defined in: [src/toolkit/api.ts:34](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L34)

Checks if the provided Octokit client is authenticated for the given repository action.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `octokit` | `Octokit` & `Api` & \{ `paginate`: `PaginateInterface`; \} | `undefined` | The Octokit client to check authentication for. |
| `failOnError?` | `boolean` | `false` | Whether to throw an error if authentication fails. Defaults to false. |

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to true if authenticated, false otherwise.

***

### searchIssuesAndPullRequests()

```ts
function searchIssuesAndPullRequests(query, octokit): Promise<SearchItem[]>;
```

Defined in: [src/toolkit/api.ts:143](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L143)

Searches for issues and pull requests based on the provided query using the GitHub REST API.
Returns a list of search result items matching the query.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `string` | The search query string used to find issues and pull requests. |
| `octokit` | `Octokit` & `Api` & \{ `paginate`: `PaginateInterface`; \} | The Octokit client instance used to interact with the GitHub REST API. |

#### Returns

`Promise`\<[`SearchItem`](#searchitem)[]\>

A promise that resolves to an array of search result items matching the query.

#### See

https://docs.github.com/en/rest/search/search?apiVersion=2026-03-10#search-issues-and-pull-requests
