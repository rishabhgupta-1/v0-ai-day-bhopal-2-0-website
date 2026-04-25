"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn } from "@/components/motion"

const faqs = [
  {
    question: "Can I get a refund if I can't attend?",
    answer: "Tickets are non-refundable but can be transferred to another person. Please contact us at least 48 hours before the event to transfer your ticket.",
  },
  {
    question: "What's included in the ticket price?",
    answer: "All tickets include full-day access to sessions, workshops, networking opportunities, lunch, refreshments, and a certificate of participation. Special Swag Pass includes additional merchandise.",
  },
  {
    question: "Is there a student discount?",
    answer: "Yes! LNCT students can avail exclusive pricing through the LNCT Exclusive Form. Other students can reach out to us for group discounts.",
  },
  {
    question: "What should I bring to the event?",
    answer: "Bring your ticket QR code (digital or printed), valid ID proof, laptop (optional for workshops), and lots of enthusiasm to learn!",
  },
  {
    question: "Will there be parking available?",
    answer: "Yes, free parking is available at the venue. We recommend carpooling or using public transport when possible.",
  },
]

export function TicketFaq() {
  return (
    <section className="py-16 bg-card/50">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ticket <span className="text-primary">FAQs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about tickets? Find answers here.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
