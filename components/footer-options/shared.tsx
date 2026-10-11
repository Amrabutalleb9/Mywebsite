"use client"

import React, { useEffect, useState } from "react"
import { submitContactForm } from "@/lib/contact"

export const EMAIL = "hello@amrabutalleb.com"
export const LINKEDIN = "https://www.linkedin.com/in/abutalleb/"
export const CV = "/Amr_AbuTalleb_CV_Creative_Director.pdf"

export const siteLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Working Together", href: "/working-together" },
  { label: "Contact", href: "/contact" },
]

export const topics = [
  { value: "fulltime", label: "A full-time role" },
  { value: "contract", label: "A contract or interim role" },
  { value: "collaboration", label: "A collaboration" },
  { value: "other", label: "Something else" },
]

/* One form state for every option. `demo` stops the lab page from sending real messages. */
export function useFooterForm(demo = false) {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState("")

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (demo) {
      setStatus("sent")
      return
    }
    setStatus("sending")
    setError("")
    const topic = topics.find((t) => t.value === form.topic)?.label.replace(/ /g, " ")
    const result = await submitContactForm({
      name: form.name,
      email: form.email,
      message: topic ? `${form.message}\n\nTopic: ${topic}` : form.message,
    })
    if (result.success) setStatus("sent")
    else {
      setStatus("error")
      setError(result.error || "Something went wrong. Please email me directly.")
    }
  }

  return { form, setForm, set, submit, status, error }
}

/* Local time in Cairo, so a recruiter in Berlin or London knows when I'll answer. */
export function CairoClock({ className = "" }: { className?: string }) {
  const [t, setT] = useState("")
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Cairo" })
    const tick = () => setT(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])
  return <span className={`[font-variant-numeric:lining-nums_tabular-nums] ${className}`}>{t || " "}</span>
}

export function Copyright({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start justify-between gap-3 text-xs text-primary-foreground/50 sm:flex-row sm:items-center ${className}`}>
      <p>&copy; 2026 Amr Abu-Talleb &middot; Designed and built by&nbsp;me</p>
      <p>Based in Cairo &middot; Relocating to&nbsp;Europe</p>
    </div>
  )
}
