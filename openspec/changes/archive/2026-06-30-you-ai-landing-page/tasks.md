# Tasks: YOU AI Landing Page

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 1500–2500 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 → PR 2 → PR 3 → PR 4 |
| Delivery strategy | force-chained |
| Chain strategy | stacked-to-main |

Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Foundation + theme + scaffold | PR 1 | Configs, types, theme system, Header, Footer, App shell, useTheme |
| 2 | Hero + Services sections | PR 2 | HeroSection, ServicesSection, ServiceCard, useScrollReveal |
| 3 | Methodology carousel + Contact form | PR 3 | MethodologySection, MethodologyCard, ContactSection, ContactForm, useCarousel |
| 4 | Polish + QA | PR 4 | Animation tuning, responsive fixes, light mode parity, manual QA |

---

## Phase 1: Foundation — Project Scaffold (PR 1)

- [x] 1.1 Scaffold Vite project: `package.json`, `vite.config.ts`, `tsconfig.json`
- [x] 1.2 Create front door: `index.html` with inline anti-flash theme script
- [x] 1.3 Configure Tailwind v4: `src/app.css` with `@theme` design tokens
- [x] 1.4 Define shared types: `src/types.ts` (Theme, Service, Slide, FormValues, FormStatus, SectionProps)
- [x] 1.5 Create `src/hooks/useTheme.ts` — localStorage + classList toggle + system preference
- [x] 1.6 Create `src/components/ThemeToggle.tsx` — sun/moon icon button
- [x] 1.7 Create `src/components/Header.tsx` — fixed top bar: logo + nav links + ThemeToggle
- [x] 1.8 Create `src/components/Footer.tsx` — copyright + social links
- [x] 1.9 Create `src/main.tsx` (React entry) + `src/App.tsx` (root layout with section slots)
- [x] 1.10 Create static assets: `public/favicon.svg`, `public/og-image.png`

## Phase 2: Hero + Services Sections (PR 2)

- [x] 2.1 Create `src/hooks/useScrollReveal.ts` — `useInView` + motion variants wrapper
- [x] 2.2 Create `src/sections/HeroSection.tsx` — full-viewport before-after split, animated bg, dual CTAs
- [x] 2.3 Create `src/components/ServiceCard.tsx` — bento tile with icon, title, desc, hover-expand
- [x] 2.4 Create `src/sections/ServicesSection.tsx` — CSS Grid bento layout with staggered reveal
- [x] 2.5 Wire sections into `App.tsx`, verify smooth-scroll navigation

## Phase 3: Methodology Carousel + Contact Form (PR 3)

- [x] 3.1 Create `src/hooks/useCarousel.ts` — auto-advance (6s), pause on hover/focus/drag, ArrowLeft/Right
- [x] 3.2 Create `src/components/MethodologyCard.tsx` — 1080×1080 card with step#, title, desc, icon
- [x] 3.3 Create `src/sections/MethodologySection.tsx` — horizontal track + prev/next + dots + drag
- [x] 3.4 Create `src/components/ContactForm.tsx` — RHF + Zod, progressive disclosure (name → email → message), loading/success/error states
- [x] 3.5 Create `src/sections/ContactSection.tsx` — form container + WhatsApp `wa.me` fallback CTA
- [x] 3.6 Wire both sections into `App.tsx`, verify carousel + form flows

## Phase 4: Polish + QA (PR 4)

- [x] 4.1 Responsive QA — test at 375px, 768px, 1440px; fix bento collapse, hero stacking, carousel sizing
- [x] 4.2 Light mode parity — audit all `dark:` variants, verify theme toggle + persistence + no flash
- [x] 4.3 Animation tuning — verify scroll-reveal triggers, `prefers-reduced-motion` respected, carousel transitions
- [x] 4.4 Accessibility — keyboard nav for carousel, focus management in form, ARIA labels on toggle + controls
- [x] 4.5 Create manual QA checklist: `tests/manual.md` with spec scenarios for all 5 capabilities
