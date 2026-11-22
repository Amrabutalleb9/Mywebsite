"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"

/* A case-study image that opens full size. A real <button>: Enter and Space both work, and its name
   keeps the image's own description ("View full size: …"). With zoomable={false} (videos) it is a plain
   frame, so the video's own controls are never nested inside a button. */
export function ZoomFrame({
  children,
  label,
  onZoom,
  className = "",
  zoomable = true,
}: {
  children: React.ReactNode
  label: string
  onZoom: () => void
  className?: string
  zoomable?: boolean
}) {
  if (!zoomable) return <div className={className}>{children}</div>
  return (
    <button
      type="button"
      onClick={onZoom}
      aria-label={label}
      className={`project-img-wrap block w-full cursor-pointer p-0 text-left ${className}`}
    >
      {children}
    </button>
  )
}

interface LightboxProps {
  image: { src: string; alt: string } | null
  onClose: () => void
}

/* The full-size viewer is a native modal <dialog>: the browser traps focus, makes the page behind it
   inert, closes it on Escape and returns focus to the image that opened it. Clicking outside the
   image closes it too. */
export function Lightbox({ image, onClose }: LightboxProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (image && !dialog.open) dialog.showModal()
    if (!image && dialog.open) dialog.close()
  }, [image])

  return (
    <dialog
      ref={ref}
      aria-label={image ? `Full size: ${image.alt}` : "Full-size image"}
      onClose={onClose}
      onClick={(e) => { if (e.target === e.currentTarget) ref.current?.close() }}
      className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-4 backdrop:bg-primary/90 backdrop:backdrop-blur-sm open:flex open:items-center open:justify-center"
    >
      {image && (
        <>
          <button
            type="button"
            autoFocus
            onClick={() => ref.current?.close()}
            className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/30"
            aria-label="Close"
          >
            <X size={18} aria-hidden="true" />
          </button>
          <Image
            src={image.src}
            alt={image.alt}
            width={1400}
            height={900}
            sizes="100vw"
            className="max-h-[90dvh] max-w-[95vw] rounded-lg object-contain"
          />
        </>
      )}
    </dialog>
  )
}
