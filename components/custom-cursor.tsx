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

  const springConfig = { damping: 25, stiffness: 150 }
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
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block mix-blend-difference"
      style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-foreground"
        animate={{
          width: hasLabel ? 100 : visible ? 20 : 0,
          height: hasLabel ? 100 : visible ? 20 : 0,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      >
        <AnimatePresence>
          {hasLabel && (
            <motion.span
              key={label}
              className="text-[10px] font-medium tracking-[var(--tracking-label)] text-background uppercase"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
