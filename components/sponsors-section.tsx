"use client"

import {
  Trophy,
  Target,
  Megaphone,
  Briefcase,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Download,
} from "lucide-react"
import { motion } from "framer-motion"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { EVENT } from "@/lib/event"
import { GoogleForDevelopers } from "@/components/google-for-developers"

type Reason = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  accent: string
}

const reasons: Reason[] = [
  {
    icon: Trophy,
    title: "The room everyone shows up to",
    description:
      "Once a year, Central India's AI builders all end up in the same auditorium. May 16 is that day. Your brand is in every photo.",
    accent: "var(--g-blue)",
  },
  {
    icon: Target,
    title: "These are your next hires",
    description:
      "Not 'reach', not 'impressions' — actual people writing code, shipping side projects, applying to your jobs. Talk to them face-to-face.",
    accent: "var(--g-red)",
  },
  {
    icon: Megaphone,
    title: "500 in the room, 5,000 watching",
    description:
      "Live streams, recap reels, and the ML Bhopal channel network — the week of May 16, your logo rides along on every post.",
    accent: "var(--g-yellow)",
  },
  {
    icon: Briefcase,
    title: "Hire on the floor",
    description:
      "Set up a booth, run a fireside, drop a job link. Internship offers and full-time intros go out before the closing keynote.",
    accent: "var(--g-green)",
  },
  {
    icon: Sparkles,
    title: "We grew up as TFUG Bhopal",
    description:
      "Google for Developers has our back. That badge sits on every email, slide, and stream — right next to yours.",
    accent: "var(--g-blue)",
  },
  {
    icon: TrendingUp,
    title: "Goodwill that compounds",
    description:
      "The student you help today specs your tools next year. Bhopal remembers who showed up early — and so do the engineers it sends out.",
    accent: "var(--g-green)",
  },
]

const collaborators = [
  "Oriental Group",
  "MANIT Bhopal",
  "IIIT Bhopal",
  "LNCT Group",
  "UIT–RGPV",
  "TIT Technocrats",
]

const sponsorEmail = `mailto:${EVENT.contact.email}?subject=Sponsorship%20interest%20%E2%80%94%20AI%20Day%20Bhopal%202.0`

export function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.10),transparent_60%)]"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90 mb-5">
            <span className="h-px w-6 bg-primary/60" />
            For sponsors
            <span className="h-px w-6 bg-primary/60" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            Why your logo belongs{" "}
            <span className="text-gradient-amber">in this room.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Six reasons {EVENT.dateShort} is worth your marketing budget.
          </p>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border/80 bg-card/60 backdrop-blur-sm">
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Backed by
            </span>
            <GoogleForDevelopers className="h-4 sm:h-[18px] w-auto text-foreground/85" />
          </div>
        </FadeIn>

        {/* ROI grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
          staggerDelay={0.06}
        >
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative h-full p-6 rounded-2xl bg-card/70 border border-border/80 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-[color-mix(in_srgb,var(--accent-color)_45%,transparent)]"
                style={
                  {
                    "--accent-color": r.accent,
                  } as React.CSSProperties
                }
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(160px circle at 50% 0%, color-mix(in srgb, ${r.accent} 14%, transparent), transparent 60%)`,
                  }}
                  aria-hidden
                />

                <div
                  className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `color-mix(in srgb, ${r.accent} 14%, transparent)`,
                    boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${r.accent} 30%, transparent)`,
                  }}
                >
                  <r.icon className="w-5 h-5" style={{ color: r.accent }} />
                </div>

                <h3 className="relative text-base sm:text-lg font-semibold text-foreground mb-1.5">
                  {r.title}
                </h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">
                  {r.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA card */}
        <FadeIn delay={0.2}>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 p-8 sm:p-10 bg-gradient-to-br from-primary/15 via-card to-card">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.18),transparent_60%)]"
              aria-hidden
            />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <span className="inline-flex font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-3">
                  Two ways in
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  Read the deck. Or book the call.
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                  Tiers, talent access, and branding — all in one PDF. Reply
                  to the email inside and we&apos;ll be back under a day.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="border-border/80 bg-card/40 text-foreground hover:bg-primary/10 hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  <a
                    href="/ai-day-bhopal-2-deck.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Sponsor Us
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_24px_rgba(245,158,11,0.3)]"
                >
                  <a
                    href={EVENT.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Call
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Past collaborators */}
        <FadeIn delay={0.3}>
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-border/60" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80 whitespace-nowrap">
                Past collaborators
              </span>
              <div className="h-px flex-1 bg-border/60" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {collaborators.map((c) => (
                <div
                  key={c}
                  className="aspect-[5/2] rounded-xl border border-border/70 bg-card/50 flex items-center justify-center px-3 text-center text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  {c}
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Spot for the 2.0 wall is open. Email{" "}
              <Link
                href={sponsorEmail}
                className="text-primary hover:underline font-medium"
              >
                {EVENT.contact.email}
              </Link>{" "}
              — we move fast.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
