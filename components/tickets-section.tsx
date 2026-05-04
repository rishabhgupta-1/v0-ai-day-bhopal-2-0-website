"use client"

import {
  Check,
  ArrowRight,
  Clock,
  Users,
  GraduationCap,
  Ticket,
  Sparkles,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

type Tier = {
  name: string
  price?: string
  originalPrice?: string
  description: string
  features: string[]
  cta: string
  link: string
  disabled?: boolean
  popular?: boolean
  note?: string
  icon: React.ComponentType<{ className?: string }>
  variant: "soldout" | "standard" | "popular" | "premium"
}

const tickets: Tier[] = [
  {
    name: "Early Bird Pass",
    price: "₹249",
    originalPrice: "₹349",
    description: "Basic ticket for early adopters.",
    features: [
      "Full event access",
      "Lunch included",
      "Event swag included",
      "Networking with builders",
    ],
    cta: "Sold Out",
    link: "#",
    disabled: true,
    note: "Offer expired",
    icon: Ticket,
    variant: "soldout",
  },
  {
    name: "Builder Pass",
    price: "₹179",
    description: "Affordable access. No swag included.",
    features: [
      "Full event access",
      "Lunch included",
      "No swag included",
      "Networking with builders",
    ],
    cta: "Buy your ticket",
    link: "https://www.commudle.com/fill-form/4704",
    note: "Limited seats",
    icon: Ticket,
    variant: "standard",
  },
  {
    name: "General Pass",
    price: "₹349",
    description: "Standard full experience.",
    features: [
      "Full event access",
      "Lunch & refreshments",
      "Event swag included",
      "Certificate of participation",
    ],
    cta: "Buy your ticket",
    link: "https://www.commudle.com/fill-form/4701",
    popular: true,
    note: "Offer ends soon",
    icon: Star,
    variant: "popular",
  },
  {
    name: "Special Swag Pass",
    price: "₹599",
    description: "Premium experience with exclusive swag.",
    features: [
      "Everything in General",
      "Limited edition swag",
      "Extra gifts",
      "Early entry",
    ],
    cta: "Buy your ticket",
    link: "https://www.commudle.com/fill-form/4658",
    note: "Limited drop",
    icon: Sparkles,
    variant: "premium",
  },
]

const groupTicket: Tier = {
  name: "Group Pass",
  description: "Bring 5+ builders. We'll work out a deal.",
  features: [
    "Full event access",
    "Lunch included",
    "Event swag included",
    "Custom invoicing for teams",
  ],
  cta: "Contact Team",
  link: "https://wa.me/+918969879979",
  icon: Users,
  variant: "standard",
}

const lnctTicket: Tier = {
  name: "LNCT Exclusive",
  description: "Special pricing for LNCT students. College ID required.",
  features: [
    "Everything in General",
    "Validated against LNCT student list",
    "College ID required at entry",
  ],
  cta: "Register",
  link: "https://www.commudle.com/fill-form/4700",
  icon: GraduationCap,
  variant: "standard",
}

function variantStyle(variant: Tier["variant"]) {
  switch (variant) {
    case "soldout":
      return "bg-card/40 border-dashed border-border text-foreground/70"
    case "popular":
      return "bg-card border-primary/50 shadow-[0_0_40px_rgba(245,158,11,0.18)]"
    case "premium":
      return "bg-gradient-to-br from-primary/15 via-card to-card border-primary/30"
    default:
      return "bg-card/70 border-border"
  }
}

function PriceBlock({ ticket }: { ticket: Tier }) {
  if (!ticket.price) return null
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums">
        {ticket.price}
      </span>
      {ticket.originalPrice && (
        <span className="text-base line-through text-muted-foreground/70 tabular-nums">
          {ticket.originalPrice}
        </span>
      )}
    </div>
  )
}

function TicketCard({ ticket }: { ticket: Tier }) {
  const isDisabled = ticket.disabled
  const Icon = ticket.icon

  return (
    <div
      className={`relative h-full p-6 rounded-2xl border backdrop-blur-sm flex flex-col transition-all duration-300 ${variantStyle(
        ticket.variant
      )} ${isDisabled ? "opacity-70" : "hover:-translate-y-0.5"}`}
    >
      {ticket.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] bg-primary text-primary-foreground shadow-[0_0_24px_rgba(245,158,11,0.5)]">
          Most Popular
        </span>
      )}

      {ticket.variant === "soldout" && (
        <span className="absolute top-4 right-4 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider text-foreground/70 bg-foreground/10 border border-border/60">
          Closed
        </span>
      )}

      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          {ticket.name}
        </h3>
      </div>

      <PriceBlock ticket={ticket} />

      <p className="mt-3 text-sm text-muted-foreground">
        {ticket.description}
      </p>

      <ul className="mt-5 mb-6 space-y-2.5">
        {ticket.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-sm text-foreground/85"
          >
            <Check className="shrink-0 w-4 h-4 mt-0.5 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        {isDisabled ? (
          <Button
            disabled
            className="w-full bg-secondary text-muted-foreground cursor-not-allowed"
          >
            {ticket.cta}
          </Button>
        ) : (
          <Button
            asChild
            className={`w-full font-semibold ${
              ticket.popular
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_24px_rgba(245,158,11,0.3)]"
                : "bg-foreground text-background hover:bg-foreground/90"
            }`}
          >
            <Link href={ticket.link} target="_blank" rel="noopener noreferrer">
              {ticket.cta}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        )}

        {ticket.note && (
          <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            {ticket.note}
          </p>
        )}
      </div>
    </div>
  )
}

export function TicketsSection() {
  return (
    <section
      id="tickets"
      className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.10),transparent_60%)]"
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90 mb-5">
            <span className="h-px w-6 bg-primary/60" />
            Tickets
            <span className="h-px w-6 bg-primary/60" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            Pick a pass. Skip the FOMO.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Same room, same talks, same lunch — choose how much swag you walk
            home with. Group + LNCT options below if either fits.
          </p>
        </FadeIn>

        {/* Main 4 cards */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6"
          staggerDelay={0.06}
        >
          {tickets.map((t) => (
            <StaggerItem key={t.name}>
              <TicketCard ticket={t} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Group + LNCT row */}
        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-2 gap-5">
            <TicketCard ticket={groupTicket} />
            <TicketCard ticket={lnctTicket} />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
