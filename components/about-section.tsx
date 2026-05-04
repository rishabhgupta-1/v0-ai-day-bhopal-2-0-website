"use client"

import { FadeIn } from "@/components/motion"
import { ArrowUpRight } from "lucide-react"
import { EVENT } from "@/lib/event"

export function AboutSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* faint divider glow */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90 mb-5">
            <span className="h-px w-6 bg-primary/60" />
            About the event
            <span className="h-px w-6 bg-primary/60" />
          </span>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
            One day a year, Central India&apos;s AI builders{" "}
            <span className="text-gradient-amber">all show up.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty mb-8 max-w-3xl mx-auto">
            Last March, 500 of them packed Oriental&apos;s auditorium past 10 PM —
            students from MANIT and IIIT, engineers shipping AI in production,
            recruiters who flew in from Bangalore. This year is May 16 at LNCT,
            and it&apos;s bigger.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <a
            href={EVENT.links.parent}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>
              Run by ML Bhopal — the community that started as TFUG Bhopal
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
