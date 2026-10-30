[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / #toolkit

# #toolkit

Exports all the modules from the toolkit.

## Classes

| Class | Description |
| ------ | ------ |
| [ActionRepository](classes/ActionRepository.md) | Provides methods to parse and normalize repository information from various sources. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ActionRun](interfaces/ActionRun.md) | Represents the configuration for a GitHub Action that includes a `run` method. |
| [ActionConfig](interfaces/ActionConfig.md) | Represents the base configuration for a GitHub Actions run. |
| [SimpleRepository](interfaces/SimpleRepository.md) | Represents basic information about a GitHub repository. |
| [SearchItem](interfaces/SearchItem.md) | Represents a single search result item from the GitHub API. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [GitHubContext](type-aliases/GitHubContext.md) | Represents the GitHub context object provided by the `@actions/github` library. |
| [ActionInputs](type-aliases/ActionInputs.md) | Represents the non-nullable action inputs for the GitHub Action. |
| [OctokitClient](type-aliases/OctokitClient.md) | Represents the Octokit client returned by the `getOctokit` function from the `@actions/github` library. |

## Functions

| Function | Description |
| ------ | ------ |
| [getSafeInputs](functions/getSafeInputs.md) | Filters out specified keys from the action inputs object. |
| [isOctokitAuthenticated](functions/isOctokitAuthenticated.md) | Checks if the provided Octokit client is authenticated for the given repository action. |
| [getAuth](functions/getAuth.md) | Retrieves an authenticated Octokit client using the provided GitHub token or the token from the action inputs. |
| [getIssueFromContext](functions/getIssueFromContext.md) | Get the issue object from the GitHub context payload. |
| [getPrFromContext](functions/getPrFromContext.md) | Get the pull request object from the GitHub context payload. |
| [searchIssuesAndPullRequests](functions/searchIssuesAndPullRequests.md) | Searches for issues and pull requests based on the provided query using the GitHub REST API. Returns a list of search result items matching the query. |
| [normalizeOptional](functions/normalizeOptional.md) | Normalizes an optional string value. |
| [kebabToCamel](functions/kebabToCamel.md) | Converts a kebab-case string to camelCase. |
