---
id: config-file
title: Config File
sidebar_label: Config File
description: Reference for the taskforge.config.json configuration file.
---

TaskForge reads configuration from a `taskforge.config.json` (or `.yaml`) file
in your project root. This file controls defaults for the CLI and API.

:::note
If no config file is found, TaskForge falls back to sensible defaults and prompts
you for required information when needed.
:::

## Basic structure

A minimal `taskforge.config.json`:

```json
{
  "projectId": "acme-web-app",
  "apiBaseUrl": "https://api.taskforge.dev",
  "defaultAssignee": "alice"
}