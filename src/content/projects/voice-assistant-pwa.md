---
title: Voice-First Assistant PWA
role: Builder
domain: Self-hosted AI / voice
summary: A hands-free voice assistant that runs on self-hosted infrastructure, using a local LLM and neural text-to-speech to walk through a daily workflow during a commute.
stack: [FastAPI, WebSockets, Local LLM, Neural TTS, PWA]
highlights:
  - Fully hands-free — voice in, voice out — designed to be usable while driving
  - Runs against a self-hosted local LLM, so no conversation data leaves owned infrastructure
  - Streams over WebSockets for low-latency back-and-forth instead of request/response round trips
  - Layered text-to-speech with automatic fallback so the assistant always has a voice
year: "2026"
order: 4
---

A progressive web app that turns a tedious daily form-filling chore into a
spoken conversation. It runs entirely on self-hosted hardware and is built to be
used hands-free — the original use case was completing a structured daily log
during a commute, without touching the phone.

## What I built

- A FastAPI backend speaking to clients over WebSockets, so the dialogue feels
  conversational rather than a series of page loads.
- Integration with a self-hosted local LLM for the reasoning, keeping all
  conversation content on owned infrastructure instead of a third-party API.
- A neural text-to-speech voice with a fallback chain, so a busy or unavailable
  speech server degrades gracefully instead of going silent.
- A PWA frontend that installs to the home screen and works as a first-class
  app on mobile.

## The idea

Plenty of tasks are simple but annoying enough that they get skipped. Wrapping
one in a voice interface that meets you where you already are — in the car, with
your hands busy — changes whether it actually gets done. The engineering
challenge was latency and reliability: a voice assistant that stutters or stalls
is worse than no assistant at all.
