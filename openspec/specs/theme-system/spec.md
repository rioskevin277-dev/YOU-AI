# Theme System Specification

## Purpose

Dark/light mode toggle using Tailwind `class` strategy with localStorage persistence and system preference detection. Dark mode is the default.

## Requirements

### Requirement: Toggle Switch
The system MUST render a toggle (sun/moon icons) in a fixed header position that switches between dark and light themes.

#### Scenario: Toggle switches theme
- GIVEN the page is in dark mode
- WHEN the user clicks the theme toggle
- THEN the page transitions to light mode, the toggle icon changes from moon to sun, and the preference is written to localStorage

### Requirement: localStorage Persistence
The system MUST persist the user's choice and restore it on subsequent visits.

#### Scenario: Preference survives refresh
- GIVEN the user selected light mode
- WHEN the page is refreshed
- THEN the page renders in light mode without a flash of dark mode

### Requirement: System Preference Detection
On first visit (no stored preference), the system MUST respect `prefers-color-scheme`.

#### Scenario: Respects system preference
- GIVEN a first-time visitor with no stored preference
- WHEN their OS is set to light mode
- THEN the page renders in light mode

### Requirement: No Flash
The system MUST apply the theme class before React hydrates to prevent a flash of incorrect theme.

#### Scenario: Inline script prevents flash
- GIVEN the HTML document loads
- WHEN the `<head>` executes the inline theme script
- THEN `document.documentElement.classList` is set to `dark` or `light` before any paint occurs
