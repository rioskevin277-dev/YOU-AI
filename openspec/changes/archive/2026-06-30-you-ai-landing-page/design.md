# Design: YOU AI Landing Page

## Technical Approach

Vite + React 19 SPA with client-side routing via scroll-based section navigation (no React Router needed). Tailwind CSS v4 (`@import "tailwindcss"`) with `class`-based dark mode. Each section is a self-contained component with local state only — no global state library. Animations via `motion` (Framer Motion v12) using `useInView` triggers. Contact form via React Hook Form + Zod, POST to Formspree. Theme persistence via localStorage with an inline anti-flash script in `index.html`.

## Architecture Decisions

| Decision | Choice | Alternatives | Rationale |
|----------|--------|--------------|-----------|
| State management | None (local state) | Context, Zustand | Four independent sections; no shared mutable state. `useState` per component is sufficient. |
| Routing | Scroll-based (no router) | React Router, Hash Router | Single page with 4 sections; smooth scroll via `element.scrollIntoView({ behavior: 'smooth' })`. Adding a router is unnecessary complexity. |
| Carousel | Custom w/ `motion` | Embla, Keen | Requirements are simple (5-6 slides, auto-advance, pause on interaction). A custom hook avoids third-party bundle weight and gives full control over the 1080×1080 card aesthetic. |
| Form backend | Formspree | Web3Forms, EmailJS | Free tier (50 submissions/month), zero backend code, CORS-friendly. Easy swap if needed. |
| CSS | Tailwind v4 `@import` | CSS Modules, styled-components | Tailwind v4's CSS-first config eliminates the JS config file. Design tokens go in `app.css` via `@theme`. |
| Theme init | Inline `<script>` in head | React effect | Prevents flash of wrong theme before React hydrates. Script reads localStorage → sets class on `<html>` before first paint. |

## Data Flow

```
Inline Theme Script (index.html head)
  │ reads localStorage("theme") or matchMedia
  ▼
document.documentElement.classList ← "dark" | "light"
  │
  ▼ (React hydrates)
ThemeToggle (header)
  │ writes localStorage + toggles classList
  ▼
All sections react via Tailwind dark: variants
```

```
ContactForm
  │ useForm + zodResolver validates fields progressively
  │ on submit → fetch POST to Formspree
  ▼
Status: idle → loading → success | error
  │ on error → show retry
  ▼
WhatsApp fallback (always visible) → window.open("wa.me/...")
```

```
MethodologyCarousel
  │ useState(activeIndex)
  │ useEffect → setInterval (auto-advance every 6s)
  │ pauseOnHover → clearInterval, resume after 3s delay
  ▼
motion.div animate={{ x: -activeIndex * cardWidth }}
  │ dot indicators + prev/next + drag="x"
  ▼
Keyboard: onKeyDown → ArrowLeft/Right
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `package.json` | Create | Vite + React 19 + TS + Tailwind v4 + motion + RHF + Zod + Lucide |
| `vite.config.ts` | Create | Vite config with @tailwindcss/vite plugin |
| `tsconfig.json` | Create | TypeScript config (strict, path aliases) |
| `index.html` | Create | Entry HTML with inline theme script in `<head>` |
| `public/favicon.svg` | Create | SVG favicon |
| `public/og-image.png` | Create | Open Graph preview image |
| `src/main.tsx` | Create | React entry point, renders `<App />` |
| `src/app.css` | Create | Tailwind v4 entry (`@import "tailwindcss"`), design tokens via `@theme`, global styles |
| `src/App.tsx` | Create | Root component: renders Header + 4 sections + Footer |
| `src/types.ts` | Create | Shared TypeScript interfaces |
| `src/hooks/useTheme.ts` | Create | Theme toggle hook: reads/writes localStorage, manages classList |
| `src/hooks/useCarousel.ts` | Create | Auto-advance, pause, keyboard, drag logic |
| `src/hooks/useScrollReveal.ts` | Create | Wrapper around `useInView` + `motion` variants for section entrance |
| `src/components/Header.tsx` | Create | Fixed top bar: logo + theme toggle + smooth-scroll nav links |
| `src/components/ThemeToggle.tsx` | Create | Sun/moon icon button using `useTheme` |
| `src/sections/HeroSection.tsx` | Create | Full-viewport hero: before-after narrative, animated bg, dual CTAs |
| `src/sections/ServicesSection.tsx` | Create | Bento grid with staggered scroll-reveal, 4-6 service cards |
| `src/sections/MethodologySection.tsx` | Create | Horizontal carousel with `useCarousel` hook, 5-6 slides |
| `src/sections/ContactSection.tsx` | Create | Progressive-disclosure form + WhatsApp CTA |
| `src/components/ServiceCard.tsx` | Create | Individual bento tile with hover-expand |
| `src/components/MethodologyCard.tsx` | Create | 1080×1080 card with step number, title, desc, icon |
| `src/components/ContactForm.tsx` | Create | RHF + Zod form with progressive disclosure |
| `src/components/Footer.tsx` | Create | Minimal footer with copyright and social links |

## Interfaces

```typescript
// src/types.ts
export type Theme = 'dark' | 'light';

export interface Service {
  id: string;
  title: string;
  description: string;
  detail: string;          // hover-expand content
  icon: LucideIcon;
  size: '1x1' | '2x1' | '1x2';  // bento grid span
}

export interface Slide {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface SectionProps {
  id: string;  // DOM id for scroll targeting
}
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Manual | Theme toggle + persistence | Toggle → refresh → verify no flash. Check system preference on first visit. |
| Manual | Form flow | Submit with valid/invalid data, verify loading/success/error states. Check Formspree dashboard. |
| Manual | Carousel interaction | Click arrows, drag, arrow keys, verify auto-advance pauses on hover. |
| Manual | Responsive | Test at 375px, 768px, 1440px. Verify bento collapses to single column, hero stacks vertically. |
| Manual | Animations | Verify scroll-reveal triggers, verify `prefers-reduced-motion: reduce` disables animations. |

No automated testing setup for this phase — `strict_tdd` is false. Manual QA checklist in `tests/manual.md` is sufficient.

## Migration / Rollout

No migration required. Greenfield project. Deploy via Vite build → static host (Vercel/Netlify). Rollback = redeploy previous build.

## Open Questions

None — all decisions resolved in proposal and specs.
