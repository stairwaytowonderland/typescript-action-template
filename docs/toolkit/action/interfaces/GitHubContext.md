[**typescript-action-template**](../../../README.md)

***

[typescript-action-template](../../../README.md) / [toolkit/action](../README.md) / GitHubContext

# Interface: GitHubContext

Represents the GitHub context object provided by the `@actions/github` library.

## Properties

### action

> **action**: `string`

***

### actor

> **actor**: `string`

***

### apiUrl

> **apiUrl**: `string`

***

### eventName

> **eventName**: `string`

***

### graphqlUrl

> **graphqlUrl**: `string`

***

### job

> **job**: `string`

***

### payload

> **payload**: `WebhookPayload`

Webhook payload object that triggered the workflow

***

### ref

> **ref**: `string`

***

### runAttempt

> **runAttempt**: `number`

***

### runId

> **runId**: `number`

***

### runNumber

> **runNumber**: `number`

***

### serverUrl

> **serverUrl**: `string`

***

### sha

> **sha**: `string`

***

### workflow

> **workflow**: `string`

## Accessors

### issue

#### Get Signature

> **get** **issue**(): `object`

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

##### Returns

`object`

###### owner

> **owner**: `string`

###### repo

> **repo**: `string`
