"use client"

import { MapPin, Calendar, Clock, Users, Globe, Compass } from "lucide-react"
import { FadeIn, ScaleIn } from "@/components/motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { EVENT } from "@/lib/event"

export function VenueSection() {
  return (
    <section
      id="venue"
      className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90 mb-5">
            <span className="h-px w-6 bg-primary/60" />
            Venue
            <span className="h-px w-6 bg-primary/60" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            Where it&apos;s happening.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            LNCT runs one of MP&apos;s biggest engineering campuses. Big enough for
            500. Close enough that everyone gets back to their hostel by 11.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Photo */}
          <ScaleIn>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden border border-border/80 aspect-video bg-card"
            >
              <Image
                src="https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1536x684.jpg"
                alt={`${EVENT.venue.name}, ${EVENT.venue.city}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"
                aria-hidden
              />

              {/* live capacity pill */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/60 text-[11px] font-semibold uppercase tracking-wider text-foreground/90">
                  <Users className="w-3 h-3 text-primary" />
                  {EVENT.reach.live} live
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/60 text-[11px] font-semibold uppercase tracking-wider text-foreground/90">
                  <Globe className="w-3 h-3 text-primary" />
                  {EVENT.reach.online} online
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-semibold">
                    {EVENT.venue.name}, {EVENT.venue.city}
                  </span>
                </div>
              </div>
            </motion.div>
          </ScaleIn>

          {/* Details */}
          <FadeIn delay={0.15}>
            <div className="h-full flex flex-col gap-4">
              <div className="p-6 sm:p-7 rounded-3xl bg-card/70 border border-border/80 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-foreground mb-5">
                  Event details
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Date
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        {EVENT.dateLabel}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Time
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        {EVENT.timeLabel}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Location
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        {EVENT.venue.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {EVENT.venue.city}, {EVENT.venue.state}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Why Bhopal */}
              <div className="p-5 sm:p-6 rounded-3xl bg-card/40 border border-dashed border-border/60">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Compass className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">
                      Why Bhopal
                    </p>
                    <p className="text-sm text-foreground/85 leading-relaxed">
                      It sits at the geographic centre of India. One overnight
                      train from Indore, Raipur, Jaipur, Lucknow, or Nagpur. If
                      you&apos;re building AI in Central India, this is the closest
                      you&apos;ll get to the rest of us.
                    </p>
                  </div>
                </div>
              </div>

              <motion.a
                href={EVENT.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-[0_0_24px_rgba(245,158,11,0.25)] hover:shadow-[0_0_36px_rgba(245,158,11,0.4)] transition-all"
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
