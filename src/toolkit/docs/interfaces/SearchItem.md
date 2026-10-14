[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / SearchItem

# Interface: SearchItem

Defined in: [src/toolkit/api.ts:134](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/api.ts#L134)

Represents a single search result item from the GitHub API.

## Properties

### created\_at

> **created\_at**: `Date`

Defined in: [src/toolkit/api.ts:151](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/api.ts#L151)

The date and time when the issue or pull request was created.

***

### html\_url

> **html\_url**: `string`

Defined in: [src/toolkit/api.ts:147](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/api.ts#L147)

The URL of the issue or pull request on GitHub.

***

### labels

> **labels**: `object`[]

Defined in: [src/toolkit/api.ts:140](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/api.ts#L140)

The labels associated with the issue or pull request.

#### name

> **name**: `string`

The name of the label.

***

### node\_id

> **node\_id**: `string`

Defined in: [src/toolkit/api.ts:136](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/api.ts#L136)

The unique node ID of the search result item.

***

### number

> **number**: `number`

Defined in: [src/toolkit/api.ts:138](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/api.ts#L138)

The issue or pull request number.

***

### repository\_url

> **repository\_url**: `string`

Defined in: [src/toolkit/api.ts:149](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/api.ts#L149)

The URL of the repository containing the issue or pull request.

***

### title

> **title**: `string`

Defined in: [src/toolkit/api.ts:145](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/api.ts#L145)

The title of the issue or pull request.
