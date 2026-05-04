import { cn } from "@/lib/utils"

/**
 * Google for Developers wordmark.
 *
 * Inline SVG so it stays crisp at every size and inherits a
 * `currentColor`-driven secondary tone for "for Developers" — meaning
 * dropping it on dark or light surfaces "just works".
 *
 * Brand colors are pinned to the official Google palette:
 *   blue   #4285F4
 *   red    #EA4335
 *   yellow #FBBC05
 *   green  #34A853
 */
export function GoogleForDevelopers({
  className,
  title = "Google for Developers",
  /** Force "for Developers" + divider color. Defaults to inherited text color. */
  secondaryColor,
}: {
  className?: string
  title?: string
  secondaryColor?: string
}) {
  return (
    <svg
      role="img"
      aria-label={title}
      viewBox="0 0 248 28"
      className={cn("h-5 w-auto", className)}
    >
      <title>{title}</title>

      {/* Google */}
      <g
        fontFamily='"Google Sans", "Inter", system-ui, sans-serif'
        fontSize="24"
        fontWeight="500"
        textAnchor="start"
        style={{ letterSpacing: "-0.5px" }}
      >
        <text x="0" y="22" fill="#4285F4">G</text>
        <text x="17" y="22" fill="#EA4335">o</text>
        <text x="32" y="22" fill="#FBBC05">o</text>
        <text x="48" y="22" fill="#4285F4">g</text>
        <text x="63" y="22" fill="#34A853">l</text>
        <text x="70" y="22" fill="#EA4335">e</text>
      </g>

      {/* divider */}
      <line
        x1="92"
        y1="6"
        x2="92"
        y2="24"
        stroke={secondaryColor ?? "currentColor"}
        strokeWidth="1"
        opacity="0.55"
      />

      {/* for Developers */}
      <text
        x="100"
        y="22"
        fontFamily='"Google Sans", "Inter", system-ui, sans-serif'
        fontSize="20"
        fontWeight="400"
        fill={secondaryColor ?? "currentColor"}
      >
        for Developers
      </text>
    </svg>
  )
}
