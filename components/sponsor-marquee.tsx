"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export type MarqueeItem = {
  name: string
  /** Default logo asset. Path under /public/. */
  logo?: string
  /**
   * Optional light-surface variant. When provided, the marquee swaps to it
   * in light mode so brands shipping both a white-on-dark and dark-on-light
   * lockup can render correctly in either theme without needing a dark tile.
   */
  logoLight?: string
  url?: string
  /**
   * Tile background. "dark" is needed when the logo itself is white AND no
   * `logoLight` variant is supplied (e.g. Klariqo white-on-transparent).
   */
  tileVariant?: "light" | "dark"
}

/**
 * Auto-scrolling, infinite-loop horizontal logo strip.
 *
 * - Pauses on hover (so users can read individual logos)
 * - Edge fades on the left/right so logos drift in/out cleanly
 * - Each item links out to the partner's site
 *
 * Pass `items` once — the component duplicates the list internally so the
 * `translateX(-50%)` keyframe produces a seamless loop.
 */
export function SponsorMarquee({
  items,
  label,
}: {
  items: MarqueeItem[]
  label?: string
}) {
  if (items.length === 0) return null
  const loop = [...items, ...items]

  return (
    <div className="relative w-full">
      {label && (
        <div className="flex items-center gap-3 mb-4 max-w-md mx-auto">
          <div className="h-px flex-1 bg-border/40" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 whitespace-nowrap font-mono">
            {label}
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>
      )}

      <div className="relative overflow-hidden group">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"
          aria-hidden
        />

        <div className="flex gap-3 whitespace-nowrap will-change-transform animate-sponsor-marquee group-hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <a
              key={`${item.name}-${i}`}
              href={item.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className={cn(
                "shrink-0 inline-flex items-center gap-2.5 rounded-full border h-12 pl-1.5 pr-4",
                // Theme-adaptive surface: subtle on light, subtle on dark.
                "border-border/70 bg-card/60 backdrop-blur-sm",
                "dark:border-white/[0.10] dark:bg-white/[0.03]",
                "hover:border-primary/50 hover:bg-primary/5 transition-colors",
              )}
            >
              {item.logo && (
                <span
                  className={cn(
                    "relative flex-shrink-0 rounded-full overflow-hidden h-9 w-9",
                    // With a themed logo pair, the tile flips per theme so
                    // each variant reads on its own surface.
                    item.logoLight
                      ? "bg-white ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10"
                      : item.tileVariant === "dark"
                        ? "bg-neutral-900 ring-1 ring-white/10"
                        : "bg-white ring-1 ring-black/5",
                  )}
                >
                  {item.logoLight ? (
                    <>
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain p-1 hidden dark:block"
                      />
                      <Image
                        src={item.logoLight}
                        alt=""
                        aria-hidden
                        fill
                        className="object-contain p-1 block dark:hidden"
                      />
                    </>
                  ) : (
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                    />
                  )}
                </span>
              )}
              <span className="text-sm font-medium text-foreground/85">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
