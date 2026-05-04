"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { LogoMark } from "@/components/logo"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background bg-dot-grid"
        >
          {/* radial wash */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.18),transparent_60%)]"
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center gap-5"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="drop-shadow-[0_0_22px_rgba(245,158,11,0.45)]"
            >
              <LogoMark className="h-14 w-auto" />
            </motion.div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-base font-semibold tracking-wide text-foreground">
                ML Bhopal
              </span>
              <div className="relative h-px w-32 overflow-hidden rounded-full bg-border/60">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </div>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="text-xs uppercase tracking-[0.25em] text-muted-foreground"
              >
                Loading AI Day Bhopal 2.0
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
