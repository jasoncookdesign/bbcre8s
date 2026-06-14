# Editing bbcre8s content

All the words, numbers, videos, and logos on bbcre8s.com live in the JSON files
in this folder — **not** in the page code. Edit these files to change the site.
The shape of each file is enforced by `src/content.config.ts`: if an edit is
invalid (a missing field, a typo'd category, the wrong kind of value), the build
**fails on purpose** and the live site stays on its last good version. You can't
silently break it.

> **Sveltia CMS (INI-068)** is layered on top of these files — you can edit them
> through the friendly editing interface at `bbcre8s.com/admin` instead of by
> hand. The files below are the durable source of truth either way.

## File layout

Most sections use **one JSON file per entry** inside a named subfolder. Adding
an item means adding a file; removing one means deleting the file. The filename
becomes the item's ID (e.g. `categories/travel.json` → the Travel category).

| Folder / File | Site section | Notes |
|---|---|---|
| `home.json` | Hero + Stats | Singleton — one file, edited directly |
| `categories/` | Portfolio filter chips | One `.json` per category |
| `portfolio/` | Portfolio reels | One `.json` per reel |
| `brandLogos/` | "Trusted By" logos | One `.json` per brand |
| `testimonials/` | Testimonials | One `.json` per quote |
| `services/` | Services | One `.json` per service |
| `process/` | Process steps | One `.json` per step |

## Rules that apply everywhere

- **`order`** sets the position within a section (lowest = first). Leave gaps
  (10, 20, 30…) so you can slot something in between later without renumbering.
- **`visible`** (`true` / `false`) shows or hides an item without deleting it.
  Testimonials and brand logos start `false` — flip to `true` once they're real
  and approved.
- The filename is the item's **ID** (e.g. `categories/travel.json` → ID `travel`).
  Portfolio reels reference a category by its ID — rename a category file and the
  build breaks until you update every reel that pointed to it.
- Keep the quotes `"like this"` and the commas exactly as shown. Every value in
  quotes is text; `true`/`false` and numbers have no quotes.

## Categories (the easy-to-change part)

Each category is its own file inside `categories/`. To rename a category, change
its `label` (the display text) — but leave the **filename** alone since portfolio
reels reference the filename as the category ID. To reorder, change `order`. To
add a category, create a new `.json` file (or use the CMS). **If you remove a
category file, first reassign any portfolio reels that point to it** — a reel
pointing at a missing category stops the build (by design).

## Media convention (important)

The site does **not** host large video files. Follow this convention:

- **Portfolio videos → YouTube.** Upload the reel to YouTube (unlisted is fine),
  copy the video id (the part after `watch?v=`), and put it in the item's
  `video` block as `{ "provider": "youtube", "id": "<that id>", "caption": "…" }`.
  Storing the *id* (not a full link) means we can switch video hosts later
  without re-editing every item.
- **Images and logos → in the repo.** Add image files under `src/assets/` and
  reference them by path (e.g. `poster`, brand-logo `src`). Name them clearly.
- **Hero background video → one small in-repo MP4.** The only video file kept in
  the repo is the optional hero loop. Keep it short and well-compressed (well
  under 100 MB; the whole site must stay under ~1 GB). Reference it with
  `{ "provider": "mp4", "id": "<path under src/assets>", "caption": "…" }`.
- `vimeo` is also supported as a provider if a clip lives there instead.

## After you edit

Commit and push the changed file(s) to `main`. A GitHub Action rebuilds the site
and redeploys it automatically — no separate build step on your side. If the
Action shows a red ✗, the edit was invalid; open it to see which file and field,
fix it, and push again. The live site is untouched until a build passes.
