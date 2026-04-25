export function SponsorsSection() {
  const sponsorPlaceholders = Array(6).fill(null)

  return (
    <section id="sponsors" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Sponsors
          </h2>
          <p className="text-lg text-muted-foreground">
            Partnering to make AI Day Bhopal 2.0 possible
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {sponsorPlaceholders.map((_, index) => (
            <div
              key={index}
              className="aspect-[2/1] rounded-2xl bg-card border border-dashed border-border flex items-center justify-center hover:border-primary/50 transition-colors"
            >
              <span className="text-muted-foreground text-sm">Sponsor Logo</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Interested in sponsoring?{" "}
            <a href="mailto:contact@mlbhopal.com" className="text-primary hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
