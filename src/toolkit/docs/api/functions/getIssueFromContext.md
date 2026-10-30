[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [api](../README.md) / getIssueFromContext

# Function: getIssueFromContext()

> **getIssueFromContext**(`context?`): \{\[`key`: `string`\]: `any`; `number`: `number`; `body?`: `string`; `html_url?`: `string`; \} \| `undefined`

Defined in: [src/toolkit/api.ts:95](https://github.com/stairwaytowonderland/typescript-action-template/blob/63bd4def94f90d318287a7fef80fd1eabbf24664/src/toolkit/api.ts#L95)

Get the issue object from the GitHub context payload.

## Parameters

### context?

`Context` = `github.context`

The GitHub context object containing the payload for the current action.

## Returns

\{\[`key`: `string`\]: `any`; `number`: `number`; `body?`: `string`; `html_url?`: `string`; \} \| `undefined`

The issue object from the GitHub context payload, or undefined if not present.
