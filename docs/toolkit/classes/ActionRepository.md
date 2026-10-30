[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / ActionRepository

# Class: ActionRepository

Defined in: [src/toolkit/action.ts:151](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L151)

Provides methods to parse and normalize repository information from various sources.

## Implements

- [`SimpleRepository`](../interfaces/SimpleRepository.md)

## Constructors

### Constructor

> **new ActionRepository**(): `ActionRepository`

Defined in: [src/toolkit/action.ts:169](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L169)

Initializes an ActionRepository instance with default values.

#### Returns

`ActionRepository`

### Constructor

> **new ActionRepository**(`name?`, `owner?`): `ActionRepository`

Defined in: [src/toolkit/action.ts:177](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L177)

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

Defined in: [src/toolkit/action.ts:184](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L184)

Initializes an ActionRepository instance from an existing SimpleRepository object.

#### Parameters

##### repo

[`SimpleRepository`](../interfaces/SimpleRepository.md)

The SimpleRepository object containing repository information.

#### Returns

`ActionRepository`

## Properties

### repo?

> `optional` **repo?**: `string`

Defined in: [src/toolkit/action.ts:153](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L153)

The repository name.

#### Implementation of

[`SimpleRepository`](../interfaces/SimpleRepository.md).[`repo`](../interfaces/SimpleRepository.md#repo)

***

### owner?

> `optional` **owner?**: `string`

Defined in: [src/toolkit/action.ts:156](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L156)

The repository owner.

#### Implementation of

[`SimpleRepository`](../interfaces/SimpleRepository.md).[`owner`](../interfaces/SimpleRepository.md#owner)

## Accessors

### fullName

#### Get Signature

> **get** **fullName**(): `string` \| `undefined`

Defined in: [src/toolkit/action.ts:162](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L162)

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

Defined in: [src/toolkit/action.ts:271](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L271)

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

Defined in: [src/toolkit/action.ts:287](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L287)

Updates the repository owner and name based on the provided GitHub Actions context.

#### Parameters

##### context

`Context`

The GitHub Actions context containing repository information.

#### Returns

`this`
