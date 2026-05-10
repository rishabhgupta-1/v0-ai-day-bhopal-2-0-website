import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * Official Google for Developers white lockup.
 *
 * Uses the official white PNG asset (`/gfd-logo-white.png`).
 * Apply height via className (e.g. `h-5`, `h-[14px]`) — width scales
 * automatically to maintain the correct aspect ratio.
 *
 * Natural asset size: 1024 × 111 px (ratio ≈ 9.2 : 1).
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
      <Image
        src="/gfd-logo-white.png"
        alt={title}
        width={1024}
        height={111}
        className="h-full w-auto object-contain"
      />
    </span>
  )
}
