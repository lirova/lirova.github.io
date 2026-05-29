---
title: Manufacturing Execution System
role: Lead engineer & maintainer
domain: Precision camera-module manufacturing
summary: Full-stack shop-floor execution system tracking every unit through cleanroom, alignment, cure, and end-of-line test — replacing a tangle of spreadsheets.
stack: [Next.js, TypeScript, Prisma, PostgreSQL, Redis, BullMQ, Docker]
highlights:
  - ~67-table Postgres schema modeling the full production lifecycle of a high-volume optics line
  - Real-time floor dashboard whose kanban mirrors the physical station layout, not an abstract workflow
  - Reporting and export APIs that generate daily production digests and per-operator activity automatically
  - Role-based access control with code-enforced process gates so steps can't be skipped out of order
year: 2025–2026
order: 1
---

A production-tracking platform for a high-volume precision camera-module line.
It is the system of record for the whole operation: every unit is followed from
cleanroom entry through active-alignment, adhesive dispense, oven cure, and
end-of-line optical test, with full traceability at each station.

## The problem

The line was being run on a patchwork of spreadsheets and tribal knowledge.
There was no single source of truth for where a unit was, who had touched it, or
why a batch had stalled. Quality data lived separately from production data, so
reconciling "what shipped" against "what passed test" was a manual, error-prone
chore.

## What I built

- A relational schema (~67 tables) that models units, batches, stations,
  operators, test results, and shipments — with the kanban board reflecting the
  actual physical floor layout so operators see their station, not a flowchart.
- A background job system for long-running and scheduled work (report
  generation, data sync, reconciliation) on a durable queue.
- Reporting endpoints that produce daily digests, live floor status, and
  per-operator activity, plus production data exports for downstream analysis.
- Process gates enforced in code: certain steps are blocked until their
  prerequisite step is recorded, which closed a recurring class of out-of-order
  defects that training alone never fixed.

## What I learned

Defaults are wrong for production. Database, queue, and runtime settings tuned
for general use needed deliberate hardening for an always-on shop-floor system.
And the most reliable way to enforce a process isn't a wiki page — it's a
constraint the software won't let you violate.
