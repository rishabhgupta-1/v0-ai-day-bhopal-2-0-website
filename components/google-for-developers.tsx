import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * Official Google for Developers lockup, theme-aware.
 *
 * Two PNG assets are stacked and toggled with `dark:` visibility classes:
 * - Light mode: `/gfd-logo-color.png` — official 4-colour Google + grey
 *   "for Developers" — designed for white surfaces.
 * - Dark mode:  `/gfd-logo-white.png` — solid white lockup for dark surfaces.
 *
 * Toggling via CSS (no `useTheme`) means both renders are server-safe and
 * there's no flash on theme change.
 *
 * Apply height via className (e.g. `h-5`, `h-[14px]`) — width scales
 * automatically. Natural asset size: 1024 × 111 px (ratio ≈ 9.2 : 1).
 */
export function GoogleForDevelopers({
  className,
  title = "Google for Developers",
}: {
  className?: string
  title?: string
}) {
  return (
    <span
      role="img"
      aria-label={title}
      className={cn("inline-flex items-center", className)}
    >
      {/* Light mode: colour lockup */}
      <Image
        src="/gfd-logo-color.png"
        alt={title}
        width={1024}
        height={111}
        className="h-full w-auto object-contain block dark:hidden"
      />
      {/* Dark mode: white lockup */}
      <Image
        src="/gfd-logo-white.png"
        alt=""
        aria-hidden
        width={1024}
        height={111}
        className="h-full w-auto object-contain hidden dark:block"
      />
    </span>
  )
}
