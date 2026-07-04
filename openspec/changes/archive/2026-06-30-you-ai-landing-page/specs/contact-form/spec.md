# Contact Form Specification

## Purpose

Minimal 3-field contact form with progressive disclosure, Zod validation, and WhatsApp fallback CTA. Static POST to Formspree/Web3Forms.

## Requirements

### Requirement: Progressive Disclosure
The system MUST show one field at a time: first Name, then Email, then Message, advancing on valid input.

#### Scenario: Advance to next field
- GIVEN the form is idle
- WHEN the user types a valid name (≥2 chars) and presses Enter or taps Continue
- THEN the name field animates out and the email field animates in

### Requirement: Zod Validation
Each field MUST validate in real-time: name ≥2 chars, valid email format, message ≥10 chars.

#### Scenario: Invalid email shows error
- GIVEN the email field is focused
- WHEN the user types "notanemail" and moves to the next field
- THEN an inline error message appears below the field with "Please enter a valid email address"

### Requirement: Submission States
The form MUST show three states: idle, loading (spinner + "Sending…"), success (checkmark + "Thanks!"), and error (retry prompt).

#### Scenario: Successful submission
- GIVEN all fields are valid
- WHEN the user submits the form
- THEN the submit button shows a spinner for ≤3s, then transitions to a green checkmark and "Thanks! We'll be in touch."

#### Scenario: Failed submission
- GIVEN all fields are valid
- WHEN the POST request fails
- THEN an error message appears with a "Try again" button

### Requirement: WhatsApp Fallback
The system MUST display a WhatsApp button that opens wa.me with a pre-filled message.

#### Scenario: WhatsApp CTA clicked
- GIVEN the form section is visible
- WHEN the user clicks "Chat on WhatsApp"
- THEN wa.me opens with "Hi YOU AI! I'm interested in your services." pre-filled
