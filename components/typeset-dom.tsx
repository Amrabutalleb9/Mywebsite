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

function skipped(el: Element | null) {
  while (el) {
    if (SKIP.has(el.tagName) || (el as HTMLElement).isContentEditable || (el as HTMLElement).dataset?.noTypeset !== undefined) return true
    el = el.parentElement
  }
  return false
}

/** Text nodes under `root` that may need typesetting. */
function collect(root: Node, out: Text[]) {
  if (root.nodeType === Node.TEXT_NODE) {
    const t = root as Text
    if (skipped(t.parentElement)) return
    if (t.nodeValue && t.nodeValue.includes(" ")) out.push(t)
    return
  }
  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return
  if (root instanceof Element && skipped(root)) return
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      let el = node.parentElement
      while (el && el !== root) {
        if (SKIP.has(el.tagName) || el.isContentEditable || el.dataset.noTypeset !== undefined) return NodeFilter.FILTER_REJECT
        el = el.parentElement
      }
      return node.nodeValue && node.nodeValue.includes(" ") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    },
  })
  while (walker.nextNode()) out.push(walker.currentNode as Text)
}

function typesetNode(n: Text) {
  const v = n.nodeValue ?? ""
  // Keep leading and trailing spaces as they are: they separate this node from its neighbours.
  const m = v.match(/^(\s*)([\s\S]*?)(\s*)$/)
  if (!m || !m[2].includes(" ")) return
  const next = m[1] + tp(m[2]) + m[3]
  if (next !== v) n.nodeValue = next
}

// Yield to the browser between slices so a long page never blocks input in one long task.
const yieldToMain = () =>
  new Promise<void>((resolve) => {
    const s = (globalThis as { scheduler?: { yield?: () => Promise<void> } }).scheduler
    if (s?.yield) s.yield().then(resolve)
    else setTimeout(resolve, 0)
  })

export default function TypesetDom() {
  const pathname = usePathname()

  useEffect(() => {
    let cancelled = false
    let queued: Node[] = [document.body]
    let running = false

    // Only the nodes that changed are processed (the whole page once on load, then just what components
    // add), in slices of about 8ms. The observer is paused while this component writes, so its own
    // edits never trigger another pass.
    const observer = new MutationObserver((records) => {
      for (const r of records) {
        if (r.type === "childList") r.addedNodes.forEach((n) => queued.push(n))
        else if (r.type === "characterData" && (r.target.nodeValue ?? "").includes(" ")) queued.push(r.target)
      }
      if (queued.length) run()
    })
    const watch = () => observer.observe(document.body, { subtree: true, childList: true, characterData: true })

    const run = async () => {
      if (running) return
      running = true
      while (queued.length && !cancelled) {
        const roots = queued
        queued = []
        const nodes: Text[] = []
        for (const r of roots) if (r.isConnected) collect(r, nodes)
        let i = 0
        while (i < nodes.length && !cancelled) {
          const start = performance.now()
          // Keep changes made by others since the last callback, then pause watching while writing.
          for (const r of observer.takeRecords()) {
            if (r.type === "childList") r.addedNodes.forEach((n) => queued.push(n))
            else if (r.type === "characterData") queued.push(r.target)
          }
          observer.disconnect()
          while (i < nodes.length && performance.now() - start < 8) typesetNode(nodes[i++])
          watch()
          if (i < nodes.length) await yieldToMain()
        }
      }
      running = false
    }

    watch()
    run()
    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [pathname])

  return null
}
