# amrabutalleb.com

Next.js portfolio site, deployed on Cloudflare Pages from `main`.

Before changing any UI, read and follow the design guides in `.cursor/rules/`:

- `.cursor/rules/design-system.mdc`: type scale, fonts, leading, tracking, labels, colours, container widths, section spacing, section endings and homepage order.
- `.cursor/rules/typesetting.mdc`: non-breaking-space rules for every user-facing string (bind short words, prevent widows, bind numbers to units).

Other rules:

- Images under `/images/*` are cached for a year (`public/_headers`). When you replace an image, give it a new filename instead of overwriting the old one.
- Case studies can be hidden with `hidden: true` in `lib/projects.ts` (and testimonials in `lib/shared-data.ts`); hidden items drop out of listings, the sitemap and robots.
- Respect `prefers-reduced-motion` in every animation.
