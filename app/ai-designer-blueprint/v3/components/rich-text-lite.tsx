"use client"

import { Fragment } from "react"

/** Minimal **bold** only (for parity blocks). */
export function RichTextLite({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  const re = /\*\*([^*]+)\*\*/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(<Fragment key={`t-${k++}`}>{text.slice(last, m.index)}</Fragment>)
    parts.push(
      <strong key={`s-${k++}`} className="abp3-strong">
        {m[1]}
      </strong>,
    )
    last = re.lastIndex
  }
  if (last < text.length) parts.push(<Fragment key={`t-${k++}`}>{text.slice(last)}</Fragment>)
  return <>{parts}</>
}
