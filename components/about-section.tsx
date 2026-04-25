"use client"

import { FadeIn, TextReveal } from "@/components/motion"

export function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">
            Where ambitious AI builders come together
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            AI Day Bhopal 2.0 is designed for developers, students, and innovators who want to go beyond theory and build real-world AI applications. Connect with industry experts, showcase your projects, and take your AI journey to the next level.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
