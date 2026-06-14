/*
  ============================================================================
  bbcre8s — Content Collections (data contract)   [INI-059 Phase 2.5]
  ============================================================================
  This file is the single source of truth for the SHAPE of every
  client-editable surface on bbcre8s.com. The actual CONTENT lives in the
  JSON data files under `src/data/` (see src/data/README.md).

  Why this exists (the maintainability driver):
  - The client edits content, not markup. Every editable surface is a data
    file validated by a Zod schema here.
  - Invalid content (missing field, wrong type, unknown category) FAILS the
    build with a readable error. A non-developer can't silently break the
    live site — a bad edit stops at CI, the site stays on its last good build.
  - The editing TOOL (INI-068, Sveltia CMS) is layered on top of this
    contract later. The contract is the durable asset; the tool is swappable.

  Mechanism: Astro 5 Content Layer. `astro build` (and `astro sync`) load
  every collection through these schemas and abort on the first violation.

  Sections (one-page site, see knowledge/clients/bella-b-creates/page-inventory):
    1 Hero + 2 Stats band  -> `home` singleton
    3 Featured portfolio   -> `categories` (filters) + `portfolio` (reels)
    4 Brand logos          -> `brandLogos`
    5 Testimonials         -> `testimonials`
    6 Services             -> `services`
    7 Process              -> `process`
    (8 Contact is config in src/content/site.ts, not a per-item collection)
  ============================================================================
*/

import { defineCollection, reference, z } from "astro:content";
import { file } from "astro/loaders";

/* ---------------------------------------------------------------------------
   Shared building blocks
--------------------------------------------------------------------------- */

// Provider-agnostic video reference. Storing { provider, id, caption } (NOT a
// full URL) is what lets the host change — YouTube today, Cloudflare/self-host
// later — without touching components or re-authoring captions. `id` is the
// provider's identifier (a YouTube/Vimeo video id, or an in-repo file path for
// `mp4`).
const video = z
  .object({
    provider: z.enum(["youtube", "vimeo", "mp4"]),
    id: z.string().min(1),
    caption: z.string().min(1)
  })
  .strict();

const cta = z
  .object({
    label: z.string().min(1),
    href: z.string().min(1)
  })
  .strict();

const labelValue = z
  .object({
    label: z.string().min(1),
    value: z.string().min(1)
  })
  .strict();

/* ---------------------------------------------------------------------------
   1 + 2  Hero & Stats band  (singleton)
   Data: src/data/home.json  ->  { "main": { ... } }
--------------------------------------------------------------------------- */
const home = defineCollection({
  loader: file("src/data/home.json"),
  schema: z
    .object({
      hero: z
        .object({
          eyebrow: z.string().min(1),
          title: z.string().min(1),
          subhead: z.string().min(1),
          outcome: z.string().min(1),
          primaryCta: cta,
          secondaryCta: cta,
          showreelLabel: z.string().min(1),
          // Optional hero background reel (in-repo MP4 by convention, kept
          // well under the 100MB file / 1GB site limit). Omit to use a poster.
          reel: video.optional()
        })
        .strict(),
      stats: z
        .object({
          // §2 "numbers instead of a bio" — the four bio stats.
          bioStats: z.array(labelValue).min(1),
          // Second register: client-supplied performance metrics (proof).
          // May be empty until the client supplies real figures.
          metrics: z.array(labelValue)
        })
        .strict()
    })
    .strict()
});

/* ---------------------------------------------------------------------------
   3  Portfolio categories (filter chips)  — the client's #1 "must be easy to
   change" surface. Add / remove / reorder by editing entries + `order`.
   Data: src/data/categories.json (array; each item needs an `id`)
--------------------------------------------------------------------------- */
const categories = defineCollection({
  loader: file("src/data/categories.json"),
  schema: z
    .object({
      // `id` is supplied by the file() loader from each entry's id field and
      // is kept in the data, so it must be declared for .strict() to accept it.
      id: z.string(),
      label: z.string().min(1), // shown on the filter chip
      summary: z.string().min(1), // short line describing the category
      anchorId: z.string().min(1), // stable in-page anchor / filter key
      order: z.number().int(), // ascending; steps of 10 recommended
      visible: z.boolean().default(true)
    })
    .strict()
});

/* ---------------------------------------------------------------------------
   3  Featured portfolio reels
   Data: src/data/portfolio.json
   `category` is a reference() to a `categories` entry id — an unknown or
   misspelled category FAILS the build (you can't tag a reel to a category
   that doesn't exist).
--------------------------------------------------------------------------- */
const portfolio = defineCollection({
  loader: file("src/data/portfolio.json"),
  schema: z
    .object({
      id: z.string(),
      title: z.string().min(1),
      category: reference("categories"),
      video,
      poster: z.string().optional(), // in-repo image path; falls back if omitted
      order: z.number().int(),
      featured: z.boolean().default(false),
      featuredOrder: z.number().int().optional(),
      status: z.enum(["placeholder", "ready"]).default("placeholder"),
      visible: z.boolean().default(true)
    })
    .strict()
});

/* ---------------------------------------------------------------------------
   4  Brand logos ("Trusted By")
   Data: src/data/brandLogos.json
--------------------------------------------------------------------------- */
const brandLogos = defineCollection({
  loader: file("src/data/brandLogos.json"),
  schema: z
    .object({
      id: z.string(),
      name: z.string().min(1), // brand name (also the logo alt text)
      src: z.string().optional(), // in-repo logo asset path; wordmark fallback if omitted
      url: z.string().url().optional(),
      order: z.number().int(),
      visible: z.boolean().default(true)
    })
    .strict()
});

/* ---------------------------------------------------------------------------
   5  Testimonials
   Data: src/data/testimonials.json
--------------------------------------------------------------------------- */
const testimonials = defineCollection({
  loader: file("src/data/testimonials.json"),
  schema: z
    .object({
      id: z.string(),
      quote: z.string().min(1),
      attribution: z.string().min(1),
      context: z.string().optional(), // role / brand / campaign
      rating: z.number().int().min(1).max(5).optional(),
      order: z.number().int(),
      // Hidden by default: a placeholder testimonial must be explicitly turned
      // on once a real, approved quote replaces it.
      visible: z.boolean().default(false)
    })
    .strict()
});

/* ---------------------------------------------------------------------------
   6  Services
   Data: src/data/services.json
--------------------------------------------------------------------------- */
const services = defineCollection({
  loader: file("src/data/services.json"),
  schema: z
    .object({
      id: z.string(),
      title: z.string().min(1),
      blurb: z.string().min(1),
      icon: z.string().optional(), // icon token / in-repo asset for the square block
      order: z.number().int(),
      visible: z.boolean().default(true)
    })
    .strict()
});

/* ---------------------------------------------------------------------------
   7  Process
   Data: src/data/process.json
--------------------------------------------------------------------------- */
const process = defineCollection({
  loader: file("src/data/process.json"),
  schema: z
    .object({
      id: z.string(),
      title: z.string().min(1),
      detail: z.string().min(1),
      order: z.number().int()
    })
    .strict()
});

export const collections = {
  home,
  categories,
  portfolio,
  brandLogos,
  testimonials,
  services,
  process
};
