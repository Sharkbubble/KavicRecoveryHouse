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

## Docs

- [docs/CLIENT_DNS_SETUP.md](docs/CLIENT_DNS_SETUP.md) — step-by-step guide for the client to configure GoDaddy DNS and Resend domain verification

## Contact form (Resend)

The contact form at `#contact` sends email via [Resend](https://resend.com). The server route is at `server/api/contact.post.ts`.

### Setup

1. Sign up at [resend.com](https://resend.com) and create an API key.

2. Add these environment variables in your Vercel project settings (Settings → Environment Variables):

   | Variable | Description |
   |----------|-------------|
   | `RESEND_API_KEY` | API key from the Resend dashboard |
   | `CONTACT_EMAIL` | Inbox to receive inquiries (defaults to `hello@kavichouserecovery.ca`) |

3. For local testing, create a `.env` file in the project root:

   ```env
   RESEND_API_KEY=re_your_key_here
   CONTACT_EMAIL=you@example.com
   ```

### Sender address

The `from` address is currently `onboarding@resend.dev` (Resend's shared test sender — no domain verification needed). When ready, verify `kavichouserecovery.ca` in the Resend dashboard and update the `from` field in `server/api/contact.post.ts` to something like `contact@kavichouserecovery.ca`.

## Notes

- Legacy static HTML files were removed to keep this repository Nuxt-only.
