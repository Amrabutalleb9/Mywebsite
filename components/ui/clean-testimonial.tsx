"use client"

import type React from "react"
import { useState, useCallback, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { type Testimonial } from "@/lib/shared-data"

export type TestimonialItem = Testimonial & { avatar?: string }

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

function usePreloadImages(images: string[]) {
  useEffect(() => {
    images.filter(Boolean).forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [images])
}

function SplitText({ text }: { text: string }) {
  const words = text.split(" ")

  return (
    <span className="inline">
      {words.map((word, i) => (
        <span
          key={i}
          className="mr-[0.25em] inline-block animate-[wordReveal_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          style={{ animationDelay: `${i * 30}ms`, opacity: 0 }}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

export function CleanTestimonial({
  testimonials,
  className = "",
}: {
  testimonials: TestimonialItem[]
  className?: string
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const localCursorRef = useRef<HTMLDivElement>(null)

  usePreloadImages(testimonials.map((t) => t.avatar || ""))

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current || !localCursorRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      localCursorRef.current.style.transform = `translate3d(${e.clientX - rect.left}px, ${e.clientY - rect.top}px, 0) translate(-50%, -50%)`
    },
    [],
  )

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
      e.preventDefault()
      handleNext()
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      handlePrev()
    }
  }

  if (testimonials.length === 0) return null
  const current = testimonials[activeIndex]

  return (
    <div
      ref={containerRef}
      className={`relative w-full py-16 px-8 select-none ${className}`}
      style={{ cursor: "none" }}
      data-cursor-none
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNext}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      {/* Magnetic cursor — hidden on touch devices */}
      <div
        ref={localCursorRef}
        className="pointer-events-none absolute z-50 hidden md:block"
        style={{ willChange: "transform", transition: "none" }}
      >
        <div
          className="flex items-center justify-center rounded-full bg-black"
          style={{
            width: isHovered ? 80 : 0,
            height: isHovered ? 80 : 0,
            opacity: isHovered ? 1 : 0,
            transition: "width 0.3s cubic-bezier(0.23,1,0.32,1), height 0.3s cubic-bezier(0.23,1,0.32,1), opacity 0.2s",
          }}
        >
          <span
            className="text-xs font-medium tracking-wider text-white uppercase"
            style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.15s 0.1s" }}
          >
            Next
          </span>
        </div>
      </div>

      {/* Index indicator */}
      <motion.div
        className="absolute top-6 right-8 flex items-baseline gap-1 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          className="text-2xl font-light text-foreground"
          key={activeIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </motion.span>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">
          {String(testimonials.length).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Stacked initials */}
      <motion.div
        className="absolute top-6 left-8 flex -space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.6 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`w-6 h-6 rounded-full border-2 border-background overflow-hidden flex items-center justify-center transition-all duration-300 ${
              i === activeIndex
                ? "ring-1 ring-accent ring-offset-1 ring-offset-background"
                : "opacity-50"
            }`}
            whileHover={{ scale: 1.1, opacity: 1 }}
          >
            {t.avatar ? (
              <img
                src={t.avatar}
                alt={t.author}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-[length:var(--text-micro)] font-medium bg-accent text-accent-foreground w-full h-full flex items-center justify-center">
                {getInitials(t.author)}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <div className="relative mt-8">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="font-serif text-xl md:text-2xl font-normal leading-relaxed tracking-tight text-foreground italic"
          >
            {"\u201C"}
            <SplitText text={current.text} />
            {"\u201D"}
          </motion.blockquote>
        </AnimatePresence>

        {/* Author */}
        <motion.div className="mt-10 relative" layout>
          <div className="flex items-center gap-4">
            <div className="relative w-11 h-11">
              <motion.div
                className="absolute -inset-1.5 rounded-full border border-accent/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {testimonials.map((t, i) =>
                t.avatar ? (
                  <motion.img
                    key={i}
                    src={t.avatar}
                    alt={t.author}
                    loading="lazy"
                    className="absolute inset-0 w-11 h-11 rounded-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                    animate={{
                      opacity: i === activeIndex ? 1 : 0,
                      zIndex: i === activeIndex ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                ) : (
                  <motion.div
                    key={i}
                    className="absolute inset-0 w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center"
                    animate={{
                      opacity: i === activeIndex ? 1 : 0,
                      zIndex: i === activeIndex ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <span className="text-sm font-medium text-accent">
                      {getInitials(t.author)}
                    </span>
                  </motion.div>
                ),
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative pl-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-px bg-accent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ originY: 0 }}
                />
                <span className="block text-sm font-medium text-foreground tracking-wide">
                  {current.author}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5 uppercase tracking-widest">
                  {current.role}
                  {current.location && ` \u00B7 ${current.location}`}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-14 h-px bg-border relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent"
            initial={{ width: "0%" }}
            animate={{
              width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Hint */}
      <motion.p
        className="mt-8 text-[length:var(--text-micro)] text-muted-foreground uppercase tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0.15 }}
        transition={{ duration: 0.3 }}
      >
        Click anywhere
      </motion.p>
    </div>
  )
}
