import { useCallback } from 'react';

/**
 * useSmoothScroll — Custom cubic-bezier smooth scroll helper.
 * Uses cubic-out easing `1 - (1 - t)^3` over 800ms via requestAnimationFrame.
 *
 * @returns `{ scrollToSection }` — call with a CSS selector string.
 */
export function useSmoothScroll() {
  const scrollToSection = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    const offset = href === '#about' ? 80 : 60;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    const start = window.scrollY;
    const diff = top - start;
    const duration = 800;

    function easeOutCubic(t: number): number {
      return 1 - Math.pow(1 - t, 3);
    }

    const t0 = performance.now();

    function step(now: number) {
      const t = Math.min(1, (now - t0) / duration);
      window.scrollTo(0, start + diff * easeOutCubic(t));
      if (t < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, []);

  return { scrollToSection };
}
