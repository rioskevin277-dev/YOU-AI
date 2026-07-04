# Services Showcase Specification

## Purpose

Bento grid that presents 4-6 AI services in varied tile sizes. Staggered scroll-reveal animations create visual rhythm and invite exploration.

## Requirements

### Requirement: Bento Grid Layout
The system MUST render a CSS Grid with at least 3 distinct tile sizes (1×1, 2×1, 1×2) creating an asymmetric, magazine-like layout.

#### Scenario: Grid renders at desktop
- GIVEN viewport width is 1440px
- WHEN the services section enters the viewport
- THEN tiles are arranged in an asymmetric bento grid with no gaps between adjacent tiles

#### Scenario: Grid collapses to single column
- GIVEN viewport width is 375px
- WHEN the services section renders
- THEN all tiles stack in a single column in logical reading order

### Requirement: Staggered Scroll-Reveal
Each tile MUST animate in with a staggered delay (50-150ms offset) as the section scrolls into view.

#### Scenario: Tiles animate on scroll
- GIVEN the services section is 200px below the viewport
- WHEN the user scrolls until the section top reaches 80% of viewport height
- THEN tiles animate in sequentially with opacity 0→1 and translateY 40px→0

### Requirement: Service Card Content
Each tile MUST display: icon (Lucide), title, short description, and an optional "hover-expand" state with more detail.

#### Scenario: Hover expands card
- GIVEN a service tile is visible
- WHEN the user hovers over it
- THEN additional description text fades in and the tile scales up 1.02×
