---
title: Browser Strategy Game
role: Solo developer
domain: Game front end
summary: A strategy game that runs in any browser with no install, built in plain JavaScript. Result so far is steady output, not players; 980+ commits since July 2026.
stack: [JavaScript (ES modules), Canvas, HTML/CSS, Web Audio, Node test runner]
status: Used daily
highlights:
  - "Problem: I wanted a game with deep squad and base management that runs in a browser tab, with no install and no engine."
  - "Built: about 27,000 lines across roughly 100 plain ES modules, no framework or build step, with canvas combat and a small save-sync server."
  - "Result: 980+ commits since July 20, 2026, and about 40 rule test files. It has no outside players yet."
year: "2026"
order: 1
---

## The problem

I wanted a strategy game with real squad and base management that opens in a
browser tab, with no install and no game engine.

## What I built

- **No framework.** The client is plain JavaScript ES modules loaded straight by
  the browser. Each system (economy, combat, campaign, story) is its own module.
- **Canvas combat.** Battles are drawn on a canvas in a side view, driven by a
  `requestAnimationFrame` loop, with Web Audio for sound.
- **Saves.** Progress lives in the browser's local storage. A small sync server
  on my home network keeps a copy, so a save follows me to another device.
- **Tests.** The game rules run under Node's built-in test runner, so I can
  change the numbers without clicking through the game to check them.

## Result

980+ commits since July 20, 2026, most of them small daily changes, and about 40
test files for the rules. It's a personal build with no outside players yet, and
the art is still in progress, so this page shows no screenshots.
