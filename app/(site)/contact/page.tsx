"use client"

import React, { useEffect, useRef, useState } from "react"
import { Linkedin, ArrowUpRight } from "lucide-react"
import { submitContactForm } from "@/lib/contact"
import FadeIn from "@/components/fade-in"
import PageIn from "@/components/page-in"

const LINKEDIN = "https://www.linkedin.com/in/abutalleb/"

// Field boundary uses --input-strong (3.4:1), the design system's colour for form controls.
const fieldCls =
  "w-full border-0 border-b border-input-strong bg-transparent py-3 text-base text-foreground outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-muted-foreground focus:border-accent-text focus:shadow-[0_1px_0_var(--accent-text)] user-invalid:border-destructive"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "", botcheck: false })
  const sentRef = useRef<HTMLParagraphElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.botcheck) return
    setSending(true)
    setError("")

    const message = form.budget
      ? `${form.message}\n\nTopic: ${form.budget}`
      : form.message

    const result = await submitContactForm({
      name: form.name,
      email: form.email,
      message,
      botcheck: form.botcheck,
    })

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error || "Something went wrong. Please try\u00A0emailing me directly.")
    }

    setSending(false)
  }

  // After a successful send the form is replaced, so move focus to the confirmation.
  useEffect(() => {
    if (submitted) sentRef.current?.focus()
  }, [submitted])

  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-6xl flex flex-col gap-16 lg:flex-row lg:gap-16">
        <div className="lg:w-1/2">
          <PageIn>
            <p className="mb-4 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">{"Contact"}</p>
            <h1 className="mb-8 max-w-[20ch] font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
              {"Let\u2019s talk about the\u00A0work."}
            </h1>
          </PageIn>
          <PageIn delay={0.08}>
            <p className="max-w-[50ch] text-lg leading-relaxed text-muted-foreground">
              {"I\u2019m open to\u00A0full-time roles, remote or in\u00A0Europe. Tell me what you\u2019re building and where it\u2019s stuck. I\u00A0reply within 24\u00A0hours."}
            </p>
            <p className="mt-4 mb-12 max-w-[50ch] text-sm leading-relaxed text-muted-foreground">
              {"I\u00A0also take on a\u00A0small number of\u00A0contract and\u00A0interim engagements, from repositioning a\u00A0brand to\u00A0leading a\u00A0team through a\u00A0set\u00A0period."}
            </p>
          </PageIn>
          <PageIn delay={0.16}>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@amrabutalleb.com" className="link-inline text-lg">
                hello@amrabutalleb.com
              </a>
              <div className="mt-2">
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <Linkedin size={18} aria-hidden="true" />
                  {"Message me on\u00A0LinkedIn"}
                  <ArrowUpRight size={14} className="cta-arrow" aria-hidden="true" />
                </a>
              </div>
            </div>
          </PageIn>
        </div>

        <PageIn delay={0.16} as="div" className="lg:w-1/2">
          {submitted ? (
            <div className="flex h-full min-h-[400px] items-center justify-center rounded-sm border border-border bg-background p-12 text-center">
              <div>
                <p ref={sentRef} tabIndex={-1} className="font-serif text-2xl text-foreground outline-none">Message&nbsp;sent.</p>
                <p className="mt-2 text-muted-foreground">{"I\u2019ll get back to\u00A0you within 24\u00A0hours."}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                checked={form.botcheck}
                onChange={(e) => setForm({ ...form, botcheck: e.target.checked })}
              />
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={fieldCls} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" spellCheck={false} required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={fieldCls} />
              </div>
              <div>
                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">Topic <span className="font-normal text-muted-foreground">(optional)</span></label>
                <select id="budget" name="topic" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={fieldCls}>
                  <option value="">Select&nbsp;one</option>
                  <option value="A full-time role">A full-time role</option>
                  <option value="A contract or interim role">A contract or interim role</option>
                  <option value="A collaboration">A collaboration</option>
                  <option value="Something else">Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="A little context about the role, the project or what you’d like to discuss." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${fieldCls} min-h-[8lh] resize-y [field-sizing:content]`} />
              </div>
              {/* The status region is always in the page, so screen readers announce the error when it appears. */}
              <p className="sr-only" role="status">{error}</p>
              {error && (
                <p className="text-sm text-destructive">
                  {error}{" "}
                  <a href="mailto:hello@amrabutalleb.com" className="link-inline">hello@amrabutalleb.com</a>
                </p>
              )}
              <button type="submit" disabled={sending} className="btn btn-primary">
                {sending ? "Sending\u2026" : "Send message"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                {"I\u00A0reply within 24\u00A0hours. Your message reaches my inbox through Web3Forms and is used only to\u00A0reply."}
              </p>
            </form>
          )}
        </PageIn>
      </div>
    </main>
  )
}
