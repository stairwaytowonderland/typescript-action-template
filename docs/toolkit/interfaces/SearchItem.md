[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / SearchItem

# Interface: SearchItem

Represents a single search result item from the GitHub API.

## Properties

### node\_id

> **node\_id**: `string`

The unique node ID of the search result item.

***

### number

> **number**: `number`

The issue or pull request number.

***

### labels

> **labels**: `object`[]

The labels associated with the issue or pull request.

#### name

> **name**: `string`

The name of the label.

***

### title

> **title**: `string`

The title of the issue or pull request.

***

### html\_url

> **html\_url**: `string`

The URL of the issue or pull request on GitHub.

***

### repository\_url

> **repository\_url**: `string`

The URL of the repository containing the issue or pull request.

***

### created\_at

> **created\_at**: `Date`

The date and time when the issue or pull request was created.
