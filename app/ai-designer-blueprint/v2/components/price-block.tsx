import { V5 } from "../copy/v5"

export type PriceBlockMeta = {
  price: number
  priceWas: number
  discountLabel: string
}

export function PriceBlock({ className = "", meta }: { className?: string; meta?: PriceBlockMeta }) {
  const m = meta ?? V5.meta
  return (
    <div className={`abp-price ${className}`.trim()}>
      <span className="abp-price__was">${m.priceWas}</span>
      <span className="abp-price__now">${m.price}</span>
      <span className="abp-price__badge">{m.discountLabel}</span>
    </div>
  )
}
