"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  { text: "Amr delivered beyond expectations. The brand identity he created captured our vision perfectly and translated seamlessly across every touchpoint. His strategic thinking elevated the entire project.", author: "Overpowered Agency", location: "UK", role: "Brand Identity" },
  { text: "Very professional and created me an amazing design.", author: "Elliot", location: "London, UK", role: "Apparel Design" },
  { text: "Fantastic work and great communication. Very happy with the outcome of report from a layout and a branding perspective.", author: "Paul", location: "Melbourne, Australia", role: "Branding" },
  { text: "Amr assisted me in a very challenging Art/Crime book project I authored. Very professional work and his continual ongoing communications and proferred insights were invaluable. I highly recommend him.", author: "Steven Hodel", location: "Blaine, United States", role: "Book Design" },
  { text: "So professional, on time, high level of skills and capabilities\u2026 don\u2019t waste your time and assign him your work, I didn\u2019t see anything with his level of accountability.", author: "Ahmed", location: "Khobar, KSA", role: "Branding" },
  { text: "Amr provided lots of new UX ideas and put them to me in a detailed explanation. He went above and beyond the project scope to deliver a renewed website and sales funnel.", author: "Robert", location: "Melbourne, Australia", role: "Funnel Copywriting & Design" },
  { text: "Dude he is the greatest of all time.", author: "Mazen", location: "Qassim, Saudi Arabia", role: "Architecture Portfolio Design" },
  { text: "Amr was able to discuss different options with me and working together with adjustments was able to create photorealistic expressions on my character. Great job. High quality stuff!", author: "Alex", location: "Melbourne, Australia", role: "Character Design" },
  { text: "Outstanding collaboration! Amr was extremely professional, fast, and precise. He quickly understood the project requirements and delivered flawless work on time. Communication was smooth, he was always available, and paid great attention to detail. Highly recommended!", author: "Stefano", location: "Valencia, Spain", role: "Website Design" },
  { text: "He is Extraordinary! Way beyond anything I expected. Amr is very talented, knowledgeable, professional, and competent. Communication in english is excellent. Prompt to resolve any issues. Goes beyond the expected for customer satisfaction.", author: "Augustina", location: "Herning, Denmark", role: "Website Design" },
  { text: "Great UI/UX designer, quick delivery and clear communication. Highly recommend working with him!", author: "Stefano", location: "Sydney, Australia", role: "Head of UX, Freelancer.com" },
  { text: "Is there a god or do angels exist? We have been thru hell with 4 previous freelancers for 2 years. All 4 were unable to complete the work. Enter Amr. He is highly intelligent, genuine and lovely. He has integrity, is extremely skilled, has good aesthetic sense and importantly, a great sense of humour!", author: "Dipa", location: "Singapore", role: "Website Design" },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [display, setDisplay] = useState(0)
  const [fading, setFading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const transition = useCallback((next: number) => {
    if (next === current || fading) return
    setFading(true)
    setTimeout(() => {
      setDisplay(next)
      setCurrent(next)
      setFading(false)
    }, 350)
  }, [current, fading])

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const next = (current + 1) % testimonials.length
      setFading(true)
      setTimeout(() => {
        setDisplay(next)
        setCurrent(next)
        setFading(false)
      }, 350)
    }, 6000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current])

  const goTo = (i: number) => transition(i)
  const goNext = () => transition((current + 1) % testimonials.length)
  const goPrev = () => transition((current - 1 + testimonials.length) % testimonials.length)
  const t = testimonials[display]

  return (
    <div>
      <div
        className="min-h-[220px] transition-opacity duration-300"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
          {"\u201C"}{t.text}{"\u201D"}
        </p>
        <div className="mt-8 flex flex-col gap-0.5">
          <p className="font-medium text-foreground">{t.author}</p>
          <p className="text-sm text-muted-foreground">{t.role} · {t.location}</p>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex items-center gap-2">
        {testimonials.map((_, i) => (
          <button
            type="button"
            key={`dot-${i}`}
            onClick={() => goTo(i)}
            className={`h-2 cursor-pointer rounded-full transition-all duration-500 ${
              i === current ? "w-6 bg-accent" : "w-2 bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          className="flex h-10 w-10 cursor-pointer items-center justify-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="flex h-10 w-10 cursor-pointer items-center justify-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          aria-label="Next testimonial"
        >
          <ChevronRight size={16} />
        </button>
        <span className="ml-2 text-xs tabular-nums text-muted-foreground">
          {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}
