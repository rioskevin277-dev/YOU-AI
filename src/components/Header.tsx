import { useState, useEffect } from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

/**
 * Header — Fixed navbar with brand text, 2 nav links, and mobile hamburger menu.
 *
 * - Desktop (≥768px): inline nav links with underline-on-hover pseudo-element.
 * - Mobile (<768px): hamburger menu button → full-screen overlay with serif links.
 * - `.scrolled` class added when scrollY > 50 → backdrop blur + border.
 * - "YOU AI" brand text centered in the navbar, styled with Playfair Display.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        {/* Desktop nav links — left side */}
        <ul className="nav-links">
          <li>
            <button
              className="nav-link"
              onClick={() => handleNav('#about')}
            >
              TRANSFORMACIÓN DIGITAL
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => handleNav('#contact')}
            >
              CONTACTO
            </button>
          </li>
        </ul>

        {/* Brand text — centered */}
        <span className="nav-brand">YOU AI</span>

        {/* Right side: logo + hamburger */}
        <div className="nav-right">
          <div className="nav-logos">
            <img
              src="/logo-you-ai.png"
              alt="YOU AI"
              width="auto"
              height="72"
            />
          </div>
          <button
            className={`menu-btn${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <button
          className="mobile-link"
          onClick={() => handleNav('#about')}
        >
          TRANSFORMACIÓN DIGITAL
        </button>
        <button
          className="mobile-link"
          onClick={() => handleNav('#contact')}
        >
          CONTACTO
        </button>
      </div>
    </>
  );
}
