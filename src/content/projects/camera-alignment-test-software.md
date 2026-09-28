---
title: Camera Alignment & Test App (day job)
role: Software engineer
domain: Machine vision · desktop app
summary: Each camera lens had to be aligned and tested before a unit moved on. I built the C++/Qt station app that does both; deployed to the stations, last changed June 2026.
stack: [C++17, Qt, CMake, Computer vision]
status: Used before
highlights:
  - "Problem: every camera module's lens had to be aligned and proven sharp before it moved down the line."
  - "Built: a C++/Qt app that drives motion stages with live video, measures sharpness (MTF), writes calibration to EEPROM and posts results."
  - "Result: deployed to the alignment and test stations; I worked on it from September 2025 to June 2026."
year: 2025–2026
order: 7
---

## The problem

Every camera module's lens has to be aligned, then proven sharp, before the
unit moves down the line.

## What I built

- Moves precision stages to align the lens while streaming live sensor video.
- Runs the optical test, including sharpness (MTF) across the image, and grades
  each unit against that station's limits.
- Handles several sensor types, each with its own exposure and gain, and saves
  calibration values to the module's EEPROM.
- Sends results to the tracking system over webhooks, with a local retry queue
  so a network drop never loses a result.

## Result

Deployed to the alignment and final-test stations. I worked on it from September
2025 to June 2026.
