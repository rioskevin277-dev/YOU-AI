import { useState, useRef, useCallback, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProjectItemData {
  year: string;
  title: string;
  tags: string[];
  body: string;
  previewImage: string;
}

const PROJECTS: ProjectItemData[] = [
  {
    year: 'Web',
    title: 'Landing Pages Personalizadas',
    tags: ['Diseño Único', 'UX Estratégico', 'Conversión'],
    body: 'Creamos sitios web únicos, diseñados desde cero para cada negocio. Cada página comunica tu valor, genera confianza y convierte visitantes en clientes. Sin plantillas genéricas.',
    previewImage: '/images/preview-web.jpg',
  },
  {
    year: 'IA',
    title: 'Automatizaciones Inteligentes',
    tags: ['Procesos', 'Workflow', 'Eficiencia'],
    body: 'Identificamos tareas repetitivas y cuellos de botella en tu operación. Diseñamos soluciones con IA que automatizan procesos, optimizan recursos y liberan tu tiempo para lo importante.',
    previewImage: '/images/preview-ai.jpg',
  },
];

/**
 * WorksSection — "04 — DIFERENCIADOR".
 * Two expandable project items with toggle panels.
 * Floating preview dot follows mouse on project-item hover.
 * Staggered reveal via CSS transition-delay classes.
 */
export function WorksSection() {
  const [openPanels, setOpenPanels] = useState<Set<number>>(new Set());
  const { observe } = useScrollReveal();

  // Floating preview dot state
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });
  const [previewIndex, setPreviewIndex] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);

  const togglePanel = (index: number) => {
    setOpenPanels((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  // Refs for scroll reveal
  const headerRef = useCallback(
    (el: HTMLDivElement | null) => {
      if (el) observe(el);
    },
    [observe],
  );

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const setItemRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      itemRefs.current[index] = el;
      if (el) observe(el);
    },
    [observe],
  );

  // Mouse tracking for preview float
  useEffect(() => {
    const items = document.querySelectorAll('.project-item');

    const onMouseMove = (e: MouseEvent) => {
      setPreviewPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const idx = parseInt(el.getAttribute('data-index') || '0', 10);
      setPreviewIndex(idx);
      setPreviewVisible(true);
    };

    const onMouseLeave = () => {
      setPreviewVisible(false);
    };

    items.forEach((item) => {
      item.addEventListener('mouseenter', onMouseEnter);
      item.addEventListener('mouseleave', onMouseLeave);
    });

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      items.forEach((item) => {
        item.removeEventListener('mouseenter', onMouseEnter);
        item.removeEventListener('mouseleave', onMouseLeave);
      });
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="works" id="works">
      <div ref={headerRef} className="works-header reveal">
        <p className="works-kicker">04 — DIFERENCIADOR</p>
        <h2 className="works-title">Nada Genérico, Todo Estratégico</h2>
      </div>

      <div className="works-list">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            ref={setItemRef(index)}
            className={`project-item reveal-up ${index === 0 ? 'reveal-delay-1' : 'reveal-delay-2'}`}
            data-index={index}
          >
            <div className="project-link">
              <span className="project-year">{project.year}</span>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className={`project-toggle${openPanels.has(index) ? ' open' : ''}`}
                onClick={() => togglePanel(index)}
                aria-label="Ver más"
              >
                +
              </button>
            </div>
            <div
              className={`project-panel${openPanels.has(index) ? ' open' : ''}`}
            >
              <div className="project-panel-body">
                <p className="project-panel-text">{project.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="works-bottom" />

      {/* Floating preview — real image */}
      <div
        ref={previewRef}
        className={`preview-float${previewVisible ? ' visible' : ''}`}
        style={{
          left: `${previewPos.x - 160}px`,
          top: `${previewPos.y - 280}px`,
        }}
      >
        <img
          src={PROJECTS[previewIndex]?.previewImage}
          alt=""
          className="preview-image"
          draggable={false}
        />
        <div className="preview-overlay" />
      </div>
    </section>
  );
}
