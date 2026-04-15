# Content Editor Guide

This site is designed to be updated by editing a few small content files. No CMS is required.

## The Main Files You Will Update

- src/content/portfolio.ts — add, hide, feature, or reorder portfolio videos
- src/content/home.ts — control the hero reel slot and switch from simulated preview to a real video later
- src/content/services.ts — update package names, deliverables, and order
- src/content/site.ts — update Fiverr and Upwork links, social links, Link Hub destinations, and the direct intake fallback
- public/media/portfolio/ — add new poster images or thumbnails

## Typical Update Flow

1. Add or replace the poster image in public/media/portfolio.
2. Open the matching content file in src/content.
3. Duplicate a similar item and edit the text values.
4. Save the file and preview the site locally if needed.
5. If the update looks right, keep the new entry public.

## How to Add a New Portfolio Video

Open src/content/portfolio.ts and find the portfolioItems list.

To add a new video:
- duplicate an existing item that looks similar
- give it a new id
- update the title and slug
- set status to placeholder, draft, or ready
- choose mediaType as local, youtube, or vimeo
- paste the video URL into videoUrl
- optionally add embedUrl if you need a custom embed source
- point poster to the correct image in public/media/portfolio
- update duration, description, goal, and style
- choose the correct useCase group
- set visibility to public
- choose a sortOrder value such as 90, 100, or 110

## Content State Rules

Use these states consistently:
- placeholder — visible for layout validation, but not treated as proof on high-trust homepage sections
- draft — partially prepared content that can stay visible in the portfolio without being promoted as final proof
- ready — approved for featured placement and trust surfaces

Only ready items can populate homepage featured proof or ready-testimonial areas.

## How to Mark an Item as Featured

In src/content/portfolio.ts:
- set featured to true
- set featuredOrder to a small number like 1, 2, 3, or 4
- make sure status is set to ready if you want it to appear in homepage proof sections

Lower featuredOrder numbers appear first.

If an item should no longer be featured, remove featured or set it to false.

## How to Assign a Use-Case Group

Use one of these exact labels:
- Paid Ads
- Product Demos
- Lifestyle Integrations
- Tech Walkthroughs

The useCase value controls which section the clip appears in on the portfolio page.

## How to Control Sort Order

Use the sortOrder number on any portfolio item, service package, or link.

Recommended rule:
- leave gaps between numbers
- use 10, 20, 30, 40 instead of 1, 2, 3, 4

This makes reordering easier later.

## How to Hide or Remove Outdated Work

For portfolio items and services:
- set visibility to hidden if you want to keep the content in the file but remove it from the live site
- delete the object only if you no longer need it at all

Use hidden for temporary removals.

## How to Update Service Packages

Open src/content/services.ts.

You can:
- change the package headline
- update who the package is best for
- change turnaround time
- add or remove deliverables
- reorder packages with sortOrder
- hide a package with visibility: hidden

## How to Update Fiverr and Upwork Links

Open src/content/site.ts and update the href values in platformLinks.

These links automatically power:
- the main hire buttons
- the sticky hire bar
- the footer actions
- the Link Hub page

## How to Add Future Platforms to the Link Hub

Open src/content/site.ts.

You can add:
- another platform to platformLinks if it should act like a main hiring destination
- another profile to socialLinks if it is mainly for social proof
- another item to futureHubLinks for optional destinations such as a media kit or booking page

Duplicate a similar item and update:
- id
- label
- description
- href if needed
- sortOrder
- visibility

## Content Conventions to Follow

- Keep titles short and scannable
- Keep descriptions practical and buyer-facing
- Use unique ids for every item
- Keep poster images lightweight and clear on mobile
- Avoid long paragraphs in package or portfolio descriptions
- Keep spelling and capitalization consistent across similar items

## Safe Editing Tips

- Change one item at a time
- Save after each change
- If you are unsure, duplicate a similar entry instead of writing from scratch
- Use visibility: hidden instead of deleting content you may want later
