import type { Metadata } from "next"
import { FooterSignoff, FooterHangingCard, FooterBand, FooterLetter, FooterIndex } from "@/components/footer-options/options"

export const metadata: Metadata = {
  title: "Footer options",
  robots: { index: false, follow: false },
}

const options = [
  { id: "a", name: "A · The Sign-off", note: "No form. One question, the email set like a headline, a quiet index, and the name cropped at the bottom edge.", el: <FooterSignoff /> },
  { id: "b", name: "B · The Form, Done Properly", note: "Today’s hanging white card, twice as wide. Name and email side by side, topic in one tap, gold underline on focus.", el: <FooterHangingCard demo /> },
  { id: "c", name: "C · The Band", note: "The black client band returns as a moving “Let’s talk” line you can click, over three hairline columns like the hero stats.", el: <FooterBand /> },
  { id: "d", name: "D · The Letter", note: "The form is a sentence in the serif. Fill in the blanks and send the letter.", el: <FooterLetter demo /> },
  { id: "e", name: "E · The Index", note: "The last line of your bio as the last word on every page, over the hero grid, with a work index and a live Cairo clock.", el: <FooterIndex /> },
]

export default function FooterLab() {
  return (
    <main className="bg-background">
      {options.map((o) => (
        <section key={o.id} id={o.id}>
          <div className="flex flex-col gap-2 px-8 pt-24 pb-10 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:pt-32">
            <h2 className="font-serif text-[length:var(--text-section)] font-normal tracking-tight text-foreground">{o.name}</h2>
            <p className="max-w-[52ch] text-sm leading-relaxed text-muted-foreground">{o.note}</p>
          </div>
          {o.el}
        </section>
      ))}
    </main>
  )
}
