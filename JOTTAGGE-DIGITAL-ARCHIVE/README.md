# JOTAGGE — Digital Archive

A visual redesign of the JOTAGGE Hub, built from the existing repository and content.

## Direction

Editorial / cinematic digital archive inspired by experimental portfolio interfaces:
- oversized typography
- controlled whitespace
- image-led project archive
- fullscreen navigation
- subtle motion and reveal effects
- custom cursor on pointer devices
- monochrome base with acid-lime accent
- responsive mobile composition
- PT/EN language switch retained

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- CSS custom properties / native CSS motion
- Next Image

No animation framework is required for the current build; the visual system intentionally keeps the dependency footprint small.

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run start
```

## Routes

- `/`
- `/projetos`
- `/projetos/[slug]`
- `/creative`
- `/lab`
- `/lab/[slug]`
- `/lab/[slug]/[projectSlug]`
- `/knowledge`
- `/knowledge/[slug]`
- `/about`
- `/now`
- `/curriculo`
- `/contact`

## Content

Existing project, knowledge, lab and resume data were retained where possible. The redesign primarily changes the presentation layer and shared visual system.

## Notes

The original debug logs were removed from the source tree. The duplicated PostCSS configuration was consolidated into `postcss.config.js`.
