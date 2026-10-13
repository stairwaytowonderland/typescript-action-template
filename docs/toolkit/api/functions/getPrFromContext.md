[**typescript-action-template**](../../../README.md)

***

[typescript-action-template](../../../README.md) / [toolkit/api](../README.md) / getPrFromContext

# Function: getPrFromContext()

> **getPrFromContext**(`context?`): \{\[`key`: `string`\]: `any`; `body?`: `string`; `html_url?`: `string`; `number`: `number`; \} \| `undefined`

Get the pull request object from the GitHub context payload.

## Parameters

### context?

[`GitHubContext`](../../action/interfaces/GitHubContext.md) = `github.context`

The GitHub context object containing the payload for the current action.

## Returns

\{\[`key`: `string`\]: `any`; `body?`: `string`; `html_url?`: `string`; `number`: `number`; \} \| `undefined`

The pull request object from the GitHub context payload, or undefined if not present.
