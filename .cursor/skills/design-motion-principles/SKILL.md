---
name: design-motion-principles
description: Apply motion design principles — duration, easing, transform/opacity rules, stagger, reduced motion, and perceived performance. Use when the user asks about motion principles, animation timing, easing curves, micro-interaction guidelines, prefers-reduced-motion, or how to animate UI without jank or AI-default reflexes.
---

Apply motion design principles before adding or reviewing animation. Motion should clarify state and hierarchy — not decorate by reflex.

## Before applying motion

1. Run `node .cursor/skills/impeccable/scripts/context.mjs` if available. Respect brand motion energy from `PRODUCT.md` / `DESIGN.md`.
2. For implementation work, prefer `/impeccable animate` after reading these principles.
3. For deeper reference, see [motion-design.md](../frontend-design/reference/motion-design.md).

## Core principles

### 1. Motion is intentional, not an afterthought

Plan motion with the layout and interaction model. Ask:
- What state change needs acknowledgment?
- What spatial relationship needs clarification?
- What is the **one** hero moment on this surface?

One well-orchestrated entrance beats identical fade-and-rise on every scrolled section.

### 2. Duration: the 100 / 300 / 500 rule

| Duration | Use case | Examples |
|----------|----------|----------|
| **100–150ms** | Instant feedback | Button press, toggle, color change |
| **200–300ms** | State changes | Menu open, tooltip, hover |
| **300–500ms** | Layout changes | Accordion, modal, drawer |
| **500–800ms** | Entrance animations | Page load, hero reveal |

**Exit animations are ~75% of enter duration.**

Avoid >500ms for UI feedback. Animation fatigue is real.

### 3. Easing: exponential deceleration

Don't use generic `ease`. Real objects decelerate smoothly — they don't bounce.

| Curve | Use for | CSS |
|-------|---------|-----|
| **ease-out** | Elements entering | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **ease-in** | Elements leaving | `cubic-bezier(0.7, 0, 0.84, 0)` |
| **ease-in-out** | Toggle there → back | `cubic-bezier(0.65, 0, 0.35, 1)` |

Recommended defaults:

```css
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
```

**Never bounce or elastic** — dated, draws attention to the animation instead of content.

### 4. Animate transform and opacity only

Layout properties (`width`, `height`, `padding`, `top`, `left`) cause reflow. Prefer:
- `transform: translate / scale / rotate`
- `opacity`

For height: `grid-template-rows: 0fr → 1fr` instead of animating `height` directly.

Premium materials (blur, backdrop-filter, clip-path, mask, shadow) are valid when they materially improve the effect and stay at 60fps.

### 5. Stagger with a budget

Use CSS custom properties:

```css
animation-delay: calc(var(--i, 0) * 50ms);
```

Cap total stagger — 10 items × 50ms = 500ms. Reduce per-item delay or cap count for long lists.

Staggering one list is legitimate. The tell is the **uniform reflex** (identical entrance on every section). Each reveal should fit what it reveals.

### 6. Reduced motion is mandatory

~35% of adults over 40 have vestibular sensitivity. Every animation needs:

```css
@media (prefers-reduced-motion: reduce) {
  .card {
    animation: fade-in 200ms ease-out; /* crossfade, no spatial movement */
  }
}
```

Preserve functional motion: progress bars, loading indicators (slowed), focus rings — without spatial movement.

### 7. Reveals must not gate content

Don't hide content until a class-triggered transition fires. Transitions pause on hidden tabs and headless renderers → blank sections. Default state must be visible; motion enhances it.

### 8. Perceived performance

- **<80ms** feels instant (micro-interactions target)
- **Optimistic UI** for low-stakes actions (update immediately, sync later)
- **Skeleton / progressive reveal** beats staring at spinners
- **Ease-in toward completion** compresses perceived wait time for task endings

Don't use animation to hide slow loading.

## Implementation stack

- **CSS-first** for HTML and simple React
- **Motion** (Framer Motion) for React component choreography
- **GSAP / anime.js** for complex timelines
- **Lenis** for smooth scroll when appropriate
- **Intersection Observer** for scroll triggers — unobserve after first fire

Don't set `will-change` preemptively. Only on `:hover` or `.animating`.

Define motion tokens: `--duration-fast`, `--duration-normal`, `--ease-out-quart`.

## Anti-patterns checklist

- [ ] Bounce / elastic easing
- [ ] Animating width, height, or padding
- [ ] Identical scroll-reveal on every section
- [ ] No `prefers-reduced-motion` alternative
- [ ] Content invisible until animation runs
- [ ] Decorative motion with no state purpose
- [ ] >500ms feedback on buttons/toggles

## Hand off

When principles are clear and you need implementation: `/impeccable animate [target]`.

When motion is part of a broader build: `/impeccable craft` or `/impeccable`.
