/**
 * Fine-grain animated SVG noise overlay — fixed to the viewport.
 * Adds film-like depth without ever being visually loud.
 *
 * The noise SVG is inlined as a data-URI so there's no extra request.
 */
const NOISE_SVG = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'>
    <filter id='n'>
      <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>
      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 0.55 0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#n)'/>
  </svg>`
)

export function NoiseGrain({
  opacity = 0.06,
  className = "",
}: {
  opacity?: number
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[55] mix-blend-overlay ${className}`}
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml;utf8,${NOISE_SVG}")`,
        backgroundSize: "200px 200px",
      }}
    />
  )
}
