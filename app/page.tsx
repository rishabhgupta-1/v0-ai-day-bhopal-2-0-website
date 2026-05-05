import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { NoiseGrain } from "@/components/noise-grain"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { ExpectSection } from "@/components/expect-section"
import { SpeakersSection } from "@/components/speakers-section"
import { AgendaSection } from "@/components/agenda-section"
import { RecapSection } from "@/components/recap-section"
import { VenueSection } from "@/components/venue-section"
import { TicketsSection } from "@/components/tickets-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { PageLoader } from "@/components/page-loader"

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageLoader />
      <NoiseGrain />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ExpectSection />
        <SpeakersSection />
        <AgendaSection />
        <RecapSection />
        <VenueSection />
        <TicketsSection />
        <SponsorsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
