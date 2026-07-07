# Landing Page Design — AI Vet

## Overview
Premium marketing landing page for AI Vet veterinary practice management software. Route: `/landing`.

## Design Direction
- **Style:** Modern, clean, premium — no gradients
- **Palette:** Zinc neutrals (`#0a0a0a` → `#fafafa`), Electric Blue (`#0066FF`) accent, Emerald (`#059669`) secondary
- **Font:** Geist (replacing Inter)
- **Scroll:** Lenis smooth scrolling with stagger reveal animations
- **Layout:** Asymmetric hero section, 2-column zigzag features, bento stats grid

## Sections
1. **Navbar** — Sticky glass pill, logo, nav links, Sign In + Get Started CTAs
2. **Hero** — Asymmetric split: left text + right dashboard preview. Badge pill, headline, subtext, dual CTAs
3. **Features** — Zigzag 2-column layout, icon + title + description alternating with illustration
4. **How It Works** — 3-step horizontal timeline with connecting line
5. **Stats** — 4-column counters with animated numbers
6. **Testimonials** — 3 testimonial cards with avatar, name, quote
7. **Pricing** — 3 tiers (Starter, Professional, Enterprise), monthly/annual toggle
8. **CTA** — Dark section, centered headline + button
9. **Footer** — Logo, nav links, social, copyright

## Components
All in `app/landing/components/`. Server components where possible, client components only where interactivity needed (navbar hamburger, stats counter animation, pricing toggle, Lenis init).

## Animation
- Lenis smooth scroll
- Stagger fade-up on section entry (IntersectionObserver)
- Spring micro-interactions on buttons
- Animated stat counters

## Route
- `/landing` — public, no auth required
