# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page marketing/landing site for **Kavic House Recovery**, a sober living community in Nanaimo, BC. Recently migrated from a static HTML file to Nuxt 3 (branch `converting-to-next`). The entire site is one page; there is no backend, database, or CMS.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:3000
npm run build      # production build (Nitro)
npm run preview    # preview the production build locally
npm run generate   # static site generation
```

There is no test suite, linter, or formatter configured.

## Architecture

The whole site lives in three files:

- `pages/index.vue` — the entire page. Template is the full markup (nav, hero, about, services, testimonial, contact, footer) as static sections linked by in-page anchors (`#home`, `#about`, `#services`, `#contact`). The `<script setup>` holds all interactivity: scroll-driven nav styling (`isScrolled`), mobile nav toggle, and the contact form. `app.vue` only renders `<NuxtPage />`.
- `assets/css/site.css` — all styling, global (not scoped). Design tokens (sage/cream/amber palette, serif/sans font stacks) are CSS custom properties in `:root`. Imported globally via `css:` in `nuxt.config.ts`. Fonts (Cormorant Garamond, Jost) are loaded from Google Fonts via `app.head.link`.
- `nuxt.config.ts` — page `<head>` (title, meta, font links), global CSS registration, and `nitro.preset: 'vercel'` for deployment.

### Things to know

- **Content is placeholder.** Much body copy is marked `[Placeholder]` and contact details (phone `(250) 000-0000`, email, quotes) are stubs awaiting real values.
- **The contact form does not submit anywhere.** `handleSubmit` in `pages/index.vue` only sets local success-state UI (`isSubmitted`), then resets after 3s. Wiring it to a real endpoint requires adding a Nitro server route or third-party form service.
- **Deployment is Vercel** via the Nitro `vercel` preset and `vercel.json` framework detection. Logo asset is `public/KavicHouseLogo_v2.jpeg`, referenced as `/KavicHouseLogo_v2.jpeg`.
