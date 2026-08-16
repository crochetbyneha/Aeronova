# Crochet by Neha — website

Static site (no build step). Ready to host on GitHub Pages at crochetbyneha.github.io.in

n





## Put this on GitHub Pages
1. Upload every file in this folder to your `crochetbyneha.github.io` repo root, keeping the `assets/` folder intact.
2. Settings → Pages → Source → Deploy from a branch → `main` / root.
3. Visit https://crochetbyneha.github.io/alalallala
## Editing content
Everything — prices, photos, descriptions, colourways, WhatsApp number, Pathao link, reviews — lives in `assets/js/products.js`.

- Add/edit a product: edit the `PRODUCTS` array. Each product has a `colors` array — add/remove `{ name, hex }` entries to change its colour customization options.
- Mark a product as a best seller: set `trending: true` — it will show on the homepage strip and the Trending page.
- Add a customer review: add an entry to the `REVIEWS` array — shows on the homepage strip and the full Reviews page.
- Store info (WhatsApp, hotline, Pathao link, socials) is set once in the `STORE` object at the top of the file.

## Pages
- `index.html` — home (hero, trending strip, featured pieces, about, reviews strip)
- `shop.html` — full catalog with category + trending filters, colour swatches per card
- `trending.html` — ranked best-sellers page
- `product.html?id=...` — single product detail with full colour customization picker
- `track.html` — Pathao/NCM order tracking preview
- `reviews.html` — full customer reviews page
- `contact.html` — WhatsApp / hotline / Pathao / socials / return & refund policy

## Notes
- Logo: `assets/img/logo.jpg`, used as the header brand mark and browser tab favicon.
- A floating WhatsApp button appears on every page (added in `assets/js/include.js`).
- No refund / no exchange policy is on `contact.html#policies`, styled to match the site rather than plain blue text.
