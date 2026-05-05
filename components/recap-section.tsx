"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

type RecapPhoto = {
  label: string
  caption: string
  /** drop a /public path or remote URL once the real photo is available */
  src?: string
  className: string
  gradient: string
}

const photos: RecapPhoto[] = [
  {
    label: "Keynote",
    caption: "Anubhav on RAG eval — the room didn't blink.",
    className: "sm:col-span-2 sm:row-span-2 aspect-[4/3]",
    gradient: "from-amber-500/30 via-orange-500/15 to-transparent",
  },
  {
    label: "Workshop",
    caption: "Vertex AI Studio, hands on keyboards.",
    className: "aspect-[4/3]",
    gradient: "from-blue-500/25 via-blue-500/10 to-transparent",
  },
  {
    label: "Panel",
    caption: "Agentic AI — the question kept getting harder.",
    className: "aspect-[4/3]",
    gradient: "from-red-500/25 via-red-500/10 to-transparent",
  },
  {
    label: "Showcase",
    caption: "Project demos that ran past schedule.",
    className: "aspect-[4/3]",
    gradient: "from-green-500/25 via-green-500/10 to-transparent",
  },
  {
    label: "Group photo",
    caption: "The 500. Last person left at 10:42 PM.",
    className: "aspect-[4/3]",
    gradient: "from-yellow-500/25 via-yellow-500/10 to-transparent",
  },
]

const counters = [
  { value: "500+", label: "Attendees", accent: "var(--g-blue)" },
  { value: "4", label: "Expert speakers", accent: "var(--g-yellow)" },
  { value: "8+", label: "Hours of learning", accent: "var(--g-green)" },
]

export function RecapSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] font-semibold text-primary">
              Recap · 2025
            </span>
            <span className="h-px flex-1 bg-border/60" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-3 text-balance">
            We did this once.{" "}
            <span className="text-gradient-amber">It got loud.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Last March, 500 builders filled Oriental&apos;s auditorium until the
            staff politely asked us to leave. Here&apos;s the receipts.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_280px] gap-6 lg:gap-8">
          {/* Photo grid */}
          <StaggerContainer
            className="grid grid-cols-2 sm:grid-cols-4 sm:auto-rows-[140px] gap-3"
            staggerDelay={0.06}
          >
            {photos.map((p, i) => (
              <StaggerItem key={i} className={p.className}>
                <motion.figure
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="group relative h-full w-full rounded-xl overflow-hidden border border-border/80 bg-card/70"
                >
                  {p.src ? (
                    <Image
                      src={p.src}
                      alt={p.caption}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`}
                      aria-hidden
                    />
                  )}
                  {!p.src && (
                    <div
                      className="absolute inset-0 bg-dot-grid opacity-50"
                      aria-hidden
                    />
                  )}

                  {/* bottom gradient for legibility */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/90 to-transparent"
                    aria-hidden
                  />

                  <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/90">
                      {p.label}
                    </span>
                    <p className="mt-0.5 text-xs sm:text-sm font-medium text-foreground/90 line-clamp-2">
                      {p.caption}
                    </p>
                  </figcaption>
                </motion.figure>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Counters rail */}
          <FadeIn delay={0.2} className="flex flex-col gap-3">
            {counters.map((c) => (
              <div
                key={c.label}
                className="relative p-5 rounded-xl bg-card/70 border border-border/80 backdrop-blur-sm"
              >
                <span
                  className="absolute top-4 right-4 w-2 h-2 rounded-full"
                  style={{
                    background: c.accent,
                    boxShadow: `0 0 10px ${c.accent}`,
                  }}
                  aria-hidden
                />
                <div className="text-4xl font-bold text-foreground tabular-nums">
                  {c.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {c.label}
                </div>
              </div>
            ))}

            <Link
              href="https://mlbhopal.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-primary/40 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              See full recap
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="text-[11px] text-muted-foreground/70 text-center">
              Hosted at Oriental Group of Institutes, Bhopal.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
