"use client"

import Link from "next/link"

const CHECKOUT = process.env.NEXT_PUBLIC_AI_BLUEPRINT_CHECKOUT_URL ?? ""

export function buyHref() {
  return CHECKOUT || "#buy"
}

export function BuyLink({
  className,
  children,
  id,
  style,
}: {
  className?: string
  children: React.ReactNode
  id?: string
  style?: React.CSSProperties
}) {
  const href = buyHref()
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!CHECKOUT && href === "#buy") {
      e.preventDefault()
      document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <Link href={href} id={id} className={className} style={style} onClick={onClick}>
      {children}
    </Link>
  )
}
