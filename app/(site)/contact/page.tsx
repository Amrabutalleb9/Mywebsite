"use client"

import React, { useState } from "react"
import { Linkedin, ArrowUpRight } from "lucide-react"
import { submitContactForm } from "@/lib/contact"
import FadeIn from "@/components/fade-in"

const LINKEDIN = "https://www.linkedin.com/in/abutalleb/"

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
      ? `${form.message}\n\nTopic: ${form.budget}`
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
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-6xl flex flex-col gap-16 lg:flex-row lg:gap-16">
        <div className="lg:w-1/2">
          <FadeIn>
            <p className="mb-4 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">{"Let\u2019s talk"}</p>
            <h1 className="mb-8 max-w-[20ch] font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
              {"Hiring a\u00A0creative\u00A0director?"}
            </h1>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="max-w-[50ch] text-lg leading-relaxed text-muted-foreground">
              {"I\u2019m open to\u00A0Creative Director roles in\u00A0Europe, remote or\u00A0on-site. Tell me about the\u00A0role and\u00A0the\u00A0team. I\u00A0reply within 24\u00A0hours."}
            </p>
            <p className="mt-4 mb-12 max-w-[50ch] text-sm leading-relaxed text-muted-foreground">
              {"I\u00A0also take on a\u00A0small number of\u00A0contract and\u00A0interim engagements, from repositioning a\u00A0brand to\u00A0leading a\u00A0team through a\u00A0set\u00A0period."}
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@amrabutalleb.com" className="link-inline text-lg">
                hello@amrabutalleb.com
              </a>
              <div className="mt-2">
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <Linkedin size={18} aria-hidden="true" />
                  {"Message me on\u00A0LinkedIn"}
                  <ArrowUpRight size={14} className="cta-arrow" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.16} as="div" className="lg:w-1/2">
          {submitted ? (
            <div className="flex h-full min-h-[400px] items-center justify-center rounded-sm border border-border bg-background p-12 text-center" aria-live="polite">
              <div>
                <p className="font-serif text-2xl text-foreground">Message&nbsp;sent.</p>
                <p className="mt-2 text-muted-foreground">{"I\u2019ll get back to\u00A0you within 24\u00A0hours."}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">Name</label>
                <input id="name" type="text" autoComplete="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent-text focus:ring-1 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Email</label>
                <input id="email" type="email" autoComplete="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent-text focus:ring-1 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">Topic</label>
                <select id="budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent-text focus:ring-1 focus:ring-accent">
                  <option value="">Select&nbsp;one</option>
                  <option value="fulltime">Full-time role</option>
                  <option value="contract">Contract or interim role</option>
                  <option value="collaboration">Collaboration or partnership</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">Message</label>
                <textarea id="message" rows={5} required placeholder="A little context about the role, the project or what you’d like to discuss." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent-text focus:ring-1 focus:ring-accent" />
              </div>
              {error && (
                <p className="text-sm text-red-500" aria-live="polite">
                  {error}{" "}
                  <a href="mailto:hello@amrabutalleb.com" className="underline">hello@amrabutalleb.com</a>
                </p>
              )}
              <button type="submit" disabled={sending} className="btn btn-primary">
                {sending ? "Sending\u2026" : "Send\u00A0message"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                I respond within 24&nbsp;hours.
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </main>
  )
}
