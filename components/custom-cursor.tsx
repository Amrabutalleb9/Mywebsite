"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

export default function CustomCursor() {
  const [label, setLabel] = useState("")
  const [visible, setVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const labelRef = useRef(label)
  labelRef.current = label

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const findCursorLabel = useCallback((el: HTMLElement | null): string => {
    while (el) {
      const val = el.getAttribute("data-cursor-label")
      if (val) return val
      if (el.getAttribute("data-cursor-none") !== null) return ""
      el = el.parentElement
    }
    return ""
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true)
      return
    }

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)

      const target = e.target as HTMLElement
      const newLabel = findCursorLabel(target)
      if (newLabel !== labelRef.current) setLabel(newLabel)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)
    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
    }
  }, [mouseX, mouseY, visible, findCursorLabel])

  if (isTouch) return null

  const hasLabel = label.length > 0

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
    >
      {/* Default dot */}
      <motion.div
        className="rounded-full bg-foreground"
        animate={{
          width: hasLabel ? 0 : 24,
          height: hasLabel ? 0 : 24,
          opacity: visible && !hasLabel ? 0.4 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Label pill */}
      <AnimatePresence>
        {hasLabel && visible && (
          <motion.div
            key={label}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-foreground/10 bg-background/70 px-5 py-2.5 shadow-lg backdrop-blur-md"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <span className="text-xs font-medium tracking-[var(--tracking-label)] text-foreground/70 uppercase">
              {label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
