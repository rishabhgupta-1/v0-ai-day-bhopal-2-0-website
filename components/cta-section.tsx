import { Button } from "@/components/ui/button"
import { ArrowRight, Ticket } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
          
          {/* Content */}
          <div className="relative p-12 sm:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Ticket className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Limited Seats</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Join us in May
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Secure your spot for AI Day Bhopal 2.0 now. Be part of Central India&apos;s biggest AI builder community event.
            </p>

            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(251,146,60,0.4)] hover:shadow-[0_0_50px_rgba(251,146,60,0.6)] transition-all text-lg px-10 py-7 rounded-xl"
            >
              Get Your Ticket
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <p className="mt-8 text-sm text-muted-foreground">
              Join 500+ developers already registered
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
