[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [api](../README.md) / searchIssuesAndPullRequests

# Function: searchIssuesAndPullRequests()

> **searchIssuesAndPullRequests**(`query`, `octokit`): `Promise`\<[`SearchItem`](../interfaces/SearchItem.md)[]\>

Defined in: [src/toolkit/api.ts:171](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/api.ts#L171)

Searches for issues and pull requests based on the provided query using the GitHub REST API.
Returns a list of search result items matching the query.

## Parameters

### query

`string`

The search query string used to find issues and pull requests.

### octokit

`Octokit` & `Api` & `object`

The Octokit client instance used to interact with the GitHub REST API.

## Returns

`Promise`\<[`SearchItem`](../interfaces/SearchItem.md)[]\>

A promise that resolves to an array of search result items matching the query.

## See

https://docs.github.com/en/rest/search/search?apiVersion=2026-03-10#search-issues-and-pull-requests
