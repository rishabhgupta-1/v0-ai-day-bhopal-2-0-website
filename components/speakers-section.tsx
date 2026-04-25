"use client"

import { User } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const speakers = [
  {
    name: "Dr. Anukriti Bansal",
    role: "Google Developer Expert - AI",
    organization: "LNMIIT Jaipur",
    image: null,
  },
  {
    name: "Rishiraj Acharya",
    role: "ML Engineer @ IntelliTek Health",
    organization: "GDE - AI, Cloud & Kaggle",
    image: null,
  },
  {
    name: "Announcing Soon",
    role: "Stay Tuned",
    organization: "",
    placeholder: true,
  },
  {
    name: "Announcing Soon",
    role: "Stay Tuned",
    organization: "",
    placeholder: true,
  },
]

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the Speakers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry experts and thought leaders in AI
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group p-6 rounded-2xl border transition-all h-full ${
                  speaker.placeholder 
                    ? "bg-card/50 border-dashed border-border" 
                    : "bg-card border-border hover:border-primary/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.1)]"
                }`}
              >
                <motion.div 
                  whileHover={!speaker.placeholder ? { scale: 1.05 } : {}}
                  className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    speaker.placeholder 
                      ? "bg-secondary" 
                      : "bg-gradient-to-br from-primary to-accent"
                  }`}
                >
                  <User className={`w-10 h-10 ${speaker.placeholder ? "text-muted-foreground" : "text-primary-foreground"}`} />
                </motion.div>
                <div className="text-center">
                  <h3 className={`text-lg font-semibold mb-1 ${
                    speaker.placeholder ? "text-muted-foreground" : "text-foreground"
                  }`}>
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {speaker.role}
                  </p>
                  {speaker.organization && (
                    <p className="text-xs text-primary">
                      {speaker.organization}
                    </p>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
