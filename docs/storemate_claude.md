# Storemate — Brand Design System
## claude.md · Wave Design System · 2026

This file defines the complete Storemate brand identity for all frontend design work.
Every component, page, artifact, and interface built for Storemate must follow these standards exactly.

---

## Skill Loading — Required Before Every Frontend Task

This project loads the **frontend-design** skill. Claude must follow all guidelines below
when generating, editing, or reviewing any UI code in this project.

This is mandatory and unconditional. Do not skip it even for simple tasks. The skill encodes environment-specific constraints, available libraries, and rendering rules that must be applied alongside the Storemate brand standards in this file.

After reading the skill, apply both sets of instructions simultaneously:
- **Frontend skill** → technical execution, animation, composition, code quality
- **This file (claude.md)** → Storemate brand identity, colors, typography, voice, components

When the two sets of instructions conflict, **this file takes priority** for all brand, color, typography, and voice decisions. The frontend skill takes priority for technical implementation choices.

```
SKILL LOCATION:   /mnt/skills/public/frontend-design/SKILL.md
BRAND FILE:       This file (claude.md)
LOAD ORDER:       1. Frontend skill  →  2. This brand file  →  3. Build
```

---

## Brand Identity

**Company:** Storemate by Parallax Technologies (Pvt) Ltd
**Market:** Sri Lankan e-commerce sellers
**Mission:** Empowering Entrepreneurs.
**Tagline:** From seller to Entrepreneur.
**Position:** The standard for Sri Lankan e-commerce.
**Proof line:** Built from 25 million orders.
**Design system name:** Wave

---

## Design Thinking — Before Every Build

Before writing a single line of code, answer these four questions:

**Purpose:** What problem does this interface solve for a Sri Lankan seller?
**Tone:** Premium. Polished. Confident. Warm. Never corporate-cold. Never startup-casual.
**Differentiation:** Every Storemate interface should feel like it belongs to a brand that has won 8 awards and processed 25 million orders. Not a startup. An established, trusted operator.
**Constraint:** Mobile-first always. Most Sri Lankan sellers use phones. Every layout must work at 390px.

---

## Color System

Use CSS variables for all colors. Never hardcode hex values outside of the root definition.

```css
:root {
  /* Primary brand colors */
  --color-navy:      #013387;   /* Authority · Hero backgrounds · Dark sections */
  --color-blue:      #006DAF;   /* Trust · Links · Primary text on white · Borders */
  --color-cyan:      #00BCE7;   /* Action · CTAs · Wave mark · Accent only */

  /* Neutral colors */
  --color-charcoal:  #161616;   /* Body text · Dark mode base */
  --color-lgray:     #EFEFEF;   /* Section backgrounds · Card surfaces */
  --color-mgray:     #DBDBDB;   /* Borders · Dividers · Secondary UI */
  --color-white:     #FFFFFF;   /* Primary surface · Text on dark */

  /* Semantic colors */
  --color-soft-blue: #E6F5FC;   /* Highlight backgrounds · Info states */
  --color-dark2:     #0A2460;   /* Deep navy · Overlay backgrounds */

  /* Gradients */
  --gradient-brand:  linear-gradient(135deg, #006DAF 0%, #00BCE7 100%);
  --gradient-hero:   linear-gradient(135deg, #013387 0%, #006DAF 60%, #00BCE7 100%);
  --gradient-dark:   linear-gradient(135deg, #161616 0%, #EFEFEF 100%);
  --gradient-overlay: linear-gradient(90deg, #013387 0%, #013387 50%, transparent 100%);

  /* Color ratios — follow strictly */
  /* Navy:  60% of any dark composition */
  /* Blue:  25% supporting elements     */
  /* Cyan:  10% accent moments only     */
  /* White: 5%  pure highlights         */
}
```

**Color hierarchy rule:** Cyan is an accent — never dominant. Navy and Blue carry the premium weight. When in doubt, go darker. Darker reads as more authoritative.

---

## Typography

```css
:root {
  /* Primary typefaces */
  --font-display:  'Forefront BookSH', 'Nunito', sans-serif;   /* Headlines · Hero · Stats · CTAs */
  --font-body:     'Forefront BookSH', 'Nunito', sans-serif;   /* Body · UI · Captions */
  --font-mono:     'JetBrains Mono', 'Courier New', monospace; /* Code · Technical */

  /* Font weights */
  --weight-light:       300;   /* "From seller to" — first line of tagline */
  --weight-regular:     400;   /* Body copy · Secondary text */
  --weight-medium:      500;   /* Labels · Nav items */
  --weight-semibold:    600;   /* Subheadings · Emphasis */
  --weight-bold:        700;   /* Section headings */
  --weight-extrabold:   800;   /* "Entrepreneur." — headline impact */
}
```

**Fallback fonts:** When Forefront BookSH is unavailable, use Nunito. Never use Arial, Inter, Roboto, or system-ui for Storemate interfaces.

### Type Scale

```css
:root {
  --text-xs:    11px;   /* Labels · Badges · Captions */
  --text-sm:    13px;   /* Secondary body · Helper text */
  --text-base:  15px;   /* Primary body copy */
  --text-md:    18px;   /* Sub-section headings */
  --text-lg:    22px;   /* Section headings */
  --text-xl:    28px;   /* Page headings */
  --text-2xl:   36px;   /* Hero subheadlines */
  --text-3xl:   44px;   /* Hero headlines */
  --text-4xl:   56px;   /* Display / Cover only */

  /* Line heights */
  --leading-tight:   1.15;
  --leading-snug:    1.35;
  --leading-normal:  1.6;
  --leading-relaxed: 1.75;

  /* Letter spacing */
  --tracking-wide:    0.08em;   /* Body */
  --tracking-wider:   0.12em;   /* Labels · Tags */
  --tracking-widest:  0.18em;   /* UPPERCASE section labels */
}
```

### Typography Rules

1. **Inter ExtraBold or Forefront Bold for headlines only** — never for body copy
2. **Light weight (300) for first lines of paired headlines** — creates contrast with bold second line
3. **"From seller to" in light · "Entrepreneur." in bold** — this pairing is the brand's typographic signature
4. **No exclamation marks** — confident brands do not shout
5. **Sentence case** — never ALL CAPS for body text
6. **Numbers over adjectives** — "25M orders" beats "extensive experience"
7. **One font family maximum** — do not mix Forefront with other display fonts

---

## Logo

**The wave mark** (two fluid shapes replacing the "m") is Storemate's most distinctive visual asset.

```
USAGE RULES
- Always use the approved master logo file
- Never recreate, redraw, or approximate the wave mark
- Never recolor any part of the logo independently
- Never stretch, rotate, or distort
- Never add drop shadows, outlines, or effects
- Clear space equal to logo height on all four sides

APPROVED VERSIONS
- Full color on white:        Cyan "Store" + gradient wave + blue "ate"
- White on dark/gradient:     All white version
- Monochrome:                 Single-color black for embossing/print

MINIMUM SIZES
- Digital:    120px wide
- Print:      30mm wide
- App icon:   Use wave mark only (not full logotype)
```

---

## Spacing System

```css
:root {
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;

  /* Border radius */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   20px;
  --radius-full: 9999px;

  /* Container */
  --container-sm:   560px;
  --container-md:   720px;
  --container-lg:   960px;
  --container-xl:  1200px;
  --container-max: 1440px;
}
```

**White space rule:** Storemate designs breathe. Use significantly more white space than feels comfortable. Generous negative space signals premium. Crowded layouts signal cheap.

---

## Component Standards

### Buttons

```css
/* Primary — use for main CTAs only */
.btn-primary {
  background: var(--gradient-brand);
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: var(--weight-bold);
  font-size: var(--text-sm);
  padding: 12px 28px;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  letter-spacing: var(--tracking-wide);
}

/* Secondary — for supporting actions */
.btn-secondary {
  background: transparent;
  color: var(--color-blue);
  border: 1.5px solid var(--color-blue);
  font-family: var(--font-display);
  font-weight: var(--weight-medium);
  font-size: var(--text-sm);
  padding: 11px 28px;
  border-radius: var(--radius-md);
  cursor: pointer;
}

/* Ghost — for tertiary actions */
.btn-ghost {
  background: transparent;
  color: var(--color-charcoal);
  border: 0.5px solid var(--color-mgray);
  font-family: var(--font-display);
  font-weight: var(--weight-regular);
  font-size: var(--text-sm);
  padding: 11px 28px;
  border-radius: var(--radius-md);
  cursor: pointer;
}
```

**Button rules:**
- One primary CTA per page section — never two
- Never use "Shop Now" — signals transaction, not business partnership
- "Start free today" · "Learn More" · "See how it works" — preferred language
- No exclamation marks on any button

### Cards

```css
.card {
  background: var(--color-white);
  border: 0.5px solid var(--color-mgray);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.card-navy {
  background: var(--color-navy);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.card-soft {
  background: var(--color-soft-blue);
  border: 0.5px solid var(--color-blue);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.card-gray {
  background: var(--color-lgray);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

/* Accent border — left edge highlight */
.card-accent-left {
  border-left: 3px solid var(--color-cyan);
}
```

### Badges and Tags

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
}

.badge-primary   { background: var(--color-soft-blue); color: var(--color-blue); }
.badge-navy      { background: var(--color-navy); color: var(--color-white); }
.badge-dark      { background: var(--color-charcoal); color: var(--color-white); }
.badge-cyan      { background: var(--color-cyan); color: var(--color-navy); }
```

### Section Labels

Every section in a Storemate interface begins with a small label above the heading:

```css
.section-label {
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-cyan);
  margin-bottom: var(--space-2);
}
```

### Credential / Stats Block

The proof block appears on every high-trust placement:

```html
<div class="proof-strip">
  <div class="stat">
    <span class="stat-num">25M+</span>
    <span class="stat-label">Orders processed</span>
    <span class="stat-sub">Through Curfox · Sri Lanka</span>
  </div>
  <div class="stat">
    <span class="stat-num">8</span>
    <span class="stat-label">Awards won</span>
    <span class="stat-sub">National &amp; international</span>
  </div>
  <div class="stat">
    <span class="stat-num">5+</span>
    <span class="stat-label">Years experience</span>
    <span class="stat-sub">Sri Lankan e-commerce</span>
  </div>
  <div class="stat">
    <span class="stat-num">ISO</span>
    <span class="stat-label">27001 in progress</span>
    <span class="stat-sub">World-class data security</span>
  </div>
</div>
```

```css
.proof-strip {
  background: var(--color-navy);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: var(--space-6) 0;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-right: 0.5px solid rgba(255,255,255,0.12);
  padding: 0 var(--space-4);
}

.stat:last-child { border-right: none; }

.stat-num   { font-size: var(--text-xl); font-weight: var(--weight-extrabold); color: var(--color-cyan); }
.stat-label { font-size: 10px; font-weight: var(--weight-bold); color: rgba(255,255,255,0.65); letter-spacing: var(--tracking-wider); text-transform: uppercase; }
.stat-sub   { font-size: 9px; color: rgba(255,255,255,0.3); }
```

---

## Layout Patterns

### Hero Section

```css
.hero {
  background: var(--gradient-hero);
  min-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: var(--space-20) var(--space-8);
}

/* Subtle radial glow behind content */
.hero::before {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(0,188,231,0.08);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

/* Top accent line */
.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255,255,255,0.3);
}
```

### The Tagline Pair

This pairing is the brand's typographic signature. Use it on every hero:

```html
<h1 class="tagline">
  <span class="tagline-light">From seller to</span>
  <span class="tagline-bold">Entrepreneur.</span>
</h1>
```

```css
.tagline { display: flex; flex-direction: column; align-items: center; }
.tagline-light { font-size: var(--text-3xl); font-weight: var(--weight-light); color: var(--color-white); letter-spacing: -0.5px; }
.tagline-bold  { font-size: var(--text-3xl); font-weight: var(--weight-extrabold); color: var(--color-white); letter-spacing: -0.5px; }
```

### Section Divider

The cyan horizontal rule separates major sections:

```css
.section-divider {
  width: 48px;
  height: 2px;
  background: var(--color-cyan);
  margin: var(--space-6) auto;
}
```

---

## Brand Personality in UI

These brand values must translate into interface behaviour:

| Brand Value | UI Expression |
|---|---|
| **Trusted & Accountable** | Error messages are specific and human. Never generic. Always say what went wrong and what to do. |
| **Partner & Champion** | Empty states encourage and guide. Never leave a blank screen without a helpful next step. |
| **Human & Simple** | Tooltips use plain seller language. No jargon. No technical terms without explanation. |
| **Professional & Secure** | Form validation is immediate and clear. Data handling messages use specific, trustworthy language. |
| **Pioneer & Integrated** | Loading states are crafted, not generic. Transitions are smooth and intentional. |
| **Community & Educator** | Onboarding celebrates the seller's first milestone. Never just a checklist — a welcome. |

---

## Voice in UI Copy

All in-product copy follows the brand voice exactly:

**Use these words:** standard · professional · trusted · built for · real business · committed · proven · Sri Lankan sellers · growth · control

**Never use:** solution · streamline · powerful · seamless · cutting-edge · innovative · affordable · exciting

**Sentence rules:**
- Short sentences — one idea each
- Active voice — "We fixed it" not "It has been resolved"
- No exclamation marks
- Numbers over adjectives
- Specific over vague — always

**Example — error message:**
```
Wrong:  "An error occurred. Please try again."
Right:  "Your order data could not be saved. Check your connection and try again — or contact our team."
```

**Example — success message:**
```
Wrong:  "Order saved successfully!"
Right:  "Order saved. Your delivery is being processed."
```

**Example — empty state:**
```
Wrong:  "No orders found."
Right:  "No orders yet. Once your first order arrives, it will appear here."
```

**Example — onboarding milestone:**
```
Wrong:  "You've completed setup!"
Right:  "Your first order is ready. That is how a real business starts."
```

---

## Photography Direction

When selecting or specifying images for Storemate interfaces:

**Use:**
- Real Sri Lankan sellers in real environments
- Packing tables, small warehouses, home offices
- Natural light or controlled warm lighting
- Faces showing calm confidence — not forced smiles
- Storemate UI on phones in seller environments
- Clean, uncluttered backgrounds

**Never use:**
- Western stock photos of office workers
- Generic tech imagery — floating data, circuit boards
- Models who do not look like Sri Lankan sellers
- Dark or unclear product screenshots
- Posed studio shots that feel foreign

---

## Credential Display Rules

The proof block (25M+ orders, 8 awards, 5+ years, ISO 27001) must appear on:
- Every homepage hero section
- Every pitch deck cover
- Every partnership proposal header
- Every landing page above the CTA
- Every email footer
- Every onboarding screen

The credentials are **not** decorative. They are the brand's most powerful trust signal. Do not bury them.

---

## Brand Comparisons — Design Standards to Match

**BMW reference:** Every detail is intentional. No accidental design decisions. If a spacing choice, color use, or typographic decision cannot be justified — remove it.

**Apple reference:** Simplicity is the hardest standard. Remove everything that does not serve the seller. If an element cannot be explained in one sentence — it should not be there.

**The standard test:** Would a brand that has won 8 national and international awards publish this? If no — redesign.

---

## Responsive Breakpoints

```css
/* Mobile first */
:root {
  --breakpoint-sm:  390px;   /* iPhone standard */
  --breakpoint-md:  768px;   /* Tablet */
  --breakpoint-lg:  1024px;  /* Small desktop */
  --breakpoint-xl:  1280px;  /* Desktop */
  --breakpoint-2xl: 1536px;  /* Large desktop */
}

/* Usage */
@media (min-width: 768px)  { /* tablet and up  */ }
@media (min-width: 1024px) { /* desktop and up */ }
```

**Mobile-first rule:** Design the 390px layout first. Every element must work on a phone before being enhanced for desktop. Most Sri Lankan sellers arrive on mobile.

---

## Animation Standards

Storemate interfaces are calm and confident — not flashy:

```css
:root {
  --transition-fast:   150ms ease;
  --transition-base:   250ms ease;
  --transition-slow:   400ms ease;
  --transition-brand:  300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Page load — staggered reveal */
.fade-up {
  opacity: 0;
  transform: translateY(16px);
  animation: fadeUp var(--transition-slow) var(--transition-brand) forwards;
}

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

/* Hover states — subtle, not dramatic */
.btn-primary:hover { opacity: 0.92; transform: translateY(-1px); transition: var(--transition-fast); }
.card:hover        { box-shadow: 0 4px 20px rgba(1,51,135,0.12); transition: var(--transition-base); }
```

**Animation rules:**
- One well-orchestrated page load beats scattered micro-interactions
- No bouncing, spinning, or playful animations — this is a professional platform
- Transitions signal confidence — smooth and purposeful
- Never animate more than 3 elements simultaneously

---

## Facebook-Specific Dimensions

```
Cover image:         820 × 312 px
Profile picture:     180 × 180 px
Post image:          1200 × 630 px
Story:               1080 × 1920 px
Event cover:         1920 × 1080 px
Ad (single image):   1200 × 628 px
Ad (square):         1080 × 1080 px
Ad (story):          1080 × 1920 px
```

---

## The Wave Design System Signature

Every interface built with Wave should feel like it was made by a company that:
- Has processed 25 million orders
- Has won 8 awards over 3 consecutive years
- Knows Sri Lankan e-commerce from the inside
- Genuinely wants sellers to become Entrepreneurs

If the interface does not feel like that — it is not Wave.

---

*Wave Design System · Storemate · Parallax Technologies (Pvt) Ltd · 2026*
*Namal Attanayake — CEO & Founder*
*"From seller to Entrepreneur."*
