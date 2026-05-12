"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * Compact theme toggle button.
 *
 * - SSR-safe: renders a placeholder of the correct shape until mounted so the
 *   server/client markup matches and we don't get a hydration warning.
 * - Animated icon swap (sun ⇄ moon) — purely decorative, never blocks toggle.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"
  const next = isDark ? "light" : "dark"

  const baseClasses = cn(
    "relative inline-flex items-center justify-center h-9 w-9 rounded-lg",
    "border border-border/70 bg-card/40 text-muted-foreground",
    "hover:text-foreground hover:bg-primary/10 hover:border-primary/40",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
    "transition-colors",
    className,
  )

  // Placeholder while next-themes hydrates — keeps layout stable.
  if (!mounted) {
    return (
      <span
        aria-hidden
        className={cn(baseClasses, "pointer-events-none opacity-60")}
      />
    )
  }

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.92 }}
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={baseClasses}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -45, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 45, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="h-4 w-4" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 45, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -45, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="h-4 w-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
