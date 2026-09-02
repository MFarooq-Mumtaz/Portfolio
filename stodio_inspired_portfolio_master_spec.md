# STODIO-Inspired Portfolio — Master Build & Animation Specification

> **Reference website:** https://stodio.webflow.io/  
> **Document purpose:** A single implementation blueprint for rebuilding the same overall visual rhythm, section order, motion language, and interaction quality using AI-assisted development.  
> **Important:** This is an **inspired implementation specification**, not permission to copy Stodio's copyrighted branding, copy, images, logos, or proprietary design assets. Recreate the experience with original portfolio content and original assets.

---

# 0. How to Use This File

This file is the source of truth for the future AI build.

The website should be built **section by section**, not generated as one uncontrolled page in a single pass.

For every section, the AI must follow this order:

1. Build the static layout first.
2. Match spacing, hierarchy, proportions, and responsive behavior.
3. Add the section's assets.
4. Add the exact interaction/motion pattern defined here.
5. Test desktop, tablet, and mobile.
6. Verify reduced-motion behavior.
7. Only then move to the next section.

Do **not** add random animations just because a section looks empty. Motion must be intentional and consistent with the reference.

---

# 1. Evidence Labels Used in This Specification

To prevent AI hallucination, all notes should be interpreted using these labels:

- **CONFIRMED** — explicitly documented by the Stodio template, official Webflow template listing, style guide, or instruction page.
- **OBSERVED / STRONGLY IMPLIED** — visible in page structure, repeated markup, or described in the supplied animation analysis.
- **RECREATE / RECOMMENDED** — implementation choice to reproduce the same perceived effect in React/Next.js even when the exact original internal implementation is not public.

Do not present a RECOMMENDED technique as if it were confirmed source code from Stodio.

---

# 2. Overall Creative Direction

## 2.1 Visual Personality

The target feel is:

- premium creative studio / developer portfolio
- minimal but not empty
- large editorial typography
- generous whitespace
- strong black/white contrast
- one warm red accent
- subtle light-gray surfaces
- image-led storytelling
- controlled asymmetry
- smooth, cinematic scrolling
- motion that feels calm, deliberate, and expensive
- no generic SaaS card-grid look
- no excessive glassmorphism
- no random gradients
- no neon cyberpunk styling
- no bouncing preset animations

The page should feel like an **award-style portfolio**, but it must remain usable and readable.

## 2.2 Reference Layout Rhythm

Use alternating visual rhythms:

- large statement section
- moving visual strip
- whitespace / editorial text
- large imagery
- dense information block
- interactive list
- project showcase
- conversion section

Avoid making every section the same width, same card style, and same vertical spacing.

---

# 3. Recommended Production Stack

## 3.1 Core Frontend

**RECOMMENDED**

- Next.js
- React
- TypeScript preferred
- Tailwind CSS OR CSS Modules
- semantic HTML
- CSS Grid + Flexbox

## 3.2 Motion Stack

### Required

- **GSAP** — main motion engine
- **GSAP ScrollTrigger** — scroll-triggered / scroll-linked animations
- **Lenis** — smooth scrolling

### Optional / use only where useful

- **SplitType** or GSAP SplitText — line/word/character splitting for text reveals
- **Swiper.js** — testimonial or touch slider
- native IntersectionObserver — simple viewport-triggered counters/reveals
- requestAnimationFrame — counters and lightweight animation loops

## 3.3 Confirmed Reference Behavior

The Stodio instruction page explicitly documents:

- Lenis smooth scrolling
- GSAP ScrollTrigger integration
- `lerp: 0.08`
- viewport-triggered counters
- counter duration around `3000ms`
- counter threshold around `0.6`
- custom embedded SVG icons

The Webflow template listing also identifies GSAP animations/interactions as a template feature.

---

# 4. Global Design System

## 4.1 Confirmed Reference Color Palette

Use these exact reference variables as the starting palette:

```css
:root {
  --brand: #DE322D;
  --text-main: #0A0A0A;
  --bg-main: #FFFFFF;
  --text-muted: #A5A5A5;
  --bg-secondary: #F1F2F1;
  --bg-primary-soft: #F1F2F1;
  --bg-light: #F3F3F3;
  --divider: #E6E6E6;
}
```

### Usage Rules

- `#FFFFFF` — dominant page background.
- `#0A0A0A` — primary text, dark buttons, strong borders.
- `#DE322D` — accent only: active states, small highlights, badges, hover accents, selected controls.
- `#A5A5A5` — metadata and secondary copy.
- `#F1F2F1` / `#F3F3F3` — muted section surfaces and cards.
- `#E6E6E6` — hairline dividers.

Do not overuse the red. The reference relies mostly on neutral tones.

## 4.2 Typography Scale — Confirmed from Reference Style Guide

```text
H1: 80px / 120%
H2: 64px / 135%
H3: 40px / 130%
H4: 36px / 130%
H5: 28px / 140%
H6: 24px / 140%
Body Large: 18px / 160%
Body: 16px / 160%
Small Body: 14px / 160%
Weights: Regular / Medium / Semibold
```

### Font Family

The accessible style-guide text confirms size/line-height/weight but does **not** expose a reliable exact font-family name.

Therefore:

- Do not falsely claim an exact Stodio font.
- During initial build use a neutral modern grotesk such as `Inter, Arial, sans-serif` **only as a fallback**.
- If the exact font is later identified from licensed project assets/source, replace the fallback globally.

## 4.3 Responsive Type Recommendation

Use `clamp()` for large headings instead of hard-coded desktop-only sizes.

Example:

```css
.hero-title {
  font-size: clamp(3.2rem, 7vw, 5rem);
  line-height: 1.05;
}
```

Maintain the editorial scale gap between headings and body copy.

---

# 5. Global Layout System

## 5.1 Container

Recommended:

```text
Desktop max width: 1440-1600px visual canvas
Content width: approx. 1280-1400px
Desktop horizontal padding: 40-64px
Tablet padding: 28-40px
Mobile padding: 18-24px
```

Do not force all imagery into the same centered container. Some images/marquees may extend edge-to-edge.

## 5.2 Section Spacing

Recommended default rhythm:

```text
Desktop: 120-180px vertical section padding
Tablet: 88-120px
Mobile: 64-88px
```

Hero and statement sections may use larger vertical space.

## 5.3 Dividers

Use subtle `1px` dividers with `--divider`.

They should organize content without visually boxing every section.

---

# 6. Global Motion System

## 6.1 Smooth Scroll — CONFIRMED

Use **Lenis** integrated with **GSAP ScrollTrigger**.

Reference value:

```js
lerp: 0.08
```

Target feel:

- smooth inertia
- no exaggerated lag
- wheel scrolling remains responsive
- ScrollTrigger stays synchronized with Lenis

## 6.2 Main Easing Tokens

Recommended:

```js
const ease = {
  reveal: "power3.out",
  soft: "power2.out",
  strong: "power4.out",
  linear: "none",
};
```

Avoid elastic/bounce easing for normal content reveals.

## 6.3 Motion Durations

```text
Micro hover: 0.25-0.45s
Button roll: 0.35-0.55s
Section reveal: 0.8-1.2s
Hero intro: 1.0-1.6s
Large image reveal: 1.0-1.4s
Accordion: 0.4-0.6s
```

## 6.4 Scroll Reveal Standard

Default section reveal pattern:

- initial opacity: `0`
- initial `y`: `40-80px`
- final opacity: `1`
- final `y`: `0`
- ease: `power3.out`
- trigger around `top 80-88%`
- use stagger for sibling items

Do not apply this mechanically to every single element. Hero, marquee, stats, services, and projects have their own dedicated motion patterns.

## 6.5 Masked Text Reveal

For major headings:

- split heading into lines
- wrap each line in an overflow-hidden mask
- animate line from `yPercent: 105-120` to `0`
- slight stagger between lines

Recommended implementation:

```js
gsap.from(lines, {
  yPercent: 110,
  duration: 1,
  stagger: 0.08,
  ease: "power4.out"
});
```

Use this for hero and selected major editorial headings, not every H2.

## 6.6 Image Reveal Standard

Preferred patterns:

- `clip-path` / overflow mask reveal
- subtle `scale: 1.05 -> 1`
- optional slight translate

Avoid large zooms.

## 6.7 Reduced Motion

When `prefers-reduced-motion: reduce` is enabled:

- disable Lenis smooth interpolation
- disable scrub/parallax
- stop autoplay marquees where practical
- remove large masked entrance movement
- preserve content immediately visible
- sliders must remain manually usable

---

# 7. Global Button Interaction System

The homepage markup contains duplicate CTA labels such as repeated “View Projects” / “Reach Out” / “Book a Consultation”. This strongly suggests a rolling/swap label pattern.

## Button Style

- compact rounded or pill-like CTA depending on section
- high contrast
- clear border
- icon/arrow optional
- overflow hidden on label wrapper

## Hover Animation — RECREATE

Use **duplicate text roll**:

1. Label A visible at `y: 0`.
2. Label B positioned below at `y: 100%`.
3. On hover, A moves to `-100%`.
4. B moves to `0`.
5. Reverse smoothly on mouse leave.

Optional:

- arrow shifts 4-8px
- background/text colors invert

Do not make buttons jump in size.

---

# 8. Asset System / Manifest

Do not reuse Stodio's original copyrighted images or brand logos in the final portfolio.

Create or provide original equivalents with the same **asset role**.

## Required Asset Categories

### Global

- personal logo / wordmark
- favicon
- custom SVG arrows
- plus/minus icons
- social icons
- external-link arrow

### Hero

- 1 large hero background or hero visual
- optional small decorative metadata marks

### Trust / Logo Marquee

- 5-10 technology/client/company logos
- duplicate set programmatically for seamless loop

### About / Who We Are

- 4-8 editorial portfolio/lifestyle/workspace images
- mixed landscape/portrait crops

### Stats

- optional subtle visual background texture/card images

### Services

- 1 small center title image
- 1 icon per service
- 1 preview image per service

### Selected Work

- 4-6 primary project cover images
- optional project device/mockup images
- project category metadata

### Pricing

- generally no heavy imagery needed

### Testimonials

- client/person avatar images
- client/company logos
- quote icon SVG

### Journal

- 3 article thumbnails

### Final CTA/Footer

- optional abstract texture / image
- newsletter icon if required

## Asset Quality Rules

- use AVIF/WebP where possible
- provide width/height or aspect-ratio to prevent layout shift
- use high-resolution source images
- lazy-load below-the-fold images
- preload only critical hero media
- preserve crop focal points per breakpoint

---

# 9. Homepage — Section-by-Section Specification

---

## SECTION 01 — Navbar / Header

### Purpose

Provide minimal navigation while keeping the hero visually dominant.

### Content

Recommended personal-portfolio navigation:

- logo/name
- Work
- About
- Services / Skills
- Contact
- primary CTA
- mobile menu trigger

### Visual Layout

- transparent or neutral background over hero where readable
- generous horizontal spacing
- small-to-medium typography
- no large traditional navigation bar chrome

### Animation

**OBSERVED / supplied analysis:**

- menu/dropdown fades and slides
- icon rotates during open/close

**RECREATE:**

- nav items fade/slide subtly on first load
- menu icon morph/rotation
- mobile full-screen menu: stagger links vertically
- optional nav background transition after user scrolls away from hero

### Implementation

Use GSAP only for multi-element menu choreography. Use CSS transitions for simple hover color/underline states.

### Mobile

- convert links to menu panel
- menu must be keyboard accessible
- lock body scroll while open

---

## SECTION 02 — Hero

### Reference Structure

The reference homepage begins with:

- eyebrow: “Next-Gen Design Agency”
- large headline
- supporting sentence
- small metadata labels
- large service statement
- two CTAs
- large hero visual/background

For the personal portfolio, keep the **structure**, replace all copy and assets.

### Suggested Personal Portfolio Mapping

- eyebrow: role / availability
- H1: personal positioning statement
- subtitle: what you build and who you help
- metadata: location / years / focus / availability
- service line: e.g. Shopify • MERN • Frontend • Mobile
- CTA 1: View Projects
- CTA 2: Contact Me

### Layout

- oversized H1
- strong negative space
- main image/background positioned as visual anchor
- CTAs grouped together
- metadata small and editorial

### Page-Load Animation — OBSERVED / RECREATE

Use one GSAP timeline:

1. hero image begins slightly enlarged (`scale: 1.05-1.08`)
2. eyebrow fades in
3. H1 lines reveal through masks
4. supporting paragraph rises/fades
5. metadata labels appear with stagger
6. CTAs roll/reveal
7. hero image settles to `scale: 1`

Recommended timing:

```text
0.00s hero visual begins
0.15s eyebrow
0.25s heading line 1
0.33s heading line 2
0.55s supporting text
0.70s metadata
0.82s CTAs
```

### Scroll Behavior — RECOMMENDED

Add only subtle parallax:

- hero image `yPercent: 0 -> 8/12`
- `scrub: true`
- no aggressive zoom

### Mobile

- reduce motion distance by ~40-50%
- avoid parallax if performance is weak
- do not crop important face/product focal areas
- H1 must remain readable without awkward 1-word lines

---

## SECTION 03 — Trust / Client / Technology Logo Marquee

### Reference Structure

The reference shows repeated logo imagery directly after the hero, indicating a seamless repeated strip.

### Purpose for Personal Portfolio

Use for:

- Shopify
- React
- Next.js
- Node.js
- MongoDB
- JavaScript/TypeScript
- Flutter/Dart if appropriate
- tools/client logos only when truthful

### Animation — OBSERVED / RECREATE

**Infinite horizontal marquee**.

Rules:

- duplicate items to create continuous track
- linear easing
- `repeat: -1`
- no visible jump at loop point
- speed calm enough to read logos
- pause/reduce motion for accessibility

Example target:

```text
Desktop loop duration: 18-30s
Mobile loop duration: 14-24s
Ease: none
```

Do not use a carousel with visible snapping arrows here.

---

## SECTION 04 — Who We Are / About Intro

### Reference Structure

- small section label
- large statement headline
- “About” CTA/link
- image gallery immediately following

### Personal Portfolio Mapping

Use:

- section label: About Me
- large 1-2 sentence positioning statement
- supporting CTA: More About Me / My Story

### Animation

- section label fade in
- headline masked line reveal or soft rise
- CTA appears last
- avoid overly complex motion in text

### Image Gallery Animation — OBSERVED

The supplied reference analysis identifies a looping horizontal image gallery.

### RECREATE

Build a seamless gallery strip:

- 4-8 image cards
- horizontally looping
- alternating crop ratios
- very small rotation differences optional
- `repeat: -1`
- no visible seam

Optional premium variant:

- first row moves left
- second row moves right

Only use two rows if visual density remains clean.

### Mobile

- one marquee row preferred
- cards larger relative to viewport
- reduce total simultaneous media

---

## SECTION 05 — By The Numbers / Stats

### Reference Structure — CONFIRMED

The source exposes repeated digits used to produce animated numeric displays and labels such as:

- Expert-Vetted
- Clients served
- Success Score
- Years of expertise

The instruction page explicitly documents a global counter system using `data-count`, `IntersectionObserver`, `requestAnimationFrame`, ~`3000ms` duration, and `threshold: 0.6`.

### Personal Portfolio Mapping

Possible truthful metrics:

- years of experience
- stores/projects completed
- technologies used
- client markets
- project success metric only if verifiable

Never fabricate statistics.

### Animation — CONFIRMED CORE + RECREATE VISUAL

Trigger once when approximately 60% visible.

Option A — simple count-up:

```text
0 -> final number over 3 seconds
```

Option B — closer visual recreation:

**digit roller / odometer**

- each digit has vertical reel
- reel cycles through numbers
- reels settle on final value
- suffix `%`, `+`, etc. stays stable

### Motion Rules

- trigger once
- do not restart every time user scrolls back
- use `requestAnimationFrame` or GSAP
- keep number width stable to avoid layout movement

### Mobile

- stack stat cards 1-column or 2-column
- shorten animation slightly if needed

---

## SECTION 06 — Services

### Reference Structure

Top editorial title:

- “Everything”
- small center image
- “your”
- “brand needs”

Then service rows:

- icon
- service name
- numeric index
- service preview image
- description

Reference services include UI/UX, Mobile, Development, Branding.

### Personal Portfolio Mapping

Recommended truthful categories:

- Shopify Development
- Frontend / React / Next.js
- MERN Development
- Mobile / Flutter (only according to actual portfolio readiness)
- Store Optimization / CRO if appropriate

### Title Animation — RECREATE

Build editorial multi-part reveal:

- “Everything” slides/reveals from left or bottom
- center image scales `0.85 -> 1`
- “your” reveals through mask
- “brand needs” enters last

Keep animation synchronized and calm.

### Service Row Hover — OBSERVED / RECREATE

On desktop hover/focus:

- service preview image becomes visible
- image opacity `0 -> 1`
- scale `0.94 -> 1`
- optional x/y movement `15-30px -> 0`
- text shifts a few pixels
- arrow/icon rotates or moves subtly
- active row can change background tone

Possible implementation:

- image remains in DOM
- switch active service index
- GSAP `mouseenter` / `mouseleave`

### Optional Cursor-Follow Enhancement — RECOMMENDED, NOT CONFIRMED

If desired, preview image may gently follow cursor using `gsap.quickTo()`.

Do not use cursor-follow on touch devices.

### Mobile

- no hover dependency
- show service preview inline or reveal on tap/accordion
- first tap should not block navigation unexpectedly

---

## SECTION 07 — Selected Work / Featured Projects

### Reference Structure

The homepage includes:

- label: Selected work
- large heading: Featured projects & creative works
- supporting paragraph
- five project entries
- “All Cases” CTA

### Personal Portfolio Mapping

Use strongest 4-6 projects only.

Each project should include:

- project title
- category
- year
- role
- image / mockup
- short result statement
- project route

### Scroll Entrance

For each project:

- image/card reveal from mask
- title and metadata fade/rise
- stagger content inside project row

### Hover Animation — OBSERVED / RECREATE

- image zoom `scale: 1 -> 1.04/1.06`
- image clipped by overflow hidden
- title shifts slightly
- arrow/CTA translates
- metadata changes accent/opacity

### Advanced Desktop Variant — RECOMMENDED

Use a floating project-preview image for text-based rows:

- pointer enters project row
- corresponding image fades/scales in
- image follows cursor with damped motion
- row leave fades image out

Only implement this if it remains smooth at 60fps.

### Scroll-Linked Image Motion — RECOMMENDED

For large project cards:

```text
image yPercent: -4 -> 4
scrub: true
```

Keep it subtle.

### Project Detail Pages

Maintain same motion language:

- large hero image
- masked title intro
- metadata stagger
- section image reveals
- next-project transition

---

## SECTION 08 — Pricing / Engagement Plans

### Reference Structure

- section label
- large heading
- Monthly / Annually toggle
- three pricing tiers
- one highlighted/popular tier

### Personal Portfolio Decision

If direct pricing is appropriate, keep pricing.

If not, preserve the layout rhythm but convert it to:

- Engagement Models
- Project Types
- Ways to Work Together

Do not remove the entire section without explicit instruction because it changes page rhythm.

### Toggle Animation — OBSERVED / RECREATE

When switching Monthly/Annual:

- toggle thumb slides
- active label color changes
- price values crossfade and translate vertically by ~8-12px
- cards do not reflow vertically

Use React state + GSAP/CSS transition.

### Card Hover

- subtle border/background transition
- CTA label roll
- no dramatic card lift

### Mobile

- cards stack vertically
- toggle remains fully visible

---

## SECTION 09 — FAQ

### Reference Structure

- editorial section label/heading
- supporting paragraph
- list of questions
- answers hidden/collapsible

### Interaction — OBSERVED

Smooth accordion.

### RECREATE

On open:

- answer height `0 -> auto`
- opacity `0 -> 1`
- answer y `8 -> 0`
- plus icon rotates to minus/45deg
- divider remains stable

On close: reverse.

### Implementation Rules

- use semantic button for question
- include `aria-expanded`
- only one open at once OR allow multiple, but decide consistently
- animation duration ~0.45-0.55s

---

## SECTION 10 — Testimonials / Collaborations

### Reference Structure

- section label: collaborations
- large heading
- supporting paragraph
- cards containing portrait, logo, quote icon, quote, name, role/company

### Slider — OBSERVED / RECREATE

Use **Swiper.js** or equivalent touch-friendly slider.

Recommended configuration:

- loop
- drag/swipe enabled
- touch enabled
- desktop shows multiple cards depending on width
- slow autoplay optional
- autoplay pauses on hover/focus
- pagination/arrows only if they fit visual language

### Card Entrance

- section heading reveals first
- slider/cards fade in afterward

### Avoid

- fast autoplay
- 3D coverflow effects
- oversized shadow cards

---

## SECTION 11 — Journal / Blog

### Reference Structure

- label: The Journal
- large heading
- View All Blogs CTA
- 3 article cards
- category
- date
- read time
- title
- excerpt

### Personal Portfolio Mapping

Can remain as:

- Notes
- Insights
- Case Studies
- Development Journal

If there is no real writing content yet, keep the section in code but hide it until genuine entries exist rather than filling it with fake articles.

### Animation — OBSERVED / RECREATE

Scroll-triggered stagger:

```text
card 1 -> card 2 -> card 3
opacity 0 -> 1
y 50 -> 0
```

### Hover

- thumbnail image zoom
- title moves/underlines subtly
- arrow shifts

---

## SECTION 12 — Final CTA

### Reference Structure

- small label: Get Started
- huge statement: Transform Your Ideas Today
- CTA button

### Personal Portfolio Mapping

Use a direct conversion message such as:

- Have a project in mind?
- Let's build something useful.
- Need a Shopify / web project?

### Scroll Animation — RECREATE

Recommended:

- section wrapper enters with subtle scale `0.96 -> 1`
- large heading masked reveal
- CTA enters after heading
- optional background radius reduces slightly while entering

Do not turn this into an unrelated giant animated scene.

---

## SECTION 13 — Newsletter + Footer

### Reference Structure

Newsletter:

- heading
- email field
- submit action
- success/error state

Footer:

- primary page links
- utility links
- copyright
- privacy / terms

### Personal Portfolio Mapping

Newsletter may become:

- email/contact capture
- “Get occasional updates”
- or remove the form but retain footer structure if not needed

### Animation

Minor only:

- fade/rise on viewport entry
- link hover underline/shift
- button text roll

Footer should feel calm and final.

---

# 10. Additional Global Interactions

## 10.1 Link Hover

Use one consistent pattern:

- underline scale from `0 -> 1`
- or text opacity shift
- or arrow translation

Avoid mixing five different link effects.

## 10.2 Image Hover Zoom

For clickable images:

```text
container: overflow hidden
image scale: 1 -> 1.04/1.06
transition: 0.6-0.9s
```

## 10.3 Magnetic Buttons — Optional

Allowed only for 1-3 major desktop CTAs.

- movement radius small
- reset smoothly on leave
- disable on touch/mobile

## 10.4 Custom Cursor — Optional

Do not implement unless explicitly requested later.

The site should not depend on a custom cursor for usability.

---

# 11. Recommended Component Architecture

```text
src/
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      Container.tsx
    sections/
      HeroSection.tsx
      LogoMarqueeSection.tsx
      AboutSection.tsx
      ImageMarqueeSection.tsx
      StatsSection.tsx
      ServicesSection.tsx
      ProjectsSection.tsx
      PricingSection.tsx
      FAQSection.tsx
      TestimonialsSection.tsx
      JournalSection.tsx
      FinalCTASection.tsx
    ui/
      AnimatedButton.tsx
      SplitHeading.tsx
      Reveal.tsx
      ImageReveal.tsx
      Marquee.tsx
      Counter.tsx
      Accordion.tsx
  lib/
    gsap.ts
    lenis.ts
    motion.ts
  hooks/
    useReducedMotion.ts
    useMediaQuery.ts
  data/
    projects.ts
    services.ts
    testimonials.ts
    journal.ts
  styles/
    globals.css
```

## Architecture Rules

- section data should live outside components where practical
- no giant 1000-line homepage component
- animations should be scoped and cleaned up on unmount
- use `gsap.context()` in React components
- register ScrollTrigger once
- kill ScrollTriggers/listeners on cleanup
- keep Lenis initialization global

---

# 12. GSAP / React Implementation Rules

## Required

- use refs, not global selectors when possible
- create animations inside `useLayoutEffect()` or GSAP's React-safe pattern
- use `gsap.context()` for cleanup
- avoid creating duplicate ScrollTriggers on route changes
- call ScrollTrigger refresh after layout-critical media loads where necessary

## Performance

Animate primarily:

- `transform`
- `opacity`

Avoid repeatedly animating:

- width
- height (except controlled accordion)
- top/left
- large filter blur values

Use `will-change` sparingly.

---

# 13. Responsive Motion Rules

## Desktop >= 1024px

Enable full experience:

- Lenis
- masked text
- parallax
- hover reveals
- cursor-follow preview if chosen
- multi-card testimonial slider

## Tablet 768-1023px

Reduce:

- parallax amount
- horizontal mouse-follow effects
- extreme heading scale

Preserve:

- marquee
- counters
- accordion
- slider
- basic reveals

## Mobile < 768px

Disable:

- cursor-follow images
- magnetic behavior if it harms touch
- heavy scrub sequences

Keep:

- short reveal animations
- simple marquee
- counter
- touch slider
- accordion

Mobile must never feel like a broken desktop animation squeezed into a smaller screen.

---

# 14. Performance Requirements

The AI implementation must meet these rules:

- aim for 60fps on normal modern devices
- no animation should cause continuous layout thrashing
- lazy-load offscreen images
- optimize project thumbnails
- no giant uncompressed background videos unless explicitly requested
- reduce DOM duplication in marquees to the minimum needed for seamless looping
- clean GSAP timelines/listeners on component unmount
- avoid stacking multiple scroll libraries
- do not use both Lenis and another smooth-scroll package

---

# 15. Accessibility Requirements

- semantic headings in correct order
- real buttons for interactive controls
- keyboard-operable mobile menu
- keyboard-operable FAQ
- visible focus state
- sufficient color contrast
- all meaningful images have alt text
- decorative imagery uses empty alt where appropriate
- animations respect `prefers-reduced-motion`
- marquee must not contain unique information that cannot be accessed while motion is paused

---

# 16. Content / Copyright Rules

The final portfolio must **not** copy:

- Stodio name
- Stodio logo
- exact Stodio written copy
- project names from the reference
- client names/testimonials
- original hero/gallery/project imagery
- proprietary icons if not licensed

It may recreate:

- section order
- layout logic
- animation categories
- visual rhythm
- neutral/red color direction
- typography scale inspiration
- marquee/counter/accordion/slider interaction patterns

All portfolio content must be replaced with the owner's real information.

---

# 17. Section Build Order for AI

Build in this exact sequence:

```text
Phase 01 — Global setup
  - fonts
  - colors
  - container/grid
  - buttons
  - GSAP setup
  - Lenis setup
  - reduced motion

Phase 02 — Navbar
Phase 03 — Hero
Phase 04 — Logo marquee
Phase 05 — About intro
Phase 06 — About image marquee/gallery
Phase 07 — Stats
Phase 08 — Services
Phase 09 — Selected Work
Phase 10 — Pricing / Engagement
Phase 11 — FAQ
Phase 12 — Testimonials
Phase 13 — Journal
Phase 14 — Final CTA
Phase 15 — Newsletter/Footer
Phase 16 — responsive refinement
Phase 17 — performance/accessibility QA
```

Do not generate Phase 08 before Phase 01-07 are stable when working iteratively.

---

# 18. Section Acceptance Checklist

Before calling any section complete, verify:

### Layout

- proportions match the intended reference rhythm
- no overflow
- spacing works on desktop/tablet/mobile
- text wraps intentionally

### Assets

- correct image role
- correct crop
- optimized dimensions
- no stolen reference asset

### Motion

- correct trigger
- correct duration
- correct easing
- no abrupt reset
- no flicker on refresh
- no animation replay unless intended

### Interaction

- hover state works
- keyboard state works
- touch fallback exists

### Performance

- no visible jank
- no console warning
- no duplicate GSAP trigger

---

# 19. Compact Motion Map

| Section | Primary Motion | Trigger | Recommended Tech |
|---|---|---|---|
| Navbar | fade/slide, menu icon rotation | load/click | CSS + GSAP |
| Hero | masked text + stagger + image settle | page load | GSAP timeline |
| Logo strip | infinite marquee | continuous | GSAP/CSS |
| About intro | text reveal | scroll | ScrollTrigger |
| About gallery | infinite image marquee | continuous | GSAP |
| Stats | count-up / digit roller | ~60% visible | IntersectionObserver + rAF / GSAP |
| Services title | editorial stagger | scroll | ScrollTrigger |
| Service rows | image reveal | hover/focus | GSAP |
| Projects | masked image reveal | scroll | ScrollTrigger |
| Project cards | image zoom + text/arrow shift | hover | CSS/GSAP |
| Pricing | price crossfade | toggle click | React + GSAP/CSS |
| FAQ | height/opacity + icon rotation | click | GSAP |
| Testimonials | draggable/touch slider | drag/autoplay | Swiper |
| Journal | stagger card reveal | scroll | ScrollTrigger |
| Final CTA | scale + masked heading | scroll | ScrollTrigger |
| Footer | minor fade / link hover | scroll/hover | CSS + GSAP |

---

# 20. Master Instruction for the Coding AI

Use the following instruction at the beginning of implementation:

> Build a production-quality personal portfolio inspired by the Stodio Webflow reference. Do not clone its copyrighted content or assets. Preserve the same broad section rhythm, editorial minimalism, neutral palette with restrained red accent, generous whitespace, oversized typography, and motion-led experience. Use GSAP as the animation engine, ScrollTrigger for viewport/scroll behavior, and Lenis for smooth scrolling with a reference lerp around 0.08. Build each section independently and do not move forward until its layout, responsive behavior, assets, and motion match this specification. Use masked line reveals for major headings, seamless marquees for logo/gallery strips, viewport-triggered counters, hover image reveals for services, subtle image zoom/parallax for projects, animated pricing state changes, an accessible GSAP accordion, a touch-friendly testimonial slider, and restrained staggered section entrances. Motion must be smooth, purposeful, accessible, and performant. Avoid generic fade animations everywhere, excessive gradients, glassmorphism, large bounce effects, or random animation libraries.

---

# 21. Reference Facts vs Implementation Choices

## Confirmed from Stodio / official template materials

- Webflow template
- GSAP animations/interactions advertised by template listing
- Lenis smooth scrolling
- GSAP ScrollTrigger integration with Lenis
- reference Lenis `lerp: 0.08`
- counter uses `data-count`
- counter duration about `3000ms`
- counter starts around IntersectionObserver threshold `0.6`
- counter uses requestAnimationFrame
- custom embedded SVG icons
- exact reference color variables listed in this document
- exact reference typography sizes/line heights listed in this document
- homepage includes Hero, logo imagery, About/Who We Are, gallery, Stats, Services, Selected Work, Pricing, FAQ, Testimonials, Journal, Final CTA, newsletter/footer

## Recreate / recommended choices

- exact GSAP timelines and values
- masked line reveal implementation
- SplitType/SplitText choice
- project cursor-follow image preview
- magnetic buttons
- subtle parallax values
- precise breakpoint-specific durations
- React/Next.js component architecture

This distinction must remain clear throughout future development.

---

# 22. Final Goal

The objective is **not** “make a website with lots of animation.”

The objective is:

> Create an original personal portfolio whose **visual rhythm, motion quality, editorial hierarchy, smooth-scroll feel, interaction polish, and section choreography** are comparable to the Stodio reference, while all content, identity, projects, images, and branding belong to the portfolio owner.

When future prompts say **“build the next section”**, use this file as the single reference and implement only that next section plus the minimum shared code it requires.
