"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/motion"
import { Check, Users, GraduationCap, Sparkles, Ticket, Star } from "lucide-react"
import Link from "next/link"

/* ================= DATA ================= */

const tickets = [
  {
    id: "early-bird",
    name: "Early Bird Pass",
    originalPrice: 349,
    price: 249,
    discount: true,
    featured: false,
    features: [
      "Full day access to all sessions",
      "Networking opportunities",
      "Lunch & refreshments",
      "Event swag included",
      "Networking with builders",
    ],
    icon: Ticket,
    cta: "Offer Closed",
    disabled: true,
    link: "#",
  },
  {
    id: "builder",
    name: "Builder Pass",
    price: 179,
    features: [
      "Full event access",
      "Lunch included",
      "No swag included",
      "Networking with builders",
    ],
    icon: Ticket,
    cta: "Buy your ticket",
    link: "https://www.commudle.com/fill-form/4704",
  },
  {
    id: "general",
    name: "General Pass",
    price: 349,
    featured: true,
    features: [
      "Full day access",
      "Networking opportunities",
      "Lunch & refreshments",
      "Certificate",
      "Recordings",
      "Swags included",
    ],
    icon: Star,
    cta: "Buy your ticket",
    link: "https://www.commudle.com/fill-form/4701",
  },
  {
    id: "special-swag",
    name: "Special Swag Pass",
    price: 549,
    features: [
      "Everything in General Pass",
      "Event swag included",
      "Exclusive customized swag",
    ],
    icon: Sparkles,
    cta: "Buy your ticket",
    link: "https://www.commudle.com/fill-form/4658",
  },
]

const groupTicket = {
  name: "Group Pass",
  description: "Book 5+ tickets and get discounts.",
  link: "https://wa.me/+918969879979",
}

const lnctTicket = {
  name: "LNCT Exclusive Form",
  subtitle: "For LNCT Students Only",
  description: "Special pricing for LNCT students. Valid college ID required.",
  link: "https://www.commudle.com/fill-form/4700",
}

/* ================= COMPONENT ================= */

export function TicketCards() {
  const mainTickets = tickets.slice(0, 3)
  const swagTicket = tickets.find(t => t.id === "special-swag")

  const renderButton = (ticket: any) => {
    if (ticket.disabled) {
      return (
        <Button disabled className="w-full bg-black text-white opacity-50 cursor-not-allowed">
          {ticket.cta}
        </Button>
      )
    }

    return (
      <Link href={ticket.link} target="_blank">
        <Button className="w-full bg-black text-white hover:bg-black/90 cursor-pointer">
          {ticket.cta}
        </Button>
      </Link>
    )
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* ROW 1 */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {mainTickets.map((ticket) => (
            <StaggerItem key={ticket.id}>
              <Card className="relative h-full flex flex-col bg-primary text-primary-foreground">

                {ticket.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background text-foreground">Popular</Badge>
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <ticket.icon className="w-6 h-6" />
                    <h3 className="text-xl font-bold">{ticket.name}</h3>
                  </div>

                  <div className="flex gap-2 items-baseline">
                    <span className="text-4xl font-bold">₹{ticket.price}</span>
                    {ticket.discount && (
                      <span className="line-through opacity-60">₹{ticket.originalPrice}</span>
                    )}
                  </div>

                  {ticket.discount && (
                    <Badge className="mt-2 bg-background/20 text-white">
                      Limited Time Offer
                    </Badge>
                  )}
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {ticket.features.map((f, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <Check className="w-5 h-5 mt-1" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>{renderButton(ticket)}</CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ROW 2 */}
        <FadeIn delay={0.3}>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">

            {/* Swag */}
            {swagTicket && (
              <Card className="bg-primary text-primary-foreground flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    <h3 className="text-xl font-bold">{swagTicket.name}</h3>
                  </div>
                  <p className="text-3xl font-bold mt-2">₹{swagTicket.price}</p>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    {swagTicket.features.map((f, i) => (
                      <li key={i}>✔ {f}</li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Link href={swagTicket.link} target="_blank">
                    <Button className="w-full bg-black text-white hover:bg-black/90">
                      {swagTicket.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )}

            {/* Group */}
            <Card className="bg-card text-foreground flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  <h3 className="text-xl font-bold">{groupTicket.name}</h3>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  {groupTicket.description}
                </p>
              </CardContent>

              <CardFooter>
                <Link href={groupTicket.link} target="_blank">
                  <Button className="w-full bg-black text-white hover:bg-black/90">
                    Contact Team
                  </Button>
                </Link>
              </CardFooter>
            </Card>

          </div>
        </FadeIn>

        {/* ROW 3 */}
        <FadeIn delay={0.5}>
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white text-black">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6" />
                  <h3 className="text-xl font-bold">{lnctTicket.name}</h3>
                </div>
                <p className="text-sm">{lnctTicket.subtitle}</p>
              </CardHeader>

              <CardContent>
                <p className="text-sm">{lnctTicket.description}</p>
              </CardContent>

              <CardFooter>
                <Link href={lnctTicket.link} target="_blank">
                  <Button className="w-full bg-black text-white hover:bg-black/90">
                    Buy your ticket
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}