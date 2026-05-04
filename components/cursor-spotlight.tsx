"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

/**
 * A soft amber radial spotlight that follows the cursor inside its parent.
 * Self-disables on touch devices and on `prefers-reduced-motion`.
 * Drop it inside a `relative` container.
 */
export function CursorSpotlight({
  size = 540,
  color = "rgba(245,158,11,0.18)",
  className = "",
}: {
  size?: number
  color?: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (isTouch || reduced) return
    setEnabled(true)

    const el = ref.current?.parentElement
    if (!el) return

    let raf = 0
    let nextX = 0
    let nextY = 0
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      nextX = e.clientX - rect.left
      nextY = e.clientY - rect.top
      if (!raf) {
        raf = requestAnimationFrame(() => {
          setPos({ x: nextX, y: nextY })
          raf = 0
        })
      }
    }
    const onLeave = () => setPos(null)

    el.addEventListener("pointermove", onMove)
    el.addEventListener("pointerleave", onLeave)
    return () => {
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return <div ref={ref} aria-hidden className="hidden" />

  return (
    <motion.div
      ref={ref}
      aria-hidden
      animate={{
        opacity: pos ? 1 : 0,
        x: pos ? pos.x - size / 2 : 0,
        y: pos ? pos.y - size / 2 : 0,
      }}
      transition={{ type: "spring", stiffness: 140, damping: 22, mass: 0.4 }}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at center, ${color}, transparent 60%)`,
      }}
      className={`pointer-events-none absolute top-0 left-0 rounded-full blur-2xl mix-blend-screen ${className}`}
    />
  )
}
