import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Limited Seats Available</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance mb-6">
          <span className="text-foreground">AI Day</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Bhopal 2.0</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
          Central India&apos;s Biggest AI Builder Event
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
          Join developers, builders, and innovators for a day of learning, building, and real-world AI exposure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(251,146,60,0.4)] hover:shadow-[0_0_40px_rgba(251,146,60,0.6)] transition-all text-base px-8 py-6 rounded-xl"
          >
            Get Tickets
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border text-foreground hover:bg-secondary text-base px-8 py-6 rounded-xl"
          >
            Explore Event
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            500+ Developers Joining
          </span>
          <span className="hidden sm:block text-border">|</span>
          <span>Internship Opportunities Included</span>
        </div>
      </div>
    </section>
  )
}
