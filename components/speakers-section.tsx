"use client"

import { User, Sparkles } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"
import Image from "next/image"

type Speaker = {
  name: string
  role: string
  organization: string
  image: string | null
  isGDE?: boolean
  accent?: string
  placeholder?: boolean
}

const speakers: Speaker[] = [
  {
    name: "Dr. Anukriti Bansal",
    role: "Google Developer Expert · AI",
    organization: "LNMIIT Jaipur",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anukriti%20speaker-q9PlIGbF1E33qMKYaxi95GEHe0AtTf.png",
    isGDE: true,
    accent: "var(--g-blue)",
  },
  {
    name: "Rishiraj Acharya",
    role: "ML Engineer @ IntelliTek Health",
    organization: "GDE · AI · Cloud · Kaggle",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rishiraj%20speaker-AkZ0xv3mWtc9jovIpPcFP3rfaED5op.png",
    isGDE: true,
    accent: "var(--g-green)",
  },
  {
    name: "Ansh Deb",
    role: "CEO & Cofounder @ Klariqo",
    organization: "Voice AI · Enterprise · BPO",
    image: "/speakers/ansh-deb.png",
    accent: "var(--g-red)",
  },
  {
    name: "Announcing soon",
    role: "Stay tuned",
    organization: "Reveal #4",
    image: null,
    placeholder: true,
  },
]

const pastCompanies = [
  "Microsoft",
  "American Express",
  "KPMG",
  "EPAM",
  "Internshala",
  "Searce",
  "Salesforce",
  "Unnati",
]

export function SpeakersSection() {
  return (
    <section
      id="speakers"
      className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90 mb-5">
            <span className="h-px w-6 bg-primary/60" />
            Speakers
            <span className="h-px w-6 bg-primary/60" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            Who&apos;s on the mic.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three locked, one reveal on the way. All four ship AI for a living.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.08}
        >
          {speakers.map((speaker, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`group relative h-full p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${
                  speaker.placeholder
                    ? "bg-card/40 border-dashed border-border"
                    : "bg-card/70 border-border/80 hover:border-primary/40 backdrop-blur-sm"
                }`}
                style={
                  speaker.accent
                    ? ({
                        "--accent-color": speaker.accent,
                      } as React.CSSProperties)
                    : undefined
                }
              >
                {/* corner accent dot */}
                {speaker.accent && (
                  <span
                    className="absolute top-4 right-4 w-2 h-2 rounded-full"
                    style={{
                      background: speaker.accent,
                      boxShadow: `0 0 12px ${speaker.accent}`,
                    }}
                    aria-hidden
                  />
                )}

                {/* hover gradient */}
                {!speaker.placeholder && speaker.accent && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(140px circle at 50% 0%, color-mix(in srgb, ${speaker.accent} 14%, transparent), transparent 60%)`,
                    }}
                    aria-hidden
                  />
                )}

                {/* avatar */}
                <div className="relative mx-auto mb-5 w-32 h-32">
                  {speaker.image ? (
                    <>
                      <div
                        className="absolute inset-0 rounded-full transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: speaker.accent
                            ? `radial-gradient(circle, ${speaker.accent}55, transparent 70%)`
                            : undefined,
                          filter: "blur(18px)",
                        }}
                        aria-hidden
                      />
                      <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          sizes="128px"
                          className="object-cover object-top"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="relative w-32 h-32 rounded-full bg-secondary/60 border border-dashed border-border flex items-center justify-center overflow-hidden">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 22,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(245,158,11,0.25),transparent_30%)]"
                        aria-hidden
                      />
                      <Sparkles className="relative w-9 h-9 text-muted-foreground/60" />
                    </div>
                  )}
                </div>

                <div className="relative text-center">
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      speaker.placeholder
                        ? "text-muted-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1.5">
                    {speaker.role}
                  </p>
                  <p
                    className={`text-xs font-medium ${
                      speaker.placeholder
                        ? "text-muted-foreground/70"
                        : "text-primary/90"
                    }`}
                  >
                    {speaker.organization}
                  </p>

                  {speaker.isGDE && (
                    <span
                      className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        background: "color-mix(in srgb, var(--g-blue) 14%, transparent)",
                        color: "var(--g-blue)",
                        border: "1px solid color-mix(in srgb, var(--g-blue) 28%, transparent)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--g-blue)" }}
                        aria-hidden
                      />
                      Google Developer Expert
                    </span>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Past speaker companies marquee */}
        <FadeIn delay={0.3}>
          <div className="mt-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-border/60" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80 whitespace-nowrap">
                Past speakers from
              </span>
              <div className="h-px flex-1 bg-border/60" />
            </div>

            <div className="relative overflow-hidden">
              <div
                className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"
                aria-hidden
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"
                aria-hidden
              />

              <div className="flex gap-10 animate-[marquee_28s_linear_infinite] whitespace-nowrap will-change-transform">
                {[...pastCompanies, ...pastCompanies].map((c, i) => (
                  <span
                    key={`${c}-${i}`}
                    className="text-base sm:text-lg font-semibold text-muted-foreground/60 hover:text-foreground transition-colors tracking-tight"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
