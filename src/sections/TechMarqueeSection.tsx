import { useEffect, useRef, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TECH_ITEMS = [
  'NEXT.JS', 'REACT', 'PYTHON', 'OPENAI', 'NODE.JS',
  'TYPESCRIPT', 'WEB', 'API', 'CLOUD', 'LANGCHAIN',
  'DATA', 'SEGURIDAD',
];

const CONCEPT_ITEMS = [
  'TRANSFORMACIÓN', 'EFICIENCIA', 'CONFIANZA', 'CRECIMIENTO',
  'INNOVACIÓN', 'SENCILLEZ', 'IMPACTO', 'FUTURO', 'VALOR',
  'ADAPTACIÓN', 'CONVERSIÓN', 'EVOLUCIÓN',
];

function buildMarqueeHTML(items: string[]): string {
  let html = '';
  for (let r = 0; r < 4; r++) {
    for (let i = 0; i < items.length; i++) {
      html += `<span class="marquee-item">${items[i]}</span><span class="marquee-sep">&bull;</span>`;
    }
  }
  return html;
}

/**
 * TechMarqueeSection — "05 — CAPACIDADES".
 * Two rows of infinite marquee:
 * - Left row: tech terms, scrolls left (−0.5px/frame)
 * - Right row: concept terms, scrolls right (+0.5px/frame)
 * Items have text-stroke outline, fill white on hover.
 * Uses requestAnimationFrame loop.
 */
export function TechMarqueeSection() {
  const { observe } = useScrollReveal();
  const leftTrackRef = useRef<HTMLDivElement>(null);
  const rightTrackRef = useRef<HTMLDivElement>(null);

  const headerRef = useCallback(
    (el: HTMLDivElement | null) => {
      if (el) observe(el);
    },
    [observe],
  );

  // RAF animation loop
  useEffect(() => {
    const leftEl = leftTrackRef.current!;
    const rightEl = rightTrackRef.current!;
    if (!leftEl || !rightEl) return;

    // Populate tracks
    leftEl.innerHTML = buildMarqueeHTML(TECH_ITEMS);
    rightEl.innerHTML = buildMarqueeHTML(CONCEPT_ITEMS);

    let posLeft = 0;
    let posRight = 0;
    let animId: number;

    function animate() {
      posLeft -= 0.5;
      posRight += 0.5;

      const wL = leftEl!.scrollWidth / 4;
      const wR = rightEl!.scrollWidth / 4;

      if (Math.abs(posLeft) >= wL) posLeft = 0;
      if (posRight >= wR) posRight = 0;

      leftEl!.style.transform = `translateX(${posLeft}px)`;
      rightEl!.style.transform = `translateX(${posRight}px)`;

      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="tech-marquee" id="tech">
      <div ref={headerRef} className="marquee-header reveal">
        <p className="marquee-kicker">05 — CAPACIDADES</p>
      </div>

      <div className="marquee-row">
        <div className="marquee-track" ref={leftTrackRef} />
      </div>

      <div className="marquee-row">
        <div className="marquee-track" ref={rightTrackRef} />
      </div>
    </section>
  );
}
