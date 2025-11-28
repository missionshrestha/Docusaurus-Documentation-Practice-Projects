---
id: api-overview
title: API Overview
sidebar_label: API Overview
description: High-level overview of the TaskForge REST API.
---

The TaskForge API lets you manage projects and tasks programmatically over HTTPS.

- **Base URL:** `https://api.taskforge.dev`
- **Format:** JSON over HTTPS
- **Auth:** API key via `Authorization` header

:::info
The API is currently in beta. Endpoints and response formats may change before the
stable `v1` release.
:::

## Authentication

All requests must include your API key:

```http
Authorization: Bearer YOUR_API_KEY