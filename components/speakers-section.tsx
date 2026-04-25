"use client"

import { User } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"
import Image from "next/image"

const speakers = [
  {
    name: "Dr. Anukriti Bansal",
    role: "Google Developer Expert - AI",
    organization: "LNMIIT Jaipur",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anukriti%20speaker-q9PlIGbF1E33qMKYaxi95GEHe0AtTf.png",
  },
  {
    name: "Rishiraj Acharya",
    role: "ML Engineer @ IntelliTek Health",
    organization: "GDE - AI, Cloud & Kaggle",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rishiraj%20speaker-AkZ0xv3mWtc9jovIpPcFP3rfaED5op.png",
  },
  {
    name: "Announcing Soon",
    role: "Stay Tuned",
    organization: "",
    image: null,
    placeholder: true,
  },
  {
    name: "Announcing Soon",
    role: "Stay Tuned",
    organization: "",
    image: null,
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
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group p-6 rounded-2xl border transition-all h-full ${
                  speaker.placeholder 
                    ? "bg-card/50 border-dashed border-border" 
                    : "bg-card border-border hover:border-primary/50 hover:shadow-[0_0_40px_rgba(251,146,60,0.15)]"
                }`}
              >
                <motion.div 
                  whileHover={!speaker.placeholder ? { scale: 1.05 } : {}}
                  className={`relative w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden ${
                    speaker.placeholder 
                      ? "bg-secondary flex items-center justify-center" 
                      : "ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all"
                  }`}
                >
                  {speaker.image ? (
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <User className="w-16 h-16 text-muted-foreground" />
                  )}
                </motion.div>
                <div className="text-center">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    speaker.placeholder ? "text-muted-foreground" : "text-foreground"
                  }`}>
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {speaker.role}
                  </p>
                  {speaker.organization && (
                    <p className="text-xs text-primary font-medium">
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
