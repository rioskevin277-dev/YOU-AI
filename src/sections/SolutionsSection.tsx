import { useEffect, useRef, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ITEMS = [
  { text: 'Landing pages personalizadas para cada negocio.', outline: false },
  { text: 'Analizamos procesos y encontramos oportunidades.', outline: true },
  { text: 'Páginas web que transforman.', outline: false },
  { text: 'Automatizaciones inteligentes con IA que ahorran tiempo real.', outline: true },
  { text: 'Herramientas digitales hechas a tu medida.', outline: false },
  { text: 'Landing pages personalizadas para cada negocio.', outline: true },
  { text: 'Analizamos procesos y encontramos oportunidades.', outline: false },
  { text: 'Automatizaciones con IA que ahorran tiempo real.', outline: true },
  { text: 'Asistentes inteligentes para servir mejor a tus clientes.', outline: false },
  { text: 'Herramientas digitales hechas a tu medida.', outline: true },
];

/**
 * SolutionsSection — "03 — SOLUCIONES".
 * Horizontal scroll marquee with scroll-driven parallax.
 * Items alternate outline/filled styles. Divider line scales on reveal.
 */
export function SolutionsSection() {
  const { observe } = useScrollReveal();
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven parallax
  useEffect(() => {
    const trackEl = trackRef.current!;
    const sectionEl = sectionRef.current!;
    if (!trackEl || !sectionEl) return;

    const scrollable = sectionEl.querySelector('.scroll-horizontal') as HTMLElement | null;
    if (!scrollable) return;

    let maxX = Math.max(
      0,
      (trackEl.scrollWidth - scrollable.offsetWidth) / 2,
    );

    function updateScroll() {
      const sec = sectionRef.current;
      const trk = trackRef.current;
      if (!sec || !trk) return;
      const rect = sec.getBoundingClientRect();
      const winH = window.innerHeight;
      let progress = 1 - (rect.top + rect.height) / (winH + rect.height);
      progress = Math.max(0, Math.min(1, progress));
      trk.style.transform = `translateX(${-progress * maxX}px)`;
    }

    function onResize() {
      const trk = trackRef.current;
      if (!trk) return;
      maxX = Math.max(
        0,
        (trk.scrollWidth - scrollable!.offsetWidth) / 2,
      );
      updateScroll();
    }

    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', onResize);
    updateScroll();

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Scroll reveal for header + line
  const setHeaderRef = useCallback(
    (el: HTMLDivElement | null) => {
      headerRef.current = el;
      if (el) observe(el);
    },
    [observe],
  );

  const setLineRef = useCallback(
    (el: HTMLDivElement | null) => {
      lineRef.current = el;
      if (el) observe(el);
    },
    [observe],
  );

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div ref={setHeaderRef} className="about-header reveal">
        <p className="about-kicker">03 — SOLUCIONES</p>
        <h2 className="about-title">Web + IA para tu Negocio</h2>
      </div>

      <div className="scroll-horizontal">
        <div className="scroll-track" ref={trackRef}>
          {ITEMS.map((item, i) => (
            <span
              key={i}
              className={`scroll-item${item.outline ? ' outline' : ''}`}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>

      <div ref={setLineRef} className="about-line" />
    </section>
  );
}
