"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "About", href: "/about" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
]

export default function MainNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
      closeRef.current?.focus()
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const handleTrapFocus = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !overlayRef.current) return
    const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-8 py-5 lg:px-16">
          <Link href="/" className="text-lg font-bold tracking-tight text-foreground lg:text-xl">
            Amr Abu-Talleb
          </Link>
          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="rounded-full border border-accent px-5 py-2 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              {"Let\u2019s Talk"}
            </Link>
          </div>
          <button
            type="button"
            className="text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-background md:hidden"
          onKeyDown={handleTrapFocus}
        >
          <button
            ref={closeRef}
            type="button"
            className="absolute top-5 right-6 text-foreground"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-3xl text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="font-serif text-3xl text-accent"
          >
            Let{"\u2019"}s Talk
          </Link>
        </div>
      )}
    </>
  )
}
