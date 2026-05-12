"use client"

import {
  Bot,
  Code2,
  Coffee,
  DoorOpen,
  Flag,
  Gift,
  Megaphone,
  MessageSquare,
  Mic2,
  Presentation,
  Rocket,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

type Slot = {
  time: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  accent: string
}

const ACCENTS = [
  "var(--g-blue)",
  "var(--g-green)",
  "var(--g-yellow)",
  "var(--g-red)",
] as const

const agenda: Slot[] = [
  {
    time: "09:00 AM",
    title: "Registration Opens",
    description:
      "Doors swing open. Grab your badge, kit, and chai.",
    icon: DoorOpen,
    accent: ACCENTS[0],
  },
  {
    time: "09:30 AM",
    title: "Pre-Event Networking, Check-ins & Activities",
    description:
      "Warm up the room. Find your people before the talks start.",
    icon: Users,
    accent: ACCENTS[1],
  },
  {
    time: "10:00 AM",
    title: "Official Kickoff & Opening Note",
    description:
      "ML Bhopal kicks things off and sets the tone for the day.",
    icon: Megaphone,
    accent: ACCENTS[2],
  },
  {
    time: "10:25 AM",
    title: "Launch of Radius",
    description:
      "AI Day Bhopal's networking & community platform — unveiled live, on the spot.",
    icon: Rocket,
    accent: ACCENTS[3],
  },
  {
    time: "10:35 AM",
    title: "Keynote Session",
    description:
      "The headline talk that frames the year ahead in AI.",
    icon: Mic2,
    accent: ACCENTS[0],
  },
  {
    time: "10:55 AM",
    title:
      "Introduction to AI Agents & Building Real-World Agentic Apps with Google ADK and Gemini",
    description:
      "By Dr. Anukriti Bansal — from agent-loop fundamentals to shipping production agents.",
    icon: Bot,
    accent: ACCENTS[1],
  },
  {
    time: "11:50 AM",
    title: "Product Showcase & Live Demos",
    description:
      "Products, AI tools, and projects built by the community. By Anurag Mishra & Rishabh Gupta.",
    icon: Presentation,
    accent: ACCENTS[2],
  },
  {
    time: "12:25 PM",
    title: "Building Voice AI Products from Scratch: The Klariqo Journey",
    description:
      "By Ansh Deb — what it actually takes to ship voice AI that calls, qualifies, and converts.",
    icon: MessageSquare,
    accent: ACCENTS[3],
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
    description:
      "Lunch and chai on us. Use the hour — the best deals happen between courses.",
    icon: Coffee,
    accent: ACCENTS[0],
  },
  {
    time: "02:00 PM",
    title: "Introduction to Gemma 4 & Open Models",
    description:
      "By Rishiraj Acharya — what's new, what's possible, what to ship with it.",
    icon: Sparkles,
    accent: ACCENTS[1],
  },
  {
    time: "02:50 PM",
    title: "Buildathon & Prompt War Begins",
    description:
      "Heads down, terminals open. Build something real, ship something fast.",
    icon: Code2,
    accent: ACCENTS[2],
  },
  {
    time: "03:50 PM",
    title: "Winners Announcement & Prize Distribution",
    description: "Top builds, loudest cheers, biggest cheques.",
    icon: Trophy,
    accent: ACCENTS[3],
  },
  {
    time: "04:05 PM",
    title: "Closing Remarks",
    description:
      "What we built, who we met, what's next. Quick and sincere.",
    icon: Flag,
    accent: ACCENTS[0],
  },
  {
    time: "04:15 PM",
    title: "Swag Distribution, Pictures & Networking",
    description:
      "Stickers, hoodies, group photos, and that one introduction that changes everything.",
    icon: Gift,
    accent: ACCENTS[1],
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
            Run of show
            <span className="h-px w-6 bg-primary/60" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            How May 16 plays out.
          </h2>
          <p className="text-lg text-muted-foreground">
            Doors at 09:00. Wraps at 04:15 PM. Fourteen sessions —
            keynotes, demos, a buildathon, and the kind of hallway track
            that turns into job offers.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[31px] sm:left-[35px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/0 via-border to-primary/0 hidden sm:block"
            aria-hidden
          />

          <StaggerContainer className="space-y-3" staggerDelay={0.06}>
            {agenda.map((item, index) => (
              <StaggerItem key={index} direction="left">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-card/70 border border-border/80 backdrop-blur-sm hover:border-primary/40 transition-colors"
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
                    className="hidden sm:block absolute -left-1.5 top-7 w-3 h-3 rounded-full ring-4 ring-background z-10"
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
