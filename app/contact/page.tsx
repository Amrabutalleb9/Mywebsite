"use client"

import React, { useState } from "react"
import { Linkedin } from "lucide-react"
import CalendlyButton from "@/components/calendly-button"
import { submitContactForm } from "@/lib/contact"

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abutalleb/", icon: Linkedin },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setError("")

    const message = form.budget
      ? `${form.message}\n\nBudget: ${form.budget}`
      : form.message

    const result = await submitContactForm({
      name: form.name,
      email: form.email,
      message,
    })

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error || "Something went wrong. Please try\u00A0emailing me directly.")
    }

    setSending(false)
  }

  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
        <div className="lg:w-1/2">
          <h1 className="mb-6 font-serif text-[length:var(--text-page)] font-normal tracking-tight text-foreground">
            {"What\u2019s the project?"}
          </h1>
          <p className="mb-10 max-w-md leading-relaxed text-muted-foreground">
            {"Brand launch, UX\u00A0audit, product redesign, or\u00A0a creative leadership role\u00A0\u2014 tell me what you\u2019re working on and I\u2019ll get back within 24\u00A0hours."}
          </p>
          <div className="flex flex-col gap-4">
            <a href="mailto:hello@amrabutalleb.com" className="text-lg text-accent underline underline-offset-4 hover:text-accent/80">
              hello@amrabutalleb.com
            </a>
            <div className="mt-4 flex gap-5">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label={link.label}>
                  <link.icon size={22} />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="mb-3 text-sm text-muted-foreground">Prefer a&nbsp;live conversation?</p>
              <CalendlyButton />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          {submitted ? (
            <div className="flex h-full min-h-[400px] items-center justify-center rounded-sm bg-surface p-12 text-center" aria-live="polite">
              <div>
                <p className="font-serif text-2xl text-foreground">Message&nbsp;sent.</p>
                <p className="mt-2 text-muted-foreground">{"I\u2019ll get back to\u00A0you within 24\u00A0hours."}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">Name</label>
                <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Email</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">Budget&nbsp;Range</label>
                <select id="budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent">
                  <option value="">Select&nbsp;range</option>
                  <option value="under-5k">Under $5K</option>
                  <option value="5k-10k">$5K – $10K</option>
                  <option value="10k-25k">$10K – $25K</option>
                  <option value="25k+">$25K+</option>
                  <option value="fulltime">Full-time role</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">Message</label>
                <textarea id="message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent" />
              </div>
              {error && (
                <p className="text-sm text-red-500" aria-live="polite">
                  {error}{" "}
                  <a href="mailto:hello@amrabutalleb.com" className="underline">hello@amrabutalleb.com</a>
                </p>
              )}
              <button type="submit" disabled={sending} className="cursor-pointer rounded-full border border-foreground bg-primary px-8 py-3 font-medium text-primary-foreground transition-all duration-300 hover:bg-foreground hover:text-background disabled:opacity-50">
                {sending ? "Sending\u2026" : "Send\u00A0Message"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                I respond within 24&nbsp;hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
