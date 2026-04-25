"use client"

import { Clock } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const agenda = [
  {
    time: "10:00 AM - 12:30 PM",
    title: "Expert Talks",
    description: "Keynotes and technical sessions from industry experts",
  },
  {
    time: "12:30 PM - 01:30 PM",
    title: "Lunch Break",
    description: "Network with fellow attendees over refreshments",
  },
  {
    time: "01:30 PM - 03:30 PM",
    title: "AI-Thon Showcase",
    description: "Project presentations and live demonstrations",
  },
  {
    time: "03:30 PM - 05:00 PM",
    title: "Closing Ceremony",
    description: "Awards, announcements, and closing remarks",
  },
]

export function AgendaSection() {
  return (
    <section id="agenda" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Event Agenda
          </h2>
          <p className="text-lg text-muted-foreground">
            A full day packed with learning and networking
          </p>
        </FadeIn>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <StaggerContainer className="space-y-6" staggerDelay={0.15}>
            {agenda.map((item, index) => (
              <StaggerItem key={index} direction="left">
                <motion.div
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="relative flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="hidden sm:flex absolute -left-[5px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" 
                  />
                  
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-primary font-medium mb-1">
                      {item.time}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
