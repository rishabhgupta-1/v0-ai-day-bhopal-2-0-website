"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * The ML Bhopal "M" mark — original asset, peaks-only PNG with the white
 * background removed and the "Bhopal" wordmark cropped off. Renders crisp
 * on any surface.
 *
 * Source: derived once from `/public/logo-horizontal.png` via a small
 * crop + transparency pass; see commit notes.
 */
export function LogoMark({
  className,
  title = "ML Bhopal",
  animated = true,
}: {
  className?: string
  title?: string
  animated?: boolean
}) {
  return (
    <motion.span
      role="img"
      aria-label={title}
      initial="rest"
      whileHover={animated ? "hover" : undefined}
      animate="rest"
      variants={{
        rest: { y: 0 },
        hover: { y: -2, transition: { duration: 0.25 } },
      }}
      className={cn("inline-block", className)}
    >
      <Image
        src="/logo-mark.png"
        alt={title}
        width={100}
        height={119}
        priority
        className="h-full w-auto"
      />
    </motion.span>
  )
}

/**
 * Brand lockup: real peaks asset + custom "Bhopal" wordmark in white so it
 * reads crisply on dark surfaces. No backdrop, no halo.
 */
export function Logo({
  variant = "compact",
  className,
}: {
  variant?: "compact" | "stacked"
  className?: string
}) {
  if (variant === "stacked") {
    return (
      <div className={cn("flex flex-col items-center gap-2", className)}>
        <LogoMark className="h-14" />
        <span className="text-sm font-semibold tracking-wide text-foreground">
          Bhopal
        </span>
      </div>
    )
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-8" />
      <span className="text-lg font-bold tracking-tight text-foreground">
        Bhopal
      </span>
    </span>
  )
}
