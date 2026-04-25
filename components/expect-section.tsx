import { Mic2, BookOpen, Trophy, Users, Briefcase } from "lucide-react"

const expectations = [
  {
    icon: Mic2,
    title: "Expert Talks",
    description: "Learn from industry leaders and Google Developer Experts sharing real-world insights.",
  },
  {
    icon: BookOpen,
    title: "Hands-on Learning",
    description: "Get practical experience with cutting-edge AI tools and frameworks.",
  },
  {
    icon: Trophy,
    title: "AI-Thon Showcase",
    description: "Watch innovative AI projects compete and get inspired by fellow builders.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with like-minded developers, mentors, and potential collaborators.",
  },
  {
    icon: Briefcase,
    title: "Internship Opportunities",
    description: "Exclusive internship opportunities from partner companies for top performers.",
  },
]

export function ExpectSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            What to Expect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A packed day of learning, building, and connecting
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expectations.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(251,146,60,0.1)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
