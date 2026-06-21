---
title: Self-Hosted Fleet Control Plane
role: Designer & builder
domain: Infrastructure / AI platform tooling
summary: A single control plane for a heterogeneous fleet of machines — one OpenAI-compatible endpoint that capability-tests every backend, fails over automatically, and never dead-ends because it ends in a local no-key fallback tier, with a live dashboard of every box, dependency, and GPU.
stack: [Python, FastAPI, Tailscale, asyncio, launchd, Server-Sent Events]
highlights:
  - One endpoint for the whole fleet — apps ask for a capability tier and the plane routes to the least-loaded healthy backend, fails over between them, and autoscales burst capacity under load
  - Health is a real capability test (a one-token generation), not a reachability ping — so a backend that answers but can't actually serve is treated as down
  - Never dead-ends — when every backend is gone, requests fall through to a local fallback that runs on whatever machine made the call, so a total outage degrades instead of failing
  - Live dashboard — per-machine status, a dependency-graph topology parsed from a single source-of-truth map, GPU/memory per box across Apple, AMD and NVIDIA hardware, and a streaming failover event log
  - Works across every OS in the fleet with zero per-box install by riding the existing private mesh network, reaching each machine over the mesh the same way whether it runs macOS, Linux or Windows
year: "2026"
order: 2.5
---

A control plane that turns a closet full of mismatched machines — laptops, mini
servers, GPU desktops — into one dependable resource. Applications talk to a
single OpenAI-compatible endpoint; behind it, the plane decides which machine
should answer, proves that machine can actually do the work, and quietly fails
over when something drops. A web dashboard shows the whole fleet at a glance.

## The problem

Self-hosted compute is brittle in ways cloud users never see. A box goes to
sleep. A model crashes but the server still answers its status check. A laptop
leaves the house. The "always-on" server reboots. Each of these silently breaks
something three apps over, and you find out when a demo dies. The goal was a
layer that makes the fleet *boringly reliable* — and legible enough that you can
see exactly what's healthy without sshing into five machines.

## How it works

- **One endpoint, capability tiers.** Apps request a tier (fast, quality, heavy,
  vision) instead of naming a machine. The plane routes to the least-loaded
  healthy backend for that tier, load-balances, and pins models to boxes so the
  hardware never thrashes swapping models in and out.
- **Capability-tested health.** Every backend is checked with an actual
  one-token generation, not a reachability ping. This catches the nastiest
  failure mode — a server that is "up" but cannot serve — which a ping misses
  entirely.
- **A failover chain that never dead-ends.** Backends are tried in order; if all
  of them are gone, the request falls through to a local fallback tier that runs
  on whatever machine made the call. A total outage degrades to "slower" instead
  of "down."
- **One source of truth for topology.** The dependency graph — what each service
  needs and what depends on it — lives in a single human-readable map that a
  live edge-checker keeps honest. The dashboard renders that same graph, so the
  picture can't drift from reality.
- **Cross-platform with zero install.** The plane reaches every machine over the
  existing private mesh network, so it monitors and controls a Windows GPU box
  exactly the way it does a Mac — no agent to install on each node.

## Why it matters

Most "LLM gateway" projects stop at routing. The hard, interesting part is
everything that keeps the fleet trustworthy: proving a backend can really serve
before you send it traffic, degrading instead of failing when the network is
having a bad day, and making the whole system observable enough that a problem
announces itself instead of hiding until the next demo. It is designed so the
same code runs a personal fleet today and, with a different config, someone
else's fleet tomorrow — membership, credentials, and process control are all
pluggable seams rather than hardcoded assumptions.
