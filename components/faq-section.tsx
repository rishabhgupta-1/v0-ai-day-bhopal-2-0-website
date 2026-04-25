"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const faqs = [
  {
    question: "Who can attend AI Day Bhopal 2.0?",
    answer: "Anyone interested in AI can attend! Whether you're a student, developer, researcher, or professional - if you're passionate about AI and want to learn, build, and connect, this event is for you.",
  },
  {
    question: "Do I need prior AI experience?",
    answer: "No prior AI experience is required. The event is designed to cater to all skill levels, from beginners to advanced practitioners. Our sessions will cover fundamentals as well as advanced topics.",
  },
  {
    question: "Will there be internship opportunities?",
    answer: "Yes! We have partnered with several Tech companies & Startups that will be looking for talented individuals. Also, Top performers at the AI-Thon showcase will have exclusive access to internship opportunities.",
  },
  {
    question: "What should I bring to the event?",
    answer: "Bring your laptop, charger, student/professional ID, and most importantly - your enthusiasm to learn! Lunch and refreshments will be provided.",
  },
  {
    question: "Is the event free?",
    answer: "The event has a nominal registration fee to confirm attendance. Early bird tickets were available at a discounted rate but the offer is now over. Check the tickets section for current pricing.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the event
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
