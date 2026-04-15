# Quick Update Checklist

Use this list for the most common site updates.

## Add a New Portfolio Clip

- add the poster image to public/media/portfolio
- duplicate an item in src/content/portfolio.ts
- update id, title, slug, status, mediaType, videoUrl, poster, useCase, visibility, and sortOrder
- add embedUrl only when needed
- set featured and featuredOrder only if it should appear in homepage highlights and is ready

## Reorder Portfolio Items

- open src/content/portfolio.ts
- change sortOrder values
- lower numbers show first

## Hide Old Work

- set visibility to hidden
- leave the item in the file if you might use it later

## Update Packages

- open src/content/services.ts
- edit headlines, deliverables, turnaround, and order

## Update Fiverr or Upwork

- open src/content/site.ts
- replace the href values in platformLinks

## Add a Link Hub Destination

- open src/content/site.ts
- duplicate an item in socialLinks or futureHubLinks
- update the label, description, and sortOrder

## Best Practices

- keep sortOrder in steps of 10
- keep ids unique
- use placeholder or draft until proof is approved
- switch to ready only when the content is truly live-ready
- preview big changes before publishing
