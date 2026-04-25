"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Ticket } from "lucide-react"
import { FadeIn, ScaleIn } from "@/components/motion"
import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScaleIn>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
            
            {/* Animated Glow */}
            <motion.div
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"
            />
            
            {/* Content */}
            <div className="relative p-12 sm:p-16 text-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                  <Ticket className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Limited Seats</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                  Join us in May
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Secure your spot for AI Day Bhopal 2.0 now. Be part of Central India&apos;s biggest AI builder community event.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(251,146,60,0.4)] hover:shadow-[0_0_50px_rgba(251,146,60,0.6)] transition-all text-lg px-10 py-7 rounded-xl"
                    asChild
                  >
                    <Link href="/tickets">
                      Get Your Ticket
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="mt-8 text-sm text-muted-foreground">
                  Join 500+ developers already registered
                </p>
              </FadeIn>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  )
}
