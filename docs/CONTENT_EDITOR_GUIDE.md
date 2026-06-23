# Content Editor Guide

All site content is managed through **Sveltia CMS** — no code editing required.

## Getting Started

1. Go to **https://bbcre8s.com/admin**
2. Log in with your GitHub account (use the same account that has access to the `jasoncookdesign/bbcre8s` repository)
3. Make your changes — they save as commits directly to the repo
4. The site rebuilds automatically within about 1 minute

---

## What You Can Edit

### Hero & Stats (Home)
Controls the top of the page: your eyebrow tagline, headline, subhead, outcome statement, CTA button labels, and the stats band (based-in, industries, experience, availability). Also controls the showreel YouTube video ID.

### Portfolio
One entry per video clip. Each entry has:
- **title** — clip title shown in the grid
- **category** — must match one of your category entries (e.g. `travel`, `events`, `lifestyle`)
- **video** — YouTube video ID and a caption
- **order** — controls sort position (lower numbers appear first; use steps of 10)
- **visible** — show or hide this clip on the live site
- **featured** / **featuredOrder** — promotes the clip to the featured section at the top; `featuredOrder` controls which position (1 = first)
- **status** — `placeholder` while the clip is stand-in content; update to reflect real work when ready

### Services
One entry per service offering. Each has a title, blurb, icon, order, and visible flag.

### Testimonials
Client quotes. Each has a quote, attribution, and a visible flag. Set `visible: false` to keep a quote in the system without showing it yet.

### Brand Logos
Logos shown in the brand strip. Each has a name, order, and visible flag.

### Process
How-I-work steps shown in the process section.

---

## Common Tasks

### Add a new portfolio clip
1. Open **Portfolio** in the CMS sidebar
2. Click **New entry**
3. Fill in all fields — paste the YouTube video ID (the part after `?v=` in the URL)
4. Set `visible: true` when ready to publish
5. Save — the site rebuilds in ~1 minute

### Feature a clip on the homepage
- Set `featured: true` and assign a `featuredOrder` (1–4)
- Only `visible: true` entries will actually appear

### Hide a clip without deleting it
- Set `visible: false`
- The entry stays in the CMS and can be re-enabled any time

### Reorder clips
- Change the `order` value on each entry
- Lower numbers appear first
- Use steps of 10 (10, 20, 30…) so it's easy to insert something between two items later

### Replace a placeholder clip
- Open the entry in Portfolio
- Update the video ID, title, and caption with the real content
- Change `status` from `placeholder` to `ready`

### Update your booking or contact links
These are configured in `src/content/site.ts` in the repository — not editable in the CMS. Ask your developer to update Fiverr, Upwork, cal.com, or social links there.

---

## Content Rules

- Every entry needs a unique filename/ID — the CMS handles this automatically
- `order` values control display order; keep gaps between them (10, 20, 30)
- `visible: false` hides an entry from the live site without deleting it
- Invalid content (missing required field, wrong type) will fail the build — the live site stays on its last good version until the issue is fixed
- Media files (images, videos) are served via YouTube — no file uploads are needed for video content

---

## Uploading Media

Images and other media can be uploaded directly in the CMS using the **Media** tab. Files land in `src/assets/` in the repository and are available to reference in content entries.

Keep images lightweight — optimize before uploading. The site is designed around YouTube for video, so direct video file uploads are not needed.

---

## If Something Looks Wrong

- Check that `visible` is set to `true` on the entry
- Check that a required field isn't blank — a missing field will cause the build to fail
- Check the **Actions** tab in the GitHub repository (`https://github.com/jasoncookdesign/bbcre8s/actions`) to see if a recent build failed and why
