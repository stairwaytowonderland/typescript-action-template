[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / getIssueFromContext

# Function: getIssueFromContext()

> **getIssueFromContext**(`context?`): \{\[`key`: `string`\]: `any`; `number`: `number`; `html_url?`: `string`; `body?`: `string`; \} \| `undefined`

Get the issue object from the GitHub context payload.

## Parameters

### context?

[`GitHubContext`](../interfaces/GitHubContext.md) = `github.context`

The GitHub context object containing the payload for the current action.

## Returns

\{\[`key`: `string`\]: `any`; `number`: `number`; `html_url?`: `string`; `body?`: `string`; \} \| `undefined`

The issue object from the GitHub context payload, or undefined if not present.
