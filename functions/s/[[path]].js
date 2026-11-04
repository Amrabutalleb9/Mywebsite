// Storefront email links: /s/<slug> and the optional open pixel /s/<slug>/o.gif.
//
// /s/<slug>         serves the static page (app/s/[slug]) and logs a "click" when it is a 200.
// /s/<slug>/o.gif   returns a 1x1 GIF and logs an "open". Opens are unreliable: Apple Mail
//                   privacy protection fetches every image, and many clients block images.
// Unknown slugs fall through to the normal 404 and nothing is logged.
// Runs after functions/_middleware.js, so the staging password gate still applies off the live hosts.

import { PIXEL_GIF, SLUGS, recordEvent } from "../_shared/storefront-tracking.js"

const NOINDEX = "noindex, nofollow"

export const onRequest = async (context) => {
  const { request } = context
  const url = new URL(request.url)
  const parts = url.pathname.split("/").slice(2) // "/s/a/b" -> ["a", "b"]
  let slug = ""
  try {
    slug = decodeURIComponent(parts[0] || "")
  } catch {
    return context.next()
  }
  if (!SLUGS.has(slug)) return context.next()

  if (parts.length === 2 && parts[1] === "o.gif") {
    recordEvent(context, "open", slug)
    return new Response(request.method === "HEAD" ? null : PIXEL_GIF, {
      headers: {
        "Content-Type": "image/gif",
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0, private",
        "X-Robots-Tag": NOINDEX,
      },
    })
  }

  const res = await context.next()
  // Only the page itself counts: not /s/<slug>/ (redirects to /s/<slug>), not the RSC payloads.
  if (parts.length !== 1 || res.status !== 200) return res

  recordEvent(context, "click", slug)
  const out = new Response(res.body, res)
  out.headers.set("X-Robots-Tag", NOINDEX)
  // Each visit reaches this function, so a second visit from the same person is counted too.
  out.headers.set("Cache-Control", "private, no-store")
  return out
}
