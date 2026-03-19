"use client"

import React, { useState } from "react"
import { submitContactForm } from "@/lib/contact"

const servicesTags = ["Branding", "Product Design", "UX Design", "UI Design"]

const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abutalleb/" },
  { label: "Email", href: "mailto:hello@amrabutalleb.com" },
]

export default function MainFooter() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setError("")

    const result = await submitContactForm({
      name: form.name,
      email: form.email,
      message: form.message,
    })

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error || "Something went wrong. Please try emailing me directly.")
    }

    setSending(false)
  }

  return (
    <footer id="contact" className="relative overflow-hidden bg-primary">
      <div className="relative flex flex-col lg:flex-row lg:items-stretch">
        {/* LEFT - Form card */}
        <div className="relative z-10 px-8 py-16 lg:ml-[10%] lg:w-[25%] lg:px-0 lg:py-0 lg:pb-[5%]">
          {submitted ? (
            <div className="flex h-full min-h-[600px] items-center justify-center rounded-b-2xl bg-background p-10 lg:min-h-0" aria-live="polite">
              <div className="text-center">
                <p className="font-serif text-2xl text-foreground">Message sent.</p>
                <p className="mt-2 text-muted-foreground">{"I\u2019ll get back to you within 24 hours."}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex h-full flex-col justify-center rounded-b-2xl bg-background p-10 lg:p-12">
              <div className="mb-8">
                <label htmlFor="fname" className="text-sm text-muted-foreground">Full name</label>
                <input id="fname" name="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full border-b border-border bg-transparent py-4 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent" />
              </div>
              <div className="mb-8">
                <label htmlFor="femail" className="text-sm text-muted-foreground">Email</label>
                <input id="femail" name="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full border-b border-border bg-transparent py-4 text-foreground outline-none transition-colors focus:border-accent" />
              </div>
              <div className="mb-10">
                <label htmlFor="fmsg" className="text-sm text-muted-foreground">Message</label>
                <textarea id="fmsg" name="message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 w-full resize-none border-b border-border bg-transparent py-4 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent" />
              </div>
              {error && (
                <p className="mb-4 text-sm text-red-500" aria-live="polite">
                  {error}{" "}
                  <a href="mailto:hello@amrabutalleb.com" className="underline">hello@amrabutalleb.com</a>
                </p>
              )}
              <button type="submit" disabled={sending} className="footer-submit-btn ml-auto block cursor-pointer rounded-full border border-primary bg-primary px-12 py-4 font-medium text-primary-foreground hover:bg-primary-foreground hover:text-primary disabled:opacity-50">
                {sending ? "Sending\u2026" : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT area */}
        <div className="relative flex-1 py-16 lg:flex lg:justify-end lg:py-32">
          {/* Decorative overlapping circles */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="relative">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-primary-foreground/10 lg:h-96 lg:w-96" />
              <div className="absolute -right-8 top-8 h-56 w-56 rounded-full border border-primary-foreground/10 lg:h-72 lg:w-72" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex w-full max-w-md flex-col justify-start px-8 lg:ml-auto lg:px-0 lg:pr-16">
            {/* Service tags */}
            <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2">
              {servicesTags.map((s) => (
                <span key={s} className="text-xs tracking-[var(--tracking-sublabel)] text-primary-foreground/50">{s}</span>
              ))}
            </div>

            {/* Let's Talk heading with gold accent bar */}
            <div className="mb-8 flex items-start gap-3">
              <div className="mt-2 h-20 w-1 bg-accent" />
              <h2 className="font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-primary-foreground">
                {"Let\u2019s"}
                <br />
                Talk!
              </h2>
            </div>

            {/* Body text */}
            <p className="mb-8 max-w-[40ch] text-sm leading-relaxed text-primary-foreground/70">
              {"I\u2019m open to senior Creative Director roles with international agencies and in-house teams in the UAE."}
            </p>

            {/* Links */}
            <div className="flex gap-6">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-primary-foreground/10 px-8 py-6 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-primary-foreground/40">&copy; 2026 Amr Abu-Talleb. All rights reserved.</p>
          <p className="text-xs text-primary-foreground/40">Cairo, Egypt &middot; Working globally</p>
        </div>
      </div>
    </footer>
  )
}
