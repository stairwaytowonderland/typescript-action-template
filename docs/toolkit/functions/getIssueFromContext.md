[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / getIssueFromContext

# Function: getIssueFromContext()

```ts
function getIssueFromContext(context?):
  | {
[key: string]: any;
  number: number;
  html_url?: string;
  body?: string;
}
  | undefined;
```

Defined in: [src/toolkit/api.ts:95](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L95)

Get the issue object from the GitHub context payload.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `context?` | `Context` | `github.context` | The GitHub context object containing the payload for the current action. |

## Returns

  \| \{
\[`key`: `string`\]: `any`;
  `number`: `number`;
  `html_url?`: `string`;
  `body?`: `string`;
\}
  \| `undefined`

The issue object from the GitHub context payload, or undefined if not present.
