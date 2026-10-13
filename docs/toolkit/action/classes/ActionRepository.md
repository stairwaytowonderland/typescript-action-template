[**typescript-action-template**](../../../README.md)

***

[typescript-action-template](../../../README.md) / [toolkit/action](../README.md) / ActionRepository

# Class: ActionRepository

Provides methods to parse and normalize repository information from various sources.

## Implements

- [`SimpleRepository`](../interfaces/SimpleRepository.md)

## Constructors

### Constructor

> **new ActionRepository**(): `ActionRepository`

Initializes an ActionRepository instance with default values.

#### Returns

`ActionRepository`

### Constructor

> **new ActionRepository**(`name?`, `owner?`): `ActionRepository`

Initializes an ActionRepository instance with the specified repository name and owner.

#### Parameters

##### name?

`string`

The repository name or a SimpleRepository object.

##### owner?

`string`

The repository owner (optional if name contains a slash).

#### Returns

`ActionRepository`

### Constructor

> **new ActionRepository**(`repo`): `ActionRepository`

Initializes an ActionRepository instance from an existing SimpleRepository object.

#### Parameters

##### repo

[`SimpleRepository`](../interfaces/SimpleRepository.md)

The SimpleRepository object containing repository information.

#### Returns

`ActionRepository`

## Properties

### owner?

> `optional` **owner?**: `string`

The repository owner.

#### Implementation of

[`SimpleRepository`](../interfaces/SimpleRepository.md).[`owner`](../interfaces/SimpleRepository.md#owner)

***

### repo?

> `optional` **repo?**: `string`

The repository name.

#### Implementation of

[`SimpleRepository`](../interfaces/SimpleRepository.md).[`repo`](../interfaces/SimpleRepository.md#repo)

## Accessors

### fullName

#### Get Signature

> **get** **fullName**(): `string` \| `undefined`

The full repository name in the format "owner/repo".
Dynamically updates if the name or owner changes.

##### Returns

`string` \| `undefined`

The full repository name in the format "owner/repo".

#### Implementation of

[`SimpleRepository`](../interfaces/SimpleRepository.md).[`fullName`](../interfaces/SimpleRepository.md#fullname)

## Methods

### fromApiUrl()

> **fromApiUrl**(`apiUrl`): `this`

Parses the repository owner and name from a GitHub API URL and updates the instance accordingly.

#### Parameters

##### apiUrl

`string`

#### Returns

`this`

#### See

https://api.github.com/repos/owner/repo

***

### fromContextRepo()

> **fromContextRepo**(`context`): `this`

Updates the repository owner and name based on the provided GitHub Actions context.

#### Parameters

##### context

[`GitHubContext`](../interfaces/GitHubContext.md)

The GitHub Actions context containing repository information.

#### Returns

`this`
