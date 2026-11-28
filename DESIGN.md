# Design System

## Visual World

Architectural Engineering Ledger: a committed crimson hero surface (`#c42828`) on `/` opens into a dark, warm-charcoal (`#0b0c0e`) editorial grid built on `1px` hairline borders, `0px` corner radius, generous heading-to-body contrast, and open typographic ledgers.

## Typography

- **Display and body face:** `Schibsted Grotesk` (`--font-sans`), `font-weight: 600` for headings, `400`–`500` for body copy.
- **Technical and tabular face:** `JetBrains Mono` (`--font-mono`), reserved for code, URLs, dates, status values, and tabular numbers (`tabular-nums`).
- **Constraints:**
  - Minimum UI text size is `12px` (`text-xs`).
  - Prose measure is capped at `65ch` (`max-w-[65ch]`).
  - Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.
  - No eyebrow kickers or `01 //` syntax prefixes above headings.

## Color Tokens

- `--color-background`: `#0b0c0e`
- `--color-background-contrast`: `#121417`
- `--color-surface`: `#181b20`
- `--color-border`: `rgba(236, 235, 230, 0.1)`
- `--color-border-strong`: `rgba(236, 235, 230, 0.22)`
- `--color-primary`: `#ecebe6`
- `--color-secondary`: `#b4b2aa`
- `--color-tertiary`: `#8e8d86` (WCAG AA compliant on `#0b0c0e` and `#121417`)
- `--color-accent`: `#c42828` (hero surface and primary button fill with `#ffffff` text)
- `--color-accent-hover`: `#d63333`
- `--color-accent-text`: `#f07167` (WCAG AA compliant inline accent text, links, and form errors on dark surfaces)
- `--color-accent-contrast`: `#ffffff`

## Layout and Rhythm

- Centered `72rem` `.tui-rail` with `1px` vertical hairline borders across all routes.
- Open 2-column ledgers (`lg:grid-cols-12`) for project details, work history, and technical stack instead of repetitive bordered boxes and pill-badge floods.
- Static 4-cell specification bar at the base of the hero on `/` (no infinite marquee).
- Interactive controls meet a `44px` (`min-h-11`) minimum touch target on mobile and never nest `<button>` inside `<a>`.
