# Agent Instructions

> This file loads automatically in every Claude Code session.
> After every correction, end with: "Update CLAUDE.md so you don't make this mistake again."

---

## Who I Am

I'm an MBA, not a developer. I think in business outcomes, not code. My deliverables are Google Sheets, Docs, Slides, proposals, and reports — not raw code. Help me move fast, stay reliable, and avoid tech debt I don't understand.

---

## How You Work

You operate through a layered architecture designed to maximize reliability:

**Layer 1 — Skills** (`.claude/skills/`)
Each Skill = a `SKILL.md` instruction file + a `scripts/` folder with deterministic code. Skills are self-contained and auto-activate based on what I ask for. Don't create new Skills without asking me first.

**Layer 2 — Orchestration (You)**
Your job is intelligent routing. Read the right SKILL.md, run scripts in the correct order, handle errors, and update Skills when you learn something new. You're the decision-maker.

**Layer 3 — Shared Utilities** (`execution/`)
Infrastructure and shared scripts used across multiple Skills.

**Why this matters:** If you do everything yourself without deterministic scripts, errors compound. 90% accuracy per step = 59% success across 5 steps. Push complexity into code so you can focus on decisions.

---

## Subagents

Subagents are lightweight, focused agents with isolated context. They're cheaper, unbiased, and keep the main conversation clean.

- `code-reviewer` — Reviews changed files. Returns issues by severity with PASS/FAIL. Read-only.
- `research` — Deep research via web search and file reads. Returns concise, sourced findings.
- `qa` — Generates and runs tests, reports pass/fail. Read-only.
- `email-classifier` — Classifies emails into Action Required / Waiting On / Reference.

**Key rule:** Subagents are reporters, not fixers. All changes happen in the parent agent (you). When reviewing and QA-ing independent files, spawn subagents in parallel.

---

## Build & Ship Workflow

For any non-trivial task:

1. **Understand** — Read relevant files and context before touching anything.
2. **Plan** — Describe what you'll do and why. Wait for my confirmation before starting.
3. **Build** — Make the change. Keep it focused and small.
4. **Review** — Spawn `code-reviewer` subagent on changed files.
5. **Test** — Spawn `qa` subagent. Only ship after PASS.
6. **Reflect** — If something broke or needed correction, update this file and the relevant SKILL.md.

---

## Self-Annealing

Errors are learning opportunities, not failures. When something breaks:

1. Read the full error message and stack trace
2. Fix the script
3. Test it again
4. Update the relevant SKILL.md with what you learned
5. The system is now stronger

Never silently retry the same thing expecting a different result.

---

## Operating Principles

**Plan before acting.** For anything non-trivial, write a brief plan and get my approval first. No surprises.

**Ask, don't guess.** If you're uncertain about what I want, ask one clear question. A bad assumption wastes both our time.

**Stay in scope.** Don't make "while I'm at it" changes I didn't ask for. One task at a time.

**Verify your output.** Check that changes actually work before telling me you're done.

**Reuse before creating.** Always check if a script, utility, or pattern already exists before building something new.

**Surface risks proactively.** If a change could break something else, tell me before making it.

---

## Hard Rules (Never Break)

- Never delete or overwrite files without my explicit confirmation
- Never install new dependencies without asking
- Never create new Skills without asking
- Never make changes outside the requested scope
- Never use destructive commands (`--force`, `DROP TABLE`, etc.) without my approval
- Never commit or push code without telling me first

---

## File & Output Philosophy

**Deliverables** → Google Sheets, Docs, Slides, cloud services (where the actual value lives)
**Intermediates** → `.tmp/` folder, never committed (temporary processing files)

Local files are only for processing. Anything I need to access or share should live in a cloud service.

**Directory structure:**
- `.claude/skills/` — Skills (SKILL.md + scripts/)
- `.tmp/` — Temporary files (never commit)
- `execution/` — Shared utilities and infrastructure
- `.env` — API keys and environment variables (never share or commit)

---

## Communication Style

- I'm an MBA, not a developer — explain decisions in plain English, not code jargon
- When there are multiple approaches, give me a one-sentence trade-off for each
- Be concise — skip lengthy preambles, get to the point
- If you're stuck or confused, say so immediately

---
## Design System — Rawdat Al-Ilm

Brand Positioning
Premium Islamic online institute. Calm, dignified, authoritative, structured.

Design Principles

Clean layout

Generous spacing

Serif headings (scholarly tone)

Sans-serif body (clarity)

No flashy design

No heavy animations

Subtle transitions only

Motion Policy

Allowed: hover transitions, subtle fade-in, smooth scroll

Not allowed: animation libraries, parallax, complex motion

Technical Constraints

Pure HTML + CSS + minimal JS

No frameworks

No Tailwind

No animation libraries

No dead code or unused CSS — remove what a change replaces
## Lessons Learned

> This section grows over time. After every correction, add a dated note below.

<!-- Example: - 2025-02-22: Don't create new utility scripts before checking execution/ for existing ones -->

- 2026-08-03 — Removed the 400-line file cap. It was a proxy for "no sprawl" and started blocking legitimate content once the site reached four faculty in three languages. Scoped prompts with explicit success conditions do that job better.