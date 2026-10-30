[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / SearchItem

# Interface: SearchItem

Defined in: [src/toolkit/api.ts:113](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L113)

Represents a single search result item from the GitHub API.

## Properties

### node\_id

> **node\_id**: `string`

Defined in: [src/toolkit/api.ts:115](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L115)

The unique node ID of the search result item.

***

### number

> **number**: `number`

Defined in: [src/toolkit/api.ts:117](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L117)

The issue or pull request number.

***

### labels

> **labels**: `object`[]

Defined in: [src/toolkit/api.ts:119](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L119)

The labels associated with the issue or pull request.

#### name

> **name**: `string`

The name of the label.

***

### title

> **title**: `string`

Defined in: [src/toolkit/api.ts:124](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L124)

The title of the issue or pull request.

***

### html\_url

> **html\_url**: `string`

Defined in: [src/toolkit/api.ts:126](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L126)

The URL of the issue or pull request on GitHub.

***

### repository\_url

> **repository\_url**: `string`

Defined in: [src/toolkit/api.ts:128](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L128)

The URL of the repository containing the issue or pull request.

***

### created\_at

> **created\_at**: `Date`

Defined in: [src/toolkit/api.ts:130](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/api.ts#L130)

The date and time when the issue or pull request was created.
