# bbcre8s UGC Portfolio Foundation

A lightweight Astro foundation for a high-conversion, video-first portfolio site.

## Why this architecture

- Astro keeps runtime overhead low for a mostly content-driven marketing site.
- Route pages are thin and composed from reusable sections.
- Structured content lives in TypeScript files for easy manual curation.
- No CMS/database/admin complexity at this stage.

## Folder structure

- src/pages/: route-level pages
- src/layouts/: shared page shell
- src/components/: reusable UI blocks
  - nav/: site header and footer
  - portfolio/: portfolio-specific card
  - sections/: reusable page sections (hero, featured work, CTA, etc.)
- src/content/: typed content and curation controls
- src/styles/: design tokens and global styles
- public/media/: manually managed media assets

## Manual curation workflow

- Add/edit portfolio entries in src/content/portfolio.ts
- Set featured items with the featured boolean
- Control portfolio ordering with sortOrder values
- Add/edit package details in src/content/services.ts
- Update Fiverr, Upwork, and Link Hub destinations in src/content/site.ts
- Use the editor docs in docs/CONTENT_EDITOR_GUIDE.md and docs/QUICK_UPDATE_CHECKLIST.md for step-by-step updates

## Run locally

1. npm install
2. npm run dev

## Notes

- Current media assets are placeholders and should be replaced with real optimized images/videos.
- Off-site conversion links are centralized in src/content/site.ts.
