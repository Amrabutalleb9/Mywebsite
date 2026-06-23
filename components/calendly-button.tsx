"use client"

import { ArrowUpRight } from "lucide-react"
import { useEffect } from "react"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void
    }
  }
}

interface CalendlyButtonProps {
  className?: string
  children?: React.ReactNode
}

export default function CalendlyButton({ className, children }: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly CSS
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement("link")
      link.href = "https://assets.calendly.com/assets/external/widget.css"
      link.rel = "stylesheet"
      document.head.appendChild(link)
    }
    // Load Calendly JS
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/amrabutalleb/one-on-one",
      })
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        className ||
        "cta-btn cta-btn-filled inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-background uppercase cursor-pointer"
      }
    >
      {children || (
        <>
          Book a Strategy Call
          <ArrowUpRight size={14} className="cta-arrow" />
        </>
      )}
    </button>
  )
}
