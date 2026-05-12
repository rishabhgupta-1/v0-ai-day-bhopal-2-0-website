"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Bucket = { value: number; label: string }

function diff(target: Date, now: Date) {
  const ms = Math.max(0, target.getTime() - now.getTime())
  const seconds = Math.floor(ms / 1000) % 60
  const minutes = Math.floor(ms / (1000 * 60)) % 60
  const hours = Math.floor(ms / (1000 * 60 * 60)) % 24
  const days = Math.floor(ms / (1000 * 60 * 60 * 24))
  return { days, hours, minutes, seconds, ms }
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

/**
 * One digit that 3D-flips when its character changes.
 * Each digit owns its own AnimatePresence so only the changed digit animates
 * (so e.g. seconds rolling 22→23 doesn't flip the "0" tens-digit).
 */
function FlipDigit({ char }: { char: string }) {
  return (
    <span
      className="relative inline-block w-[0.62em] text-center align-baseline"
      style={{ perspective: 220 }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={char}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block will-change-transform"
          style={{
            transformOrigin: "50% 50%",
            backfaceVisibility: "hidden",
          }}
        >
          {char}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function FlipNumber({ value }: { value: number }) {
  const chars = pad(value).split("")
  return (
    <span
      className="inline-flex items-baseline tabular-nums tracking-tight"
      aria-label={String(value)}
    >
      {chars.map((c, i) => (
        <FlipDigit key={i} char={c} />
      ))}
    </span>
  )
}

/**
 * Countdown to a target ISO date.
 * SSR-safe: shows static placeholders until mounted on client, then ticks each second.
 */
export function Countdown({
  targetISO,
  className = "",
}: {
  targetISO: string
  className?: string
}) {
  const target = new Date(targetISO)
  const [mounted, setMounted] = useState(false)
  const [t, setT] = useState(() => diff(target, new Date()))

  useEffect(() => {
    setMounted(true)
    setT(diff(target, new Date()))
    const id = setInterval(() => {
      setT(diff(target, new Date()))
    }, 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetISO])

  const buckets: Bucket[] = [
    { value: t.days, label: "Days" },
    { value: t.hours, label: "Hrs" },
    { value: t.minutes, label: "Min" },
    { value: t.seconds, label: "Sec" },
  ]

  const isOver = mounted && t.ms === 0

  return (
    <div
      className={`relative inline-flex items-stretch rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.12)] ${className}`}
      aria-label="Countdown to AI Day Bhopal 2.0"
    >
      {/* faint amber wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.10),transparent_70%)]"
        aria-hidden
      />
      {/* subtle horizontal mid-line — split-flap reference */}
      <div
        className="pointer-events-none absolute left-3 right-3 top-1/2 -translate-y-px h-px bg-border/40"
        aria-hidden
      />

      {buckets.map((b, i) => (
        <div
          key={b.label}
          className={`relative flex flex-col items-center justify-center px-5 sm:px-7 py-3 sm:py-4 min-w-[64px] sm:min-w-[88px] ${
            i > 0 ? "border-l border-border/60" : ""
          }`}
        >
          <div className="text-2xl sm:text-4xl font-bold text-foreground leading-none">
            {mounted ? (
              <FlipNumber value={b.value} />
            ) : (
              <span className="tabular-nums">—</span>
            )}
          </div>
          <span className="mt-1.5 sm:mt-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            {b.label}
          </span>
        </div>
      ))}

      {isOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-card/90 backdrop-blur-sm">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            We&apos;re live · See you on stage
          </span>
        </div>
      )}
    </div>
  )
}
