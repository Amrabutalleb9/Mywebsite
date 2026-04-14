"use client"

import { useCallback, useEffect, useRef, useState } from "react"

type Box = {
  title?: string
  body: string
  badge?: string
}

type Props = {
  wordmark: string
  wordmarkAccent: string
  oldLabel: string
  newLabel: string
  oldLead: Box
  oldSteps: readonly string[]
  newLead: Box
  newSteps: readonly string[]
}

export function OldNewSlider({
  wordmark,
  wordmarkAccent,
  oldLabel,
  newLabel,
  oldLead,
  oldSteps,
  newLead,
  newSteps,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [pct, setPct] = useState(50)
  const dragRef = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = Math.min(Math.max(clientX - r.left, 0), r.width)
    const p = (x / r.width) * 100
    setPct(Math.min(88, Math.max(12, p)))
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragRef.current) return
      setFromClientX(e.clientX)
    }
    const onUp = () => {
      dragRef.current = false
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    window.addEventListener("pointercancel", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
      window.removeEventListener("pointercancel", onUp)
    }
  }, [setFromClientX])

  return (
    <div className="abp3-on" ref={wrapRef}>
      <p className="abp3-on__wordmark" aria-hidden>
        <span className="abp3-on__wordmark-main">{wordmark}</span>
        <span className="abp3-on__wordmark-accent">{wordmarkAccent}</span>
      </p>
      <div className="abp3-on__flex">
        <div className="abp3-on__col abp3-on__col--old" style={{ width: `${pct}%` }}>
          <div className="abp3-on__col-head">{oldLabel}</div>
          <div className="abp3-on__box abp3-on__box--old">
            {oldLead.title ? <h3 className="abp3-on__h">{oldLead.title}</h3> : null}
            <p>{oldLead.body}</p>
            {oldLead.badge ? <p className="abp3-on__badge">{oldLead.badge}</p> : null}
          </div>
          {oldSteps.map((t) => (
            <div key={t.slice(0, 24)} className="abp3-on__box abp3-on__box--old abp3-on__box--plain">
              {t}
            </div>
          ))}
        </div>

        <div
          className="abp3-on__slider"
          style={{ left: `${pct}%` }}
          role="separator"
          aria-orientation="vertical"
          aria-valuenow={Math.round(pct)}
          aria-valuemin={12}
          aria-valuemax={88}
          tabIndex={0}
          onPointerDown={(e) => {
            e.preventDefault()
            dragRef.current = true
            ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
            setFromClientX(e.clientX)
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPct((p) => Math.max(12, p - 2))
            if (e.key === "ArrowRight") setPct((p) => Math.min(88, p + 2))
          }}
        >
          <div className="abp3-on__slider-knob" aria-hidden>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 7l-4 5 4 5M15 7l4 5-4 5"
                stroke="#0e2c26"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="abp3-on__col abp3-on__col--new" style={{ width: `${100 - pct}%` }}>
          <div className="abp3-on__col-head">{newLabel}</div>
          <div className="abp3-on__box abp3-on__box--new">
            {newLead.title ? <h3 className="abp3-on__h">{newLead.title}</h3> : null}
            <p>{newLead.body}</p>
            {newLead.badge ? <p className="abp3-on__badge abp3-on__badge--new">{newLead.badge}</p> : null}
          </div>
          {newSteps.map((t) => (
            <div key={t.slice(0, 24)} className="abp3-on__box abp3-on__box--new abp3-on__box--plain">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
