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

type Faq = {
  question: string
  answer: React.ReactNode
  group: "attendee" | "sponsor"
}

const faqs: Faq[] = [
  {
    group: "attendee",
    question: "Who is this for?",
    answer:
      "Students, developers, researchers, founders — anyone in Central India who builds with AI or wants to. Come whether you've fine-tuned a model or just heard 'transformers' a lot lately.",
  },
  {
    group: "attendee",
    question: "Do I need prior AI experience?",
    answer:
      "No. Some workshops are intro-level, some are deep. The talk track and AI-Thon work for both ends — come curious, leave with code.",
  },
  {
    group: "attendee",
    question: "Will there really be internship opportunities?",
    answer:
      "Yes — guaranteed, not as a teaser. We're partnered with the companies and startups recruiting in Central India this year. Every attendee gets in front of a hiring team. AI-Thon top builds get fast-tracked interview slots on top.",
  },
  {
    group: "attendee",
    question: "What should I bring?",
    answer:
      "A laptop, charger, your college or work ID, and a few questions you want answered. Lunch, chai, and the after-hours stickers are on us.",
  },
  {
    group: "sponsor",
    question: "Can my company sponsor this?",
    answer: (
      <>
        Yes — that&apos;s the section above this one. Tiers go from logo + booth to
        full-stage takeover. Email{" "}
        <Link
          href={`mailto:${EVENT.contact.email}`}
          className="text-primary hover:underline font-medium"
        >
          {EVENT.contact.email}
        </Link>{" "}
        and we&apos;ll reply with the deck under a day.
      </>
    ),
  },
  {
    group: "sponsor",
    question: "Will there be a hiring booth or recruiter access?",
    answer:
      "Yes — relevant tiers come with a booth, recruiter passes, resume drop access, and the option to run a fireside or workshop. We'll tune the slot to what you actually want out of the day.",
  },
]

export function FAQSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90 mb-5">
            <span className="h-px w-6 bg-primary/60" />
            FAQ
            <span className="h-px w-6 bg-primary/60" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            Questions we keep getting.
          </h2>
          <p className="text-lg text-muted-foreground">
            For builders showing up — and for the brands behind them.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.06}>
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3"
          >
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card/70 border border-border/80 rounded-xl px-6 backdrop-blur-sm data-[state=open]:border-primary/40 data-[state=open]:bg-card transition-colors"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                    <span className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 shrink-0 inline-block w-1.5 h-1.5 rounded-full ${
                          faq.group === "sponsor"
                            ? "bg-[var(--g-blue)]"
                            : "bg-primary"
                        }`}
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

        <FadeIn delay={0.2}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Still got a question? Drop us a line at{" "}
            <Link
              href={`mailto:${EVENT.contact.email}`}
              className="text-primary hover:underline font-medium"
            >
              {EVENT.contact.email}
            </Link>{" "}
            — we read everything.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
