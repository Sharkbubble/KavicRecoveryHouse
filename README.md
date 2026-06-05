# Kavic House Recovery - Nuxt 3

This project has been migrated from a static HTML file to a Nuxt 3 application.

## Tech stack

- Nuxt 3
- Vue 3
- Vite (via Nuxt)
- Vercel deployment target

## Project structure

- `pages/index.vue` - main landing page
- `assets/css/site.css` - migrated site styles
- `public/KavicHouseLogo_v2.jpeg` - static logo asset
- `nuxt.config.ts` - Nuxt configuration and Vercel Nitro preset

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

This repo is configured for Nuxt on Vercel.

- `vercel.json` uses framework detection for Nuxt.
- Nitro preset in `nuxt.config.ts` is set to `vercel`.

You can deploy with either:

1. Vercel dashboard by importing the repository.
2. Vercel CLI:

```bash
npx vercel --prod
```

## Notes

- Legacy static HTML files were removed to keep this repository Nuxt-only.
- Form submit behavior currently mirrors the static prototype (local success-state UI only).
