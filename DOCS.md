# Documentation index

A routing map from each document to the part of the project it is the source of
truth for. Before completing a change, find the row(s) whose subject your change
touched and update those documents **in the same change** — stale docs are defects.
When you add or remove a document, update this index too.

| Document | Source of truth for |
|---|---|
| [README.md](README.md) | Project overview: tech stack, folder structure, editing entry point, local dev setup, and links to the editor guides |
| [docs/CONTENT_EDITOR_GUIDE.md](docs/CONTENT_EDITOR_GUIDE.md) | Full CMS editing reference for the non-technical editor: what each collection contains, how every common task is done, content rules, media conventions, and troubleshooting steps |
| [docs/QUICK_UPDATE_CHECKLIST.md](docs/QUICK_UPDATE_CHECKLIST.md) | Step-by-step task checklists for the most frequent content edits (add/replace/hide portfolio clips, testimonials, services, brand logos) |
| [src/data/README.md](src/data/README.md) | Data file layout and editing rules for `src/data/`: folder-per-collection structure, `order`/`visible` conventions, category-reference rules, media storage convention (YouTube IDs vs. in-repo assets), and what happens on a bad edit |
| [public/media/README.md](public/media/README.md) | Media placeholder conventions for `public/media/`: subfolder purposes (brand, headshots, portfolio), target dimensions, and where CMS-uploaded files land |
