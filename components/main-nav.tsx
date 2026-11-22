"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abutalleb/", external: true },
] as { label: string; href: string; external?: boolean }[]

// Case studies and highlights live under Projects, so the Projects link shows as current there too.
function isCurrent(pathname: string, href: string) {
  if (href === "/projects") return pathname === "/projects" || pathname.startsWith("/work/") || pathname.startsWith("/highlights/")
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function MainNav() {
  const pathname = usePathname() || "/"
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // The mobile menu is a native modal <dialog>: the browser handles Escape, the Android back gesture,
  // the focus trap, an inert page behind it and returning focus to the menu button on close.
  const openMenu = () => {
    dialogRef.current?.showModal()
    setMobileOpen(true)
  }
  const closeMenu = () => dialogRef.current?.close()

  // If the window grows past the mobile breakpoint while the menu is open, close it.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)")
    const onChange = () => { if (mq.matches) dialogRef.current?.close() }
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav aria-label="Main" className="flex items-center justify-between px-8 py-4 lg:px-16">
          <Link href="/" className="text-lg font-bold tracking-tight text-foreground lg:text-xl">
            Amr Abu-Talleb
          </Link>
          <div className="hidden items-center gap-12 lg:flex">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                  <ArrowUpRight size={14} className="cta-arrow" aria-hidden="true" />
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                  className="text-sm text-muted-foreground underline-offset-[6px] transition-colors hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:underline aria-[current=page]:decoration-accent"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              className="btn btn-secondary btn-sm"
            >
              {"Let’s talk"}
            </Link>
          </div>
          <button
            type="button"
            className="-mr-2.5 inline-flex h-11 w-11 items-center justify-center text-foreground lg:hidden"
            onClick={openMenu}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </nav>
      </header>

      <dialog
        ref={dialogRef}
        aria-label="Navigation menu"
        onClose={() => setMobileOpen(false)}
        className="fixed inset-0 z-100 m-0 h-full max-h-none w-full max-w-none bg-background p-0 text-foreground open:flex open:flex-col open:items-center open:justify-center backdrop:bg-transparent lg:hidden"
      >
        <button
          type="button"
          autoFocus
          className="absolute top-3 right-3.5 inline-flex h-11 w-11 items-center justify-center text-foreground"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X size={24} aria-hidden="true" />
        </button>
        <nav aria-label="Main" className="flex flex-col items-center gap-8">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center gap-2 font-serif text-3xl text-foreground"
              >
                {item.label}
                <ArrowUpRight size={24} className="cta-arrow" aria-hidden="true" />
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                className="font-serif text-3xl text-foreground underline-offset-8 aria-[current=page]:underline aria-[current=page]:decoration-accent"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/contact"
            onClick={closeMenu}
            aria-current={pathname === "/contact" ? "page" : undefined}
            className="font-serif text-3xl text-accent"
          >
            Let{"’"}s Talk
          </Link>
        </nav>
      </dialog>
    </>
  )
}
