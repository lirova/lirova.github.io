---
title: daki — issue-to-pull-request agent pipeline
role: Designer & builder
domain: AI developer tooling
summary: Small bug fixes waited on me. daki turned a labeled GitHub issue into a reviewed, merged pull request; 6 agent-written PRs merged in June 2026. Now shelved.
stack: [TypeScript, Node, GitHub Actions, AI agents]
status: Shelved
highlights:
  - "Problem: small, well-described bug fixes sat in the queue waiting for me."
  - "Built: a pipeline where an agent writes the fix and opens a PR, a second agent reviews it, and it merges when tests pass."
  - "Result: 6 agent-written pull requests merged between June 7 and June 28, 2026. Shelved after that."
year: "2026"
order: 6
---

## The problem

Small, well-described bug fixes sat in the queue waiting for me to get to them.

## What I built

- **Intake.** A label put an issue in a queue. A runner took one job at a time
  and skipped any job that ran past its time limit.
- **Fix.** An agent found the cause, made the change on a branch and opened a
  pull request.
- **Review.** A second agent read the diff and gave a verdict. Passing tests
  were required but not enough on their own.
- **People.** Anything risky or unclear went to a review list for a person.

## Result

6 agent-written pull requests merged between June 7 and June 28, 2026, and the
public demo repo still shows real merged runs. I shelved it after that: a
general-purpose coding agent now does this job better for me.
