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
      <img src="/images/hodel-proof-sheet.webp" alt="" loading="lazy" decoding="async" className="proof-sheet" aria-hidden="true" />
    </div>
  )
}
