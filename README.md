Kavic House Recovery — Static site

This repository contains a single-page static site. It is configured for direct deployment to Vercel using the provided `index.html` and `vercel.json`.

Important files
- `index.html` — root page (full site markup)
- `recovery-house-website.html` — original file (kept for reference)
- `vercel.json` — Vercel static routing/build config
- `KavicHouseLogo_v2.jpeg` (or similar) — ensure any logo/image assets referenced are committed to the repo root or correct path

Quick deploy (recommended) — Vercel CLI
Prerequisites: Node/npm installed locally.

1) Install Vercel CLI (if you don't have it):

```bash
npm install -g vercel
```

2) Log in and deploy (follow interactive prompts):

```bash
vercel login
vercel --prod
```

The CLI will read `vercel.json` and serve `index.html` at the site root.

Deploy via Git / Vercel dashboard (no CLI required)
1) Push this repo to a Git provider (GitHub, GitLab, Bitbucket).
2) In the Vercel dashboard, choose "New Project" and import the repo.
3) Vercel will detect a static site — confirm and deploy. `vercel.json` will control routing.

Local testing
- Open `index.html` in your browser (double-click) for a quick preview.
- For a simple local static server:

```bash
# using Python 3
python3 -m http.server 8080
# then open http://localhost:8080/index.html
```

Notes & troubleshooting
- If `npm` or `vercel` is not found, install Node.js from https://nodejs.org/ or use the GitHub/Vercel dashboard flow.
- Confirm any referenced image files (e.g. `KavicHouseLogo_v2.jpeg`) exist in the repo.

If you want, I can:
- Run the deploy for you (requires `npm`/`vercel` available in the environment), or
- Create a GitHub Action that pushes or notifies Vercel on push.

# KavicRecoveryHouse
# KavicRecoveryHouse
