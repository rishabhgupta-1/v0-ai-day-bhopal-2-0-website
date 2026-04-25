"use client"

import { MapPin, Calendar, Clock } from "lucide-react"
import { FadeIn, ScaleIn } from "@/components/motion"
import { motion } from "framer-motion"
import Image from "next/image"

export function VenueSection() {
  return (
    <section id="venue" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Venue
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at one of Central India&apos;s premier educational institutions
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Venue Image */}
          <ScaleIn>
            <motion.div
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="relative rounded-3xl overflow-hidden border border-border aspect-video"
            >
              <Image
                src="https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1536x684.jpg"
                alt="LNCT Group of Colleges Auditorium"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">LNCT Group of Colleges, Bhopal</span>
                </div>
              </div>
            </motion.div>
          </ScaleIn>

          {/* Venue Details */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Event Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="text-lg font-semibold text-foreground">May 16, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="text-lg font-semibold text-foreground">9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-lg font-semibold text-foreground">LNCT Group of Colleges</p>
                      <p className="text-sm text-muted-foreground">Bhopal, Madhya Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Link */}
              <motion.a
                href="https://share.google/tSmclfri8Dk1MKyMN"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
              >
                <MapPin className="w-5 h-5" />
                View on Google Maps
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
