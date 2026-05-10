export type SponsorTier = "title" | "platinum" | "gold" | "silver"

export type PartnerLink = {
  label: string
  url: string
}

export type Sponsor = {
  name: string
  /** Default logo (designed for dark surfaces). Path under /public/. */
  logo?: string
  /**
   * Optional light-surface variant. When provided, the sponsor card swaps to
   * this asset in light mode. Useful for white-on-dark logos that need a
   * dark-on-light counterpart.
   */
  logoLight?: string
  tagline?: string
  url?: string
  links?: PartnerLink[]
}

export type Partner = {
  name: string
  /** Path under /public/sponsors/ */
  logo?: string
  description?: string
  url?: string
  links?: PartnerLink[]
  /**
   * Background tile color when displayed in a pill.
   * - "light" (default): white tile — works for dark/colored logos
   * - "dark": transparent/dark tile — required when the logo itself is white
   */
  tileVariant?: "light" | "dark"
}

export const sponsors: Record<SponsorTier, Sponsor[]> = {
  title: [
    {
      name: "Google for Developers",
      url: "https://developers.google.com",
    },
  ],
  platinum: [],
  gold: [
    {
      name: "Klariqo",
      logo: "/sponsors/klariqo.png",
      logoLight: "/sponsors/klariqo-black.png",
      tagline:
        "Voice AI infrastructure for enterprise call centers and BPOs — AI agents that qualify and warm-transfer leads so your closers only talk to ready-to-buy prospects.",
      url: "https://klariqo.com",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/company/klariqo/" },
        { label: "Twitter", url: "https://x.com/klariqoofficial" },
      ],
    },
  ],
  silver: [],
}

export const talentPartners: Partner[] = [
  {
    name: "SCALive",
    logo: "/sponsors/scalive.png",
    description:
      "Premier education institute providing career-oriented courses to aspiring students and professionals since 1998.",
    url: "https://scalive.in/",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/scalive-sharma-computer-academy-04a97877",
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@SharmaComputerAcademyBhopal",
      },
      { label: "Instagram", url: "https://www.instagram.com/scalive.in/" },
    ],
  },
  {
    name: "A2Infotech",
    logo: "/sponsors/a2infotech.png",
    description:
      "Emerging software development and training company committed to providing the highest quality, needs-based training locally and internationally.",
    url: "https://a2infotech.in/",
    links: [],
  },
  {
    name: "Mentorle",
    logo: "/sponsors/mentorle.png",
    description:
      "Helping Indian IT graduates become job-ready through expert mentorship, tailored guidance, and a platform that connects students with organizations.",
    url: "https://www.mentorle.in/",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/mentorlee/",
      },
    ],
  },
  {
    name: "India's Got Intelligence",
    logo: "/sponsors/igi.png",
    description:
      "A reality show where AI-ready innovators pitch their AI use cases — fueling the AI revolution in India.",
    url: "https://indiasgotintelligence.com",
    links: [],
  },
  {
    name: "Klariqo",
    logo: "/sponsors/klariqo.png",
    description:
      "Voice AI infrastructure for enterprise call centers. AI agents dial, qualify, and warm-transfer leads so human closers only ever talk to ready-to-buy prospects.",
    url: "https://klariqo.com",
    tileVariant: "dark",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/klariqo/",
      },
      { label: "Twitter", url: "https://x.com/klariqoofficial" },
    ],
  },
  {
    name: "Orange City Trekkers",
    logo: "/sponsors/oct.png",
    description:
      "Your gateway to unforgettable outdoor adventures — guided treks, hiking expeditions, and adventure camps across Maharashtra and beyond.",
    url: "https://www.instagram.com/orangecitytrekkers/",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/orangecitytrekkers/",
      },
    ],
  },
]

export const communityPartners: Partner[] = [
  {
    name: "OWASP Bhopal",
    logo: "/sponsors/owasp.png",
    description:
      "Bhopal chapter of the Open Web Application Security Project — a nonprofit foundation improving software security.",
    url: "https://www.instagram.com/owaspbhopal/",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/owaspbhopal/",
      },
      {
        label: "Meetup",
        url: "https://www.meetup.com/owasp-bhopal-chapter/",
      },
    ],
  },
  {
    name: "GrowthSquare",
    logo: "/sponsors/growthsquare.png",
    description:
      "A community platform helping builders, founders, and creators grow through events, networking, and shared resources.",
    url: "https://www.instagram.com/growthsq/",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/growthsq/",
      },
    ],
  },
  {
    name: "E-Cell LNCTS",
    logo: "/sponsors/ecell-lncts.png",
    description:
      "Entrepreneurship cell of LNCT Bhopal — fostering innovation, startup culture, and entrepreneurial thinking among students.",
    url: "https://www.instagram.com/ecell_lncts/",
    tileVariant: "dark",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/ecell_lncts/",
      },
    ],
  },
  {
    name: "GDG Indore",
    logo: "/sponsors/gdg-indore.png",
    description:
      "Google Developer Group Indore — a community of developers passionate about Google technologies in central India.",
    url: "https://www.instagram.com/gdgindore/",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/gdgindore/",
      },
    ],
  },
  {
    name: "The Hackers Meetup",
    logo: "/sponsors/hackers-meetup.png",
    description:
      "India's largest community of ethical hackers and cybersecurity enthusiasts — connecting professionals through meetups and events.",
    url: "https://www.instagram.com/thm.indore/",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/thm.indore/",
      },
    ],
  },
  {
    name: "CodeCrate",
    logo: "/sponsors/codecrate.png",
    description:
      "A developer community focused on hands-on coding, open source contributions, and technical skill building.",
    url: "https://www.instagram.com/code._crate/",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/code._crate/",
      },
    ],
  },
]
