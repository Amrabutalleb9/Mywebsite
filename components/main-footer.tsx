"use client"

import React, { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { submitContactForm } from "@/lib/contact"
import MotionToggle from "@/components/motion-toggle"

const EMAIL = "hello@amrabutalleb.com"
const LINKEDIN = "https://www.linkedin.com/in/abutalleb/"
const CV = "/cv/Amr_AbuTalleb_CV_Designer_Creative_Director_2026-10-30.pdf"

const topics = [
  { value: "A full-time role", label: "A full-time role" },
  { value: "A contract or interim role", label: "A contract or interim role" },
  { value: "A collaboration", label: "A collaboration" },
  { value: "Something else", label: "Something else" },
]

const darkLink = "text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
const field =
  "mt-2 w-full border-0 border-b border-input-strong bg-transparent py-3 text-base text-foreground outline-none transition-[border-color,box-shadow] duration-300 focus:border-accent-text focus:shadow-[0_1px_0_var(--accent-text)]"

/* Footer: a white card hanging from the top edge holds the form; the words sit beside it.
   Messages go through Web3Forms (lib/contact.ts) to the inbox tied to the access key.
   On /contact the page has its own form, so the footer drops the card. */
export default function MainFooter() {
  const pathname = usePathname()
  const onContact = pathname === "/contact"
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "", botcheck: false })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const sentRef = useRef<HTMLParagraphElement>(null)

  // After a successful send the form (and its focused button) is replaced, so move focus to the confirmation.
  useEffect(() => {
    if (status === "sent") sentRef.current?.focus()
  }, [status])

  const set = (k: "name" | "email" | "message") => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.botcheck) return
    setStatus("sending")
    const result = await submitContactForm({
      name: form.name,
      email: form.email,
      message: form.topic ? `${form.message}\n\nTopic: ${form.topic}` : form.message,
      subject: form.topic ? `${form.topic}: message from ${form.name}` : undefined,
      botcheck: form.botcheck,
    })
    setStatus(result.success ? "sent" : "error")
  }

  const words = (
    <>
      <p className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">{"Let’s talk"}</p>
      <h2 className="mt-6 font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight">
        Hiring, or&nbsp;have something worth building&nbsp;together?
      </h2>
      <p className="mt-6 max-w-[40ch] text-base leading-relaxed text-primary-foreground/70">
        {onContact ? "Write to me directly at" : "Write to me here, or directly at"}{" "}
        <a href={`mailto:${EMAIL}`} className="link-inline">{EMAIL}</a>.
      </p>
      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2">
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={`${darkLink} inline-flex items-center gap-2`}>LinkedIn<ArrowUpRight size={14} className="cta-arrow" aria-hidden="true" /></a>
        <a href={CV} download className={darkLink}>Download&nbsp;CV</a>
      </div>
    </>
  )

  return (
    <footer id="contact" className="relative bg-primary text-primary-foreground">
      {onContact ? (
        <div className="px-8 py-24 lg:px-16 lg:py-32">{words}</div>
      ) : (
        <div className="grid gap-12 px-8 lg:grid-cols-12 lg:gap-16 lg:px-16">
          {/* Words come first in the DOM, so the heading introduces the form for keyboard and screen-reader
              users; on desktop the grid places the card on the left. */}
          <div className="flex flex-col justify-center pt-24 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:pt-0 lg:pb-24">{words}</div>

          {/* Card */}
          <div className="pb-16 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:pb-24">
            <div className="rounded-b-[var(--radius)] bg-background p-8 text-foreground sm:p-12 lg:p-16">
              {status === "sent" ? (
                <div className="flex min-h-[420px] flex-col justify-center">
                  <p ref={sentRef} tabIndex={-1} className="font-serif text-[length:var(--text-sub)] tracking-tight outline-none">Message&nbsp;sent.</p>
                  <p className="mt-3 text-muted-foreground">{"Thank you. I’ll reply within 24 hours."}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                    checked={form.botcheck}
                    onChange={(e) => setForm((f) => ({ ...f, botcheck: e.target.checked }))}
                  />
                  <div className="grid gap-8 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm text-muted-foreground">Your name</span>
                      <input name="name" autoComplete="name" required value={form.name} onChange={set("name")} className={field} />
                    </label>
                    <label className="block">
                      <span className="text-sm text-muted-foreground">Email</span>
                      <input name="email" type="email" autoComplete="email" spellCheck={false} required value={form.email} onChange={set("email")} className={field} />
                    </label>
                  </div>
                  <fieldset>
                    <legend className="text-sm text-muted-foreground">{"Topic (optional)"}</legend>
                    {/* One choice from four: real radio buttons, styled as pills. */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <label
                          key={t.value}
                          className="choice-pill inline-flex cursor-pointer items-center rounded-full border border-input-strong px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground has-[:checked]:border-foreground has-[:checked]:bg-foreground has-[:checked]:text-background has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-accent-text [@media(pointer:coarse)]:min-h-11"
                        >
                          <input
                            type="radio"
                            name="topic"
                            value={t.value}
                            checked={form.topic === t.value}
                            onChange={() => setForm((f) => ({ ...f, topic: t.value }))}
                            className="sr-only"
                          />
                          {t.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <label className="block">
                    <span className="text-sm text-muted-foreground">Message</span>
                    <textarea name="message" rows={4} required value={form.message} onChange={set("message")} className={`${field} min-h-[6lh] resize-y [field-sizing:content]`} />
                  </label>
                  {/* Always in the page, so the error is announced when it appears. */}
                  <p className="sr-only" role="status">{status === "error" ? "That didn’t go through. Please email me directly." : ""}</p>
                  {status === "error" && (
                    <p className="text-sm text-destructive">
                      {"That didn’t go through. Please email me at"}{" "}
                      <a href={`mailto:${EMAIL}`} className="link-inline">{EMAIL}</a>.
                    </p>
                  )}
                  <div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <p className="max-w-[34ch] text-xs text-muted-foreground">{"I\u00A0reply within 24\u00A0hours. Sent to\u00A0my inbox through Web3Forms and used only to\u00A0reply."}</p>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn btn-primary"
                    >
                      {status === "sending" ? "Sending…" : "Send message"} <ArrowUpRight size={14} aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      )}

      <div className="border-t border-primary-foreground/10 px-8 py-6 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-3 text-xs text-primary-foreground/50 sm:flex-row sm:items-center">
          <p>&copy; 2026 Amr Abu-Talleb &middot; Designed and built by&nbsp;me</p>
          <MotionToggle />
        </div>
      </div>
    </footer>
  )
}
