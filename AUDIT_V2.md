# Comprehensive Website Audit V2 — amrabutalleb.com

**Date:** 2026-03-19
**Auditor Roles:** Senior Staff Engineer, Product Manager, Brand Strategist, Creative Director, SEO Expert
**Scope:** Code, architecture, performance, security, UX/UI, copy, SEO, brand strategy

---

## EXECUTIVE SUMMARY

The website has strong technical foundations (proper SSR/client boundaries, structured data, type safety) and the writing quality is genuinely above-average for a CD portfolio. However, three systemic problems undermine the entire investment:

1. **Identity crisis**: The site oscillates between "hire me for a role" and "hire me for a project" — this creates cognitive dissonance for both target audiences and appears on every page via the footer.
2. **Missing case study imagery**: 3 of 4 homepage case study cards have empty feature images. For a Creative Director portfolio, blank rectangles where work should be is a credibility emergency.
3. **Performance: 60fps React re-renders**: The project showcase runs a `requestAnimationFrame` loop that calls `setState` 60 times per second, even when off-screen.

Fix these three and the site becomes genuinely competitive. Leave them and everything else is cosmetic.

---

## TABLE OF CONTENTS

1. [Critical Flaws](#1-critical-flaws)
2. [Performance Issues](#2-performance-issues)
3. [SEO Problems](#3-seo-problems)
4. [Copy & Messaging Weaknesses](#4-copy--messaging-weaknesses)
5. [Brand Strategy Issues](#5-brand-strategy-issues)
6. [UX/UI Roasts](#6-uxui-roasts)
7. [Accessibility Failures](#7-accessibility-failures)
8. [Codebase Smells](#8-codebase-smells)
9. [Feature Proposals](#9-feature-proposals)
10. [Priority Action Plan](#10-priority-action-plan)

---

## 1. CRITICAL FLAWS

### 1.1 Live site returning 522 (Origin Server Timeout)
**Severity: CRITICAL**

The production site at `www.amrabutalleb.com` returns a Cloudflare 522 error. The origin server is not responding. Every visitor — hiring manager, client, recruiter — sees an error page. This must be resolved immediately.

### 1.2 3 of 4 homepage case study cards have no feature images
**Severity: CRITICAL**

`app/page.tsx` lines 22-27: `caseStudyCards` for Overpowered, Split, and Agfin all have `featureImage: ""`. Only Dipa has an image. The homepage — the primary sales page — shows blank rectangles where the strongest work should be displayed. For a Creative Director's portfolio, this is the equivalent of a chef's restaurant having no photos of food.

### 1.3 Geographic identity contradiction
**Severity: CRITICAL**

The site makes contradictory claims about location:
- **JSON-LD schema** (`layout.tsx` line 124): `addressLocality: "Dubai", addressCountry: "AE"`
- **About page**: "Currently Creative Director at The Line Real Estate in **Cairo**"
- **Footer** (every page): "**Cairo, Egypt** · Working globally"
- **Contact page**: "Available for senior CD roles... in **the UAE**"
- **Page title**: "Creative Director · **Dubai**"

Google's Knowledge Panel will surface whichever it crawls first. A hiring manager in Dubai reading "Currently in Cairo" questions availability. A client sees the contradiction and questions attention to detail. This destroys trust.

### 1.4 `project-showcase.tsx`: RAF loop re-renders React 60x/sec
**Severity: CRITICAL (Performance)**

```
components/ui/project-showcase.tsx lines 52-68
```

A `requestAnimationFrame` loop runs continuously, calling `setSmoothPosition()` on every frame. This triggers a full React re-render 60 times per second — even when the user is scrolled elsewhere, even when no project is hovered. On the Projects page with 7+ items, this is devastating to battery and performance.

**Fix:** Use a ref for smooth position and write directly to the DOM via `style.transform`. Add IntersectionObserver to pause when off-screen.

### 1.5 Cloudflare overrides your robots.txt
**Severity: HIGH**

The live `robots.txt` is Cloudflare-managed content that blocks `GPTBot`, `ClaudeBot`, `Google-Extended`, and others. Your custom `app/robots.ts` (which allows all crawlers) is being completely overridden. You may not have intended to block Google-Extended, which handles AI-assisted search features. Verify Cloudflare's "AI Bot" settings.

---

## 2. PERFORMANCE ISSUES

### 2.1 `useMarquee` has no visibility gating
**Severity: HIGH**

`hooks/use-marquee.ts`: The RAF loop runs unconditionally on every frame. Both `MarqueeBanner` and `ClientTicker` use this hook, meaning two always-running animation loops burn CPU when the user is reading content elsewhere. The `InfiniteGrid` component already has visibility gating via IntersectionObserver — apply the same pattern here.

### 2.2 `CustomCursor` forces framer-motion into critical path
**Severity: MEDIUM**

`CustomCursor` is statically imported in `app/layout.tsx` and rendered on every page. It imports `motion`, `useMotionValue`, `useSpring`, and `AnimatePresence` from framer-motion (~30KB+ gzipped). This is on the critical rendering path of every single page load.

**Fix:** Dynamic import with `next/dynamic` and `ssr: false`, matching the pattern already used for `InfiniteGrid`.

### 2.3 No image optimization
**Severity: MEDIUM**

With `output: 'export'` and `images: { unoptimized: true }`, Next.js Image provides zero optimization — no WebP conversion, no responsive srcset, no resizing. Portfolio images are served at full resolution to every device including mobile.

**Fix:** Pre-optimize with sharp at build time, or serve through Cloudflare's image optimization or a CDN like Cloudinary.

### 2.4 `useEffect` dependency issue in custom cursor
**Severity: LOW**

`components/custom-cursor.tsx` line 59: `visible` is in the dependency array but `setVisible(true)` is called inside the handler. The first mouse move tears down and re-attaches all three event listeners. Use a ref or functional updater instead.

### 2.5 `CleanTestimonial` imported inconsistently
**Severity: LOW**

Dynamically imported via `next/dynamic` in `testimonials-with-stats.tsx` but statically imported in `work-with-me/page.tsx`. The work-with-me page gets framer-motion in its main bundle.

---

## 3. SEO PROBLEMS

### 3.1 Page titles are wasted on every page except homepage
**Severity: HIGH**

| Page | Current Title | Recommendation |
|------|---------------|----------------|
| Homepage | `Amr Abu-Talleb \| Creative Director · Dubai` | Good |
| About | `About · Amr Abu-Talleb` | → `About Amr Abu-Talleb \| Creative Director & Brand Strategist` |
| Work With Me | `Work With Me · Amr Abu-Talleb` | → `Hire a Creative Director \| Brand Strategy & Direction Services` |
| Contact | `Contact · Amr Abu-Talleb` | → `Get in Touch \| Creative Direction & Brand Consulting` |
| Projects | `Projects · Amr Abu-Talleb` | → `Portfolio \| Brand Identity, UI/UX & Creative Direction` |
| Articles | `Articles · Amr Abu-Talleb` | → `Articles on Brand Strategy & Creative Direction` |

The template `%s · Amr Abu-Talleb` means each page's `title` field must carry all keyword weight. Currently they're single generic words.

### 3.2 Article JSON-LD `dateMap` is incomplete
**Severity: HIGH**

`app/articles/[slug]/page.tsx` lines 55-63: The `dateMap` is missing entries for `"Jul 2024"` and `"May 2024"`. Two articles will output raw display strings like `"May 2024"` instead of ISO 8601 dates in their structured data, which Google's validator will reject.

### 3.3 No internal links within article content
**Severity: HIGH**

Every article is a dead end. No links to relevant case studies, no links to `/work-with-me`, no links between articles. This wastes link equity and conversion opportunities from engaged readers.

### 3.4 Missing pages for keyword capture
**Severity: MEDIUM**

These pages should exist but don't:
- `/services/creative-direction` — captures "creative direction services dubai"
- `/services/brand-identity` — captures "brand identity designer UAE"
- `/creative-director-dubai` — captures the primary local keyword
- `/faq` — captures featured snippets for "how much does a creative director cost"

### 3.5 Footer `<h2>` breaks heading hierarchy on every page
**Severity: MEDIUM**

`components/main-footer.tsx` line 100: `<h2>Let's Talk!</h2>` in the footer creates a stray heading on every page. Screen readers and crawlers see an unexpected H2 after page content ends.

**Fix:** Change to `<p>` with the same visual styles.

### 3.6 Article slug/title mismatch
**Severity: LOW**

Slug `directing-a-brand-across-four-markets` but title says "eight markets." The slug likely predates a title update. Don't change the slug (would break links), but note the inconsistency.

### 3.7 Sitemap `lastModified` is always `new Date()`
**Severity: LOW**

Every entry shows the same "last modified" date on every build. Google notices all pages "updating" simultaneously, which dilutes the signal.

---

## 4. COPY & MESSAGING WEAKNESSES

### 4.1 "Available for creative direction engagements and consulting"
**Severity: HIGH** | **File:** `hero-section.tsx` line 35

This is the weakest line in the hero. Passive, no urgency, no benefit. Reads like a LinkedIn status update. Replace with something active: *"Currently taking on select creative direction engagements"* or *"Partnering with brands that want strategy behind every pixel."*

### 4.2 Dual-audience messaging is unbalanced
**Severity: HIGH**

The employment message ("open to senior roles in the UAE") appears in **three places**: footer (every page), contact page intro, and about page. A freelance client visiting 3+ pages concludes this is really a job application with freelance as a side offering.

**Fix:** Reduce to one mention (about page). Let the portfolio quality speak to hiring managers implicitly.

### 4.3 Homepage about section is a full bio copy-paste
**Severity: MEDIUM** | **File:** `app/page.tsx`

The homepage "About" section copies 2 full paragraphs from the About page verbatim. This is a missed conversion opportunity. It should be 3-4 sentences max with a CTA to `/work-with-me` or `/about`.

### 4.4 "Dude he is the greatest of all time" testimonial
**Severity: MEDIUM** | **File:** `lib/shared-data.ts` line 20

This testimonial from Mazen undermines premium positioning. It reads like a friend's comment, not a professional endorsement. Remove or replace with a results-focused quote.

### 4.5 "Thinking Out Loud" blog section title
**Severity: MEDIUM** | **File:** `app/page.tsx`

Communicates nothing about the value of the content. Replace with "Insights on Brand & Strategy" or "Perspectives" for both reader clarity and SEO value.

### 4.6 Punctuation error on Work With Me page
**Severity: LOW** | **File:** `app/work-with-me/page.tsx` line 79

`".. let's talk"` — double period instead of proper ellipsis (`…`) or em dash (`—`).

### 4.7 Tools list undermines premium positioning
**Severity: MEDIUM** | **File:** `app/about/page.tsx` line 91

Listing Wix, Squarespace, and WordPress alongside Figma and Adobe signals $500 freelance projects, not $20K engagements. A Creative Director doesn't need to prove they can use Wix. Trim to: Figma, Adobe Creative Suite, Webflow/Framer, Cursor AI.

### 4.8 No results-focused testimonials
**Severity: MEDIUM** | **File:** `lib/shared-data.ts`

Not a single testimonial mentions a measurable business result. Robert's comes closest but never quantifies. One testimonial saying "Amr's work drove a 12% increase in our revenue" would outweigh all 12 current testimonials combined.

### 4.9 Hero services bar lists "Web Design"
**Severity: LOW** | **File:** `hero-section.tsx` line 11

For someone positioning as Creative Director, "Web Design" reads junior. Consider "Digital Experience Design" or drop it.

---

## 5. BRAND STRATEGY ISSUES

### 5.1 Pricing undercuts the salary target
**Severity: HIGH**

| Tier | Current Price | Problem |
|------|-------------|---------|
| Fractional CD | $4K-$8K/mo | Below the 40K AED (~$11K) target salary. Signals mid-level. |
| Brand Sprint | $8K-$20K | Range too wide. $8K and $20K are different categories of work. |
| UX Audit | $1,500-$3,500 | Attracts budget clients who can never afford higher tiers. |

**Fix:** Fractional CD → $6K-$12K/mo. Audit → $3K-$5K. Sprint → $10K-$20K or split into two tiers.

### 5.2 No mid-page conversion CTA on homepage
**Severity: HIGH**

After case studies and testimonials (where the visitor is most engaged), there's zero CTA linking to `/work-with-me`. The only freelance CTAs are in the hero (before proof) and footer (employment-focused).

### 5.3 No urgency or scarcity signals
**Severity: MEDIUM**

Work With Me page has no mention of limited availability, booking timeline, or capacity constraints. Adding "Currently booking for Q2 2026" or "Taking on 2 new engagements this quarter" would increase conversion.

### 5.4 Case study pages don't link to /work-with-me
**Severity: MEDIUM**

After reading a compelling case study, there's no CTA: "Want results like these? Let's talk." Every case study is a dead end that only links to the next case study.

### 5.5 Only 5 articles — content appears abandoned
**Severity: MEDIUM**

Dates range from May 2024 to January 2025. Nothing in the past 14+ months. This signals content abandonment. A hiring manager checking the blog sees zero recent activity.

---

## 6. UX/UI ROASTS

### 6.1 Homepage case study numbering at 20% opacity
**Severity: LOW**

The "01", "02", "03" decorative numbers are massive with 20% opacity. They add visual noise without information. The same applies to the Work With Me pricing step numbers.

### 6.2 Stats section "57%+ Client Engagement Lift" is unattributed
**Severity: MEDIUM**

Cherry-picked peak number with no context. A savvy hiring manager or client sees through it. Either attribute it ("57% engagement lift — Alfy campaign") or use a defensible aggregate.

### 6.3 Testimonial carousel has no keyboard navigation
**Severity: HIGH (Accessibility)**

Testimonials advance via click only. No keyboard handler. A keyboard user literally cannot advance through testimonials.

### 6.4 Gold accent color overused
**Severity: LOW**

`#c9a96e` appears in labels, links, stats, CTAs, service labels, project numbers, and navigation. When everything is gold, nothing is gold. Reserve it for primary CTAs and key accent moments only.

### 6.5 Button styles are inconsistent
**Severity: LOW**

At least 4 different button patterns: rounded-full with border, rounded-full with solid fill, accent-colored border, ghost link with arrow. No clear design system for interactive states.

### 6.6 Contact page form submit button renders `&nbsp;`
**Severity: FIXED (was showing literal HTML entity)**

*Note: This was already fixed earlier in this session.*

### 6.7 About page H1 "I'm Amr Abu-Talleb." wastes SEO + real estate
**Severity: MEDIUM**

The visitor already knows the name from the nav bar. The H1 should be a positioning statement: "Creative Director who asks 'what's the business goal?'" — the strongest line on the page, currently buried in the intro.

---

## 7. ACCESSIBILITY FAILURES

### 7.1 `#888888` muted foreground fails WCAG AA
**Severity: HIGH**

`--muted-foreground: #888888` on `--background: #ffffff` gives ~3.5:1 contrast ratio. WCAG AA requires 4.5:1 for normal text. This affects virtually all body text and descriptions across the entire site.

**Fix:** Darken to at least `#767676` (4.5:1) or preferably `#6b6b6b` (5:1).

### 7.2 Accent gold `#c9a96e` on white fails WCAG AA
**Severity: HIGH**

~2.8:1 contrast ratio. Used for labels, tags, and interactive text. Fails both AA and AAA.

**Fix:** For text usage, darken to at least `#8a6d3b` or only use accent on dark backgrounds.

### 7.3 Marquee content repeated 4x is hostile to screen readers
**Severity: MEDIUM**

`marquee-banner.tsx`: Content is duplicated 4 times for visual effect. Screen readers read "Brand Identity Creative Direction UI/UX Design" four times consecutively.

**Fix:** Add `aria-hidden="true"` on the duplicated sets.

### 7.4 Custom cursor hides native cursor globally
**Severity: MEDIUM**

`.cursor-active * { cursor: none !important; }` — Users with custom cursor size/color accessibility settings lose their accommodation when JS loads. The `!important` prevents any override.

**Fix:** Keep native cursor visible alongside the custom one, or respect `prefers-reduced-motion`.

---

## 8. CODEBASE SMELLS

### 8.1 Dead code: `components/contact-form.tsx` + `lib/constants.ts`
**Severity: MEDIUM**

`contact-form.tsx` (150 lines) is never imported anywhere. `lib/constants.ts` is only imported by the dead `contact-form.tsx`. Both files are complete orphans.

### 8.2 Lightbox code duplicated across two components
**Severity: MEDIUM**

`case-study-layout.tsx` and `highlight-layout.tsx` contain identical 27-line lightbox overlay blocks. Extract a shared `<Lightbox>` component.

### 8.3 Testimonial type defined three times
**Severity: MEDIUM**

`Testimonial` interface exists in `lib/shared-data.ts`, `clean-testimonial.tsx` (as `TestimonialItem`), and `testimonials-with-stats.tsx`. Three definitions for the same concept with slightly different shapes (`location` optional vs required, `avatar` field).

### 8.4 Homepage data duplicates `lib/projects.ts`
**Severity: MEDIUM**

`app/page.tsx` defines `caseStudyCards` and `highlightCards` with the same projects that exist in `lib/projects.ts` but with different fields. Updating a project requires changes in two places.

### 8.5 Dead CSS keyframes
**Severity: LOW**

`@keyframes float` and `@keyframes float-circle` in `globals.css` are never referenced by any class.

### 8.6 Two different fade-in animation systems
**Severity: LOW**

`ScrollReveal` (CSS class-based, used on homepage) and `FadeIn` (inline style-based, used on inner pages) do the same thing with different implementations. Pick one and consolidate.

### 8.7 `!important` on all border-radius utilities
**Severity: LOW**

`globals.css` overrides `.rounded-xl`, `.rounded-2xl`, `.rounded-3xl`, `.rounded-lg`, `.rounded-sm` with hardcoded values + `!important`. This globally hijacks Tailwind utilities and prevents any component from using standard Tailwind radii.

---

## 9. FEATURE PROPOSALS

### 9.1 Case Study Results Dashboard
**Impact: HIGH** | **Effort: MEDIUM**

Add a visual "results" section to each case study with animated counters, before/after comparisons, and timeline visualization. This transforms dry metrics into compelling visual proof. Example: Agfin's "12% revenue increase with zero ad spend" becomes a bar chart comparison.

### 9.2 "Work With Me" Engagement Calculator
**Impact: HIGH** | **Effort: LOW**

An interactive calculator on the Work With Me page: select engagement type → answer 3-4 questions about scope → get a ballpark estimate. This qualifies leads before they contact you and demonstrates the consultative approach you sell.

### 9.3 Video Introduction
**Impact: HIGH** | **Effort: LOW**

A 60-second video on the homepage or about page: "Here's how I think about brand strategy." This differentiates from 99% of CD portfolios (which are all static), builds personal connection, and dramatically increases time-on-page.

### 9.4 Client Results Feed
**Impact: MEDIUM** | **Effort: LOW**

A dedicated `/results` page that aggregates all measurable outcomes across projects: revenue lifts, engagement increases, timelines, team sizes. This creates a single URL you can share with prospects that proves ROI without needing to tour multiple case studies.

### 9.5 Smart Testimonial Matching
**Impact: MEDIUM** | **Effort: MEDIUM**

Show different testimonials based on the visitor's journey. If they came from a case study about branding, show the branding testimonials. If from an article about UX, show the UX testimonials. Use `sessionStorage` to track the path and filter.

---

## 10. PRIORITY ACTION PLAN

### This Week (Critical)
1. **Fix the 522 origin server error** — the site is literally down
2. **Add feature images to Overpowered, Split, and Agfin cards** (user noted they'll populate later)
3. **Fix the `project-showcase.tsx` RAF loop** — use refs + DOM writes, add IntersectionObserver
4. **Resolve the Cairo/Dubai geographic contradiction** — pick one clear story across all pages
5. **Fix the article `dateMap`** — add "Jul 2024" and "May 2024" entries

### This Month (High Priority)
6. **Fix color contrast**: `--muted-foreground` → `#767676`, accent text → darker variant
7. **Rewrite all page `<title>` tags** with keywords
8. **Add mid-page conversion CTAs** on homepage linking to /work-with-me
9. **Reduce employment messaging** to one mention (about page only)
10. **Add IntersectionObserver to `useMarquee`** to pause when off-screen
11. **Dynamic-import `CustomCursor`** to remove framer-motion from critical path
12. **Delete dead code**: `contact-form.tsx`, `lib/constants.ts`, float keyframes
13. **Add keyboard navigation to testimonial carousel**
14. **Add `aria-hidden="true"` to duplicated marquee content**
15. **Fix the double-period** on work-with-me page

### Next Quarter (Medium Priority)
16. Raise pricing floor (Audit → $3K+, Fractional CD → $6K+)
17. Write 3-5 new articles (including UAE market + creative direction leadership)
18. Add internal links within article content
19. Create location-targeted landing page (`/creative-director-dubai`)
20. Add CTA to case study pages linking to /work-with-me
21. Condense homepage about section to 3 sentences + CTA
22. Extract shared Lightbox component
23. Consolidate Testimonial type definitions
24. Trim tools list (remove Wix, Squarespace, WordPress)
25. Remove "Dude he is the greatest" testimonial

### Ongoing (Low Priority)
26. Create individual service pages for SEO
27. Add FAQ page for featured snippets
28. Pre-optimize images with sharp/CDN
29. Consolidate fade-in animation systems
30. Fix sitemap `lastModified` to use real dates
31. Add WebSite + ProfessionalService JSON-LD schemas

---

*Total findings: 9 Critical/High, 18 Medium, 12 Low. The site's writing quality and technical foundation are strong — the problems are concentrated in positioning consistency, missing visual content, and performance. Fixing the top 5 items alone would dramatically improve conversion and credibility.*
