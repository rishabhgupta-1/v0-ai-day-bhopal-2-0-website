"use client"

import { Mic2, Coffee, Rocket, Trophy } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

type Slot = {
  time: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  accent: string
}

const agenda: Slot[] = [
  {
    time: "10:00 — 12:30",
    title: "Talks & Panel",
    description:
      "Keynotes from people writing AI in production. Two GDEs, two more on the way. Bring questions, the panel hits hard.",
    icon: Mic2,
    accent: "var(--g-blue)",
  },
  {
    time: "12:30 — 13:30",
    title: "Lunch + Networking",
    description:
      "Lunch is on us. So is the chai. Use the hour to meet recruiters, mentors, and the person two rows over who's working on something cooler than yours.",
    icon: Coffee,
    accent: "var(--g-yellow)",
  },
  {
    time: "13:30 — 15:30",
    title: "AI-Thon Showcase",
    description:
      "Demos on the floor. Honest feedback from a panel that ships. Best builds get on the wall — and offers in the inbox.",
    icon: Rocket,
    accent: "var(--g-red)",
  },
  {
    time: "15:30 — 17:00",
    title: "Awards + Closing",
    description:
      "Trophies, surprise reveals, group photo. Last year people stayed past 10 PM. Pace yourself.",
    icon: Trophy,
    accent: "var(--g-green)",
  },
]

export function AgendaSection() {
  return (
    <section
      id="agenda"
      className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90 mb-5">
            <span className="h-px w-6 bg-primary/60" />
            Tentative agenda
            <span className="h-px w-6 bg-primary/60" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            How May 16 plays out.
          </h2>
          <p className="text-lg text-muted-foreground">
            Doors at 09:30. Curtains at 17:00. Everything in between is
            worth showing up for.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[31px] sm:left-[35px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/0 via-border to-primary/0 hidden sm:block"
            aria-hidden
          />

          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {agenda.map((item, index) => (
              <StaggerItem key={index} direction="left">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-card/70 border border-border/80 backdrop-blur-sm hover:border-primary/40 transition-colors"
                  style={
                    {
                      "--accent-color": item.accent,
                    } as React.CSSProperties
                  }
                >
                  {/* Timeline dot */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.15, duration: 0.3 }}
                    className="hidden sm:block absolute -left-1.5 top-9 w-3 h-3 rounded-full ring-4 ring-background z-10"
                    style={{
                      background: item.accent,
                      boxShadow: `0 0 12px ${item.accent}`,
                    }}
                    aria-hidden
                  />

                  <div
                    className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: `color-mix(in srgb, ${item.accent} 12%, transparent)`,
                      boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${item.accent} 28%, transparent)`,
                    }}
                  >
                    <item.icon
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: item.accent }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-mono text-[11px] uppercase tracking-[0.2em] font-semibold"
                        style={{ color: item.accent }}
                      >
                        {item.time}
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground/60">
                        IST
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
