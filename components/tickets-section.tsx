"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
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
    cta: "Buy your ticket",
    note: "Offer Expierd",
    variant: "early" as const,
    link: "https://mlbhopal.tech/",
  },
  {
    name: "General Pass",
    price: "₹349",
    originalPrice: null,
    description: "Standard access to the full experience.",
    features: [
      "Full event access",
      "Lunch included",
      "Event swag included",
    ],
    cta: "Buy your ticket",
    note: "Offer ends soon",
    variant: "general" as const,
    popular: true,
    link: "https://www.commudle.com/fill-form/4701",
  },
  {
    name: "Special Swag Pass",
    price: "₹599",
    originalPrice: null,
    description: "For those who want more than just access.",
    features: [
      "Everything in General Pass",
      "Extra swag and gifts",
      "Limited edition AI Day T-shirt",
      "Early Entry (Limited)",
    ],
    cta: "Buy your ticket",
    note: "Offer ends in 5 days",
    variant: "swag" as const,
    link: "https://www.commudle.com/fill-form/4658",
  },
]

const specialTickets = [
  {
    name: "Group Pass",
    price: "Based on Discussion",
    description: "Standard access with bulk pricing.",
    features: [
      "Full event access",
      "Lunch included",
      "Event swag included",
    ],
    cta: "Click to Connect with Team",
    note: "Offer varies",
    variant: "group" as const,
    icon: Users,
    link: "https://wa.me/+918969879979?text=Hi,%20I%20want%20to%20discuss%20regarding%20group%20passes%20for%20ai%20day%20bhopal%202.0",
  },
  {
    name: "LNCT Exclusive Form",
    price: null,
    description: "This form is strictly limited to LNCT (LNCT, LNCTU, LNCTS, LNCTE) students only.",
    features: [
      "Everything in General Pass",
      "Free swag included",
      "You will be required to verify your college identity",
    ],
    cta: "Buy your ticket",
    note: "Please ensure that you are eligible before proceeding with the registration.",
    variant: "lnct" as const,
    icon: GraduationCap,
    link: "https://www.commudle.com/fill-form/4700",
  },
]

export function TicketsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tickets" className="py-24 bg-primary/10" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get tickets
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            AI Day Bhopal 2.0 is expected to sell out — secure your spot early and be part of the builder experience.
          </p>
        </motion.div>

        {/* Main Ticket Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col ${ticket.variant === "early"
                ? "bg-background border border-border"
                : ticket.variant === "general"
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary text-primary-foreground"
                }`}
            >
              {/* Popular Badge */}
              {ticket.popular && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-background text-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${ticket.variant === "early" ? "text-foreground" : ""
                  }`}>
                  {ticket.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl font-bold ${ticket.variant === "early" ? "text-primary" : ""
                    }`}>
                    {ticket.price}
                  </span>
                  {ticket.originalPrice && (
                    <span className="text-muted-foreground line-through text-lg">
                      {ticket.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className={`text-sm mb-6 ${ticket.variant === "early" ? "text-muted-foreground" : "opacity-90"
                }`}>
                {ticket.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${ticket.variant === "early" ? "text-primary" : ""
                      }`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href={ticket.link} target="_blank">
                <Button
                  className={`w-full font-semibold ${ticket.variant === "early"
                    ? "bg-background border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                    : "bg-background text-foreground hover:bg-background/90"
                    }`}
                  size="lg"
                >
                  {ticket.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              {/* Note */}
              {ticket.note && (
                <p className={`text-xs mt-4 flex items-center gap-1 ${ticket.variant === "early" ? "text-muted-foreground" : "opacity-75"
                  }`}>
                  <Clock className="w-3 h-3" />
                  {ticket.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Special Tickets */}
        <div className="grid md:grid-cols-2 gap-6">
          {specialTickets.map((ticket, index) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col ${ticket.variant === "lnct"
                ? "bg-foreground text-background"
                : "bg-primary text-primary-foreground"
                }`}
            >
              {/* Card Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  {ticket.icon && <ticket.icon className="w-5 h-5" />}
                  <h3 className="text-xl font-bold">{ticket.name}</h3>
                </div>
                {ticket.price && (
                  <p className="text-lg font-semibold opacity-90">{ticket.price}</p>
                )}
              </div>

              {/* Description */}
              <p className="text-sm mb-6 opacity-90">
                {ticket.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href={ticket.link} target="_blank">
                <Button
                  className={`w-full font-semibold ${ticket.variant === "lnct"
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-background text-foreground hover:bg-background/90"
                    }`}
                  size="lg"
                  variant={ticket.variant === "group" ? "outline" : "default"}
                >
                  {ticket.variant === "group" && <ArrowRight className="w-4 h-4 mr-2" />}
                  {ticket.cta}
                </Button>
              </Link>

              {/* Note */}
              {ticket.note && (
                <p className="text-xs mt-4 opacity-75">
                  {ticket.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
