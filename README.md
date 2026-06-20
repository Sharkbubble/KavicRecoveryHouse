# Kavic House Recovery

Marketing website for **Kavic House Recovery**, a safe, structured sober living community in Nanaimo, BC. Single-page Nuxt 3 application deployed on Vercel.

🌐 **Live site:** [kavichouserecovery.ca](https://kavichouserecovery.ca)

## Tech stack

- [Nuxt 3](https://nuxt.com/) (Vue 3, Vite, Nitro)
- [Resend](https://resend.com/) for contact-form email delivery
- Deployed on [Vercel](https://vercel.com/)

## Project structure

```
pages/index.vue            The entire page (nav, hero, about, services, contact, footer)
assets/css/site.css        All styling — global, design tokens in :root
server/api/contact.post.ts Server route that emails contact-form submissions via Resend
nuxt.config.ts             Head/meta, fonts, global CSS, Vercel Nitro preset
public/                    Static assets (logo, hero images)
```

The whole site is one page; in-page anchors (`#home`, `#about`, `#services`, `#contact`) handle navigation. There is no database or CMS.

## Local development

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:3000
```

To test the contact form locally, create a `.env` file (see [Environment variables](#environment-variables)).

## Build & deploy

```bash
npm run build    # production build (Nitro / Vercel preset)
npm run preview  # preview the production build locally
```

Deployment is automatic via Vercel on push to `main`. To deploy manually:

```bash
npx vercel --prod
```

`vercel.json` enables Nuxt framework detection and the Nitro `vercel` preset is set in `nuxt.config.ts`.

## Environment variables

Set these in **Vercel → Project Settings → Environment Variables** (and in a local `.env` for development):

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | API key from the [Resend dashboard](https://resend.com). Without it the contact form returns an error. |
| `CONTACT_EMAIL` | No | Inbox that receives inquiries. Defaults to `cj@kavichouserecovery.ca`. |

Example `.env`:

```env
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=you@example.com
```

`.env` files are gitignored — never commit secrets.

## Contact form

The form at `#contact` posts to `server/api/contact.post.ts`, which sends an email via Resend with the visitor's email set as the reply-to address.

The sender (`from`) is `admin@kavichouserecovery.ca`, sent from the `kavichouserecovery.ca` domain verified in Resend. To change it, update the `from` field in `server/api/contact.post.ts`.
