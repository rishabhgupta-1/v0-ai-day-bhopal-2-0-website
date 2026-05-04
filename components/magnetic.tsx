"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

/**
 * Wraps an interactive element and pulls it gently toward the cursor.
 * Self-disables on touch devices and reduced-motion preferences.
 */
export function Magnetic({
  children,
  strength = 0.35,
  range = 90,
  className,
}: {
  children: ReactNode
  /** 0–1, how much the element follows the cursor */
  strength?: number
  /** activation radius in px around the element */
  range?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (isTouch || reduced) return

    let raf = 0
    let nextX = 0
    let nextY = 0

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const distance = Math.hypot(dx, dy)

      if (distance < range + Math.max(r.width, r.height) / 2) {
        nextX = dx * strength
        nextY = dy * strength
      } else {
        nextX = 0
        nextY = 0
      }

      if (!raf) {
        raf = requestAnimationFrame(() => {
          x.set(nextX)
          y.set(nextY)
          raf = 0
        })
      }
    }

    const onLeave = () => {
      x.set(0)
      y.set(0)
    }

    window.addEventListener("pointermove", onMove)
    el.addEventListener("pointerleave", onLeave)
    return () => {
      window.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [range, strength, x, y])

  return (
    <motion.span
      ref={ref}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.span>
  )
}
