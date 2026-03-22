# Chris Holland Portfolio

A personal portfolio site showcasing software engineering work—focusing on dashboards, internal tools, and production web apps.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** React 19, Lucide icons

## Features

- **Hero** — Tagline, value props, and engagement highlights
- **Work** — Project cards with scrollable screenshot galleries and click-to-expand lightbox
- **About** — Professional focus and workflow
- **Contact** — Email, LinkedIn, and suggested inquiry details
- **Theming** — Light/dark mode via `prefers-color-scheme`
- **Responsive** — Mobile-first layout with breakpoint-aware grids

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

## Project Structure

```
src/app/
├── components/
│   ├── config/
│   │   └── site.ts          # Brand, nav, theme config
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   └── Hero.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       └── Section.tsx
├── globals.css               # CSS variables, theme tokens
├── layout.tsx
└── page.tsx                  # Main page with all sections

public/
├── ClientOps_Screenshots/    # ClientOps project images
├── DeckHaven_Screenshots/    # DeckHaven project images
└── ...
```

## Configuration

Edit `src/app/components/config/site.ts` to update:

- `brand.name` and `brand.tagline`
- `nav` links and labels
- `cta` label and href
- `mode` — `"portfolio"` or `"client"` (adjusts Hero copy)

## Theming

Colors are defined as CSS custom properties in `globals.css`:

- **background** — Page background
- **foreground** — Primary text
- **foreground-muted** — Secondary text
- **card** — Card background
- **surface** / **surface-hover** — Interactive surfaces
- **border** — Borders
- **accent** / **accent-foreground** — CTA buttons

The site respects `prefers-color-scheme` for light and dark modes.
