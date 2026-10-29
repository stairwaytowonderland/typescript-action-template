[**Toolkit**](../../README.md)

***

[Toolkit](../../README.md) / [api](../README.md) / SearchItem

# Interface: SearchItem

Defined in: [src/toolkit/api.ts:142](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/api.ts#L142)

Represents a single search result item from the GitHub API.

## Properties

### created\_at

> **created\_at**: `Date`

Defined in: [src/toolkit/api.ts:159](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/api.ts#L159)

The date and time when the issue or pull request was created.

***

### html\_url

> **html\_url**: `string`

Defined in: [src/toolkit/api.ts:155](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/api.ts#L155)

The URL of the issue or pull request on GitHub.

***

### labels

> **labels**: `object`[]

Defined in: [src/toolkit/api.ts:148](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/api.ts#L148)

The labels associated with the issue or pull request.

#### name

> **name**: `string`

The name of the label.

***

### node\_id

> **node\_id**: `string`

Defined in: [src/toolkit/api.ts:144](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/api.ts#L144)

The unique node ID of the search result item.

***

### number

> **number**: `number`

Defined in: [src/toolkit/api.ts:146](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/api.ts#L146)

The issue or pull request number.

***

### repository\_url

> **repository\_url**: `string`

Defined in: [src/toolkit/api.ts:157](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/api.ts#L157)

The URL of the repository containing the issue or pull request.

***

### title

> **title**: `string`

Defined in: [src/toolkit/api.ts:153](https://github.com/stairwaytowonderland/typescript-action-template/blob/5cff6cc247ebc89e56cfb10f2e7804443a7f0b63/src/toolkit/api.ts#L153)

The title of the issue or pull request.
