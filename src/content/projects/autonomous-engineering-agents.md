---
title: Autonomous Engineering Agent Pipeline
role: Designer & builder
domain: AI developer tooling
summary: An issue-to-PR pipeline where AI agents pick up labeled bug reports, implement fixes, open pull requests, run automated review and CI, then merge when green.
stack: [TypeScript, Node, AI Agents, GitHub Actions, Cron]
highlights:
  - Turns a labeled issue into a reviewed, CI-green, merged pull request with no human keystrokes in the common case
  - Multi-agent design — a bug-hunter finds issues, domain-expert agents implement, a reviewer agent gates the merge
  - A review queue surfaces only the PRs that genuinely need a human decision, with a recommended action for each
  - Serial runner with a stuck-watcher that auto-skips jobs exceeding a time budget, so one bad task can't wedge the queue
year: "2026"
order: 3
---

An automation pipeline that treats routine engineering work as something a fleet
of AI agents can own end to end. A bug report comes in labeled; agents triage
it, write the fix, open a pull request, run review and continuous integration,
and merge it when everything is green — escalating to a human only when judgment
is actually required.

## How it works

- **Intake.** Issues are labeled to enter the queue. A serial runner picks them
  up one at a time, with a watcher that skips any job that runs past its time
  budget so the pipeline never deadlocks on a single stuck task.
- **Implementation.** A bug-hunter agent locates root causes; domain-expert
  agents — each primed on a specific part of the codebase — implement the fix
  on a branch and open a PR.
- **Gating.** A reviewer agent reads the diff and renders a verdict before
  merge. CI being green is treated as necessary but not sufficient; the review
  verdict is the real gate.
- **Human-in-the-loop.** Anything ambiguous, risky, or destructive lands in a
  review queue that shows the PR, its source issue, and a recommended action,
  so a person decides in seconds instead of minutes.

## Why it matters

Most "AI writes code" demos stop at a diff. The interesting engineering is
everything around the diff: not merging on a false-green CI, not letting an
agent quietly dodge the spec, bounding cost and runtime, and deciding which
decisions a human must still make. This pipeline is built around those
guardrails first and the code generation second.
