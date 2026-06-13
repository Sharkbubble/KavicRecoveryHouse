# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page marketing/landing site for **Kavic House Recovery**, a sober living community in Nanaimo, BC. Built with Nuxt 3 (migrated from a static HTML file). The site is live at [kavichouserecovery.ca](https://kavichouserecovery.ca). The entire site is one page; the only server-side code is the contact-form email route — there is no database or CMS.

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

The site lives in a few files:

- `pages/index.vue` — the entire page. Template is the full markup (nav, hero, about, services, testimonial, contact, footer) as static sections linked by in-page anchors (`#home`, `#about`, `#services`, `#contact`). The `<script setup>` holds all interactivity: scroll-driven nav styling (`isScrolled`), mobile nav toggle, scroll-reveal `IntersectionObserver`, and the contact form. `app.vue` only renders `<NuxtPage />`.
- `assets/css/site.css` — all styling, global (not scoped). Design tokens (sage/cream/amber palette, serif/sans font stacks) are CSS custom properties in `:root`. Imported globally via `css:` in `nuxt.config.ts`. Fonts (Cormorant Garamond, Jost) are loaded from Google Fonts via `app.head.link`.
- `server/api/contact.post.ts` — Nitro route that emails contact-form submissions via Resend. Validates required fields, sets the visitor's email as reply-to.
- `nuxt.config.ts` — page `<head>` (title, meta, font links), global CSS registration, and `nitro.preset: 'vercel'` for deployment.

### Things to know

- **The contact form posts to `/api/contact`.** `handleSubmit` in `pages/index.vue` calls the Nitro route, which sends mail through Resend. Requires `RESEND_API_KEY` (and optionally `CONTACT_EMAIL`) as env vars — see `README.md`. The `from` address is still Resend's test sender (`onboarding@resend.dev`); switch it to a branded address once the domain is verified in Resend.
- **Deployment is Vercel** via the Nitro `vercel` preset and `vercel.json` framework detection. Logo asset is `public/KavicHouseLogo_v2.jpeg`, referenced as `/KavicHouseLogo_v2.jpeg`.
