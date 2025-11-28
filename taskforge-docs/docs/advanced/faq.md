---
id: faq
title: FAQ
sidebar_label: FAQ
description: Frequently asked questions about TaskForge.
---

Below are answers to common questions about TaskForge.

:::info
This FAQ covers product and usage questions. For technical issues, see the
[Troubleshooting](./troubleshooting.md) guide.
:::

## Is TaskForge free?

TaskForge offers a **Free** tier suitable for small teams or personal projects,
as well as **Pro** and **Enterprise** plans for larger teams.

Pricing details are available on the [Pricing](/pricing) page.

## Do I need to use the CLI?

No. You can manage most workflows from the web dashboard. However, the CLI is
recommended for developers who want to automate setup or integrate with CI/CD.

## Is there an API?

Yes. TaskForge provides a REST API for managing projects and tasks. See the
[API Overview](../reference/api-overview.md) for details.

## Does TaskForge support self-hosting?

Not in this version. TaskForge is currently offered as a hosted SaaS only.

## Where is my data stored?

TaskForge stores data in secure, managed cloud databases. Region selection and
data residency options may vary by plan.

## How do I report a bug or request a feature?

Use the **Contact** page or your account's support channel to open a ticket.

## What happens if I hit the API rate limit?

You will receive HTTP `429 Too Many Requests`. See the
[API Overview](../reference/api-overview.md#rate-limiting) for guidance on handling rate limits.

## Can I rename a project?

You can rename display names safely, but changing the underlying `projectId` in
the config file is not recommended.

See [Config File](../reference/config-file.md) for details.

## Can multiple teams share the same TaskForge account?

Yes. You can create separate projects per team or product line. Access controls
and permissions vary by plan.

## How do I get started?

Follow the [Quickstart](../quickstart.md) to install the CLI and create your
first project, then explore the [Creating Projects](../guides/creating-projects.mdx)
and [Managing Tasks](../guides/managing-tasks.md) guides.