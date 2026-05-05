import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Day Bhopal 2.0 | Central India's Biggest AI Builder Event",
  description:
    "Join 500+ developers, builders, and innovators for AI Day Bhopal 2.0 on May 16, 2026 at LNCT Bhopal. Talks, workshops, AI-Thon showcase, and internships — organized by ML Bhopal.",
  metadataBase: new URL("https://aiday.mlbhopal.tech"),
  openGraph: {
    title: "AI Day Bhopal 2.0",
    description: "Central India's Biggest AI Builder Event · May 16, 2026 · LNCT Bhopal.",
    url: "https://aiday.mlbhopal.tech",
    siteName: "AI Day Bhopal 2.0",
    images: ["/logo-stacked.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Day Bhopal 2.0",
    description: "Central India's Biggest AI Builder Event · May 16, 2026.",
    images: ["/logo-stacked.png"],
  },
  icons: {
    icon: "/logo-stacked.png",
    apple: "/logo-stacked.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="bg-background"
      data-scroll-behavior="smooth"
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
