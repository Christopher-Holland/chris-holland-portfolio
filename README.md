# Next.js Freelance Template

Internal reusable Next.js template for portfolio and client sites.

## Usage
1. Clone or copy this repo
2. Update `src/config/site.ts` with brand info and nav
3. Replace page sections in `src/app/page.tsx`
4. Add or remove sections from `src/sections`

## Theming
- Uses system light/dark via `prefers-color-scheme`
- Colors are defined as CSS tokens in `globals.css`
- UI layers:
  - background → card → surface

## Notes
- This repo is the base template. Do not customize content here.
- Create a new repo for each site.