---
title: Inbox-to-Action Automation Bank
role: Builder
domain: Workflow automation
summary: A pipeline that ingests email and calendar, extracts genuine action items, and feeds them into an automation queue — aimed at being usable by non-engineers.
stack: [TypeScript, Node, Gmail API, Calendar API, OAuth]
highlights:
  - Ingests email and calendar events and distills them into a clean list of actionable tasks
  - A gate filters noise so only real, well-formed action items reach the work queue
  - Robust OAuth handling, including token rotation to survive expiry without manual intervention
  - Designed for a non-engineer end user — the north star is someone non-technical running it unaided
year: "2026"
order: 5
---

A pipeline that watches the usual sources of "things I need to do" — email and
calendar — and turns them into a structured, deduplicated queue of action items
that can feed downstream automation.

## What it does

- Connects to mail and calendar over their APIs, with OAuth handled carefully:
  scopes, console configuration, and automatic token rotation so the
  integration doesn't silently die when a token expires.
- Extracts candidate tasks from messages and events, then passes them through a
  gate that only admits genuine, well-formed action items — keeping the queue
  signal-heavy instead of a dumping ground.
- Hands clean items to an automation layer that can act on them.

## The north star

The goal isn't a tool for engineers. It's a tool a non-technical person can run
on their own to offload the administrative tax of a busy inbox. That framing
forces hard decisions about defaults, error handling, and how much the system is
allowed to do without asking — because the person on the other end can't read a
stack trace.
