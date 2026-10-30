[**Toolkit**](README.md)

***

[Toolkit](README.md) / action

# action

GitHub Action related classes, helper functions and types for the toolkit.

Provides types and classes to manage GitHub Action configuration and repository information.

## Classes

### ActionRepository

Defined in: [src/toolkit/action.ts:151](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L151)

Provides methods to parse and normalize repository information from various sources.

#### Implements

- [`SimpleRepository`](#simplerepository)

#### Constructors

##### Constructor

```ts
new ActionRepository(): ActionRepository;
```

Defined in: [src/toolkit/action.ts:169](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L169)

Initializes an ActionRepository instance with default values.

###### Returns

[`ActionRepository`](#actionrepository)

##### Constructor

```ts
new ActionRepository(name?, owner?): ActionRepository;
```

Defined in: [src/toolkit/action.ts:177](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L177)

Initializes an ActionRepository instance with the specified repository name and owner.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name?` | `string` | The repository name or a SimpleRepository object. |
| `owner?` | `string` | The repository owner (optional if name contains a slash). |

###### Returns

[`ActionRepository`](#actionrepository)

##### Constructor

```ts
new ActionRepository(repo): ActionRepository;
```

Defined in: [src/toolkit/action.ts:184](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L184)

Initializes an ActionRepository instance from an existing SimpleRepository object.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `repo` | [`SimpleRepository`](#simplerepository) | The SimpleRepository object containing repository information. |

###### Returns

[`ActionRepository`](#actionrepository)

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="owner"></a> `owner?` | `string` | The repository owner. | [src/toolkit/action.ts:156](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L156) |
| <a id="repo"></a> `repo?` | `string` | The repository name. | [src/toolkit/action.ts:153](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L153) |

#### Accessors

##### fullName

###### Get Signature

```ts
get fullName(): string | undefined;
```

Defined in: [src/toolkit/action.ts:162](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L162)

The full repository name in the format "owner/repo".
Dynamically updates if the name or owner changes.

###### Returns

`string` \| `undefined`

The full repository name in the format "owner/repo".

###### Implementation of

[`SimpleRepository`](#simplerepository).[`fullName`](#fullname-1)

#### Methods

##### fromApiUrl()

```ts
fromApiUrl(apiUrl): this;
```

Defined in: [src/toolkit/action.ts:271](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L271)

Parses the repository owner and name from a GitHub API URL and updates the instance accordingly.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `apiUrl` | `string` |

###### Returns

`this`

###### See

https://api.github.com/repos/owner/repo

##### fromContextRepo()

```ts
fromContextRepo(context): this;
```

Defined in: [src/toolkit/action.ts:287](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L287)

Updates the repository owner and name based on the provided GitHub Actions context.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `context` | `Context` | The GitHub Actions context containing repository information. |

###### Returns

`this`

## Interfaces

### ActionConfig

Defined in: [src/toolkit/action.ts:41](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L41)

Represents the base configuration for a GitHub Actions run.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="actor"></a> `actor` | `string` | The actor (user) who triggered the GitHub Action. | [src/toolkit/action.ts:49](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L49) |
| <a id="context"></a> `context` | `Context` | The GitHub context object. | [src/toolkit/action.ts:46](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L46) |
| <a id="dryrun"></a> `dryRun` | `boolean` | Indicates if the action should run in dry-run mode. | [src/toolkit/action.ts:43](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L43) |
| <a id="repo-1"></a> `repo` | [`SimpleRepository`](#simplerepository) | The repository associated with the GitHub Action. | [src/toolkit/action.ts:52](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L52) |
| <a id="inputs"></a> `inputs?` | \{ \[`key`: `string`\]: `unknown`; `dryRun`: `boolean`; \} | The action inputs provided to the GitHub Action. | [src/toolkit/action.ts:55](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L55) |
| `inputs.dryRun` | `boolean` | Indicates if the action should run in dry-run mode. | [src/toolkit/action.ts:59](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L59) |

***

### ActionRun

Defined in: [src/toolkit/action.ts:24](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L24)

Represents the configuration for a GitHub Action that includes a `run` method.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="safeinputs"></a> `safeInputs` | `ReturnType`\<*typeof* [`getSafeInputs`](#getsafeinputs)\> | The action inputs with sensitive keys removed. | [src/toolkit/action.ts:28](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L28) |

#### Methods

##### run()

```ts
run(): Promise<unknown>;
```

Defined in: [src/toolkit/action.ts:35](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L35)

Executes the main logic of the GitHub Action.

###### Returns

`Promise`\<`unknown`\>

A promise that resolves when the action has completed its run.

***

### SimpleRepository

Defined in: [src/toolkit/action.ts:143](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L143)

Represents basic information about a GitHub repository.

Extends the Partial type to allow optional repository properties.

#### See

 - https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
 - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#mapped-types

#### Extends

- `Partial`\<[`GitHubContext`](#githubcontext)\[`"repo"`\]\>

#### Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="fullname-1"></a> `fullName?` | `string` | The full repository name in the format "owner/repo". | - | [src/toolkit/action.ts:145](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L145) |
| <a id="owner-1"></a> `owner?` | `string` | - | `Partial.owner` | node\_modules/@actions/github/lib/context.d.ts:30 |
| <a id="repo-2"></a> `repo?` | `string` | - | `Partial.repo` | node\_modules/@actions/github/lib/context.d.ts:31 |

## Type Aliases

### ActionInputs

```ts
type ActionInputs = NonNullable<ActionConfig["inputs"]>;
```

Defined in: [src/toolkit/action.ts:66](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L66)

Represents the non-nullable action inputs for the GitHub Action.

***

### GitHubContext

```ts
type GitHubContext = typeof Context;
```

Defined in: [src/toolkit/action.ts:19](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L19)

Represents the GitHub context object provided by the `@actions/github` library.

## Functions

### getSafeInputs()

```ts
function getSafeInputs<K>(inputs?, ...keys): Omit<ActionInputs, K>;
```

Defined in: [src/toolkit/action.ts:84](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/toolkit/action.ts#L84)

Filters out specified keys from the action inputs object.

This is useful for removing sensitive information such as tokens from the inputs before logging or further processing.

#### Type Parameters

| Type Parameter |
| ------ |
| <a id="type-parameter-k"></a> `K` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputs?` | \{ \[`key`: `string`\]: `unknown`; `dryRun`: `boolean`; \} | The action inputs object to filter. |
| `inputs.dryRun` | `boolean` | Indicates if the action should run in dry-run mode. |
| ...`keys?` | `K`[] | The keys to remove from the inputs object. |

#### Returns

`Omit`\<[`ActionInputs`](#actioninputs), `K`\>

A new object with the specified keys removed from the inputs.

#### Example

```ts
const safeInputs = getSafeInputs(inputs, 'ghToken', 'anotherKeyToRemove')
```
