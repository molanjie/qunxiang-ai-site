# 群像 AI 官网介绍与下载页实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a static Chinese product introduction page and Windows download page for 群像 AI / 大合影专业版.

**Architecture:** Add an isolated `marketing/site` static site that reuses existing marketing assets via relative paths. A shared stylesheet provides the dark AI-workbench visual system, while a small script handles mobile navigation, scroll reveal, and download-card interactions.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, existing JPG/PNG assets and Windows build output.

## Global Constraints

- User-facing copy is Chinese and must describe only capabilities documented in the repository.
- Do not change desktop application source code, commercial API, or build scripts.
- Download links must point to the existing `dist/QunXiangAI/QunXiangAI.exe` artifact when served from the repository.
- Clearly state Windows/offline/local processing and avoid claiming unverified automatic payment or cloud features.

### Task 1: Shared visual shell

**Files:** `marketing/site/styles.css`, `marketing/site/script.js`

- [ ] Add dark navy/orange design tokens, responsive layout primitives, cards, buttons, tables, and accessible focus styles.
- [ ] Add mobile navigation toggle and IntersectionObserver reveal behavior with reduced-motion support.

### Task 2: Product introduction page

**File:** `marketing/site/index.html`

- [ ] Add navigation, hero copy, download CTA, real before/after visual, capability cards, workflow, scenarios, privacy/local-processing note, and final CTA.
- [ ] Link all CTAs to `download.html` or page anchors.

### Task 3: Download page

**File:** `marketing/site/download.html`

- [ ] Add Windows download card, current build details, system requirements, installation steps, SHA-256 verification explanation, and personal/studio perpetual license cards.
- [ ] Use the existing EXE path and include a fallback note if a packaged artifact is not present on the deployed host.

### Task 4: Verification

- [ ] Verify HTML files contain required Chinese headings and working relative links.
- [ ] Start a local static server and request both pages, confirming HTTP 200.
- [ ] Inspect git diff and keep unrelated desktop application files untouched.
