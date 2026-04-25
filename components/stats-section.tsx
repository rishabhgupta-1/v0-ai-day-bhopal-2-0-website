const stats = [
  { value: "500+", label: "Attendees" },
  { value: "5+", label: "Speakers" },
  { value: "10+", label: "Projects" },
  { value: "1 Day", label: "Event" },
]

export function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
