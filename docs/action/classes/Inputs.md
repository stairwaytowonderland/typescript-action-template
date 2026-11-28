[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [action](../README.md) / Inputs

# Class: Inputs

Defined in: [src/action.ts:22](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L22)

Represents the sanitized action inputs.

Converts the input labels from kebab-case to camelCase and returns an object containing the corresponding input values.

## Implements

- [`ActionInputs`](../../toolkit/type-aliases/ActionInputs.md)

## Indexable

```ts
[key: string]: unknown
```

The action input key-value pairs.

## Constructors

### Constructor

```ts
new Inputs(inputs?): Inputs;
```

Defined in: [src/action.ts:44](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L44)

Constructs an instance of the Inputs class with sanitized action inputs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputs?` | \{ \[`key`: `string`\]: `unknown`; `dryRun`: `boolean`; \} | The raw action inputs to be sanitized and stored. |
| `inputs.dryRun` | `boolean` | Indicates if the action should run in dry-run mode. |

#### Returns

`Inputs`

## Properties

### dryRun

```ts
dryRun: boolean;
```

Defined in: [src/action.ts:35](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L35)

Indicates if the action should run in dry-run mode.

#### Implementation of

`ActionInputs.dryRun`

***

### milliseconds

```ts
milliseconds: string;
```

Defined in: [src/action.ts:37](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L37)

The number of milliseconds to wait as a string input.

## Methods

### getInputs()

```ts
static getInputs(): Inputs;
```

Defined in: [src/action.ts:28](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L28)

Retrieves the sanitized action inputs as an instance of the Inputs class.

#### Returns

`Inputs`

An instance of the Inputs class containing the sanitized action inputs.

***

### getSafeInputs()

```ts
getSafeInputs(): ReturnType<typeof getSafeInputs>;
```

Defined in: [src/action.ts:51](https://github.com/stairwaytowonderland/typescript-action-template/blob/main/src/action.ts#L51)

#### Returns

`ReturnType`\<*typeof* [`getSafeInputs`](../../toolkit/functions/getSafeInputs.md)\>
