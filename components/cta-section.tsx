"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Ticket } from "lucide-react"
import { FadeIn, ScaleIn } from "@/components/motion"
import { motion } from "framer-motion"
import Link from "next/link"
import { Magnetic } from "@/components/magnetic"
import { EVENT } from "@/lib/event"

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScaleIn>
          <div className="relative rounded-3xl overflow-hidden border border-primary/25">
            {/* Background gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-amber-500/10"
              aria-hidden
            />
            <div className="absolute inset-0 bg-dot-grid opacity-50" aria-hidden />

            {/* Animated glow */}
            <motion.div
              animate={{
                opacity: [0.3, 0.55, 0.3],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-primary/30 rounded-full blur-[120px]"
              aria-hidden
            />

            <div className="relative p-10 sm:p-14 md:p-16 text-center">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-7">
                  <Ticket className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Limited seats
                  </span>
                </span>
              </FadeIn>

              <FadeIn delay={0.05}>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-5 tracking-tight text-balance">
                  We close ticketing when{" "}
                  <span className="text-gradient-amber">
                    the room is full.
                  </span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-base sm:text-lg text-muted-foreground mb-9 max-w-2xl mx-auto">
                  Last year that was three days early. Don&apos;t be the dev
                  reading the recap on Monday.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <Magnetic strength={0.4} range={100}>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="inline-block"
                  >
                    <Button
                      size="lg"
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition-shadow text-base px-8 py-6 rounded-xl"
                    >
                      <Link href="/tickets">
                        Get Your Ticket
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </Magnetic>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mt-7 text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
                  Builders from MANIT · IIIT · LNCT · MP startups · already in
                </p>
              </FadeIn>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  )
}
