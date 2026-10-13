[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / ActionRepository

# Class: ActionRepository

Defined in: [src/toolkit/action.ts:99](https://github.com/stairwaytowonderland/typescript-action-template/blob/09e93f3a9974b161f6442038da449fba9cecf83f/src/toolkit/action.ts#L99)

Provides methods to parse and normalize repository information from various sources.

## Implements

- [`SimpleRepository`](../interfaces/SimpleRepository.md)

## Constructors

### Constructor

> **new ActionRepository**(): `ActionRepository`

Defined in: [src/toolkit/action.ts:117](https://github.com/stairwaytowonderland/typescript-action-template/blob/09e93f3a9974b161f6442038da449fba9cecf83f/src/toolkit/action.ts#L117)

Initializes an ActionRepository instance with default values.

#### Returns

`ActionRepository`

### Constructor

> **new ActionRepository**(`name?`, `owner?`): `ActionRepository`

Defined in: [src/toolkit/action.ts:125](https://github.com/stairwaytowonderland/typescript-action-template/blob/09e93f3a9974b161f6442038da449fba9cecf83f/src/toolkit/action.ts#L125)

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

Defined in: [src/toolkit/action.ts:132](https://github.com/stairwaytowonderland/typescript-action-template/blob/09e93f3a9974b161f6442038da449fba9cecf83f/src/toolkit/action.ts#L132)

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

Defined in: [src/toolkit/action.ts:104](https://github.com/stairwaytowonderland/typescript-action-template/blob/09e93f3a9974b161f6442038da449fba9cecf83f/src/toolkit/action.ts#L104)

The repository owner.

#### Implementation of

[`SimpleRepository`](../interfaces/SimpleRepository.md).[`owner`](../interfaces/SimpleRepository.md#owner)

***

### repo?

> `optional` **repo?**: `string`

Defined in: [src/toolkit/action.ts:101](https://github.com/stairwaytowonderland/typescript-action-template/blob/09e93f3a9974b161f6442038da449fba9cecf83f/src/toolkit/action.ts#L101)

The repository name.

#### Implementation of

[`SimpleRepository`](../interfaces/SimpleRepository.md).[`repo`](../interfaces/SimpleRepository.md#repo)

## Accessors

### fullName

#### Get Signature

> **get** **fullName**(): `string` \| `undefined`

Defined in: [src/toolkit/action.ts:110](https://github.com/stairwaytowonderland/typescript-action-template/blob/09e93f3a9974b161f6442038da449fba9cecf83f/src/toolkit/action.ts#L110)

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

Defined in: [src/toolkit/action.ts:219](https://github.com/stairwaytowonderland/typescript-action-template/blob/09e93f3a9974b161f6442038da449fba9cecf83f/src/toolkit/action.ts#L219)

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

Defined in: [src/toolkit/action.ts:235](https://github.com/stairwaytowonderland/typescript-action-template/blob/09e93f3a9974b161f6442038da449fba9cecf83f/src/toolkit/action.ts#L235)

Updates the repository owner and name based on the provided GitHub Actions context.

#### Parameters

##### context

[`GitHubContext`](../interfaces/GitHubContext.md)

The GitHub Actions context containing repository information.

#### Returns

`this`
