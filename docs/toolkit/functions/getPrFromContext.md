[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / getPrFromContext

# Function: getPrFromContext()

```ts
function getPrFromContext(context?):
  | {
[key: string]: any;
  number: number;
  html_url?: string;
  body?: string;
}
  | undefined;
```

Defined in: [src/toolkit/api.ts:103](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L103)

Get the pull request object from the GitHub context payload.

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

The pull request object from the GitHub context payload, or undefined if not present.
