# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio/business website for ClosedBridge LLC (embedded systems & controls engineering). Deployed on **GitHub Pages**. No build step, no frameworks — vanilla HTML/CSS/JavaScript.

## Local Development

```bash
npx serve .
```

The `fetch()`-based component loader requires HTTP serving; `file://` URLs won't work. There are no build, lint, or test commands.

## Architecture

- **Component system**: Shared header, nav, and footer live in `components/`. Pages use `<div data-component="header"></div>` placeholders, injected at runtime by `components/load-components.js`. The loader also auto-sets the `active` class on nav links based on the current URL.
- **Physics simulation**: The homepage (`index.html`) has an inverted pendulum cart-pole simulation using **Matter.js** (loaded from `node_modules`). It has two modes: manual (arrow keys) and autonomous (energy-based swing-up + PID balance controller with hysteresis switching).
- **Resume submodule**: `Resume/` is a git submodule (LaTeX source → HTML/PDF). The resume page embeds the HTML version in an iframe.

## Key Files

- `style.css` — all site styling (color palette: beige/brown earth tones)
- `components/` — reusable header.html, nav.html, footer.html, load-components.js
- `index.html` — homepage with inline cart-pole simulation script
- `.nojekyll` — disables Jekyll processing on GitHub Pages

## Deployment

GitHub Pages from `main` branch. No CI/CD pipeline — push to `main` to deploy.
