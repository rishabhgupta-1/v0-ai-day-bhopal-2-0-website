"use client"

import Link from "next/link"
import { ArrowRight, Hammer, Code2, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { WHATSAPP_LINKS } from "@/lib/event"

type Highlight = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  accent: string
}

const highlights: Highlight[] = [
  {
    icon: Hammer,
    title: "Working projects",
    description:
      "Not slides, not pitch decks — something running on a laptop, a server, or a phone. If it boots, it qualifies.",
    accent: "var(--g-blue)",
  },
  {
    icon: Code2,
    title: "Real implementations",
    description:
      "Code shipped, models deployed, agents in production. Show us what you built and how it actually holds up.",
    accent: "var(--g-green)",
  },
  {
    icon: Lightbulb,
    title: "Meaningful use-cases",
    description:
      "Solving a problem someone has — for users, for a community, for your team. We care about the impact, not the hype.",
    accent: "var(--g-yellow)",
  },
]

export function ProjectShowcaseSection() {
  return (
    <section
      id="showcase"
      className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08),transparent_60%)]"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90 mb-5">
            <span className="h-px w-6 bg-primary/60" />
            Project Showcase
            <span className="h-px w-6 bg-primary/60" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            Built something interesting?{" "}
            <span className="text-gradient-amber">Show it off.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re inviting builders, developers, and innovators to
            present their projects at AI Day Bhopal 2.0. This isn&apos;t
            just about ideas — we want working projects, real
            implementations, and meaningful use-cases on stage.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid gap-5 sm:grid-cols-3 mb-12"
          staggerDelay={0.08}
        >
          {highlights.map((h) => (
            <StaggerItem key={h.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative h-full p-6 rounded-2xl bg-card/70 border border-border/80 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-[color-mix(in_srgb,var(--accent-color)_45%,transparent)]"
                style={
                  {
                    "--accent-color": h.accent,
                  } as React.CSSProperties
                }
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(160px circle at 50% 0%, color-mix(in srgb, ${h.accent} 14%, transparent), transparent 60%)`,
                  }}
                  aria-hidden
                />
                <div
                  className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `color-mix(in srgb, ${h.accent} 14%, transparent)`,
                    boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${h.accent} 30%, transparent)`,
                  }}
                >
                  <h.icon className="w-5 h-5" style={{ color: h.accent }} />
                </div>
                <h3 className="relative text-base sm:text-lg font-semibold text-foreground mb-1.5">
                  {h.title}
                </h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">
                  {h.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 p-8 sm:p-10 bg-gradient-to-br from-primary/15 via-card to-card">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.18),transparent_60%)]"
              aria-hidden
            />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <span className="inline-flex font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-3">
                  11:50 AM slot · Live on stage
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  Apply for the Product Showcase &amp; Live Demos slot.
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                  Tell us what you built. If it&apos;s a fit, you&apos;ll
                  demo it live in front of 500 builders in the room and
                  the 5,000 watching online.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="border-border/80 bg-card/40 text-foreground hover:bg-primary/10 hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  <Link href="#agenda">Jump to agenda</Link>
                </Button>
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_24px_rgba(245,158,11,0.3)]"
                >
                  <a
                    href={WHATSAPP_LINKS.showcase}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply to showcase
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
