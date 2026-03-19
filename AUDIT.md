# Comprehensive Website Audit — Amr Abu-Talleb Portfolio

**Date:** March 2026  
**Stack:** Next.js 16, React 19, Tailwind CSS 4, Framer Motion, Static Export  
**Rating:** 6/10

---

## Critical Flaws

### 1. Web3Forms API Key Exposed in Client Bundle

The access key `b13517be-...` is hardcoded in **three separate client components**:

- `components/contact-form.tsx` line 9
- `components/main-footer.tsx` line 5
- `app/contact/page.tsx` line 7

Anyone can open DevTools, grab this key, and spam the form endpoint or abuse it. This is the single biggest security issue on the site.

**Fix:** Move form submission to a Next.js Server Action or API route. Store the key in an environment variable (`process.env.WEB3FORMS_KEY`). Since the site uses `output: 'export'`, you'd need to either drop static export for an API route, or use an external serverless function (e.g., Cloudflare Worker).

---

### 2. `output: 'export'` Disables Image Optimization

`next.config.mjs` has `output: 'export'` with `images: { unoptimized: true }`. Every image served is full-size, uncompressed. For a portfolio loaded with high-res project images, this tanks Core Web Vitals (LCP, CLS).

**Fix:** Either drop static export and use Vercel/Node hosting with built-in image optimization, or integrate an image CDN (Cloudinary, imgix) and use `next/image` with a custom loader.

---

### 3. Duplicate SVG IDs Cause Rendering Bugs

`components/ui/infinite-grid.tsx` renders `GridPattern` twice, both using `id="hero-grid-pattern"`. Duplicate IDs in the DOM are invalid HTML and can cause unpredictable SVG masking behavior across browsers.

**Fix:** Pass unique IDs to each instance (e.g., `hero-grid-pattern-1`, `hero-grid-pattern-2`).

---

### 4. Lightbox Has No Escape Key Handler

`components/case-study-layout.tsx` and `components/highlight-layout.tsx` both render image lightboxes that can only be closed by clicking outside. Keyboard users are trapped.

**Fix:** Add `onKeyDown` handler for `Escape`, trap focus inside the lightbox, and restore focus on close.

---

## UX/UI Roasts

### Homepage

- **3 of 4 case study cards have no feature image.** Overpowered, Split, and Agfin all render as dark boxes with a tiny title in 20% opacity text. These are the centerpiece of the portfolio and they look like placeholder cards. For a Creative Director's site, this is the equivalent of showing up to a pitch with "INSERT WORK HERE" on the slides.
- **Stats show "0" until animated.** The counters (57%+, 13+, 25, 15+) start at 0 and animate up on scroll. But if the IntersectionObserver fires late or the user scrolls fast, they see zeros. First impression: "this person has zero experience."
- **Testimonial section has `cursor: none`** but the custom cursor from the rest of the site hides too (via `data-cursor-none`). So on the testimonial section you get the testimonial's own cursor, then as you leave you get the global cursor. The transition is jarring — two different cursor systems fighting.
- **"Click anywhere" hint** in the testimonial carousel is cryptic. First-time visitors won't understand they need to click the entire section to advance. A simple arrow or "Next" button would be more discoverable.
- **Marquee text has no separators in plain HTML.** The rendered HTML shows "Brand IdentityCreative DirectionUI/UX Design" as one continuous string. Screen readers will read this as a single run-on sentence.

### Contact Page

- **Budget field has no currency context.** There's a select dropdown with budget ranges but no currency indicator. "$5K-$10K" or "5K-10K AED"? A consulting client in Dubai and a startup in London have different reference frames.
- **No confirmation of what happens next.** After submitting the form, users see "Message sent" with no indication of response time, no email confirmation, no next steps. Add "I'll respond within 24 hours" or similar.
- **Form has no honeypot or CAPTCHA.** Wide open for bots.

### About Page

- **Wall of text.** The bio is now shorter (good), but there's no visual break between the narrative paragraphs. No pull quotes, no metrics callouts, no visual hierarchy beyond paragraph spacing.

### Projects Page

- **Hover preview only works on large screens** (`lg:block`). Tablet users get nothing. Mobile users get nothing. The feature image is the primary visual hook and 60%+ of your traffic (per your own UAE analysis) won't see it.

### Navigation

- **"Let's Talk" goes to /contact but the footer form is at /#contact.** Two different contact experiences that aren't linked. A user who fills out the footer form doesn't know the /contact page exists with a budget field.

### Global

- **`cursor: none !important` on all elements** breaks the browsing experience for users who rely on the system cursor, including users with motor disabilities who use large/custom cursors. This is an accessibility violation.
- **No 404 page design.** Hitting a bad URL shows the default Next.js 404. For a portfolio site, a custom 404 with a link back to the homepage is table stakes.
- **No dark mode.** The CSS has `.dark` variables defined but they're never used. The site is light-only. This is fine as a design choice, but the dead CSS should be removed.

---

## Codebase Smells

### Duplicate Code (DRY violations)

| What | Where |
|------|-------|
| Form submission logic + API key | `contact-form.tsx`, `main-footer.tsx`, `app/contact/page.tsx` (3 copies) |
| `useMarquee` hook | `marquee-banner.tsx`, `client-ticker.tsx` (identical) |
| Testimonials data array | `app/page.tsx`, `app/work-with-me/page.tsx` (2 copies) |
| Capabilities data array | `app/page.tsx`, `app/about/page.tsx` (2 copies) |
| Case study card data | `app/page.tsx` inline, `lib/projects.ts` exported (partial overlap) |

### TypeScript Issues

- `components/ui/infinite-grid.tsx` lines 17-18: `any` types for `offsetX`/`offsetY`
- `components/fade-in.tsx` line 35: `ref as never` — unsafe type assertion
- `app/page.tsx` line 265: Non-null assertion `!` with `.filter(Boolean)` safety net — pick one pattern
- No strict ESLint config found anywhere

### Unused Dependencies

| Package | Status |
|---------|--------|
| `class-variance-authority` | In `package.json`, never imported |
| `date-fns` | In `package.json`, never imported |
| `tailwindcss-animate` | Overlaps with `tw-animate-css` |

### Dead Code & CSS

- `lib/utils.ts` defines `cn()` — never imported anywhere
- `globals.css` lines 254-298: `.cta-btn`, `.cs-card-*`, `.hl-card-*` — verify these are still used after SSR refactor
- `.dark` theme variables in `:root` — never activated
- `scripts/cleanup.mjs` references old file paths that no longer exist

### Magic Numbers

- `useMarquee(80)` / `useMarquee(50)` — unnamed speed constants
- `duration = 1800` for counter animations
- `threshold: 0.08, rootMargin: "-30px"` in scroll reveal
- `dateMap` in `articles/[slug]/page.tsx` with hardcoded ISO dates

### Performance

- **Framer Motion** adds ~50-80KB gzipped. Used for: cursor, testimonials, infinite grid, project showcase. For a portfolio, CSS animations + IntersectionObserver could cover 80% of this.
- **`useAnimationFrame` in infinite-grid.tsx** runs every frame even when the hero is off-screen.
- **Project showcase** calls `getBoundingClientRect()` on every mouse move without throttling.
- **Each `FadeIn` / `ScrollReveal`** creates its own IntersectionObserver. With dozens of instances, this adds up.
- **All project images in `project-showcase.tsx`** are rendered in a hidden stack regardless of hover state.

---

## New Feature Proposals

### 1. Case Study Thumbnail System (High Impact)

3 of 4 case study cards on the homepage have empty feature images. This is the single biggest conversion killer. Implement an automated OG-style card generator using `@vercel/og` or a Canvas-based solution that creates branded thumbnails from project metadata (title, category, year, key metric). Even a well-styled text-based card would be 10x better than a dark empty box.

### 2. Project Filtering & Quick View on /projects

The projects page is a static list. For someone evaluating a Creative Director, the ability to filter by type (Brand, UX/UI, Campaign, Editorial) and see a quick-view modal with key metrics without leaving the page would significantly improve the evaluation flow. The data already exists in `lib/projects.ts` — just needs UI.

### 3. "Results" Dashboard Section

The site claims business results (12% revenue lift, 70% engagement increase, etc.) but they're buried in paragraphs. Create a dedicated, visually compelling "Results" or "Impact" section with large animated metrics, client context, and direct links to the case studies. Think: a mini annual report for your career. This is what hiring managers and clients scan for.

### 4. Smart Contact Routing

The site has two contact forms (footer + /contact) that go to the same Web3Forms endpoint. Neither asks qualifying questions. Replace with a single, smart contact flow:
- "I'm hiring for a role" → shows relevant fields (company, role, timeline)  
- "I need consulting" → shows budget, project type, timeline
- "Just saying hi" → simple message

Route to different email subjects so you can prioritize. This directly supports the dual-audience positioning (employers + consulting clients) from your acquisition plan.

### 5. Reading Progress + Related Content on Articles

Articles currently have no reading progress indicator, no estimated time visible during reading, and no "related articles" at the end. For a content-marketing strategy (which your acquisition plan depends on), keeping readers engaged and moving to the next piece is critical. Add a progress bar, show related articles at the bottom, and add a "Share on LinkedIn" CTA since LinkedIn is your primary distribution channel.

---

## Summary

| Category | Rating | Notes |
|----------|--------|-------|
| **Architecture** | 7/10 | Clean structure, good separation, but data duplication everywhere |
| **Performance** | 5/10 | Unoptimized images, heavy Framer Motion, no lazy loading strategy |
| **Security** | 3/10 | API key in client bundle is a critical exposure |
| **TypeScript** | 6/10 | Mostly typed but has `any`, `as never`, no ESLint |
| **SEO** | 8/10 | Strong metadata, structured data, sitemap, canonical URLs |
| **Accessibility** | 5/10 | Good basics (skip link, ARIA, focus trap) but `cursor: none` and lightbox gaps |
| **UX/UI** | 6/10 | Clean design but missing images, duplicate flows, no empty states |
| **Content** | 7/10 | Strong copy but some sections are text-heavy without visual breaks |
| **Overall** | **6/10** | Solid foundation with real problems that undermine the professional positioning |

The site has good bones — clean architecture, strong SEO, thoughtful copy. But the empty case study cards, exposed API key, and `cursor: none` accessibility issue are the kind of mistakes that a senior ECD or technical hiring manager would catch in 30 seconds. Fix those three things and the rating jumps to 7.5.
