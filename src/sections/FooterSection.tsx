import { useLiveClock } from '../hooks/useLiveClock';

/**
 * FooterSection — CTA block with curtain hover effect + footer info bar.
 *
 * CTA: WhatsApp link with curtain overlay (translateY 100%→0% on hover).
 * Arrow SVG rotates 45° on hover.
 * Footer bar: live clock (useLiveClock), social links, copyright, back-to-top.
 */

const WHATSAPP_NUMBER = '573216403049'; // ← REEMPLAZÁ CON TU NÚMERO (código país + número, sin + ni espacios)

export function FooterSection() {
  const clock = useLiveClock();

  const scrollToHero = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact">
      {/* CTA Block — WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-block"
      >
        <div className="cta-curtain" />
        <div className="cta-content">
          <h2 className="cta-title">
            Hablemos y <span className="italic">Construyamos</span>
          </h2>
          <div className="cta-arrow">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="19" x2="19" y2="5" />
              <polyline points="12 5 19 5 19 12" />
            </svg>
          </div>
        </div>
      </a>

      {/* Footer Info Bar */}
      <div className="footer-info">
        <div className="footer-clock">
          LOCAL TIME <span>{clock}</span>
        </div>
        <div className="footer-links">
          <a
            href="https://www.instagram.com/youinteligenciaartificial/"
            className="footer-link"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=youinteligenciaartificial@gmail.com&su=Consulta%20-%20YOU%20AI&body=Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20transformaci%C3%B3n%20digital%20e%20inteligencia%20artificial."
            className="footer-link"
            aria-label="Correo electrónico"
            target="_blank"
            rel="noopener noreferrer"
          >
            youinteligenciaartificial@gmail.com
          </a>
        </div>

        {/* Back-to-top — diamante con punta diagonal */}
        <button
          onClick={scrollToHero}
          className="back-to-top"
          aria-label="Volver al inicio"
          type="button"
        >
          <span className="back-to-top-diamond" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M20 4 L36 20 L20 36 L4 20 Z" />
              <path d="M20 14 L20 26" strokeWidth="1.5" />
              <path d="M14 20 L20 14 L26 20" strokeWidth="1.5" />
            </svg>
          </span>
        </button>

        <p className="footer-copy">© 2026 Transformación Digital</p>
      </div>
    </footer>
  );
}
