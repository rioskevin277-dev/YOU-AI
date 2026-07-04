# Manual QA Checklist — YOU AI Landing Page

> **Scope**: All 5 capabilities (hero, services, methodology, contact, theme).
> Use this checklist to verify every spec scenario before deployment.

---

## 1. Theme System

| # | Scenario | Steps | Expected Result | Pass |
|---|----------|-------|-----------------|------|
| 1.1 | Toggle switches theme | Click the sun/moon toggle in header | Page transitions between dark and light; icon changes | ☐ |
| 1.2 | Persistence across refresh | Set light mode → refresh page | Page loads in light mode without flash | ☐ |
| 1.3 | Respects system preference | Clear localStorage, set OS to light → visit | Page renders in light mode | ☐ |
| 1.4 | Respects system preference (dark) | Clear localStorage, set OS to dark → visit | Page renders in dark mode | ☐ |
| 1.5 | No flash on load | Hard refresh from empty cache | No flash of wrong theme before React hydrates | ☐ |
| 1.6 | Toggle keyboard accessible | Tab to toggle → Enter/Space | Theme switches | ☐ |
| 1.7 | Light mode full audit | Switch to light mode, scroll through all sections | All text readable, all backgrounds correct, no dark-only colors bleeding | ☐ |

## 2. Hero Section

| # | Scenario | Steps | Expected Result | Pass |
|---|----------|-------|-----------------|------|
| 2.1 | Transformation narrative | View hero at 1440px | Before (SIN IA) and After (CON IA) panels visible side-by-side | ☐ |
| 2.2 | Animated background plays | Load page and observe | Gradient orbs pulse subtly above 30fps | ☐ |
| 2.3 | Primary CTA scrolls to services | Click "Descubre cómo" | Page smooth-scrolls to #services | ☐ |
| 2.4 | Secondary CTA scrolls to methodology | Click "Nuestra metodología" | Page smooth-scrolls to #methodology | ☐ |
| 2.5 | Mobile stacked layout | Resize to 375px | Before/after panels stack vertically, all text readable within 100vh | ☐ |
| 2.6 | Tablet layout | Resize to 768px | Before/after panels side-by-side, layout clean | ☐ |
| 2.7 | Reduced motion | Enable `prefers-reduced-motion: reduce` | Animations are static or instant (no fade-in/translate) | ☐ |

## 3. Services Showcase

| # | Scenario | Steps | Expected Result | Pass |
|---|----------|-------|-----------------|------|
| 3.1 | Desktop bento grid | View at 1440px | 6 tiles in asymmetric grid (2×1, 1×1, 1×2 sizes), no gaps between adjacent tiles | ☐ |
| 3.2 | Mobile single column | Resize to 375px | All tiles stack in single column in order | ☐ |
| 3.3 | Staggered scroll-reveal | Scroll section into view | Tiles animate in sequentially with ~80ms stagger | ☐ |
| 3.4 | Hover expands card | Hover any service tile | Tile scales 1.02×, detail text fades in | ☐ |
| 3.5 | Reduced motion | Enable `prefers-reduced-motion: reduce` | Tiles appear immediately without animation | ☐ |
| 3.6 | Tablet grid | Resize to 768px | Grid uses 2 columns, 2×1 tiles span full width | ☐ |

## 4. Methodology Slides

| # | Scenario | Steps | Expected Result | Pass |
|---|----------|-------|-----------------|------|
| 4.1 | Card renders | View any slide | 1080×1080 proportions (aspect-square), step# 01/06, title, desc, icon, shadow elevation | ☐ |
| 4.2 | Navigate via next arrow | Click right arrow | Carousel advances one slide with 300ms ease-in-out | ☐ |
| 4.3 | Navigate via prev arrow | Click left arrow | Carousel goes back one slide | ☐ |
| 4.4 | Dot indicator navigation | Click any dot | Carousel jumps to corresponding slide, dot fills | ☐ |
| 4.5 | Auto-advance | Wait for carousel (no interaction) | Slides advance every ~6s | ☐ |
| 4.6 | Pause on hover | Hover any card while auto-advancing | Auto-advance stops; resumes ~3s after hover ends | ☐ |
| 4.7 | Keyboard ArrowRight | Focus carousel → press ArrowRight | Next slide | ☐ |
| 4.8 | Keyboard ArrowLeft | Focus carousel → press ArrowLeft | Previous slide | ☐ |
| 4.9 | Drag/swipe left | On touch device, swipe left on card | Advances to next slide | ☐ |
| 4.10 | Drag/swipe right | On touch device, swipe right on card | Goes to previous slide | ☐ |
| 4.11 | Wrap-around | On slide 6, click next | Returns to slide 1 | ☐ |
| 4.12 | Reduced motion | Enable `prefers-reduced-motion: reduce` | Slides switch instantly without animation | ☐ |
| 4.13 | Mobile sizing | View at 375px | Card fills width, arrows still clickable | ☐ |

## 5. Contact Form

| # | Scenario | Steps | Expected Result | Pass |
|---|----------|-------|-----------------|------|
| 5.1 | Step 1 — name field | Form starts | Name field visible, others hidden | ☐ |
| 5.2 | Step 1 → 2 (valid) | Type name ≥2 chars → click Continue | Advances to email field with animation | ☐ |
| 5.3 | Step 1 → 2 (invalid) | Type 1 char → click Continue | Stays on name field, shows error "Mínimo 2 caracteres" | ☐ |
| 5.4 | Step 2 → 3 (valid) | Enter valid email → click Continue | Advances to message field | ☐ |
| 5.5 | Invalid email | Type "notanemail" → Continue | Error "Ingresá un email válido" | ☐ |
| 5.6 | Step 3 → summary (valid) | Type message ≥10 chars → click Continue | Advances to summary review | ☐ |
| 5.7 | Summary shows all values | Reach summary step | Name, email, and message values displayed with edit buttons | ☐ |
| 5.8 | Edit from summary | Click "Editar" on any field | Returns to that field step with value preserved | ☐ |
| 5.9 | Successful submission | Fill all fields → Submit | Loading spinner → green checkmark + "¡Gracias! Te vamos a contactar pronto." | ☐ |
| 5.10 | Error state | Make POST fail (e.g. offline) | Error message "No pudimos enviar tu mensaje." + "Intentar de nuevo" button | ☐ |
| 5.11 | Retry after error | Click "Intentar de nuevo" | Form resets to idle (step 1) | ☐ |
| 5.12 | WhatsApp CTA | Click "Chatear por WhatsApp" | Opens wa.me with pre-filled message | ☐ |
| 5.13 | Social proof visible | View contact section | "+50 negocios transformados" card visible | ☐ |
| 5.14 | Keyboard submittable | Tab through form → Enter on fields | Progressive disclosure works with keyboard only | ☐ |
| 5.15 | Light mode form visible | Switch to light mode, view form | All fields, labels, and buttons have proper contrast | ☐ |
| 5.16 | Reduced motion | Enable `prefers-reduced-motion: reduce` | Step transitions happen instantly | ☐ |

## 6. Responsive & Layout

| # | Scenario | Steps | Expected Result | Pass |
|---|----------|-------|-----------------|------|
| 6.1 | 1440px desktop | View at 1440px | All sections render full width, bento grid 3 cols, hero side-by-side | ☐ |
| 6.2 | 768px tablet | View at 768px | Header nav horizontal, bento grid 2 cols, hero side-by-side | ☐ |
| 6.3 | 375px mobile | View at 375px | Hamburger menu in header, hero stacked, bento 1 col, carousel fills width | ☐ |
| 6.4 | Header mobile menu | Click hamburger at 375px | Slide-down nav with Servicios/Metodología/Contacto | ☐ |
| 6.5 | Footer responsive | Resize across breakpoints | Copyright + social links stack on mobile, row on desktop | ☐ |
| 6.6 | Smooth scrolling | Click any nav link | Page scrolls smoothly to section | ☐ |

## 7. Accessibility

| # | Scenario | Steps | Expected Result | Pass |
|---|----------|-------|-----------------|------|
| 7.1 | Skip-to-content | Press Tab on page load | Skip link appears → Enter jumps to hero | ☐ |
| 7.2 | Focus-visible rings | Tab through all interactive elements | Blue/purple focus ring visible on all buttons, links, inputs | ☐ |
| 7.3 | Carousel screen reader | Use screen reader, navigate carousel | Slide changes announced (aria-live), dot indicators read as "Paso N de 6" | ☐ |
| 7.4 | Theme toggle accessible | Tab to toggle → Enter | Theme switches, label updates | ☐ |
| 7.5 | Form error announcements | Submit invalid form | Error messages read by screen reader (role="alert") | ☐ |
| 7.6 | Form summary focus | Advance to summary | Focus moves to summary container | ☐ |
| 7.7 | ARIA labels present | Inspect toggle, arrows, nav links | All interactive controls have aria-label | ☐ |
| 7.8 | Reduced motion OS setting | Enable system reduce-motion | All animations disabled, no jarring transitions | ☐ |

---

## Summary

| Capability | Total Tests | Pass | Fail | Notes |
|------------|-------------|------|------|-------|
| Theme System | 7 | ☐ | ☐ | |
| Hero Section | 7 | ☐ | ☐ | |
| Services Showcase | 6 | ☐ | ☐ | |
| Methodology Slides | 13 | ☐ | ☐ | |
| Contact Form | 16 | ☐ | ☐ | |
| Responsive & Layout | 6 | ☐ | ☐ | |
| Accessibility | 8 | ☐ | ☐ | |
| **Total** | **63** | ☐ | ☐ | |

**Tested by**: _________________ **Date**: _________________

**Notes / Issues Found**:

1.
2.
3.
