import { useEffect, useRef, useCallback } from 'react';

/**
 * useScrollReveal — IntersectionObserver that adds `.visible` class
 * to observed elements when they enter the viewport (threshold 0.15).
 * One-shot: unobserve after reveal. Cleanup on unmount.
 *
 * @example
 * ```tsx
 * const { observe } = useScrollReveal();
 * <div ref={(el) => { if (el) observe(el); }}>...
 * ```
 */
export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, []);

  const observe = useCallback((el: HTMLElement) => {
    observerRef.current?.observe(el);
  }, []);

  return { observe };
}
