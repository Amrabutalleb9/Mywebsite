"use client"

import { useState } from "react"
import { Linkedin, Globe, Dribbble } from "lucide-react"
import FadeIn from "./fade-in"
import { socialLinks, siteMetadata } from "@/lib/constants"
import type React from "react"

const WEB3FORMS_KEY = "b13517be-486e-4aa3-b064-eeb0e5f25951"

const iconMap: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin size={18} />,
  Behance: <Globe size={18} />,
  Dribbble: <Dribbble size={18} />,
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setError("")

    const formData = new FormData(e.target as HTMLFormElement)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          subject: `Portfolio inquiry from ${formData.get("name")}`,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        setError("Something went wrong. Please try emailing me directly.")
      }
    } catch {
      setError("Network error. Please try emailing me directly.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-6 py-[clamp(80px,10vw,140px)]">
      <FadeIn as="h2" className="mb-6 text-[length:var(--text-sub)] font-bold tracking-tight text-foreground">
        {"Let's Talk"}
      </FadeIn>
      <FadeIn as="p" className="mb-12 max-w-[640px] text-muted-foreground">
        {"I'm currently in Cairo and open to relocating to Dubai. If you're building a creative team, launching a brand, or looking for a director who cares about the outcome as much as the craft, I want to hear about it."}
      </FadeIn>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Form */}
        <FadeIn className="lg:w-[60%]">
          {submitted ? (
            <div className="rounded-lg bg-surface p-8 text-center">
              <p className="text-lg font-bold text-foreground">Message sent!</p>
              <p className="mt-2 text-muted-foreground">{"Thank you for reaching out. I'll get back to you soon."}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              {error && (
                <p className="text-sm text-red-500">
                  {error}{" "}
                  <a href={`mailto:${siteMetadata.email}`} className="underline">{siteMetadata.email}</a>
                </p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="self-start rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-secondary disabled:opacity-50"
              >
                {sending ? "Sending\u2026" : "Send Message"}
              </button>
            </form>
          )}
        </FadeIn>

        {/* Info column */}
        <FadeIn className="lg:w-[40%]">
          <h3 className="mb-3 font-bold text-foreground">Services</h3>
          <p className="mb-8 text-sm text-muted-foreground">
            {"Branding \u00b7 Product Design \u00b7 UX Design \u00b7 UI Design"}
          </p>

          <h3 className="mb-3 font-bold text-foreground">Social</h3>
          <div className="mb-8 flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {iconMap[link.label]}
                {link.label}
              </a>
            ))}
          </div>

          <h3 className="mb-3 font-bold text-foreground">Email</h3>
          <a
            href={`mailto:${siteMetadata.email}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {siteMetadata.email}
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
