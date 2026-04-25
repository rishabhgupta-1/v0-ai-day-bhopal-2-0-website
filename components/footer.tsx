import Link from "next/link"
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

const footerLinks = [
  { href: "#speakers", label: "Speakers" },
  { href: "#agenda", label: "Agenda" },
  { href: "#venue", label: "Venue" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "mailto:contact@mlbhopal.com", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
]

const socialLinks = [
  { href: "https://twitter.com/mlbhopal", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/company/mlbhopal", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/mlbhopal", icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com/@mlbhopal", icon: Youtube, label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-xl font-bold text-foreground">
            ML Bhopal
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ML Bhopal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
