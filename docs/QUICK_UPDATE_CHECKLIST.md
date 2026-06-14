# Quick Update Checklist

Go to **https://bbcre8s.com/admin** → log in with GitHub → make changes → site rebuilds in ~1 minute.

---

## Add a New Portfolio Clip

- [ ] Open **Portfolio** → New entry
- [ ] Set title, category, YouTube video ID, and caption
- [ ] Set `order` (lower = earlier in grid; use steps of 10)
- [ ] Set `visible: true` when ready to go live
- [ ] Set `featured: true` + `featuredOrder` (1–4) if it should appear in the featured section

---

## Replace a Placeholder Clip

- [ ] Open the entry in **Portfolio**
- [ ] Update the YouTube video ID, title, and caption
- [ ] Update `status` to reflect real content
- [ ] Confirm `visible: true`

---

## Feature a Clip on the Homepage

- [ ] Open the entry in **Portfolio**
- [ ] Set `featured: true`
- [ ] Set `featuredOrder` to 1, 2, 3, or 4 (lower = earlier)
- [ ] Confirm `visible: true`

---

## Hide a Clip

- [ ] Open the entry in **Portfolio**
- [ ] Set `visible: false`
- [ ] Save — clip disappears from the site but stays in the CMS

---

## Reorder Portfolio Clips

- [ ] Open each entry and update its `order` value
- [ ] Lower numbers appear first
- [ ] Keep gaps between values (10, 20, 30…)

---

## Add or Edit a Testimonial

- [ ] Open **Testimonials**
- [ ] Add a new entry or edit an existing one
- [ ] Set `visible: true` only for approved quotes

---

## Update Services

- [ ] Open **Services**
- [ ] Edit the title or blurb on any entry
- [ ] Use `visible: false` to hide a service without deleting it
- [ ] Adjust `order` to reorder

---

## Add a Brand Logo

- [ ] Open **Brand Logos**
- [ ] New entry → add name and order
- [ ] Upload the logo image in the **Media** tab and reference it
- [ ] Set `visible: true`

---

## If the Site Doesn't Update

- Wait 2–3 minutes (builds occasionally take longer)
- Check https://github.com/jasoncookdesign/bbcre8s/actions for build errors
- A missing required field will cause the build to fail — the live site stays on its last good version
