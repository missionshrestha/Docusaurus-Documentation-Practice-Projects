---
id: managing-tasks
title: Managing Tasks
sidebar_label: Manage Tasks
description: Learn how to create, update, complete, and delete tasks in TaskForge projects.
---

Tasks represent the individual units of work in TaskForge. In this guide you'll:

- Create new tasks
- Update task details
- Mark tasks as complete
- Delete tasks you no longer need

:::note
All examples assume you're inside a TaskForge project directory created with
`taskforge init`. See [Creating Projects](./creating-projects.mdx) if you don't have
a project yet.
:::

## 1. Create tasks

To create a new task:

```bash
taskforge task add "Set up CI pipeline"