[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / GitHubContext

# Interface: GitHubContext

Defined in: node\_modules/@actions/github/lib/context.d.ts:2

Represents the GitHub context object provided by the `@actions/github` library.

## Properties

### action

> **action**: `string`

Defined in: node\_modules/@actions/github/lib/context.d.ts:11

***

### actor

> **actor**: `string`

Defined in: node\_modules/@actions/github/lib/context.d.ts:12

***

### apiUrl

> **apiUrl**: `string`

Defined in: node\_modules/@actions/github/lib/context.d.ts:17

***

### eventName

> **eventName**: `string`

Defined in: node\_modules/@actions/github/lib/context.d.ts:7

***

### graphqlUrl

> **graphqlUrl**: `string`

Defined in: node\_modules/@actions/github/lib/context.d.ts:19

***

### job

> **job**: `string`

Defined in: node\_modules/@actions/github/lib/context.d.ts:13

***

### payload

> **payload**: `WebhookPayload`

Defined in: node\_modules/@actions/github/lib/context.d.ts:6

Webhook payload object that triggered the workflow

***

### ref

> **ref**: `string`

Defined in: node\_modules/@actions/github/lib/context.d.ts:9

***

### runAttempt

> **runAttempt**: `number`

Defined in: node\_modules/@actions/github/lib/context.d.ts:14

***

### runId

> **runId**: `number`

Defined in: node\_modules/@actions/github/lib/context.d.ts:16

***

### runNumber

> **runNumber**: `number`

Defined in: node\_modules/@actions/github/lib/context.d.ts:15

***

### serverUrl

> **serverUrl**: `string`

Defined in: node\_modules/@actions/github/lib/context.d.ts:18

***

### sha

> **sha**: `string`

Defined in: node\_modules/@actions/github/lib/context.d.ts:8

***

### workflow

> **workflow**: `string`

Defined in: node\_modules/@actions/github/lib/context.d.ts:10

## Accessors

### issue

#### Get Signature

> **get** **issue**(): `object`

Defined in: node\_modules/@actions/github/lib/context.d.ts:24

##### Returns

`object`

###### number

> **number**: `number`

###### owner

> **owner**: `string`

###### repo

> **repo**: `string`

***

### repo

#### Get Signature

> **get** **repo**(): `object`

Defined in: node\_modules/@actions/github/lib/context.d.ts:29

##### Returns

`object`

###### owner

> **owner**: `string`

###### repo

> **repo**: `string`
