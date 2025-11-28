---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
description: Common TaskForge issues and how to fix them.
---

This page lists common issues you may encounter when using TaskForge and how to resolve them.

## CLI: `taskforge` command not found

Symptoms:

- Running `taskforge` in your terminal prints `command not found`.

Probable causes:

- The CLI is not installed globally.
- Your global npm bin directory is not on your `PATH`.

**Fix:**

1. Reinstall the CLI:

   ```bash
   npm install -g taskforge