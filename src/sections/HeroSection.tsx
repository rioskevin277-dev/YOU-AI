import { useEffect, useRef } from 'react';

/**
 * HeroSection — Full viewport hero with staggered entrance.
 * Kicker + Title appear on mount (rAF cascade).
 * Subtitle appears on second frame.
 * Scroll indicator appears after 1.5s.
 *
 * NO Three.js sphere. NO framer-motion. NO custom cursor.
 */
export function HeroSection() {
  const d1Ref = useRef<HTMLDivElement>(null);
  const d2Ref = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered entrance via rAF cascade
    requestAnimationFrame(() => {
      d1Ref.current?.classList.add('visible');
      requestAnimationFrame(() => {
        d2Ref.current?.classList.add('visible');
      });
    });

    // Scroll indicator appears after 1.5s
    const t = setTimeout(() => {
      indicatorRef.current?.classList.add('visible');
    }, 1500);

    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* No sphere-container — removed per design spec */}
      <div className="hero-overlay">
        <div ref={d1Ref} className="hero-section d1">
          <p className="hero-kicker">TRANSFORMACIÓN DIGITAL</p>
          <h1 className="hero-title">
            IA QUE<br />
            <span className="italic">TRANSFORMA</span>
          </h1>
        </div>

        <div ref={d2Ref} className="hero-section d2">
          <p className="hero-subtitle">
            Creamos landing pages personalizadas y soluciones de IA
            para impulsar tu negocio.
          </p>
        </div>
      </div>

      <div ref={indicatorRef} className="scroll-indicator" id="scrollIndicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
