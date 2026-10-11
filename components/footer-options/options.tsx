"use client"

import React from "react"
import { ArrowUpRight, ArrowDown } from "lucide-react"
import { useMarquee } from "@/hooks/use-marquee"
import { EMAIL, LINKEDIN, CV, siteLinks, topics, useFooterForm, CairoClock, Copyright } from "./shared"

const label = "text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase"
const subLabel = "text-xs font-semibold tracking-[var(--tracking-sublabel)] text-primary-foreground/50 uppercase"
const darkLink = "text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"

/* ───────────────────────── A · The Sign-off ─────────────────────────
   No form. One question, the email set like a headline, a quiet index,
   and the name cropped at the bottom edge like a letterhead. */
export function FooterSignoff() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="px-8 pt-24 lg:px-16 lg:pt-32">
        <p className={label}>{"Let’s talk"}</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-end">
          <h2 className="font-serif text-[length:var(--text-display)] font-normal leading-[var(--leading-display)] tracking-[var(--tracking-display)] lg:col-span-8">
            Hiring a&nbsp;creative director?
          </h2>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="max-w-[40ch] text-base leading-relaxed text-primary-foreground/70">
              {"Tell me about the role or what you want to build. I reply within 24 hours."}
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground bg-primary-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-primary uppercase transition-colors hover:bg-transparent hover:text-primary-foreground"
            >
              Write to&nbsp;me <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="group mt-16 inline-block font-serif text-[length:var(--text-sub)] tracking-tight text-primary-foreground lg:mt-20"
        >
          <span className="bg-[linear-gradient(var(--accent),var(--accent))] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-[length:100%_1px] motion-reduce:transition-none">
            {EMAIL}
          </span>
        </a>

        <div className="mt-16 grid grid-cols-2 gap-y-10 border-t border-primary-foreground/10 pt-10 lg:mt-20 lg:grid-cols-4">
          <div>
            <p className={subLabel}>Site</p>
            <ul className="mt-4 flex flex-col gap-2">
              {siteLinks.map((l) => (
                <li key={l.href}><a href={l.href} className={darkLink}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className={subLabel}>Elsewhere</p>
            <ul className="mt-4 flex flex-col gap-2">
              <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={darkLink}>LinkedIn</a></li>
              <li><a href={CV} download className={darkLink}>Download&nbsp;CV</a></li>
            </ul>
          </div>
          <div>
            <p className={subLabel}>Status</p>
            <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-primary-foreground/70">
              {"Open to Creative Director roles in Europe, on‑site or remote."}
            </p>
          </div>
          <div>
            <p className={subLabel}>Cairo time</p>
            <p className="mt-4 text-sm text-primary-foreground/70"><CairoClock /> &middot; GMT+3</p>
          </div>
        </div>
      </div>

      <div className="mt-16 px-8 lg:px-16">
        <Copyright />
      </div>

      {/* The name, cropped by the page edge */}
      <p
        aria-hidden="true"
        className="pointer-events-none mt-10 -mb-[0.14em] select-none whitespace-nowrap text-center font-serif text-[12.6vw] leading-[0.8] tracking-[var(--tracking-display)] text-primary-foreground"
      >
        {"Amr Abu\u2011Talleb"}
      </p>
    </footer>
  )
}

/* ───────────────────────── B · The Form, Done Properly ─────────────────────────
   Keeps today's idea (a white card hanging from the top edge) but gives it room:
   the card takes half the width, name and email sit side by side, the topic is
   one tap, and focus is a gold underline instead of a box. */
export function FooterHangingCard({ demo = false }: { demo?: boolean }) {
  const { form, setForm, set, submit, status, error } = useFooterForm(demo)
  const field =
    "mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/50 focus:border-accent"

  return (
    <footer className="relative bg-primary text-primary-foreground">
      <div className="grid gap-12 px-8 lg:grid-cols-12 lg:gap-16 lg:px-16">
        {/* Card */}
        <div className="order-2 pb-16 lg:order-1 lg:col-span-7 lg:pb-24">
          <div className="rounded-b-[var(--radius)] bg-background p-8 sm:p-10 lg:p-14">
            {status === "sent" ? (
              <div className="flex min-h-[420px] flex-col justify-center" aria-live="polite">
                <p className="font-serif text-[length:var(--text-sub)] tracking-tight text-foreground">Message&nbsp;sent.</p>
                <p className="mt-3 text-muted-foreground">{"I’ll reply within 24 hours."}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm text-muted-foreground">Your name</span>
                    <input name="name" autoComplete="name" required value={form.name} onChange={set("name")} className={field} />
                  </label>
                  <label className="block">
                    <span className="text-sm text-muted-foreground">Email</span>
                    <input name="email" type="email" autoComplete="email" required value={form.email} onChange={set("email")} className={field} />
                  </label>
                </div>
                <fieldset>
                  <legend className="text-sm text-muted-foreground">{"What’s it about?"}</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        type="button"
                        key={t.value}
                        aria-pressed={form.topic === t.value}
                        onClick={() => setForm((f) => ({ ...f, topic: f.topic === t.value ? "" : t.value }))}
                        className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                          form.topic === t.value
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-foreground hover:border-foreground"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <label className="block">
                  <span className="text-sm text-muted-foreground">Message</span>
                  <textarea name="message" rows={4} required value={form.message} onChange={set("message")} className={`${field} resize-none`} />
                </label>
                {error && <p className="text-sm text-destructive" aria-live="polite">{error} <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a></p>}
                <div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <p className="text-xs text-muted-foreground">I&nbsp;reply within 24&nbsp;hours.</p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-10 py-4 text-xs font-medium tracking-[var(--tracking-label)] text-background uppercase transition-colors hover:bg-transparent hover:text-foreground disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending…" : "Send message"} <ArrowUpRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Words */}
        <div className="order-1 flex flex-col justify-center pt-24 lg:order-2 lg:col-span-5 lg:pt-0 lg:pb-24">
          <p className={label}>{"Let’s talk"}</p>
          <h2 className="mt-6 font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight">
            Hiring, or&nbsp;have something worth building&nbsp;together?
          </h2>
          <p className="mt-6 max-w-[40ch] text-base leading-relaxed text-primary-foreground/70">
            {"Write to me here, or directly at"}{" "}
            <a href={`mailto:${EMAIL}`} className="text-primary-foreground underline decoration-accent underline-offset-4">{EMAIL}</a>.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            <a href="/working-together" className={darkLink}>Working together</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={darkLink}>LinkedIn</a>
            <a href={CV} download className={darkLink}>Download&nbsp;CV</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-8 py-6 lg:px-16">
        <Copyright />
      </div>
    </footer>
  )
}

/* ───────────────────────── C · The Band ─────────────────────────
   Closes the page the way it opens: the black client band returns as a moving
   serif line that is itself the call to action, over three hairline columns
   that echo the hero stats. */
export function FooterBand() {
  const { trackRef, pause, resume } = useMarquee(45)
  const words = ["Let’s talk", "Hiring a creative director?", "Write to me"]
  return (
    <footer className="bg-primary text-primary-foreground">
      <a
        href="/contact"
        className="group relative block overflow-hidden border-b border-primary-foreground/10 py-10 lg:py-14"
        onMouseEnter={pause}
        onMouseLeave={resume}
        aria-label="Let's talk: go to the contact page"
      >
        <div ref={trackRef} style={{ display: "flex", gap: "2rem", width: "max-content", willChange: "transform" }} aria-hidden="true">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8 whitespace-nowrap font-serif text-[length:var(--text-display)] leading-none tracking-[var(--tracking-display)] transition-colors duration-500 group-hover:text-accent">
              {w}
              <span className="text-accent">{"·"}</span>
            </span>
          ))}
        </div>
      </a>

      <div className="grid divide-y divide-primary-foreground/10 px-8 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-16">
        <div className="py-10 lg:py-14 lg:pr-10">
          <p className={subLabel}>Email</p>
          <a href={`mailto:${EMAIL}`} className="mt-4 block font-serif text-2xl tracking-tight transition-colors hover:text-accent lg:text-3xl">{EMAIL}</a>
          <p className="mt-3 text-sm text-primary-foreground/50">I&nbsp;reply within 24&nbsp;hours.</p>
        </div>
        <div className="py-10 lg:px-10 lg:py-14">
          <p className={subLabel}>Status</p>
          <p className="mt-4 font-serif text-2xl tracking-tight lg:text-3xl">Open to&nbsp;roles in&nbsp;Europe</p>
          <p className="mt-3 text-sm text-primary-foreground/50">On&#8209;site or&nbsp;remote &middot; Cairo <CairoClock /></p>
        </div>
        <div className="py-10 lg:py-14 lg:pl-10">
          <p className={subLabel}>Elsewhere</p>
          <div className="mt-4 flex flex-col gap-3">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-serif text-2xl tracking-tight transition-colors hover:text-accent lg:text-3xl">LinkedIn <ArrowUpRight size={18} /></a>
            <a href={CV} download className="inline-flex items-center gap-2 font-serif text-2xl tracking-tight transition-colors hover:text-accent lg:text-3xl">Download CV <ArrowDown size={18} /></a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 border-t border-primary-foreground/10 px-8 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {siteLinks.map((l) => <a key={l.href} href={l.href} className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground">{l.label}</a>)}
        </nav>
        <p className="text-xs text-primary-foreground/50">&copy; 2026 Amr Abu-Talleb &middot; Designed and built by&nbsp;me</p>
      </div>
    </footer>
  )
}

/* ───────────────────────── D · The Letter ─────────────────────────
   The form is a sentence. You fill in the blanks of a short letter, set in
   the serif, and sign it with send. A typographer's contact form. */
export function FooterLetter({ demo = false }: { demo?: boolean }) {
  const { form, set, submit, status, error } = useFooterForm(demo)
  const blank =
    "mx-1 inline-block border-0 border-b border-primary-foreground/30 bg-transparent px-1 pb-1 align-baseline font-serif text-primary-foreground outline-none transition-colors duration-300 placeholder:text-primary-foreground/30 focus:border-accent"

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="grid gap-16 px-8 pt-24 pb-20 lg:grid-cols-12 lg:px-16 lg:pt-32 lg:pb-28">
        <div className="lg:col-span-3">
          <p className={label}>{"Let’s talk"}</p>
          <p className="mt-6 max-w-[30ch] text-sm leading-relaxed text-primary-foreground/70">
            {"Fill in the blanks and send. It comes straight to my inbox, and I reply within 24 hours."}
          </p>
          <div className="mt-10 flex flex-col gap-2">
            <a href={`mailto:${EMAIL}`} className={darkLink}>{EMAIL}</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={darkLink}>LinkedIn</a>
            <a href={CV} download className={darkLink}>Download&nbsp;CV</a>
            <a href="/working-together" className={darkLink}>Working together</a>
          </div>
        </div>

        <div className="lg:col-span-9">
          {status === "sent" ? (
            <p className="font-serif text-[length:var(--text-section)] leading-[var(--leading-heading)] tracking-tight" aria-live="polite">
              {"Thank you, "}{form.name.split(" ")[0] || "and talk soon"}{". I’ll write back within 24 hours."}
            </p>
          ) : (
            <form onSubmit={submit} className="font-serif text-[length:var(--text-sub)] leading-[1.9] tracking-tight">
              <p>
                Hello Amr, my&nbsp;name is
                <input aria-label="Your name" name="name" autoComplete="name" required placeholder="your name" value={form.name} onChange={set("name")} className={`${blank} w-[7.5em]`} />
                and I&rsquo;m writing about
                <select aria-label="What it's about" value={form.topic} onChange={set("topic")} className={`${blank} w-auto cursor-pointer appearance-none pr-2 [&>option]:bg-primary [&>option]:font-sans [&>option]:text-base`}>
                  <option value="">something</option>
                  {topics.map((t) => <option key={t.value} value={t.value}>{t.label.replace(/ /g, " ").toLowerCase()}</option>)}
                </select>
                . You can reach me at
                <input aria-label="Your email" name="email" type="email" autoComplete="email" required placeholder="your email" value={form.email} onChange={set("email")} className={`${blank} w-[10em]`} />
                .
              </p>
              <label className="mt-8 block">
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  rows={3}
                  required
                  placeholder="A few lines about the role or the project…"
                  value={form.message}
                  onChange={set("message")}
                  className="w-full resize-none border-0 border-b border-primary-foreground/30 bg-transparent pb-2 font-sans text-lg leading-relaxed text-primary-foreground outline-none transition-colors duration-300 placeholder:text-primary-foreground/30 focus:border-accent"
                />
              </label>
              {error && <p className="mt-4 font-sans text-sm text-destructive" aria-live="polite">{error}</p>}
              <div className="mt-10 flex items-center gap-6">
                <span className="h-px w-12 bg-accent" aria-hidden="true" />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground bg-primary-foreground px-10 py-4 font-sans text-xs font-medium tracking-[var(--tracking-label)] text-primary uppercase transition-colors hover:bg-transparent hover:text-primary-foreground disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Send the letter"} <ArrowUpRight size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-8 py-6 lg:px-16">
        <Copyright />
      </div>
    </footer>
  )
}

/* ───────────────────────── E · The Index ─────────────────────────
   The closing line of the bio as the last word on every page, over the hero's
   grid, with an index of the work and a live Cairo clock. */
export function FooterIndex() {
  const work = [
    { label: "SPLT", href: "/work/split" },
    { label: "Agfin", href: "/work/agfin" },
    { label: "As Within, So Without", href: "/work/steve-hodel" },
    { label: "All projects", href: "/projects" },
  ]
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative grid gap-16 px-8 pt-24 lg:grid-cols-12 lg:px-16 lg:pt-32">
        <div className="lg:col-span-6">
          <h2 className="font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight">
            The next team I&nbsp;build will be&nbsp;in&nbsp;Europe.
          </h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground bg-primary-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-primary uppercase transition-colors hover:bg-transparent hover:text-primary-foreground">
              {"Let’s talk"} <ArrowUpRight size={14} />
            </a>
            <a href={CV} download className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] uppercase transition-colors hover:border-primary-foreground">
              Download&nbsp;CV <ArrowDown size={14} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6 lg:gap-0 lg:divide-x lg:divide-primary-foreground/10">
          {[
            { title: "Work", items: work.map((w) => ({ ...w, ext: false })) },
            { title: "Site", items: siteLinks.map((s) => ({ ...s, ext: false })) },
            {
              title: "Contact",
              items: [
                { label: "Email", href: `mailto:${EMAIL}`, ext: false },
                { label: "LinkedIn", href: LINKEDIN, ext: true },
              ],
            },
          ].map((col) => (
            <div key={col.title} className="lg:px-8 first:lg:pl-0">
              <p className={subLabel}>{col.title}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <a href={it.href} {...(it.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={darkLink}>{it.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-24 grid grid-cols-1 divide-y divide-primary-foreground/10 border-t border-primary-foreground/10 px-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-16">
        <div className="py-6 sm:pr-6">
          <p className="font-serif text-2xl tracking-tight"><CairoClock /></p>
          <p className="mt-1 text-xs text-primary-foreground/50">Cairo, GMT+3</p>
        </div>
        <div className="py-6 sm:px-6">
          <p className="font-serif text-2xl tracking-tight [font-variant-numeric:lining-nums]">24h</p>
          <p className="mt-1 text-xs text-primary-foreground/50">Reply time</p>
        </div>
        <div className="py-6 sm:pl-6">
          <p className="font-serif text-2xl tracking-tight">Europe</p>
          <p className="mt-1 text-xs text-primary-foreground/50">On&#8209;site or&nbsp;remote</p>
        </div>
      </div>
      <div className="relative border-t border-primary-foreground/10 px-8 py-6 lg:px-16">
        <Copyright />
      </div>
    </footer>
  )
}
