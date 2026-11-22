// Private staging gate (staging branch only).
// Every host except the live site asks for a username and password,
// and nothing on staging is indexed. The repo is public, so only a
// SHA-256 hash of "user:password" is stored here. The password is long and random (changed 22 Nov 2026),
// so the public hash cannot be guessed offline.

const LIVE_HOSTS = new Set(["amrabutalleb.com", "www.amrabutalleb.com", "mywebsite-dqc.pages.dev"])
const CREDENTIAL_HASH = "63ef58c69bf6e5f80a7d1839c508f28a707f85c15b639532a14d06843f6540e5"

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text))
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("")
}

export const onRequest = async ({ request, next }) => {
  const { hostname } = new URL(request.url)
  if (LIVE_HOSTS.has(hostname)) return next()

  const auth = request.headers.get("Authorization") || ""
  let ok = false
  if (auth.startsWith("Basic ")) {
    try {
      ok = (await sha256Hex(atob(auth.slice(6)))) === CREDENTIAL_HASH
    } catch {
      ok = false
    }
  }

  if (!ok) {
    return new Response("Private staging site.", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Amr staging", charset="UTF-8"',
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "no-store",
      },
    })
  }

  const res = await next()
  const out = new Response(res.body, res)
  out.headers.set("X-Robots-Tag", "noindex, nofollow")
  out.headers.set("Cache-Control", "private, no-store")
  return out
}
