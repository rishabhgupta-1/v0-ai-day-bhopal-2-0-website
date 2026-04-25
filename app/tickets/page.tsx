import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TicketsHero } from "@/components/tickets/tickets-hero"
import { TicketCards } from "@/components/tickets/ticket-cards"
import { TicketFaq } from "@/components/tickets/ticket-faq"

export const metadata: Metadata = {
  title: "Get Tickets | AI Day Bhopal 2.0",
  description: "Secure your spot at Central India's biggest AI Builder event. Choose from Early Bird, General, or Special Swag passes.",
}

export default function TicketsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TicketsHero />
      <TicketCards />
      <TicketFaq />
      <Footer />
    </main>
  )
}
