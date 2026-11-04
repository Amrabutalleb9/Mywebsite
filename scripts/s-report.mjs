#!/usr/bin/env node
/**
 * Prints the Storefront click report (functions/api/s-report.js) as a table.
 *
 *   S_REPORT_TOKEN=... node scripts/s-report.mjs
 *   S_REPORT_TOKEN=... node scripts/s-report.mjs --csv > clicks.csv
 *
 * S_REPORT_URL overrides the endpoint (default https://amrabutalleb.com/api/s-report).
 * S_REPORT_BASIC_AUTH="user:password" is only needed for a password-gated preview or staging host.
 */
const url = process.env.S_REPORT_URL || "https://amrabutalleb.com/api/s-report"
const token = process.env.S_REPORT_TOKEN
const csv = process.argv.includes("--csv")

if (!token) {
  console.error("Set S_REPORT_TOKEN (the same value as the S_REPORT_TOKEN secret on the Pages project).")
  process.exit(2)
}

// The staging gate uses Basic auth, so the token goes in the query string there.
const headers = {}
const target = new URL(url)
if (csv) target.searchParams.set("format", "csv")
if (process.env.S_REPORT_BASIC_AUTH) {
  headers.Authorization = `Basic ${Buffer.from(process.env.S_REPORT_BASIC_AUTH).toString("base64")}`
  target.searchParams.set("token", token)
} else {
  headers.Authorization = `Bearer ${token}`
}

const res = await fetch(target, { headers })
if (!res.ok) {
  console.error(`${res.status} ${res.statusText}: ${(await res.text()).slice(0, 300)}`)
  process.exit(1)
}
if (csv) {
  process.stdout.write(await res.text())
  process.exit(0)
}

const report = await res.json()
const day = (ts) => (ts ? ts.slice(0, 16).replace("T", " ") : "")
const rows = report.businesses.map((r) => ({
  business: r.example ? `${r.business} (example)` : r.business,
  slug: r.slug,
  clicks: r.clicks,
  bots: r.bot_clicks,
  "last click (UTC)": day(r.last_click),
  countries: r.countries.join(" "),
  devices: r.devices.join(" "),
  "opens*": r.opens,
}))

const cols = Object.keys(rows[0] || { business: "" })
const width = Object.fromEntries(cols.map((c) => [c, Math.max(c.length, ...rows.map((r) => String(r[c]).length))]))
const line = (r) => cols.map((c) => String(r[c]).padEnd(width[c])).join("  ").trimEnd()
console.log(line(Object.fromEntries(cols.map((c) => [c, c]))))
console.log(cols.map((c) => "-".repeat(width[c])).join("  "))
rows.forEach((r) => console.log(line(r)))
console.log("")
console.log(`Total: ${report.totals.clicks} clicks, ${report.totals.bot_clicks} bot or scanner hits, ${report.totals.opens} opens.`)
console.log(`* Opens are ${report.opens_note}.`)
if (report.logging === "off") console.log(`Logging is off: ${report.note}`)
