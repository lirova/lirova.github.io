---
title: Voice Console
role: Builder
domain: Voice web app
summary: I run several AI coding sessions at once and couldn't read every reply. This phone page reads them aloud and takes my answer by voice; it made 1,318 spoken clips in one week.
stack: [HTML/CSS/JS, MediaRecorder, Python, FastAPI, Local text-to-speech]
status: Used daily
highlights:
  - "Problem: with several AI coding sessions running, the replies piled up faster than I could read them."
  - "Built: one phone web page (about 1,400 lines) that plays each reply as speech and records my spoken answer in the browser."
  - "Result: used every day of the week of Sep 21-27, 2026: 1,318 spoken clips, up to 381 in a day."
year: "2026"
order: 2
---

## The problem

I run several AI coding sessions at once. Their replies piled up on screens
faster than I could read them, and I missed the ones waiting on me.

## What I built

- **Front end.** One page (about 1,400 lines of HTML/CSS/JS) built for a phone.
  It lists replies by session, plays each as audio, and records my answer in the
  browser with `getUserMedia` and `MediaRecorder`.
- **Back end.** A small Python server turns text into speech with a model on my
  own server, caches each clip so a replay is instant, and routes my spoken
  answer back to the right session.

## Result

I built it in July 2026. In the week of September 21 to 27, 2026 I used it every
day: it made 1,318 spoken clips, up to 381 in one day. The first version, shown in
the demo clip, was a voice form for a daily log; this page replaced it.
