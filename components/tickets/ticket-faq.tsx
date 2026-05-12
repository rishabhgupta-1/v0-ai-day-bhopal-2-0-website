"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import Link from "next/link"
import { EVENT } from "@/lib/event"

const faqs = [
  {
    question: "Can I get a refund if I can't attend?",
    answer:
      "Tickets are non-refundable but can be transferred to another person. Please contact us at least 48 hours before the event to transfer your ticket.",
  },
  {
    question: "What's included in the ticket price?",
    answer:
      "All tickets include full-day access to sessions, workshops, networking opportunities, lunch, refreshments, and a certificate of participation. Special Swag Pass adds limited-edition merchandise on top.",
  },
  {
    question: "Is there a student discount?",
    answer:
      "Yes. LNCT students get exclusive pricing through the LNCT Exclusive form. For other student groups, reach out and we'll work out a group rate.",
  },
  {
    question: "What should I bring to the event?",
    answer:
      "Your ticket QR (digital or printed), a valid ID, your laptop (optional but recommended for workshops), and lots of enthusiasm to learn and ship.",
  },
  {
    question: "Will there be parking available?",
    answer:
      "Yes — free parking is available at LNCT. We recommend carpooling or public transport when you can.",
  },
]

export function TicketFaq() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90 mb-5">
            <span className="h-px w-6 bg-primary/60" />
            Ticket FAQ
            <span className="h-px w-6 bg-primary/60" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            Quick questions, quick answers.
          </h2>
          <p className="text-lg text-muted-foreground">
            Anything we missed? Email{" "}
            <Link
              href={`mailto:${EVENT.contact.email}`}
              className="text-primary hover:underline font-medium"
            >
              {EVENT.contact.email}
            </Link>
            .
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.06}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card/70 border border-border/80 rounded-xl px-6 backdrop-blur-sm data-[state=open]:border-primary/40 data-[state=open]:bg-card transition-colors"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                    <span className="flex items-start gap-3">
                      <span
                        className="mt-1.5 shrink-0 inline-block w-1.5 h-1.5 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span>{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed pl-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </StaggerContainer>
      </div>
    </section>
  )
}
