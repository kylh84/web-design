# Capstone Portfolio Write-Up

## Portfolio type

This portfolio is about me as an aspiring front-end designer/developer. I wanted the site to feel editorial, warm, and structured rather than looking like a default template. The main story is that I can combine layout design, responsive thinking, and accessible development in one project.

## Why I chose a framework

I used Bootstrap 5 because it provides a strong responsive grid, accessible navigation patterns, utilities, and components such as the carousel and modal. I still wrote a custom stylesheet so the portfolio has its own visual identity.

## Responsive design decisions

- Mobile view: stacked content, simplified spacing, and single-column cards
- Tablet view: two-column layouts and more breathing room
- Large-screen view: expanded hero composition, denser grids, and hover polish

## Accessibility decisions

- Semantic landmarks on every page
- Skip link for keyboard users
- Strong heading structure
- Descriptive alt text for all images
- Manual carousel instead of autoplay
- Visible validation messages
- Support for `prefers-reduced-motion`

## Four extras

1. Theme toggle with localStorage persistence
2. JavaScript project filtering and grid/list layout switching with an ARIA live status message
3. Client-side form validation with user feedback
4. Accessibility-focused enhancements including skip links, visible focus states, reduced-motion support, and a manual carousel

Bonus enhancements:

- Sticky footer layout
- Bootstrap modal image previews
- Third responsive viewport between mobile and large screen

## What I would say in the demo video

I would walk reviewers through each page, show the mobile/tablet/desktop layouts in responsive mode, open the gallery modal, demonstrate the project filter, toggle the theme, and show that the contact form provides accessible validation feedback. I would also mention that the carousel does not auto-start, which was a deliberate accessibility choice.
