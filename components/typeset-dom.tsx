"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { tp } from "@/lib/typeset"

/**
 * Safety net for the typesetting rules: applies tp() to every visible text
 * node on the page after it renders, so strings that were not wrapped in
 * tp() still get non-breaking spaces (no line ending in "the", "a", "of",
 * no single-word last lines, numbers kept with their units). It only swaps
 * normal spaces for non-breaking ones, so the text itself never changes, and
 * it reruns when the page or a component updates its text.
 */
const SKIP = new Set(["TITLE", "META", "SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT", "SELECT", "OPTION", "CODE", "PRE", "SVG"])

function typesetTree(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      let el = node.parentElement
      while (el) {
        if (SKIP.has(el.tagName) || el.isContentEditable || el.dataset.noTypeset !== undefined) return NodeFilter.FILTER_REJECT
        el = el.parentElement
      }
      return node.nodeValue && node.nodeValue.includes(" ") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    },
  })
  const nodes: Text[] = []
  while (walker.nextNode()) nodes.push(walker.currentNode as Text)
  for (const n of nodes) {
    const v = n.nodeValue ?? ""
    // Keep leading and trailing spaces as they are: they separate this node from its neighbours.
    const m = v.match(/^(\s*)([\s\S]*?)(\s*)$/)
    if (!m || !m[2].includes(" ")) continue
    const next = m[1] + tp(m[2]) + m[3]
    if (next !== v) n.nodeValue = next
  }
}

export default function TypesetDom() {
  const pathname = usePathname()

  useEffect(() => {
    let frame = 0
    const run = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => typesetTree(document.body))
    }
    run()
    const observer = new MutationObserver((records) => {
      if (records.some((r) => r.type === "childList" || (r.type === "characterData" && (r.target.nodeValue ?? "").includes(" ")))) run()
    })
    observer.observe(document.body, { subtree: true, childList: true, characterData: true })
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [pathname])

  return null
}
