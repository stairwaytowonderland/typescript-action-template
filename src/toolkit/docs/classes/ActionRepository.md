[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / ActionRepository

# Class: ActionRepository

Defined in: [src/toolkit/action.ts:108](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/action.ts#L108)

Provides methods to parse and normalize repository information from various sources.

## Implements

- [`SimpleRepository`](../interfaces/SimpleRepository.md)

## Constructors

### Constructor

> **new ActionRepository**(): `ActionRepository`

Defined in: [src/toolkit/action.ts:126](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/action.ts#L126)

Initializes an ActionRepository instance with default values.

#### Returns

`ActionRepository`

### Constructor

> **new ActionRepository**(`name?`, `owner?`): `ActionRepository`

Defined in: [src/toolkit/action.ts:134](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/action.ts#L134)

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

Defined in: [src/toolkit/action.ts:141](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/action.ts#L141)

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

Defined in: [src/toolkit/action.ts:113](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/action.ts#L113)

The repository owner.

#### Implementation of

[`SimpleRepository`](../interfaces/SimpleRepository.md).[`owner`](../interfaces/SimpleRepository.md#owner)

***

### repo?

> `optional` **repo?**: `string`

Defined in: [src/toolkit/action.ts:110](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/action.ts#L110)

The repository name.

#### Implementation of

[`SimpleRepository`](../interfaces/SimpleRepository.md).[`repo`](../interfaces/SimpleRepository.md#repo)

## Accessors

### fullName

#### Get Signature

> **get** **fullName**(): `string` \| `undefined`

Defined in: [src/toolkit/action.ts:119](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/action.ts#L119)

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

Defined in: [src/toolkit/action.ts:228](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/action.ts#L228)

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

Defined in: [src/toolkit/action.ts:244](https://github.com/stairwaytowonderland/typescript-action-template/blob/7be33a45f0ece47e1c1086b15ca1c33944f860c4/src/toolkit/action.ts#L244)

Updates the repository owner and name based on the provided GitHub Actions context.

#### Parameters

##### context

[`GitHubContext`](../interfaces/GitHubContext.md)

The GitHub Actions context containing repository information.

#### Returns

`this`
