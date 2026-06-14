# Editing bbcre8s content

All the words, numbers, videos, and logos on bbcre8s.com live in the JSON files
in this folder — **not** in the page code. Edit these files to change the site.
The shape of each file is enforced by `src/content.config.ts`: if an edit is
invalid (a missing field, a typo'd category, the wrong kind of value), the build
**fails on purpose** and the live site stays on its last good version. You can't
silently break it.

> A simple editing tool (INI-068, Sveltia CMS) will be layered on top of these
> files later so you can edit them in a friendly screen instead of by hand. The
> files below are the durable source of truth either way.

## The files

| File | Site section | What it controls |
|---|---|---|
| `home.json` | Hero + Stats band | Headline, subhead, buttons; the four "Based In / Industries / Experience / Available" stats; performance metrics |
| `categories.json` | Portfolio filters | The portfolio category chips (Travel, Events, Lifestyle, Wellness, Technology) |
| `portfolio.json` | Featured portfolio | The reels, their captions, and which category each belongs to |
| `brandLogos.json` | Brand logos | The "Trusted By" logo strip |
| `testimonials.json` | Testimonials | Client and brand quotes |
| `services.json` | Services | The service cards |
| `process.json` | Process | The numbered "how we work" steps |

## Rules that apply everywhere

- **`order`** sets the position within a section (lowest first). Leave gaps
  (10, 20, 30…) so you can slot something in between later without renumbering.
- **`visible`** (`true` / `false`) shows or hides an item without deleting it.
  Testimonials and brand logos start `false` — flip to `true` once they're real
  and approved.
- **`id`** must be unique within a file and is best left alone once set.
- Keep the quotes `"like this"` and the commas exactly as shown. Every value in
  quotes is text; `true`/`false` and numbers have no quotes.

## Categories (the easy-to-change part)

`categories.json` is built to be reordered, renamed, added to, and removed from.
To rename a category, change its `label`. To reorder, change `order`. To add one,
copy an existing block, give it a new `id` and `anchorId`, and set its `order`.
**If you remove a category, first move any portfolio items that point to it to a
different `category`** — a reel pointing at a category that no longer exists will
stop the build (by design).

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

Commit and push the changed file to `main`. A GitHub Action rebuilds the site
and redeploys it automatically — no separate build step on your side. If the
Action shows a red ✗, the edit was invalid; open it to see which file and field,
fix it, and push again. The live site is untouched until a build passes.
