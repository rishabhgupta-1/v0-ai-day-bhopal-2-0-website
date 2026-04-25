"use client"

import { MapPin } from "lucide-react"
import { FadeIn, ScaleIn } from "@/components/motion"
import { motion } from "framer-motion"

export function VenueSection() {
  return (
    <section id="venue" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Venue
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>LNCT Group of Colleges, Bhopal</span>
          </div>
        </FadeIn>

        <ScaleIn>
          <motion.div 
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            className="relative rounded-3xl overflow-hidden border border-border aspect-video bg-card"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <MapPin className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  LNCT Group of Colleges
                </h3>
                <p className="text-muted-foreground">
                  Bhopal, Madhya Pradesh
                </p>
              </div>
            </div>
            {/* Gradient overlay for visual interest */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-50" />
          </motion.div>
        </ScaleIn>
      </div>
    </section>
  )
}
