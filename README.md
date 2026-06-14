# bbcre8s — Bella B Creates

A video-first UGC portfolio site built on Astro and deployed to GitHub Pages.

## Stack

- **Astro** — static site generator
- **Sveltia CMS** — browser-based content editor at `/admin` (GitHub auth via Cloudflare Workers)
- **GitHub Actions** — auto-rebuilds and redeploys on every commit to `main`
- **Web3Forms** — contact form submissions
- **cal.com** — booking embed
- **Google Analytics 4** — traffic analytics (cookie-gated)

## Folder structure

- `src/pages/` — route-level pages (index, links, privacy, thank-you, 404, 500)
- `src/layouts/` — shared page shell
- `src/components/nb/` — UI components for the neo-brutalist design
- `src/content/` — Astro Content Collections schema (`content.config.ts`)
- `src/data/` — content files edited via Sveltia CMS
  - `home.json` — hero, stats, and section copy
  - `portfolio/` — one JSON file per portfolio item
  - `services/` — one JSON file per service offering
  - `testimonials.json` — client testimonials
  - `categories.json` — portfolio filter categories
  - `brandLogos/` — brand partner logos
  - `process/` — how-I-work steps
- `src/styles/` — design tokens and global styles
- `public/media/` — media assets (replace placeholders with real content via Sveltia)
- `public/admin/` — Sveltia CMS configuration
- `docs/` — editor guides for content updates

## Editing content

All content is managed through Sveltia CMS at `https://bbcre8s.com/admin`. Log in with your GitHub account. Changes commit directly to `main` and the site rebuilds automatically within ~1 minute.

For step-by-step instructions see `docs/CONTENT_EDITOR_GUIDE.md` and `docs/QUICK_UPDATE_CHECKLIST.md`.

## Run locally

```
npm install
npm run dev
```

## Notes

- Media assets in `public/media/` are placeholders — replace with real images and videos via the CMS or direct commit.
- Off-site links (Fiverr, Upwork, Link Hub) are managed in `src/data/` via the CMS.
