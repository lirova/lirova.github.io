---
title: Camera Alignment & End-of-Line Test Software
role: Software engineer
domain: Machine-vision / optical test
summary: A C++/Qt desktop app that drives active-alignment motion stages and runs machine-vision optical test on camera modules at end of line.
stack: [C++17, Qt, CMake, GMSL2 capture, Computer Vision]
highlights:
  - Drives precision motion stages for active alignment and captures live sensor video for measurement
  - Measures optical sharpness (MTF) and grades pass/fail against per-stage thresholds
  - Manages exposure and gain across multiple sensor variants, with calibration values written to on-board EEPROM
  - Reports results to backend services over webhooks with a retry queue that survives transient outages
year: 2025–2026
order: 2
---

A desktop application used at the alignment and end-of-line test stations of a
camera-module production line. It is the operator-facing tool that physically
aligns each module's optics and then proves the result with a machine-vision
test before the unit can advance.

## What it does

- Controls precision motion stages to perform active alignment, streaming live
  sensor video so the operator and the algorithm can converge on the optimal
  focus and tilt.
- Runs the optical test suite — including modulation transfer function (MTF)
  measurement across image-field regions — and grades each unit against
  stage-specific thresholds.
- Handles the messy reality of multiple sensor variants: per-sensor exposure and
  gain control, pixel-format differences, and calibration values persisted back
  to each module's EEPROM.
- Pushes test results to backend services through webhooks, with a local retry
  queue so a momentary network or server hiccup never loses a result.

## Engineering notes

The hard parts were rarely the happy path. A sensor driver that silently
de-duplicated identical register writes once caused a run of underexposed
captures; the fix was both a code change and a deeper respect for verifying that
a setting actually took effect rather than assuming the write succeeded.
Deployments go out in lockstep across stations so two machines never disagree
about how a unit was tested.
