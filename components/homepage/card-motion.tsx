/* Live card media for the homepage case-study cards: real artefacts, moving slowly.
   Pure CSS animation; prefers-reduced-motion freezes both (see globals.css). */

const rowA = ["p-profile", "d-dashboard", "p-plans", "p-goals", "d-admin", "p-shop"]
const rowB = ["p-workout", "d-videos", "p-records", "p-explore", "d-vendor", "p-groups"]

function ReelRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const set = [...items, ...items]
  return (
    <div className={`reel-row ${reverse ? "reel-row-reverse" : ""}`} aria-hidden="true">
      {set.map((k, i) => (
        <img
          key={`${k}-${i}`}
          src={`/images/splt-reel-${k}.webp`}
          alt=""
          loading="lazy"
          decoding="async"
          className={`reel-tile ${k.startsWith("p-") ? "reel-tile-phone" : "reel-tile-dash"}`}
        />
      ))}
    </div>
  )
}

export function SpltReel({ label }: { label: string }) {
  return (
    <div role="img" aria-label={label} className="card-img reel relative flex aspect-[16/10] w-full flex-col justify-center gap-[3%] overflow-hidden bg-primary">
      <ReelRow items={rowA} />
      <ReelRow items={rowB} reverse />
    </div>
  )
}

export function HodelProof({ label }: { label: string }) {
  return (
    <div role="img" aria-label={label} className="card-img proof relative aspect-[16/10] w-full overflow-hidden bg-[#e9e7e2]">
      <img src="/images/hodel-proof-sheet-v2.webp" alt="" loading="lazy" decoding="async" className="proof-sheet" aria-hidden="true" />
    </div>
  )
}

/* TapTools: the real screens in two windows framed the way TapTools framed its own launch graphics,
   over its eclipse: black, with the green-to-cyan-to-blue rim of the logo. The large window steps
   through market, token and wallet profiler; the small one through portfolio and swap. Slow
   cross-fades and a slow breath in the eclipse; every screen is shown whole. */
const ttMain = ["market", "token", "profiler"]
const ttSide = ["portfolio", "swap"]

export function TapToolsDeck({ label }: { label: string }) {
  return (
    <div role="img" aria-label={label} className="card-img tt-deck relative aspect-[16/10] w-full overflow-hidden bg-black">
      <img src="/images/tt-card-bg-v1.webp" alt="" aria-hidden="true" decoding="async" className="tt-bg" />
      <div className="tt-drift absolute inset-0" aria-hidden="true">
        <div className="tt-win tt-win-main">
          {ttMain.map((k, i) => (
            <img key={k} src={`/images/tt-card-${k}-v1.webp`} alt="" loading="lazy" decoding="async" className={`tt-shot tt-shot-3 ${i === 0 ? "tt-first" : ""}`} style={{ animationDelay: `${i === 0 ? 0 : -(ttMain.length - i) * 6}s` }} />
          ))}
        </div>
        <div className="tt-win tt-win-side">
          {ttSide.map((k, i) => (
            <img key={k} src={`/images/tt-card-${k}-v1.webp`} alt="" loading="lazy" decoding="async" className={`tt-shot tt-shot-2 ${i === 0 ? "tt-first" : ""}`} style={{ animationDelay: `${i === 0 ? -3 : -10}s` }} />
          ))}
        </div>
      </div>
    </div>
  )
}
