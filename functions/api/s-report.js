// Storefront click report: clicks (and unreliable opens) by business.
//
//   GET /api/s-report                  JSON, with  Authorization: Bearer <S_REPORT_TOKEN>
//   GET /api/s-report?token=<token>    the same, for a browser
//   add &format=csv for CSV, &events=1 to include every event (JSON only)
//
// Needs the S_REPORT_TOKEN secret. Reads the CLICKS KV namespace; without it the report
// still answers, with zero counts and "logging": "off".

import { PREVIEWS } from "../_shared/storefront-tracking.js"

const OPENS_NOTE = "unreliable (Apple Mail privacy prefetch, image blocking)"
const MAX_PAGES = 50 // 50,000 events per kind is far beyond what the email volume needs

async function sha256(text) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)))
}

async function tokenMatches(given, expected) {
  const [a, b] = await Promise.all([sha256(given), sha256(expected)])
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i]
  return diff === 0
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  })
}

async function listAll(kv, prefix) {
  const events = []
  let cursor
  for (let page = 0; page < MAX_PAGES; page++) {
    const res = await kv.list({ prefix, cursor })
    for (const k of res.keys) if (k.metadata) events.push(k.metadata)
    if (res.list_complete || !res.cursor) break
    cursor = res.cursor
  }
  return events
}

function emptyRow(slug, business, example) {
  return {
    slug,
    business,
    example: Boolean(example),
    clicks: 0,
    bot_clicks: 0,
    first_click: null,
    last_click: null,
    countries: [],
    devices: [],
    opens: 0,
    last_open: null,
  }
}

function csvCell(v) {
  const s = Array.isArray(v) ? v.join(" ") : v === null || v === undefined ? "" : String(v)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

export const onRequestGet = async ({ request, env }) => {
  const url = new URL(request.url)
  const expected = env && env.S_REPORT_TOKEN
  if (!expected) return json({ error: "Report is not set up: add the S_REPORT_TOKEN secret." }, 503)

  const auth = request.headers.get("Authorization") || ""
  const given = auth.startsWith("Bearer ") ? auth.slice(7).trim() : url.searchParams.get("token") || ""
  if (!given || !(await tokenMatches(given, expected))) return json({ error: "Unauthorised." }, 401)

  const kv = env.CLICKS
  const rows = new Map(PREVIEWS.map((p) => [p.slug, emptyRow(p.slug, p.business, p.example)]))
  let clicks = []
  let opens = []
  if (kv) [clicks, opens] = await Promise.all([listAll(kv, "click:"), listAll(kv, "open:")])

  const row = (slug) => {
    if (!rows.has(slug)) rows.set(slug, emptyRow(slug, "(removed from site data)", false))
    return rows.get(slug)
  }
  for (const e of clicks) {
    const r = row(e.slug)
    if (e.is_bot) {
      r.bot_clicks++
      continue
    }
    r.clicks++
    if (!r.first_click || e.ts < r.first_click) r.first_click = e.ts
    if (!r.last_click || e.ts > r.last_click) r.last_click = e.ts
    if (e.country && !r.countries.includes(e.country)) r.countries.push(e.country)
    if (e.ua_class && !r.devices.includes(e.ua_class)) r.devices.push(e.ua_class)
  }
  for (const e of opens) {
    if (e.is_bot) continue
    const r = row(e.slug)
    r.opens++
    if (!r.last_open || e.ts > r.last_open) r.last_open = e.ts
  }

  const businesses = [...rows.values()].sort(
    (a, b) => b.clicks - a.clicks || String(b.last_click || "").localeCompare(String(a.last_click || "")) || a.slug.localeCompare(b.slug),
  )

  if (url.searchParams.get("format") === "csv") {
    const cols = ["slug", "business", "example", "clicks", "bot_clicks", "first_click", "last_click", "countries", "devices", "opens", "last_open"]
    const lines = [cols.join(","), ...businesses.map((r) => cols.map((c) => csvCell(r[c])).join(","))]
    return new Response(lines.join("\n") + "\n", {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'inline; filename="storefront-clicks.csv"',
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    })
  }

  const body = {
    generated: new Date().toISOString(),
    logging: kv ? "on" : "off",
    ...(kv ? {} : { note: "The CLICKS KV binding is missing, so visits are only written to the Functions log." }),
    totals: {
      clicks: businesses.reduce((n, r) => n + r.clicks, 0),
      bot_clicks: businesses.reduce((n, r) => n + r.bot_clicks, 0),
      opens: businesses.reduce((n, r) => n + r.opens, 0),
    },
    opens_note: OPENS_NOTE,
    businesses,
  }
  if (url.searchParams.get("events") === "1") body.events = [...clicks, ...opens].sort((a, b) => a.ts.localeCompare(b.ts))
  return json(body)
}
