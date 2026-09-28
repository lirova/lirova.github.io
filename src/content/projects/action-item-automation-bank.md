---
title: workbank — one task board
role: Builder
domain: Web app · workflow tool
summary: Requests reached me through email, calendar, GitHub and Slack. workbank pulled them into one board; I closed 328 tasks through it from June to August 2026.
stack: [TypeScript, Node, SQLite, Gmail/Calendar, GitHub API, Slack API]
status: Used before
highlights:
  - "Problem: requests were spread across email, calendar, GitHub and Slack, and some got lost."
  - "Built: readers for each source, an AI pass that writes the real ask, encrypted storage and a server-rendered board."
  - "Result: 2,771 messages read and 1,207 asks pulled out since June 6, 2026; I marked 328 done through the board by August 7."
year: "2026"
order: 3
---

## The problem

Requests reached me in four places: email, calendar, GitHub and Slack. Some got
lost between them.

## What I built

- **Readers.** Each source has its own reader. They run on a timer on my home
  server and add new items to a local SQLite database.
- **AI pass.** A model reads each new message and writes a one-line ask: who
  wants what, and by when.
- **Storage.** Subject, body, sender and summary are encrypted at rest with
  AES-256-GCM.
- **Board.** A TypeScript server renders the board as plain HTML. Sort and
  filter live in the URL, so any view can be bookmarked.

## Result

Since June 6, 2026 it has read 2,771 messages and pulled out 1,207 asks. I
marked 328 of them done through the board, the last on August 7. It still syncs
every day, but I've stopped working from the board, so it's labeled "used
before".
