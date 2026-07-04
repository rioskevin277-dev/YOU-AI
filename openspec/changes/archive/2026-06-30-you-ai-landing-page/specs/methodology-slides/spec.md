# Methodology Slides Specification

## Purpose

Horizontal slide carousel (1080×1080 card aesthetic) presenting 5-6 methodology steps. Auto-advances every 6s, pauses on interaction, supports keyboard and drag navigation.

## Requirements

### Requirement: Horizontal Carousel
The system MUST render a horizontally scrollable track of 5-6 square cards with visible prev/next controls and dot indicators.

#### Scenario: Navigate via controls
- GIVEN the carousel is mounted
- WHEN the user clicks the next arrow
- THEN the carousel slides to the next card with a 300ms ease-in-out transition

#### Scenario: Drag navigation
- GIVEN the carousel is visible on a touch device
- WHEN the user swipes left
- THEN the carousel advances to the next card

### Requirement: Auto-Advance with Pause
The system MUST auto-advance every 6 seconds and pause when the user hovers, focuses, or drags.

#### Scenario: Auto-advance pauses on hover
- GIVEN the carousel is auto-advancing
- WHEN the user hovers over any card
- THEN auto-advance stops and resumes 3s after hover ends

### Requirement: Keyboard Navigation
The system MUST respond to ArrowLeft and ArrowRight keys when the carousel is focused.

#### Scenario: Keyboard navigation
- GIVEN the carousel has focus
- WHEN the user presses ArrowRight
- THEN the carousel advances one card forward

### Requirement: Card Aesthetic
Each card MUST display a step number, title, description, and icon at 1080×1080 proportions with a subtle depth effect.

#### Scenario: Card renders correctly
- GIVEN the carousel is visible
- WHEN any card is in the active (center) position
- THEN the card shows full content with a box-shadow elevation effect
