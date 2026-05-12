"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Trophy,
  Target,
  Megaphone,
  Briefcase,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Download,
  ExternalLink,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { GoogleForDevelopers } from "@/components/google-for-developers"
import { EVENT, WHATSAPP_LINKS } from "@/lib/event"
import { sponsors, talentPartners, communityPartners } from "@/lib/sponsors"
import type { Partner } from "@/lib/sponsors"
import { cn } from "@/lib/utils"

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

/** Maps a link label to a lucide icon. */
function socialIcon(label: string) {
  const l = label.toLowerCase()
  if (l.includes("linkedin")) return Linkedin
  if (l.includes("twitter") || l === "x") return Twitter
  if (l.includes("instagram")) return Instagram
  if (l.includes("youtube")) return Youtube
  if (l.includes("meetup")) return Users
  return Globe
}

/** Pill with click-to-expand Radix Popover. Logo tile color adapts to logo brightness. */
function PartnerPill({
  partner,
  size = "md",
}: {
  partner: Partner
  size?: "md" | "sm"
}) {
  const dims = size === "md"
    ? { pill: "h-20 pl-2 pr-6 text-base", tile: "h-16 w-16", tileImg: "p-1.5" }
    : { pill: "h-16 pl-1.5 pr-5 text-sm", tile: "h-[52px] w-[52px]", tileImg: "p-1" }

  const hasThemedLogo = Boolean(partner.logoLight)

  // Tile color rules:
  // - With a themed logo pair (e.g. PixelPandas white + black), the tile
  //   itself flips per theme: white in light mode (so the BLACK variant
  //   reads), dark in dark mode (so the WHITE variant reads).
  // - Without a pair, fall back to the static `tileVariant` heuristic so
  //   single-asset white logos (Klariqo, E-Cell LNCTS) keep their dark tile
  //   in both themes.
  const tileBg = hasThemedLogo
    ? "bg-white ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10"
    : partner.tileVariant === "dark"
      ? "bg-neutral-900 ring-1 ring-white/10"
      : "bg-white ring-1 ring-black/5"

  /** Render the logo, optionally stacking dark + light variants. */
  const renderLogo = (cls: string) => {
    if (!partner.logo) return null
    if (!hasThemedLogo) {
      return (
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className={cls}
        />
      )
    }
    return (
      <>
        {/* Dark theme: the default (typically white-on-transparent) asset */}
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className={cn(cls, "hidden dark:block")}
        />
        {/* Light theme: the dark-on-transparent variant */}
        <Image
          src={partner.logoLight!}
          alt=""
          aria-hidden
          fill
          className={cn(cls, "block dark:hidden")}
        />
      </>
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "group inline-flex items-center gap-3.5 rounded-full border font-semibold transition-all duration-200",
            "border-border/70 bg-card/60 backdrop-blur-sm",
            "dark:border-white/[0.10] dark:bg-white/[0.03]",
            "hover:border-primary/60 hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
            dims.pill
          )}
        >
          {partner.logo && (
            <span
              className={cn(
                "relative flex-shrink-0 rounded-full overflow-hidden shadow-inner",
                tileBg,
                dims.tile
              )}
            >
              {renderLogo(cn("object-contain", dims.tileImg))}
            </span>
          )}
          <span className="text-foreground whitespace-nowrap">
            {partner.name}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 bg-card/95 border-border/80 shadow-2xl rounded-2xl p-5 backdrop-blur-md"
        sideOffset={10}
        align="center"
      >
        <div className="flex items-center gap-3 mb-3">
          {partner.logo && (
            <div
              className={cn(
                "relative h-14 w-14 flex-shrink-0 rounded-xl overflow-hidden p-1.5",
                hasThemedLogo
                  ? "bg-white ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10"
                  : partner.tileVariant === "dark"
                    ? "bg-neutral-900 ring-1 ring-white/10"
                    : "bg-white ring-1 ring-black/5"
              )}
            >
              {renderLogo("object-contain p-0.5")}
            </div>
          )}
          <p className="font-semibold text-foreground text-base leading-tight">
            {partner.name}
          </p>
        </div>
        {partner.description && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {partner.description}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {partner.url && (
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              Website
            </a>
          )}
          {partner.links?.map((link) => {
            const Icon = socialIcon(link.label)
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                {link.label}
              </a>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}

/** Compact social icon button for sponsor cards. */
function SocialIconLink({ label, url }: { label: string; url: string }) {
  const Icon = socialIcon(label)
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/60 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors"
    >
      <Icon className="w-4 h-4" />
    </a>
  )
}

export function SponsorsSection() {
  const platinumSponsors = sponsors.platinum
  const goldSponsors = sponsors.gold
  const silverSponsors = sponsors.silver

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
        {/* ════════════════════════════════════════
            SPONSOR TIERS + PARTNERS — Social proof FIRST
        ════════════════════════════════════════ */}
        <div>
          {/* ── Big section heading + Powered by GfD pill ── */}
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Our sponsors{" "}
                <span className="text-gradient-amber">&amp; partners.</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-7">
                The companies, communities, and recruiters making{" "}
                {EVENT.dateShort} happen.
              </p>
              <a
                href={sponsors.title[0]?.url ?? "https://developers.google.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  Powered by
                </span>
                <GoogleForDevelopers className="h-4 sm:h-[18px] group-hover:scale-[1.02] transition-transform" />
              </a>
            </div>
          </FadeIn>

          {/* ── PLATINUM (hidden when empty) ── */}
          {platinumSponsors.length > 0 && (
            <FadeIn>
              <div className="text-center mb-24">
                <h3 className="font-mono text-sm sm:text-base uppercase tracking-[0.35em] text-muted-foreground/70 mb-10">
                  Platinum Sponsors
                </h3>
                <div className="flex flex-wrap justify-center gap-12">
                  {platinumSponsors.map((s) => (
                    <a key={s.name} href={s.url ?? "#"} target="_blank" rel="noopener noreferrer" className="group">
                      {s.logo ? (
                        <Image src={s.logo} alt={s.name} width={400} height={100}
                          className="h-20 sm:h-24 w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity" />
                      ) : (
                        <span className="text-3xl font-bold text-foreground/80 group-hover:text-foreground transition-colors">{s.name}</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* ── GOLD SPONSOR — premium card with social icons ── */}
          {goldSponsors.length > 0 && (
            <ScaleIn delay={0.1}>
              <div className="mb-20">
                <div className="flex items-center justify-center gap-3 mb-10">
                  <span
                    className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-amber-500/60 to-amber-500/80"
                    aria-hidden
                  />
                  <h3 className="font-mono text-base sm:text-lg font-bold uppercase tracking-[0.32em] text-amber-600 dark:text-amber-400 drop-shadow-[0_0_18px_rgba(245,158,11,0.25)]">
                    Gold {goldSponsors.length > 1 ? "Sponsors" : "Sponsor"}
                  </h3>
                  <span
                    className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent via-amber-500/60 to-amber-500/80"
                    aria-hidden
                  />
                </div>
                <div className="grid gap-8 sm:grid-cols-1 max-w-3xl mx-auto">
                  {goldSponsors.map((s) => (
                    <div
                      key={s.name}
                      className="group relative overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-br from-amber-500/[0.08] via-card/80 to-card p-8 sm:p-10 backdrop-blur-sm"
                    >
                      <div
                        className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse at top, rgba(245,158,11,0.18), transparent 60%)",
                        }}
                        aria-hidden
                      />
                      <div className="relative flex flex-col items-center text-center">
                        <a
                          href={s.url ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex group/logo relative mb-6"
                        >
                          <div
                            className="absolute inset-0 -m-6 blur-3xl opacity-30 group-hover/logo:opacity-50 transition-opacity duration-500"
                            style={{
                              background:
                                "radial-gradient(ellipse, rgba(245,158,11,0.7), transparent 65%)",
                            }}
                            aria-hidden
                          />
                          {s.logo ? (
                            <span className="relative inline-flex items-center justify-center px-2 py-2 group-hover/logo:scale-[1.03] transition-transform duration-300">
                              {/* Dark mode: white-lockup on the gold card */}
                              <Image
                                src={s.logo}
                                alt={s.name}
                                width={1024}
                                height={215}
                                className="h-14 sm:h-20 w-auto object-contain hidden dark:block"
                              />
                              {/* Light mode: black-lockup on the gold card */}
                              {s.logoLight && (
                                <Image
                                  src={s.logoLight}
                                  alt=""
                                  aria-hidden
                                  width={1024}
                                  height={215}
                                  className="h-14 sm:h-20 w-auto object-contain block dark:hidden"
                                />
                              )}
                            </span>
                          ) : (
                            <span className="relative text-4xl font-bold text-foreground">
                              {s.name}
                            </span>
                          )}
                        </a>
                        {s.tagline && (
                          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
                            {s.tagline}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center justify-center gap-2.5">
                          {s.url && (
                            <a
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-amber-500/20 hover:border-amber-500/60 transition-colors"
                            >
                              <Globe className="w-4 h-4" />
                              Visit Klariqo
                            </a>
                          )}
                          {s.links?.map((link) => (
                            <SocialIconLink key={link.label} label={link.label} url={link.url} />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScaleIn>
          )}

          {/* ── SILVER SPONSORS — refined mid-tier card. Smaller frame than
              Gold, but the actual logo gets to be hero-sized so brands feel
              recognised. ── */}
          {silverSponsors.length > 0 && (
            <ScaleIn delay={0.1}>
              <div className="mb-20">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <span
                    className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-zinc-400/60 to-zinc-400/80"
                    aria-hidden
                  />
                  <h3 className="font-mono text-sm sm:text-base font-bold uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-300 drop-shadow-[0_0_14px_rgba(161,161,170,0.25)]">
                    Silver {silverSponsors.length > 1 ? "Sponsors" : "Sponsor"}
                  </h3>
                  <span
                    className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent via-zinc-400/60 to-zinc-400/80"
                    aria-hidden
                  />
                </div>
                <div
                  className={cn(
                    "grid gap-5 mx-auto",
                    silverSponsors.length === 1
                      ? "sm:grid-cols-1 max-w-xs sm:max-w-md"
                      : "sm:grid-cols-2 max-w-3xl",
                  )}
                >
                  {silverSponsors.map((s) => (
                    <div
                      key={s.name}
                      className="group relative overflow-hidden rounded-2xl border border-zinc-300/40 bg-gradient-to-br from-zinc-200/[0.18] via-card/80 to-card p-3.5 sm:p-6 backdrop-blur-sm dark:border-zinc-400/15 dark:from-zinc-200/[0.05]"
                    >
                      <div
                        className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse at top, rgba(180,180,180,0.12), transparent 65%)",
                        }}
                        aria-hidden
                      />
                      <div className="relative flex flex-col items-center text-center gap-2.5 sm:gap-3.5">
                        <a
                          href={s.url ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex group/logo relative"
                        >
                          {s.logo ? (
                            <span className="relative inline-flex items-center justify-center px-2 py-1 group-hover/logo:scale-[1.03] transition-transform duration-300">
                              <Image
                                src={s.logo}
                                alt={s.name}
                                width={600}
                                height={300}
                                className="h-28 sm:h-32 w-auto object-contain"
                              />
                            </span>
                          ) : (
                            <span className="relative text-xl sm:text-2xl font-bold text-foreground">
                              {s.name}
                            </span>
                          )}
                        </a>
                        {s.tagline && (
                          <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed line-clamp-2 sm:line-clamp-none">
                            {s.tagline}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                          {s.url && (
                            <a
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-400/50 bg-zinc-200/15 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-zinc-700 hover:bg-zinc-200/30 hover:border-zinc-400/70 transition-colors dark:text-zinc-200 dark:bg-zinc-200/10"
                            >
                              <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              Visit {s.name.split(" ")[0]}
                            </a>
                          )}
                          {s.links?.map((link) => (
                            <SocialIconLink
                              key={link.label}
                              label={link.label}
                              url={link.url}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScaleIn>
          )}
        </div>

        {/* ════════════════════════════════════════
            TALENT PARTNERS
        ════════════════════════════════════════ */}
        <FadeIn delay={0.05}>
          <div className="mt-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Talent <span className="text-gradient-amber">Partners</span>
              </h3>
              <p className="text-base text-muted-foreground inline-flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                Companies hiring interns at AI Day Bhopal
              </p>
            </div>
            <StaggerContainer className="flex flex-wrap justify-center gap-3.5" staggerDelay={0.06}>
              {talentPartners.map((p) => (
                <StaggerItem key={p.name}>
                  <PartnerPill partner={p} size="md" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* ════════════════════════════════════════
            COMMUNITY PARTNERS
        ════════════════════════════════════════ */}
        <FadeIn delay={0.05}>
          <div className="mt-20">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Community <span className="text-gradient-amber">Partners</span>
              </h3>
              <p className="text-base text-muted-foreground inline-flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Built with the people who built Bhopal&apos;s tech scene
              </p>
            </div>
            <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.05}>
              {communityPartners.map((p) => (
                <StaggerItem key={p.name}>
                  <PartnerPill partner={p} size="sm" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* ════════════════════════════════════════
            SPONSOR PITCH — Why YOU should join the lineup
        ════════════════════════════════════════ */}
        <div className="mt-32">
          <FadeIn className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90 mb-5">
              <span className="h-px w-6 bg-primary/60" />
              For sponsors
              <span className="h-px w-6 bg-primary/60" />
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
              Sponsor AI Day{" "}
              <span className="text-gradient-amber">Bhopal 2.0.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six reasons {EVENT.dateShort} earns its slot in your marketing
              budget — and why brands keep coming back.
            </p>
          </FadeIn>

          {/* ── ROI grid ── */}
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

          {/* ── CTA card ── */}
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
                      href={WHATSAPP_LINKS.sponsor}
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
        </div>

        {/* ── Past collaborators ── */}
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
