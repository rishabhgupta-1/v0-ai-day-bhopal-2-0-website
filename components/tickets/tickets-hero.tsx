"use client"

import { FadeIn, TextReveal } from "@/components/motion"

export function TicketsHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Get tickets
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Secure your spot at Central India&apos;s biggest AI Builder event.
            Choose the pass that works best for you.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="flex justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Limited seats available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>No swags and Group passes are now available</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
