"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, ArrowRight, Clock, Users, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tickets = [
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
    cta: { label: "Sold Out", disabled: true },
    note: "Offer expired",
    variant: "early",
    link: "#",
  },
  {
    name: "Builder Pass",
    price: "₹179",
    description: "Affordable access. No swag included.",
    features: [
      "Full event access",
      "Lunch included",
      "No swag included",
      "Networking",
    ],
    cta: { label: "Buy your ticket", disabled: false },
    note: "Limited seats",
    variant: "builder",
    link: "https://www.commudle.com/fill-form/4704",
  },
  {
    name: "General Pass",
    price: "₹349",
    description: "Standard full experience.",
    features: [
      "Full event access",
      "Lunch included",
      "Event swag included",
    ],
    cta: { label: "Buy your ticket", disabled: false },
    note: "Offer ends soon",
    variant: "general",
    popular: true,
    link: "https://www.commudle.com/fill-form/4701",
  },
  {
    name: "Special Swag Pass",
    price: "₹599",
    description: "Premium experience with exclusive swag.",
    features: [
      "Everything in General",
      "Extra swag & gifts",
      "Limited edition swags",
      "Early Entry",
    ],
    cta: { label: "Buy your ticket", disabled: false },
    note: "Offer ends in soon",
    variant: "swag",
    link: "https://www.commudle.com/fill-form/4658",
  },
]

const specialTickets = [
  {
    name: "Group Pass",
    price: "Based on Discussion",
    description: "Bulk pricing for teams.",
    features: [
      "Full event access",
      "Lunch included",
      "Event swag included",
    ],
    cta: "Contact Team",
    variant: "group",
    icon: Users,
    link: "https://wa.me/+918969879979",
  },
  {
    name: "LNCT Exclusive",
    description: "Only for LNCT students.",
    features: [
      "Everything in General",
      "Only Valid for LNCT College Students",
      "College ID required",
    ],
    cta: "Register Now",
    variant: "lnct",
    icon: GraduationCap,
    link: "https://www.commudle.com/fill-form/4700",
  },
]

export function TicketsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const Card = ({ ticket }: any) => (
    <div
      className={`rounded-2xl p-6 flex flex-col h-full ${ticket.variant === "early"
        ? "bg-black text-white"
        : "bg-primary text-primary-foreground"
        }`}
    >
      {ticket.popular && (
        <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded-full">
          Popular
        </span>
      )}

      <h3 className="text-xl font-bold mb-2">{ticket.name}</h3>

      {ticket.price && (
        <div className="flex gap-2 mb-4">
          <span className="text-3xl font-bold">{ticket.price}</span>
          {ticket.originalPrice && (
            <span className="line-through text-sm opacity-70">
              {ticket.originalPrice}
            </span>
          )}
        </div>
      )}

      <p className="text-sm mb-6 opacity-90">{ticket.description}</p>

      <ul className="space-y-2 mb-6">
        {ticket.features.map((f: string) => (
          <li key={f} className="flex gap-2 text-sm">
            <Check className="w-4 h-4 mt-1" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        {ticket.cta?.disabled ? (
          <Button disabled className="w-full bg-black text-white opacity-50">
            {ticket.cta.label}
          </Button>
        ) : (
          <Link href={ticket.link} target="_blank">
            <Button className="w-full bg-black text-white hover:bg-black/90 cursor-pointer">
              {ticket.cta.label || ticket.cta}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        )}

        {ticket.note && (
          <p className="text-xs mt-3 flex items-center gap-1 opacity-70">
            <Clock className="w-3 h-3" />
            {ticket.note}
          </p>
        )}
      </div>
    </div>
  )

  return (
    <section className="py-24 bg-primary/10" ref={ref}>
      <div className="container mx-auto px-4">

        {/* ROW 1 → 3 CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {tickets.slice(0, 3).map((t, i) => (
            <Card key={i} ticket={t} />
          ))}
        </div>

        {/* ROW 2 → 2 CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card ticket={tickets[3]} />
          <Card ticket={specialTickets[0]} />
        </div>

        {/* ROW 3 → FULL WIDTH */}
        <div>
          <div className="rounded-2xl p-8 bg-white text-black flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-5 h-5" />
              <h3 className="text-2xl font-bold">
                {specialTickets[1].name}
              </h3>
            </div>

            <p className="mb-6">{specialTickets[1].description}</p>

            <ul className="space-y-2 mb-6">
              {specialTickets[1].features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="w-4 h-4 mt-1" />
                  {f}
                </li>
              ))}
            </ul>

            <Link href={specialTickets[1].link} target="_blank">
              <Button className="w-full bg-black text-white hover:bg-black/90">
                {specialTickets[1].cta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}