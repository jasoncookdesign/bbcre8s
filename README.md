# bbcre8s — Bella B Creates

A video-first UGC portfolio site built on Astro and deployed to GitHub Pages.

## Stack

- **Astro** — static site generator
- **Sveltia CMS** — browser-based content editor at `/admin` (GitHub auth via Cloudflare Workers)
- **GitHub Actions** — `validate.yml` runs the tests and a full build on every pull request; `deploy-pages.yml` rebuilds and redeploys on every commit to `main`
- **Web3Forms** — contact form submissions
- **cal.com** — booking embed
- **Google Analytics 4** — traffic analytics (cookie-gated)

## Folder structure

- `src/pages/` — route-level pages (index, links, privacy, thank-you, 404, 500)
- `src/layouts/` — shared page shell
- `src/components/nb/` — UI components for the neo-brutalist design
- `src/content.config.ts` — Astro Content Collections schema (the data contract for `src/data/`)
- `src/content/` — site config (`site.ts`, including social links) and content helpers (`video.ts`)
- `src/data/` — content files edited via Sveltia CMS
  - `home.json` — hero (including the optional showreel video), stats, and section copy
  - `portfolio/` — one JSON file per portfolio item
  - `services/` — one JSON file per service offering
  - `testimonials/` — one JSON file per client testimonial
  - `categories/` — one JSON file per portfolio filter category
  - `brandLogos/` — brand partner logos
  - `process/` — how-I-work steps
- `src/styles/` — design tokens and global styles
- `public/media/` — media assets; CMS image uploads land in `public/media/uploads/`
- `public/admin/` — Sveltia CMS configuration
- `tests/` — tests for content helpers and for the built home page (filter chips, hero)
- `.github/workflows/` — validate (pull requests) and deploy (`main`)
- `docs/` — editor guides for content updates

## Editing content

All content is managed through Sveltia CMS at `https://bbcre8s.com/admin`. Log in with your GitHub account. Each save opens a pull request (editorial workflow); clicking **Publish Entry** in the CMS merges it to `main`, and the site rebuilds automatically within ~1 minute. `main` requires the `validate` check to pass before anything merges. The login token needs Contents and Pull requests read/write access to the repository.

For step-by-step instructions see `docs/CONTENT_EDITOR_GUIDE.md` and `docs/QUICK_UPDATE_CHECKLIST.md`.

## Run locally

```
npm install
npm run dev
```

Run the tests with `npm test`. It builds the site first, then runs Node's built-in test runner over `tests/` (some tests read the built `dist/` output).

## Notes

- Portfolio reels marked `placeholder` show a branded placeholder tile; mark a reel `ready` to show its YouTube thumbnail. With no hero showreel set, the hero shows a plain dark image and the Watch Showreel button is hidden.
- Reels reference a category by its slug; a reel naming a category that does not exist fails the build.
- Social profile links (Instagram, TikTok, YouTube) are set in `src/content/site.ts` and feed the footer and `/links`.
