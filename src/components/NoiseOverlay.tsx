/**
 * NoiseOverlay — Fixed SVG noise filter overlay.
 * Uses inline SVG with fractalNoise at opacity 0.03.
 * Pointer-events: none. z-index: 9999.
 */
export function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />;
}
