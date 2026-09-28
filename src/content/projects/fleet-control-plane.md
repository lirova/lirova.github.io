---
title: Home Server Fleet Dashboard
role: Designer & builder
domain: Infrastructure · dashboard
summary: My apps had to know which home machine had which AI model, and broke when one went to sleep. This gives them one endpoint; it has handled 21,858 AI requests since Aug 4, 2026.
stack: [Python, FastAPI, asyncio, Server-Sent Events, Tailscale, launchd]
status: Runs daily
highlights:
  - "Problem: each app was wired to one machine, so a sleeping laptop or a crashed model broke it."
  - "Built: one OpenAI-style endpoint that checks every backend every 15 seconds and routes to a healthy one, plus a live dashboard."
  - "Result: 21,858 AI requests handled since Aug 4, 2026, running around the clock on my home server."
year: "2026"
order: 4
---

## The problem

I run a few machines at home: laptops, a mini server and some GPU desktops. Each
app was wired to one of them, so when a laptop slept or a model crashed, that app
broke and I found out later.

## What I built

- **One endpoint.** Apps call one OpenAI-style API and ask for a tier (fast,
  quality, vision). The service picks a healthy machine for it, and can start a
  spare machine when load builds and stop it when idle.
- **Health checks.** Every 15 seconds it asks each backend for its model list,
  and takes one that doesn't answer out of rotation.
- **Last resort.** If every home machine is down, the final tier calls a
  command-line AI tool, so work slows down instead of stopping.
- **Streaming.** Responses stream back with Server-Sent Events.
- **Dashboard.** One page shows each machine's status, GPU and memory across
  Apple, AMD and NVIDIA hardware, and a graph of which service needs which. The
  graph is read from one map file, so the picture can't drift from the notes.

## Result

Since August 4, 2026 it has handled 21,858 AI requests from my apps. It runs
around the clock on my home server, and I open its dashboard from my other
devices.
