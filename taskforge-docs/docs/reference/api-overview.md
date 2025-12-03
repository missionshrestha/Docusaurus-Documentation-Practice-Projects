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

## Rate limiting

TaskForge applies rate limiting to protect the stability of the API and ensure fair usage across all clients.

- Each API key is allowed a limited number of requests per time window.
- If you exceed the limit, the API responds with `429 Too Many Requests`.
- You should implement retries with exponential backoff and/or jitter.
- Rate limits may differ between environments (sandbox vs production) and plans.

> Note: These values are placeholder documentation for now. Update this section later with your real TaskForge rate limit policy (per-minute/hour/day quotas, burst limits, etc.).
