"use client"

import React, { useState } from "react"
import { Linkedin } from "lucide-react"

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

    try {
      const res = await fetch("https://formsubmit.co/ajax/hello@amrabutalleb.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          budget: form.budget || "Not specified",
          message: form.message,
          _subject: `Portfolio inquiry from ${form.name}`,
          _cc: "senchikudo@gmail.com",
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        openMailto()
        setSubmitted(true)
      }
    } catch {
      openMailto()
      setSubmitted(true)
    } finally {
      setSending(false)
    }
  }

  function openMailto() {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget || "Not specified"}\n\n${form.message}`
    )
    window.location.href = `mailto:hello@amrabutalleb.com,senchikudo@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
        <div className="lg:w-1/2">
          <h1 className="mb-6 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-tight text-foreground">
            {"Let\u2019s Talk"}
          </h1>
          <p className="mb-10 max-w-md leading-relaxed text-muted-foreground">
            Available for senior Creative Director roles with international agencies and in-house teams in the UAE. If you have a role or a project worth building, reach out.
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
          </div>
        </div>

        <div className="lg:w-1/2">
          {submitted ? (
            <div className="flex h-full min-h-[400px] items-center justify-center rounded-sm bg-surface p-12 text-center">
              <div>
                <p className="font-serif text-2xl text-foreground">Message sent.</p>
                <p className="mt-2 text-muted-foreground">{"I\u2019ll get back to you within 24 hours."}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">Name</label>
                <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Email</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent" />
              </div>
              <div>
                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">Budget Range</label>
                <select id="budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent">
                  <option value="">Select range</option>
                  <option value="5k-10k">$5K - $10K</option>
                  <option value="10k-25k">$10K - $25K</option>
                  <option value="25k+">$25K+</option>
                  <option value="fulltime">Full-time role</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">Message</label>
                <textarea id="message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent" />
              </div>
              {error && (
                <p className="text-sm text-red-500">
                  {error}{" "}
                  <a href="mailto:hello@amrabutalleb.com" className="underline">hello@amrabutalleb.com</a>
                </p>
              )}
              <button type="submit" disabled={sending} className="cursor-pointer rounded-full border border-foreground bg-primary px-8 py-3 font-medium text-primary-foreground transition-all duration-300 hover:bg-foreground hover:text-background disabled:opacity-50">
                {sending ? "Sending\u2026" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
