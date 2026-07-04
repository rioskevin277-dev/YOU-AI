import { useLiveClock } from '../hooks/useLiveClock';

/**
 * FooterSection — CTA block with curtain hover effect + footer info bar.
 *
 * CTA: mailto link with curtain overlay (translateY 100%→0% on hover).
 * Arrow SVG rotates 45° on hover.
 * Footer bar: live clock (useLiveClock), social links, copyright.
 */
export function FooterSection() {
  const clock = useLiveClock();

  return (
    <footer id="contact">
      {/* CTA Block */}
      <a href="mailto:hola@nexo.digital" className="cta-block">
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
          <a href="#" className="footer-link" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="#" className="footer-link" aria-label="Instagram">
            Instagram
          </a>
          <a href="mailto:hola@nexo.digital" className="footer-link">
            hola@nexo.digital
          </a>
        </div>
        <p className="footer-copy">© 2026 Transformación Digital</p>
      </div>
    </footer>
  );
}
