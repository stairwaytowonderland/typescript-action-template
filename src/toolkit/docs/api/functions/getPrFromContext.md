[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [api](../README.md) / getPrFromContext

# Function: getPrFromContext()

> **getPrFromContext**(`context?`): \{\[`key`: `string`\]: `any`; `number`: `number`; `body?`: `string`; `html_url?`: `string`; \} \| `undefined`

Defined in: [src/toolkit/api.ts:124](https://github.com/stairwaytowonderland/typescript-action-template/blob/19bd1a39b90946fe2c0f8a62ab329d00ad9ee1b9/src/toolkit/api.ts#L124)

Get the pull request object from the GitHub context payload.

## Parameters

### context?

`Context` = `github.context`

The GitHub context object containing the payload for the current action.

## Returns

\{\[`key`: `string`\]: `any`; `number`: `number`; `body?`: `string`; `html_url?`: `string`; \} \| `undefined`

The pull request object from the GitHub context payload, or undefined if not present.
