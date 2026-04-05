import { V5 } from "../copy/v5"

export function PriceBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`abp-price ${className}`.trim()}>
      <span className="abp-price__was">${V5.meta.priceWas}</span>
      <span className="abp-price__now">${V5.meta.price}</span>
      <span className="abp-price__badge">{V5.meta.discountLabel}</span>
    </div>
  )
}
