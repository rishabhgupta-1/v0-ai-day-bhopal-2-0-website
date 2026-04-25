"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/motion"
import { Check, Users, GraduationCap, Sparkles, Ticket, Star } from "lucide-react"
import Link from "next/link"

const tickets = [
  {
    id: "early-bird",
    name: "Early Bird Pass",
    originalPrice: 349,
    price: 199,
    discount: true,
    featured: false,
    color: "bg-primary",
    features: [
      "Full day access to all sessions",
      "Networking opportunities",
      "Lunch & refreshments",
      "Certificate of participation",
      "Access to recordings",
    ],
    icon: Ticket,
    cta: "Offer Closed",
    available: true,
  },
  {
    id: "general",
    name: "General Pass",
    price: 349,
    discount: false,
    featured: true,
    color: "bg-primary",
    features: [
      "Full day access to all sessions",
      "Networking opportunities",
      "Lunch & refreshments",
      "Digital Certificate of participation",
      "Access to recordings",
      "Swags included",
    ],
    icon: Star,
    cta: "Buy your ticket",
    available: true,
  },
  {
    id: "special-swag",
    name: "Special Swag Pass",
    price: 549,
    discount: false,
    featured: false,
    color: "bg-primary",
    features: [
      "Everything in General Pass",
      "Event swag included",
      "Exclusive customized AI Day swag (Limited)",

    ],
    icon: Sparkles,
    cta: "Buy your ticket",
    available: true,
  },
]

const specialTickets = [
  {
    id: "group",
    name: "Group Pass",
    subtitle: "5 members or more",
    description: "Planning to come with your team or friends? Get special group discounts when you book 5 or more tickets together.",
    color: "bg-card",
    textColor: "text-foreground",
    icon: Users,
    cta: "Click to Connect with Team",
    available: true,
  },
  {
    id: "lnct",
    name: "LNCT Exclusive Form",
    subtitle: "For LNCT Students Only",
    description: "Special pricing exclusively for students of LNCT Group of Colleges. Valid college ID required at entry.",
    color: "bg-primary",
    textColor: "text-primary-foreground",
    icon: GraduationCap,
    cta: "Buy your ticket",
    available: true,
  },
]

export function TicketCards() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Main Ticket Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {tickets.map((ticket) => (
            <StaggerItem key={ticket.id}>
              <Card
                className={`relative overflow-hidden h-full flex flex-col ${ticket.featured
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border"
                  } bg-primary text-primary-foreground`}
              >
                {ticket.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background text-foreground">Popular</Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <ticket.icon className="w-6 h-6" />
                    <h3 className="text-xl font-bold">{ticket.name}</h3>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">₹{ticket.price}</span>
                    {ticket.discount && ticket.originalPrice && (
                      <span className="text-lg line-through opacity-60">
                        ₹{ticket.originalPrice}
                      </span>
                    )}
                  </div>
                  {ticket.discount && (
                    <Badge variant="secondary" className="w-fit mt-2 bg-background/20 text-primary-foreground border-0">
                      Limited Time Offer
                    </Badge>
                  )}
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {ticket.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm opacity-90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full bg-background text-foreground hover:bg-background/90 font-semibold"
                    size="lg"
                    asChild
                  >
                    <Link href="#">{ticket.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Special Tickets */}
        <FadeIn delay={0.4}>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specialTickets.map((ticket) => (
              <Card
                key={ticket.id}
                className={`relative overflow-hidden ${ticket.color} ${ticket.textColor} border-border`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <ticket.icon className="w-6 h-6" />
                    <div>
                      <h3 className="text-xl font-bold">{ticket.name}</h3>
                      {ticket.subtitle && (
                        <p className="text-sm opacity-80">{ticket.subtitle}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className={`text-sm ${ticket.id === "group" ? "text-muted-foreground" : "opacity-90"}`}>
                    {ticket.description}
                  </p>
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full font-semibold ${ticket.id === "group"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-background text-foreground hover:bg-background/90"
                      }`}
                    variant={ticket.id === "group" ? "outline" : "default"}
                    size="lg"
                    asChild
                  >
                    <Link href="#">{ticket.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
