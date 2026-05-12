"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

type RecapPhoto = {
  src: string
  alt: string
  eyebrow: string
  caption: string
  /** next/image `sizes` hint so responsive variants are right-sized. */
  sizes: string
  priority?: boolean
}

const photos: RecapPhoto[] = [
  {
    src: "/recap/anubhav-talk.jpg",
    alt: "Anubhav running his full session on RAG at AI Day Bhopal 2025",
    eyebrow: "Full session",
    caption: "Anubhav · a full session on RAG.",
    sizes: "(min-width: 1024px) 28vw, (min-width: 640px) 42vw, 100vw",
    priority: true,
  },
  {
    src: "/recap/full-house.jpg",
    alt: "Wide group photo of the full auditorium at AI Day Bhopal 2025",
    eyebrow: "Group photo",
    caption: "Full house. Last edition.",
    sizes: "(min-width: 1024px) 28vw, (min-width: 640px) 42vw, 100vw",
  },
  {
    src: "/recap/vertex-ai-walkthrough.jpg",
    alt: "Live Vertex AI walkthrough on stage at AI Day Bhopal 2025",
    eyebrow: "Live walkthrough",
    caption: "Vertex AI on the big screen — built live.",
    sizes: "(min-width: 1024px) 28vw, (min-width: 640px) 42vw, 100vw",
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
          {/* Photo gallery: three landscape cards on a clean responsive
              grid (1-col mobile, 2-col tablet, 3-col desktop) with a
              uniform aspect ratio so they line up. */}
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            staggerDelay={0.08}
          >
            {photos.map((p) => (
              <StaggerItem key={p.src} className="self-start">
                <motion.figure
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="group relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-border/80 bg-card/70"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes={p.sizes}
                    priority={p.priority}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  {/* bottom gradient for caption legibility */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/55 to-transparent"
                    aria-hidden
                  />

                  <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/85">
                      {p.eyebrow}
                    </span>
                    <p className="mt-0.5 text-xs sm:text-sm font-semibold text-white line-clamp-2">
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
