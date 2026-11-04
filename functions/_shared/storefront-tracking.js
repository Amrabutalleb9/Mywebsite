// Shared helpers for Storefront email tracking (/s/<slug> pages, /s/<slug>/o.gif pixel,
// /api/s-report). Not a route: it exports no onRequest handler.
//
// Storage: a Workers KV namespace bound as CLICKS (production only). Each event is one key
// whose metadata holds the record, so the report only needs list() calls. When the binding is
// missing (preview, staging, or before setup) events are written to the console log only and
// the pages still work. No IP address or raw user agent is stored.

import data from "../../lib/storefront-previews.json"

export const PREVIEWS = data.previews
export const SLUGS = new Set(PREVIEWS.map((p) => p.slug))

// Link scanners, previewers and scripts. Matched against the user agent.
const BOT_UA =
  /bot\b|bot\/|crawl|spider|slurp|scanner|preview|headless|phantom|lighthouse|python|curl\/|wget|httpclient|go-http|java\/|okhttp|axios|node-fetch|undici|libwww|barracuda|mimecast|proofpoint|forcepoint|symantec|messagelabs|trend ?micro|sophos|fireeye|trellix|ironport|zscaler|fortinet|paloalto|safelinks|ms-office|microsoft office|word\/|excel\/|powerpoint\/|facebookexternalhit|whatsapp|telegram|skypeuripreview|bingpreview|google-safety|virustotal/i

// Images fetched through a mail provider's proxy. For the open pixel this is the closest thing
// to a real open (Gmail fetches it when the message is shown), so it is not counted as a bot.
const MAIL_PROXY_UA = /googleimageproxy|yahoomailproxy|ymailproxy/i

// Networks that host mail security scanners and cloud scripts. A "click" from one of these
// networks is almost never a person. CDN egress (iCloud Private Relay uses Akamai, Cloudflare
// and Fastly) is left out on purpose so Safari users are not flagged.
const SCANNER_NETWORK =
  /amazon|google cloud|google llc|microsoft|azure|digitalocean|ovh|hetzner|linode|oracle|alibaba|tencent|choopa|vultr|leaseweb|m247|proofpoint|mimecast|barracuda|cisco|zscaler|forcepoint|trend micro|sophos|fortinet|palo alto|messagelabs|broadcom/i

/** True for requests that should not be logged at all: HEAD and browser prefetch. */
export function skipLogging(request) {
  if (request.method !== "GET") return true
  const h = request.headers
  const purpose = `${h.get("Sec-Purpose") || ""} ${h.get("Purpose") || ""} ${h.get("X-Purpose") || ""} ${h.get("X-Moz") || ""}`
  return /prefetch|prerender|preview/i.test(purpose)
}

/** Classifies a request without keeping the raw user agent. */
export function classify(request, kind) {
  const ua = request.headers.get("User-Agent") || ""
  const cf = request.cf || {}
  let uaClass = "other"
  let botReason = null

  if (!ua) botReason = "no user agent"
  else if (MAIL_PROXY_UA.test(ua)) uaClass = "mail-proxy"
  else if (BOT_UA.test(ua)) botReason = "user agent"
  else if (/ipad|tablet|kindle|silk/i.test(ua) || (/android/i.test(ua) && !/mobile/i.test(ua))) uaClass = "tablet"
  else if (/mobi|iphone|ipod|android/i.test(ua)) uaClass = "mobile"
  else if (/windows|macintosh|mac os x|x11|linux|cros/i.test(ua)) uaClass = "desktop"

  if (botReason) uaClass = "bot"

  // Clicks only: the open pixel is fetched by proxies by design, so these checks would flag every open.
  if (kind === "click" && !botReason) {
    if (cf.asOrganization && SCANNER_NETWORK.test(String(cf.asOrganization))) botReason = "scanner network"
    else if (!request.headers.get("Accept-Language")) botReason = "no accept-language"
  }

  return { ua_class: uaClass, is_bot: Boolean(botReason), bot_reason: botReason }
}

/** Logs one event (kind "click" or "open"). Never throws, never blocks the response. */
export function recordEvent(context, kind, slug) {
  const { request, env } = context
  if (skipLogging(request)) return
  const ts = new Date().toISOString()
  const record = {
    kind,
    slug,
    ts,
    country: (request.cf && request.cf.country) || null,
    ...classify(request, kind),
  }

  const kv = env && env.CLICKS
  console.log(`[storefront] ${kind} ${JSON.stringify(record)}${kv ? "" : " (CLICKS binding missing, console only)"}`)
  if (!kv) return

  const rand = Math.random().toString(36).slice(2, 8)
  const write = kv.put(`${kind}:${slug}:${ts}:${rand}`, "1", { metadata: record }).catch((err) => {
    console.log(`[storefront] KV write failed: ${err && err.message}`)
  })
  if (typeof context.waitUntil === "function") context.waitUntil(write)
}

// 1x1 transparent GIF.
export const PIXEL_GIF = Uint8Array.from(
  atob("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
  (c) => c.charCodeAt(0),
)
