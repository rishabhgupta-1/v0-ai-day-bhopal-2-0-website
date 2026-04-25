"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo Animation */}
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-primary rounded-2xl blur-xl"
                />
                
                {/* Main box */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary"
                >
                  {/* Inner pattern */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-2 rounded-xl bg-background flex items-center justify-center"
                  >
                    <span className="text-2xl font-bold text-primary">AI</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-xl font-semibold text-foreground mb-2">
                AI Day Bhopal 2.0
              </h2>
              <p className="text-sm text-muted-foreground">
                Loading experience...
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              />
            </div>
          </div>

          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 20,
                  opacity: 0.5,
                }}
                animate={{
                  y: -20,
                  opacity: [0.5, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
