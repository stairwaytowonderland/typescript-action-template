[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [api](../README.md) / SearchItem

# Interface: SearchItem

Defined in: [src/toolkit/api.ts:141](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/api.ts#L141)

Represents a single search result item from the GitHub API.

## Properties

### created\_at

> **created\_at**: `Date`

Defined in: [src/toolkit/api.ts:158](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/api.ts#L158)

The date and time when the issue or pull request was created.

***

### html\_url

> **html\_url**: `string`

Defined in: [src/toolkit/api.ts:154](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/api.ts#L154)

The URL of the issue or pull request on GitHub.

***

### labels

> **labels**: `object`[]

Defined in: [src/toolkit/api.ts:147](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/api.ts#L147)

The labels associated with the issue or pull request.

#### name

> **name**: `string`

The name of the label.

***

### node\_id

> **node\_id**: `string`

Defined in: [src/toolkit/api.ts:143](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/api.ts#L143)

The unique node ID of the search result item.

***

### number

> **number**: `number`

Defined in: [src/toolkit/api.ts:145](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/api.ts#L145)

The issue or pull request number.

***

### repository\_url

> **repository\_url**: `string`

Defined in: [src/toolkit/api.ts:156](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/api.ts#L156)

The URL of the repository containing the issue or pull request.

***

### title

> **title**: `string`

Defined in: [src/toolkit/api.ts:152](https://github.com/stairwaytowonderland/typescript-action-template/blob/6a50f039554e6387d1a638e898e8d16ff515ee9b/src/toolkit/api.ts#L152)

The title of the issue or pull request.
