import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { ExpectSection } from "@/components/expect-section"
import { SpeakersSection } from "@/components/speakers-section"
import { AgendaSection } from "@/components/agenda-section"
import { VenueSection } from "@/components/venue-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ExpectSection />
        <SpeakersSection />
        <AgendaSection />
        <VenueSection />
        <SponsorsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
