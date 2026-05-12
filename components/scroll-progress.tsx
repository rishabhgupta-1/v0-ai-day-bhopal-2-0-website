"use client"

import { motion, useScroll, useSpring } from "framer-motion"

/**
 * Thin amber bar pinned to the top of the viewport, fills as the user scrolls.
 * Sits *above* the navbar (z-index higher) so it always reads.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.4,
  })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]"
      aria-hidden
    />
  )
}
