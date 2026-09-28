---
title: Production Tracking System (day job)
role: Lead engineer
domain: Camera-module manufacturing
summary: The line needed one record of where each unit is and how it tested. I lead the web app that holds it; it runs in production at my job, with 1,400+ commits since February 2026.
stack: [Next.js, React, TypeScript, Prisma, PostgreSQL, Redis, BullMQ, Tailwind, Docker]
status: Used daily
highlights:
  - "Problem: the line needed one record of every unit, from clean room to final optical test."
  - "Built: a Next.js and React app with a live floor board, a 100+ table PostgreSQL schema, and background jobs on Redis and BullMQ."
  - "Result: in production at my job, 1,400+ commits since February 2026, guarded by 500+ Vitest files and 60+ Playwright specs."
year: "2026"
order: 5
---

## The problem

A camera-module production line needs one record of every unit: where it is,
who touched it, and how it tested, from clean-room entry through alignment,
glue, oven cure and final optical test.

## What I built

- **Front end.** A Next.js and React app styled with Tailwind, including a live
  floor board that shows where each unit is.
- **Data.** A PostgreSQL schema of 100+ tables, managed with Prisma.
- **Jobs.** Reports and data sync run as background jobs on Redis and BullMQ.
- **Tests.** Over 500 Vitest test files and over 60 Playwright end-to-end specs.

## Result

It runs in production at my job, with a canary copy for testing changes first.
The code has 1,400+ commits since February 2026, about 200 of them in September.
