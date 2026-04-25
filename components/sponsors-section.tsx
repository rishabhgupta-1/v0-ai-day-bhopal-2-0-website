"use client"

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

export function SponsorsSection() {
  const sponsorPlaceholders = Array(6).fill(null)

  return (
    <section id="sponsors" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Sponsors
          </h2>
          <p className="text-lg text-muted-foreground">
            Partnering to make AI Day Bhopal 2.0 possible
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {sponsorPlaceholders.map((_, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.02, borderColor: "rgba(251,146,60,0.5)", transition: { duration: 0.2 } }}
                className="aspect-[2/1] rounded-2xl bg-card border border-dashed border-border flex items-center justify-center transition-colors"
              >
                <span className="text-muted-foreground text-sm">Sponsor Logo</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="text-center mt-12">
          <p className="text-muted-foreground">
            Interested in sponsoring?{" "}
            <a href="mailto:contact@mlbhopal.com" className="text-primary hover:underline">
              Get in touch
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
