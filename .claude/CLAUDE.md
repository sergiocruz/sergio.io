# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Commands

- **Dev server**: `npm run dev` (http://localhost:4321)
- **Build**: `npm run build`
- **Preview prod build**: `npm run preview`
- **Lint (check)**: `npm run lint`
- **Format (write)**: `npm run format`
- **All tests**: `npm test` (requires `npm run build` first; Playwright
  auto-starts preview server)
- **Single test file**: `npx playwright test tests/e2e/homepage.spec.ts`
- **Single test by name**: `npx playwright test -g "test name"`
- **Tests with browser visible**: `npm run test:headed`
- **Interactive test UI**: `npm run test:ui`

## Architecture

Astro static site with React islands, Tailwind CSS v4, and Playwright e2e tests.
Deployed to GitHub Pages via GitHub Actions on push to `main`.

### Content System

Four Astro content collections defined in `src/content.config.ts` with Zod
schemas:

- **blog** — Markdown posts in `src/content/blog/`, rendered by
  `src/pages/blog/[...slug].astro`
- **courses**, **videos**, **publications** — featured work entries in their
  respective `src/content/` subdirectories, displayed on
  `src/pages/featured-work.astro`

Blog frontmatter requires `title`, `description`, `date`; optional fields
include `tags`, `draft`, `heroImage`, `readingTime`, `slug`.

### Styling

Tailwind v4 configured via `@config` directive in `src/styles/globals.css`
pointing to `tailwind.config.ts`. Dark mode uses `media` strategy (system
preference). Brand colors (`brand-light`, `brand-dark`, `brand-primary`,
`brand-accent`, `brand-link`) and typography (Playfair Display for headings,
Inter for body) are defined in the Tailwind config.

Dynamic gradient classes for featured work cards are computed at runtime in
`src/utils/gradients.ts` and safelisted in `tailwind.config.ts` to prevent
purging.

### Site Configuration

`src/config/site.ts` exports the `SITE` object — navigation items, social links,
brand info, SEO defaults, and footer text. This is the single source of truth
for site-wide metadata.

### Resume Data

Resume content lives in `src/data/resume.json` (structured data), rendered by
`src/pages/resume.astro`.

### Key Build Integration

`@playform/inline` (in `astro.config.ts`) handles critical CSS inlining at build
time via Beasties. This runs post-build on the `dist/` output.

### Path Aliases

TypeScript path aliases are configured: `@/*` → `./src/*`, with specific aliases
for `@/components/*`, `@/layouts/*`, `@/config/*`, `@/content/*`.

### Pre-commit

Husky runs `lint-staged` on commit, which auto-formats staged `.astro`, `.ts`,
`.tsx`, `.js`, `.jsx`, `.md`, `.mdx`, and `.json` files with Prettier.

### Testing

Playwright tests live in `tests/e2e/`. The Playwright config auto-starts
`npm run preview` as the web server, so a build must exist. Only Chromium is
enabled by default (other browsers are commented out). Tests run against
`http://localhost:4321`.
