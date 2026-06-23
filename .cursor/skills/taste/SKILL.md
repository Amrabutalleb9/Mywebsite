---
name: taste
description: Apply design taste and visual judgment to frontend work — intentional choices over AI defaults, anti-pattern avoidance, and the AI slop test. Use when the user asks about taste, visual judgment, whether a design feels generic, how to make UI feel designed rather than generated, or wants opinionated design direction before building.
---

Develop and apply design taste: knowing *when* a choice fits the brief, not just *what* the vocabulary is.

## Before you judge or build

1. Run `node .cursor/skills/impeccable/scripts/context.mjs` if `/impeccable` is installed. Read `PRODUCT.md` and `DESIGN.md` when present.
2. If no design context exists, run `/teach-impeccable` or `/impeccable init` first.
3. Read at least one representative file in the project (tokens, theme, or a key page) so taste calls are grounded in what already exists.

## What taste is (and isn't)

- **Vocabulary** is knowing terms: OKLCH, modular scale, ease-out-quart, tinted neutrals.
- **Taste** is choosing the right term for *this* project, audience, and moment — and knowing when a "rule" is a reflex.

Good taste means:
- Every choice traces back to purpose, audience, or brand — not "landing pages usually look like this."
- Restraint and boldness are both valid; the wrong move is defaulting to the median.
- You can articulate *why* something works or fails in one sentence.

## The AI slop test

If someone could look at the interface and say "AI made that" without hesitation, it failed.

Ask:
- Could you guess the industry from the palette alone? (cream SaaS, purple gradient, navy fintech)
- Is every section using the same scaffold? (tiny uppercase eyebrow, numbered 01/02/03, identical card grid)
- Are fonts, layout, and motion the current training-data default?

If yes to any → rework with a concrete scene sentence: *who uses this, where, under what light, in what mood?* until the answer isn't obvious from the category.

## Reflexes to refuse

Match-and-refuse. If you're about to use any of these, rewrite with different structure:

- Side-stripe borders (`border-left`/`border-right` > 1px as accent)
- Gradient text (`background-clip: text`)
- Glassmorphism as default decoration
- Hero-metric template (big number + small label + stat row)
- Identical icon + heading + text card grids
- Tiny uppercase tracked eyebrow on every section
- Numbered section markers (01 / 02 / 03) when order isn't meaningful
- Cream/sand/beige body backgrounds as "safe warmth"
- Bounce or elastic easing
- Inter, Roboto, or purple-on-white as unexamined defaults

Register-specific failures: read `reference/brand.md` or `reference/product.md` under `.cursor/skills/impeccable/` when working in those contexts.

## How to exercise taste

1. **Commit to a direction** — Pick tone (minimal, editorial, utilitarian, maximalist, etc.) and execute with precision. Timid middle ground reads as generic.
2. **One memorable thing** — What will someone remember? Typography, color strategy, motion choreography, or spatial composition — not all four at half volume.
3. **Contrast over similarity** — Don't pair two nearly-identical sans-serifs. Pair on an axis (serif + sans, geometric + humanist) or use one family with weight contrast.
4. **Earn decoration** — Color, motion, and delight must clarify state or express brand — not fill silence.
5. **Push back with reason** — Brand guidelines, accessibility, user research, and performance budgets override defaults. Ignoring opinion without a reason produces worse output than breaking a rule deliberately.

## When to hand off

| Need | Command |
|------|---------|
| Full design workflow | `/impeccable` |
| Motion specifically | `/impeccable animate` or `/design-motion-principles` |
| UX review with scoring | `/impeccable critique` |
| Anti-pattern scan | `/impeccable audit` or `node .cursor/skills/impeccable/scripts/detect.mjs` |
| Final refinement | `/impeccable polish` |

Remember: taste is confidence — knowing what to keep and courage to remove the rest. Perfection is not when there is nothing more to add, but when there is nothing left to take away.
