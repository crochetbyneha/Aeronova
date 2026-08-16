# AeroNova — Interactive Aircraft Showcase

A modern, single-brand aviation website: hover the plane to x-ray into the
cabin, tap any part to inquire on WhatsApp, shop packages/merch sorted by
price, track deliveries via NCM, buy via Pathao, and chat with an AI
assistant that knows your live catalog.

No build tools, no framework — plain HTML/CSS/JS, so it's easy to read,
easy to host (GitHub Pages), and easy to hand to anyone to maintain.

## File map

```
index.html      → homepage (hero x-ray viewer, shop, help, contact)
track.html      → order tracking page (NCM)
styles.css      → all design/colors/spacing (the "look")
script.js       → all interactivity (the "behavior")
products.js     → ⭐ THE FILE YOU EDIT DAY-TO-DAY (products, prices, contact info)
api/chat.js     → serverless function that powers the AI chat widget
```

## Running it locally

You don't need Node for the site itself — just open `index.html` in a
browser. For the AI widget to work locally too:

```bash
npm install -g vercel
vercel dev
```

## Adding / editing products — the simple way

Open **`products.js`**. Each product is one block:

```js
{
  id: "p9",
  name: "Your New Item",
  category: "Pilot Gear",
  price: 129,                 // number only, used for sorting into price rows
  image: "https://...",       // any image URL
  specs: "Short one-line description",
  badge: "New",               // optional — leave out if not needed
},
```

Copy an existing block inside the `PRODUCTS` array, paste it, edit the
values, save. Refresh the page — it's live. No rebuild step.

To change price groupings, edit the `PRICE_TIERS` array in the same file.

## Changing the plane's hoverable hotspots

Also in `products.js`, edit the `HOTSPOTS` array. `left`/`top` are
percentages across the hero image (0–100), so you can nudge a hotspot's
position without touching any CSS.

## Restyling the whole site (e.g. a different look)

Every color, font, and radius the site uses lives at the top of
**`styles.css`** inside `:root { ... }`. Change those ~10 values and the
entire site reskins — buttons, cards, header, everything reference these
tokens. For example, to move from the navy/amber aviation look toward a
softer, warm craft-store look (like crochet.com), you'd swap:

```css
--navy-950: #3b2f4a;   /* deep plum instead of navy */
--amber-500: #e8825a;  /* terracotta instead of amber */
--cloud-100: #faf6f0;  /* warm cream instead of cool grey */
--font-display: "Fraunces", serif;
```

## Contact & delivery integrations

All set in `products.js` → `SITE_CONFIG`:

| Setting | What it does |
|---|---|
| `whatsappNumber` | Every "WhatsApp" button and the bottom-dock icon use this |
| `email` / `gmail` | Powers the "Email us" link and Gmail dock icon |
| `instagram` / `tiktok` | Bottom-dock + contact card links |
| `pathaoMerchantUrl` | Where "Buy · Pathao" buttons send customers. Pathao doesn't expose a public checkout API for general merchants — this should point at your actual Pathao store/merchant checkout link. If you get access to Pathao's Merchant API, swap this button in `script.js` (`productCard()`) for a real API call. |
| `ncmTrackingUrl` | The official NCM tracker, opened from the Track Order page. The on-page status stepper is a visual placeholder — for live status pulled automatically, NCM's courier API credentials would need to be added server-side (same pattern as the AI proxy below), since NCM also doesn't offer a public client-side API. |

## Turning on the AI assistant

The chat bubble (bottom right) calls `/api/chat`, a serverless function
that keeps your Anthropic API key on the server — never in the browser.

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo (also works on Netlify with an equivalent Functions setup).
3. In the project's **Settings → Environment Variables**, add:
   `ANTHROPIC_API_KEY = sk-ant-...`
4. Deploy. The widget starts working immediately — no other code changes.

The assistant is automatically fed your current `PRODUCTS` and `HOTSPOTS`
on every message, so it always quotes accurate prices and specs, and it's
told to hand off to WhatsApp when it's unsure.

If you only deploy to GitHub Pages (static hosting, no server functions),
the rest of the site works fine, but the AI widget will show a friendly
fallback message pointing people to WhatsApp instead — deploy `api/chat.js`
on Vercel/Netlify alongside it to enable AI.

## Deploying

**Static parts (fastest):** GitHub → repo Settings → Pages → deploy from
`main` branch. Your site is live at `https://yourname.github.io/reponame`.

**With AI enabled:** deploy the whole repo to Vercel instead (it serves
both the static files and `/api/chat` from one project) — same repo, one
click, nothing to reconfigure.

## Real photos

Right now the hero and product images are placeholder stock photos so the
site works out of the box. Swap `heroExteriorImage` / `heroInteriorImage`
in `products.js` for your own aircraft's exterior shot and a cutaway/cabin
photo — the x-ray hover effect works with any two images of the same
aircraft from the same angle.
