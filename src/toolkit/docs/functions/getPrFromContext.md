[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / getPrFromContext

# Function: getPrFromContext()

> **getPrFromContext**(`context?`): \{\[`key`: `string`\]: `any`; `body?`: `string`; `html_url?`: `string`; `number`: `number`; \} \| `undefined`

Defined in: [src/toolkit/api.ts:124](https://github.com/stairwaytowonderland/typescript-action-template/blob/b0312f8e102f6849fc0255e2172a66854b32b61d/src/toolkit/api.ts#L124)

Get the pull request object from the GitHub context payload.

## Parameters

### context?

[`GitHubContext`](../interfaces/GitHubContext.md) = `github.context`

The GitHub context object containing the payload for the current action.

## Returns

\{\[`key`: `string`\]: `any`; `body?`: `string`; `html_url?`: `string`; `number`: `number`; \} \| `undefined`

The pull request object from the GitHub context payload, or undefined if not present.
