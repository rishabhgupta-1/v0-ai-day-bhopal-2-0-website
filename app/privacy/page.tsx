import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NoiseGrain } from "@/components/noise-grain"
import { ScrollProgress } from "@/components/scroll-progress"
import { EVENT } from "@/lib/event"

export const metadata: Metadata = {
  title: "Privacy Policy | AI Day Bhopal 2.0",
  description:
    "How ML Bhopal handles personal data collected via the AI Day Bhopal 2.0 ticketing flow, communications, and on-site interactions.",
}

const LAST_UPDATED = "12 May 2026"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <NoiseGrain />
      <ScrollProgress />
      <Navbar />

      <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] font-semibold text-primary">
                Policies
              </span>
              <span className="h-px flex-1 bg-border/60" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 text-balance">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <div className="space-y-10 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                1. What this covers
              </h2>
              <p>
                This policy explains how ML Bhopal handles personal data
                collected via the {EVENT.name} ticketing flow, our
                communication channels (email, WhatsApp, the website itself),
                and on-site interactions at the venue on {EVENT.dateLabel}.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                2. What we collect
              </h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                <li>Your name.</li>
                <li>Your email address.</li>
                <li>Your phone number (typically used for WhatsApp).</li>
                <li>Your college or company, and your role / year.</li>
                <li>A payment confirmation reference for your pass.</li>
                <li>
                  At the venue: photos and video that may include you (group
                  shots, session captures, candid moments).
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                3. Why we collect it
              </h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                <li>
                  <span className="text-foreground font-medium">
                    To run the event
                  </span>{" "}
                  — issuing badges, sending logistical updates, and planning
                  capacity.
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    To match attendees with hiring &amp; talent partners
                  </span>{" "}
                  participating at the event.
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    For recap and marketing
                  </span>{" "}
                  content used to promote future editions of the event.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                4. Sharing your data
              </h2>
              <p>
                Your data may be shared with our hiring and talent partners as
                part of the internship and hiring matchmaking process.
              </p>
              <p className="text-foreground font-semibold">
                ML Bhopal does not guarantee any internship or job offer — we
                only facilitate the connection between you and participating
                companies.
              </p>
              <p>We do not sell your data to anyone.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                5. Retention
              </h2>
              <p>
                We keep your data for as long as it&apos;s needed for the event
                lifecycle and a reasonable post-event window for follow-ups
                (recap content, hiring partner introductions, alumni updates).
                After that, we retire it.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                6. Your rights
              </h2>
              <p>
                You can request access to the data we hold about you, ask for
                corrections, or ask us to delete it — just email{" "}
                <Link
                  href={`mailto:${EVENT.contact.email}`}
                  className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                >
                  {EVENT.contact.email}
                </Link>{" "}
                from the address you registered with.
              </p>
              <p>
                You can also opt out of hiring-partner sharing at any time.
                Note that opting out means we can&apos;t include you in the
                matchmaking process for that edition.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                7. Cookies &amp; analytics
              </h2>
              <p>
                The site uses{" "}
                <Link
                  href="https://vercel.com/docs/analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                >
                  Vercel Analytics
                </Link>{" "}
                in production to understand aggregate traffic patterns (which
                pages are popular, where visitors come from). It uses minimal,
                cookie-less measurement and we do not run third-party
                advertising trackers. Beyond that, we use only the minimum
                cookies required to keep the site functional.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                8. Updates
              </h2>
              <p>
                This policy may be updated from time to time. Check the
                &quot;last updated&quot; date at the top of the page for the
                latest version.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                9. Contact
              </h2>
              <p>
                Questions about this policy or your data? Reach the organisers
                at{" "}
                <Link
                  href={`mailto:${EVENT.contact.email}`}
                  className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                >
                  {EVENT.contact.email}
                </Link>{" "}
                or on WhatsApp at{" "}
                <Link
                  href={EVENT.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                >
                  {EVENT.contact.phone}
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  )
}
