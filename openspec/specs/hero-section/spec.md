# Hero Section Specification

## Purpose

Full-viewport hero that communicates the before-ana-log → after-AI transformation narrative. Establishes credibility with SMB owners through visceral contrast, not tech jargon.

## Requirements

### Requirement: Before-After Transformation Layout
The system MUST render a split or sequential visual that contrasts "without AI" (chaos, manual work) against "with AI" (calm, automated efficiency).

#### Scenario: Render transformation narrative
- GIVEN a first-time visitor at 1440px viewport
- WHEN the hero section loads
- THEN the left/upper area shows an analog-chaos visual and the right/lower area shows an AI-powered calm visual, with an animated transition between them

### Requirement: Animated Background
The system MUST display a subtle ambient background animation (gradient shift or particle system) behind the transformation content.

#### Scenario: Animated background plays
- GIVEN the hero section is mounted
- WHEN the page finishes loading
- THEN the background animation runs at 30+ fps and respects `prefers-reduced-motion`

### Requirement: Dual CTAs
The system MUST show two calls-to-action: primary (Services/CTA → scroll to services) and secondary (Learn More → scroll to methodology).

#### Scenario: Click primary CTA
- GIVEN the hero is visible
- WHEN the user clicks the primary CTA
- THEN the page smooth-scrolls to the services section

#### Scenario: Click secondary CTA
- GIVEN the hero is visible
- WHEN the user clicks the secondary CTA
- THEN the page smooth-scrolls to the methodology section

### Requirement: Responsive Full-Viewport
The system MUST occupy 100vh at all breakpoints, with layout adapting from side-by-side (desktop) to stacked (mobile).

#### Scenario: Mobile stacked layout
- GIVEN viewport width is 375px
- WHEN the hero renders
- THEN the before and after visuals stack vertically within 100vh and all text remains readable
