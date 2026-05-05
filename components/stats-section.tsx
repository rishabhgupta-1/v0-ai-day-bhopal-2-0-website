"use client"

import { StaggerContainer, StaggerItem, CountUp } from "@/components/motion"

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Live attendees",
    note: "in the room",
    accent: "var(--g-blue)",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Online reach",
    note: "stream + socials",
    accent: "var(--g-yellow)",
  },
  {
    value: 4,
    suffix: "+",
    label: "Expert speakers",
    note: "GDEs & industry leads",
    accent: "var(--g-red)",
  },
  {
    value: 1,
    suffix: " day",
    label: "Of building",
    note: "10:00 — 17:00 IST",
    accent: "var(--g-green)",
  },
]

export function StatsSection() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          staggerDelay={0.08}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div
                className="group relative h-full p-6 rounded-2xl bg-card/70 border border-border/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 overflow-hidden"
              >
                {/* accent glow on hover */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(120px circle at var(--mx,50%) var(--my,0%), ${stat.accent}33, transparent 60%)`,
                  }}
                  aria-hidden
                />
                <div
                  className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
                  style={{ background: stat.accent }}
                  aria-hidden
                />

                <div className="relative">
                  <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2 tabular-nums">
                    <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm sm:text-base font-medium text-foreground/90">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground/80">
                    {stat.note}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
