[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / getIssueFromContext

# Function: getIssueFromContext()

> **getIssueFromContext**(`context?`): \{\[`key`: `string`\]: `any`; `body?`: `string`; `html_url?`: `string`; `number`: `number`; \} \| `undefined`

Defined in: [src/toolkit/api.ts:113](https://github.com/stairwaytowonderland/typescript-action-template/blob/09e93f3a9974b161f6442038da449fba9cecf83f/src/toolkit/api.ts#L113)

Get the issue object from the GitHub context payload.

## Parameters

### context?

[`GitHubContext`](../interfaces/GitHubContext.md) = `github.context`

The GitHub context object containing the payload for the current action.

## Returns

\{\[`key`: `string`\]: `any`; `body?`: `string`; `html_url?`: `string`; `number`: `number`; \} \| `undefined`

The issue object from the GitHub context payload, or undefined if not present.
