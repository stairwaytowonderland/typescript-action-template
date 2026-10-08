/**
 * Custom Type definitions for the GitHub Action.
 *
 * This file contains TypeScript interfaces and types used throughout the action.
 */

/*
 * Use _common.js
 *
 * Imports types and utilities from _common.js to maintain consistency across the project.
 */

import type { RepoAction, SimpleRepository, GitHubContext, OctokitClient, SearchItem } from './_common.js'
import { ActionRepository, getOctokit } from './_common.js'
export type { RepoAction, SimpleRepository, GitHubContext, OctokitClient, SearchItem }
export type ActionInputs = NonNullable<RepoAction['inputs']>
export { ActionRepository, getOctokit }

/*
 * Webhook payload related types
 */

// import { WebhookPayload } from '@actions/github/lib/interfaces.js'

// export type PayloadIssue = NonNullable<WebhookPayload['issue']>
// export type PayloadPullRequest = NonNullable<WebhookPayload['pull_request']>

/*
 * Additional custom types
 */

// export type Choices = 'yes' | 'no' | 'maybe'
