# Proposal: YOU AI Landing Page

## Intent

YOU AI needs a premium, cinematic single-page landing page that establishes credibility with small/medium business owners discovering AI for the first time. The page must communicate transformation value (before: analog chaos → after: AI-powered efficiency) across all business sectors, not just tech.

## Scope

### In Scope
- Single-page landing: HERO → SERVICES → METHODOLOGY → CONTACT
- Dark/light theme system with localStorage persistence
- Bento grid service showcase (4-6 services, varied tile sizes)
- Horizontal slide carousel for methodology (5-6 steps, auto-advance, pause on interaction)
- 3-field contact form with progressive disclosure + WhatsApp secondary CTA
- Responsive design (mobile-first, tablet, desktop)
- Entrance + scroll-triggered animations (Framer Motion v12 / `motion`)

### Out of Scope
- Multi-page site or blog
- Dashboard, admin panel, or auth
- CMS or backend integration (static form submission only)
- SEO optimization or analytics tracking (future iteration)
- Live chat or chatbot integration

## Capabilities

### New Capabilities
- `hero-section`: Full-viewport hero with before-after transformation narrative, animated background, dual CTAs
- `services-showcase`: Bento grid layout for service offerings with staggered scroll-reveal animations
- `methodology-slides`: Horizontal slide carousel (1080x1080 card aesthetic), auto-advance, pause on interaction, keyboard/drag navigation
- `contact-form`: 3-field form (name, email, message) with Zod validation, loading/success/error states, WhatsApp fallback CTA
- `theme-system`: Dark/light mode toggle with Tailwind `class` strategy + localStorage persistence + system preference detection

### Modified Capabilities
None — greenfield project, no existing specs.

## Approach

React (Vite) SPA with Tailwind CSS v4 for styling and `motion` (Framer Motion v12) for animations. Dark-mode default — deep indigo (#6366F1) primary, green (#16A34A) CTAs, Space Grotesk headings + Inter body. Hero uses Before-After Transformation pattern (service company, no product UI). Sections scroll-reveal via Framer Motion. Methodology carousel inspired by 1080x1080 card aesthetic. Contact form via React Hook Form + Zod, POST to Formspree/Web3Forms.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/` | New | Full React component tree, hooks, styles |
| `package.json` | New | Vite + React + TS + Tailwind + motion deps |
| `tailwind.config.ts` | New | Design tokens (colors, fonts, spacing) |
| `public/` | New | Static assets (favicon, OG image, hero bg) |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Cinematic visuals hurting Core Web Vitals | Medium | Preload critical assets, lazy-load sections, content-visibility: auto |
| Carousel UX causing disengagement | Low | Pause on hover/focus, show progress, draggable, keyboard navigable |
| Light mode feeling washed out | Low | Design both themes simultaneously, not dark-then-light |

## Rollback Plan

Git revert to last commit. No database or state migration needed — purely static SPA. If deployed, revert DNS or hosting deployment to previous version.

## Dependencies

- React 18+/19, Vite 6+, TypeScript 5+
- Tailwind CSS v4 + @tailwindcss/vite plugin
- `motion` (Framer Motion v12)
- React Hook Form + Zod + @hookform/resolvers
- Lucide React (icons)
- Formspree or Web3Forms account (free tier)

## Success Criteria

- [ ] Landing page renders correctly in Chrome, Firefox, Safari (latest 2 versions)
- [ ] All 4 sections visible and functional at 375px, 768px, 1440px widths
- [ ] Dark/light mode persists across page refresh
- [ ] Form submits successfully → success feedback shown
- [ ] Methodology carousel auto-advances and pauses on interaction
- [ ] All animations respect `prefers-reduced-motion`
- [ ] LCP < 2.5s, CLS < 0.1 (Lighthouse desktop)
