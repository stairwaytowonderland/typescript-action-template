[**typescript-action-template**](../../README.md)

***

[typescript-action-template](../../README.md) / [#toolkit](../README.md) / GitHubContext

# Interface: GitHubContext

Represents the GitHub context object provided by the `@actions/github` library.

## Properties

### payload

> **payload**: `WebhookPayload`

Webhook payload object that triggered the workflow

***

### eventName

> **eventName**: `string`

***

### sha

> **sha**: `string`

***

### ref

> **ref**: `string`

***

### workflow

> **workflow**: `string`

***

### action

> **action**: `string`

***

### actor

> **actor**: `string`

***

### job

> **job**: `string`

***

### runAttempt

> **runAttempt**: `number`

***

### runNumber

> **runNumber**: `number`

***

### runId

> **runId**: `number`

***

### apiUrl

> **apiUrl**: `string`

***

### serverUrl

> **serverUrl**: `string`

***

### graphqlUrl

> **graphqlUrl**: `string`

## Accessors

### issue

#### Get Signature

> **get** **issue**(): `object`

##### Returns

`object`

###### owner

> **owner**: `string`

###### repo

> **repo**: `string`

###### number

> **number**: `number`

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
