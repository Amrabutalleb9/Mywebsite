"use client"

import Image from "next/image"
import { X } from "lucide-react"

interface LightboxProps {
  src: string
  onClose: () => void
}

export function Lightbox({ src, onClose }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={(e) => { if (e.key === "Escape") onClose() }}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Close"
        autoFocus
      >
        <X size={20} />
      </button>
      <Image
        src={src}
        alt="Enlarged project image"
        width={1400}
        height={900}
        className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
