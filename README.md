# YOU AI — Landing Page

Landing page editorial oscura para **YOU AI**, una consultora de transformación digital e inteligencia artificial para pequeños y medianos negocios.

## Stack

| Capa         | Tecnología                                                                 |
| ------------ | -------------------------------------------------------------------------- |
| Framework    | [React 19](https://react.dev/)                                             |
| Lenguaje     | [TypeScript 5.6](https://www.typescriptlang.org/) (strict mode)            |
| Build        | [Vite 6](https://vite.dev/)                                                |
| Estilos      | [Tailwind CSS v4](https://tailwindcss.com/) + CSS personalizado            |
| Animaciones  | [Motion](https://motion.dev/) (framer-motion v12) + CSS transitions + RAF  |
| Formularios  | React Hook Form + Zod                                                      |
| Iconos       | [Lucide React](https://lucide.dev/) + SVG inline                           |
| Fuentes      | Playfair Display (títulos) + Inter (cuerpo) + Geist Mono (mono)            |

### ¿Por qué este stack?

- **Sin Next.js.** Es una landing page de una sola página. Next.js añadiría complejidad de routing, server components y build pipelines que no necesitamos. Vite + React es suficiente y más rápido de iterar.
- **Sin Three.js.** El fondo de dot matrix está implementado con Canvas 2D (~2KB). Three.js para una grilla de puntos es cañón para mosca — evitar dependencias pesadas cuando el resultado visual es el mismo.
- **Tailwind v4.** El nuevo motor de Tailwind con `@theme` nos permite definir tokens de diseño limpios sin archivos de configuración.
- **Motion en vez de CSS puro.** SectionBlend y scroll-reveal usan CSS transitions, pero Motion nos da acceso a gesture-driven animations si las necesitamos después.

## Estructura del proyecto

```
YOU AI/
├── index.html                 # Entry point HTML con meta tags, fonts, skip-link
├── vite.config.ts             # Vite + React + Tailwind, alias @/ → src/
├── tsconfig.json              # TypeScript strict, path alias @/
├── package.json
│
├── src/
│   ├── main.tsx               # Punto de entrada React
│   ├── App.tsx                # Layout raíz: fondo → ruido → header → secciones → footer
│   ├── app.css                # 100% del CSS del sitio (Tailwind + tokens + cada sección)
│   │
│   ├── components/
│   │   ├── Header.tsx         # Navbar fija: brand centrado, nav links, hamburguesa mobile
│   │   ├── NoiseOverlay.tsx   # Capa fija de ruido SVG (z-index: 9999, opacidad 0.03)
│   │   ├── DotMatrixBackground.tsx  # Canvas 2D: grilla de puntos con wave animation
│   │   └── SectionBlend.tsx   # Divisor visual suave entre hero y soluciones
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx         # 01 — HERO: full viewport, título serif, stagger rAF
│   │   ├── SolutionsSection.tsx    # 03 — SOLUCIONES: marquee horizontal con parallax scroll
│   │   ├── WorksSection.tsx        # 04 — DIFERENCIADOR: items expandibles + preview flotante
│   │   ├── TechMarqueeSection.tsx  # 05 — CAPACIDADES: marquee infinito con RAF loop
│   │   └── FooterSection.tsx       # CTA con curtain hover + info bar + reloj en vivo
│   │
│   └── hooks/
│       ├── useScrollReveal.ts  # IntersectionObserver para animaciones al scroll
│       ├── useSmoothScroll.ts  # Scroll suave a secciones por ID
│       └── useLiveClock.ts     # Reloj en tiempo real para el footer
│
├── public/
│   ├── favicon.svg
│   ├── og-image.png            # Open Graph preview
│   ├── logo-you-ai.png
│   ├── logo-object-1.png       # Logos decorativos para el marquee de soluciones
│   ├── logo-object-2.png
│   ├── logo-object-3.png
│   └── images/
│       ├── preview-web.jpg     # Preview para "Landing Pages" (Unsplash)
│       └── preview-ai.jpg      # Preview para "Automatizaciones" (Unsplash)
│
└── openspec/                   # Artefactos de SDD (Spec-Driven Development)
    ├── config.yaml
    ├── specs/                  # Especificaciones de cada sección
    └── changes/archive/        # Historial de cambios completados
```

## Arquitectura visual

### Sistema de diseño (Dark Editorial)

```
Fondo:      #050505 (casi negro)
Texto:      oklch(0.985 0 0) (blanco)
Muted:      oklch(0.708 0 0) (gris claro)
Bordes:     oklch(0.269 0 0) (gris oscuro)
Superficie: oklch(0.18 0.005 240) (ligero tono azul)

Tipografía:
  Títulos:  Playfair Display (serif, 300-400 weight, itálica)
  Cuerpo:   Inter (sans-serif)
  Mono:     Geist Mono (para kickers, tags, detalles UI)
```

### Capas (z-index)

| Capa              | z-index | Descripción                          |
| ----------------- | ------- | ------------------------------------ |
| Dot matrix        | 0       | Fondo animado fijo                   |
| Secciones         | 1-10    | Contenido principal                  |
| Header            | 10000   | Navbar fija                          |
| Noise overlay     | 9999    | Ruido SVG sobre toda la página       |
| Mobile menu       | 40      | Overlay fullscreen en mobile         |
| Preview flotante  | 100     | Imagen previa que sigue al mouse     |

### Decisiones técnicas clave

1. **Un solo archivo CSS.** Todo el CSS vive en `app.css` con Tailwind v4 `@theme` para tokens y selectores planos para cada sección. Sin CSS modules, sin styled-components. Para una landing de este tamaño, más archivos = más complejidad sin beneficio real.

2. **Sin dependencias de animación pesadas.** El hero usa `requestAnimationFrame` en cascada para el stagger de entrada. El marquee de Tecnología usa un loop RAF puro. Los scroll reveals usan IntersectionObserver + CSS transitions. Motion está disponible pero no se usa en la versión actual.

3. **Imágenes locales, no externas.** Todas las imágenes están en `public/` para evitar dependencias de red y garantir tiempo de carga consistente. Las previews del WorksSection son fotos reales de Unsplash, no SVGs.

4. **Preview flotante con mouse tracking.** En Desktop, al hoverear un proyecto en WorksSection, una imagen previa sigue el cursor. Implementado con eventos `mousemove` + `mouseenter/leave` y CSS transform scale/fade.

5. **Formulario con React Hook Form + Zod.** Validación tipada en el frontend con schema de Zod, preparado para conectar a un backend después.

## Cómo correrlo

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Preview del build
npm run preview
```

## Flujo de trabajo (SDD)

Este proyecto se construye con **Spec-Driven Development (SDD)**:

1. **Exploración** → entender el problema y la solución
2. **Propuesta** → definir alcance, enfoque y tradeoffs
3. **Especificación** → escribir specs por sección con escenarios
4. **Diseño técnico** → arquitectura, componentes, datos
5. **Tareas** → desglose en unidades de implementación
6. **Implementación** → código + tests
7. **Verificación** → validar contra specs
8. **Archivo** → cerrar el cambio

Los artefactos de cada cambio viven en `openspec/`. El historial completo está en `openspec/changes/archive/`.

## Secciones

| #  | Sección          | ID        | Descripción                                       |
| -- | ---------------- | --------- | ------------------------------------------------- |
| 01 | Hero             | `#hero`   | Full viewport con título serif + stagger entrance |
| 02 | SectionBlend     | —         | Divisor suave entre hero y soluciones             |
| 03 | Soluciones       | `#about`  | Marquee horizontal con items outline/filled       |
| 04 | Diferenciador    | `#works`  | Proyectos expandibles + preview flotante          |
| 05 | Capacidades      | `#tech`   | Dos filas de marquee infinito (tecnología + valor)|
| —  | Footer / CTA     | `#contact`| CTA con curtain hover + info + reloj              |
