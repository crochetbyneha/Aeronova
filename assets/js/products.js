/* ============================================================
   Crochet by Neha — product data & shared behaviour
   Edit prices/photos/text/colours here — every page reads from this file.
   ============================================================ */

const STORE = {
  brand: "Crochet by Neha",
  whatsappNumber: "9779763959028", // country code + number — edit if wrong
  hotline: "9769283027",
  whatsappDisplay: "+977 976-395-9028",
  hotlineDisplay: "+977 976-928-3027",
  pathao: "https://crochetbyneha.pathao.shop",
  tiktok: "https://www.tiktok.com/@crochetby.neha",
  instagram: "https://instagram.com/crochetby.neha",
  facebook: "https://facebook.com/crochetbyneha"
};

/* Each product can list its own available yarn colourways.
   name = shown on hover/label, hex = swatch colour */
const PRODUCTS = [
  {
    id: "sunflower-hairbun",
    name: "Sunflower Hairbun",
    category: "wearables",
    categoryLabel: "Wearables & Accessories",
    price: 350,
    original: 500,
    discount: 30,
    image: "assets/img/sunflower-hairbun.jpg",
    desc: "A crocheted sunflower clip with trailing stems, worn low behind loose hair.",
    long: "Two layered sunflower blooms in marigold thread, joined by a forest-green hair stick and finished with a pair of dangling flower charms. Slides in and holds a low bun or half-up style without a single pin.",
    trending: true,
    rating: 4.9,
    reviews: 38,
    colors: [
      { name: "Marigold & Forest", hex: "#E8A33D" },
      { name: "Blush & Sage", hex: "#E8A9B8" },
      { name: "Cream & Chocolate", hex: "#F3ECDD" },
      { name: "Lilac & Moss", hex: "#C6A7D9" }
    ]
  },
  {
    id: "crochet-shrug",
    name: "Crochet Shrug",
    category: "wearables",
    categoryLabel: "Wearables & Accessories",
    price: 1399,
    original: 2000,
    discount: 30,
    image: "assets/img/shrug.jpg",
    desc: "An open-mesh shrug finished with a hand-crocheted bow, light enough to layer over anything.",
    long: "A diamond-mesh shrug worked in soft cream cotton, cropped at the waist with dramatic bell sleeves. Finished with a dimensional crochet bow at the shoulder. Layers over camis, dresses, or swimwear.",
    trending: true,
    rating: 5.0,
    reviews: 52,
    colors: [
      { name: "Vanilla Cream", hex: "#F3ECDD" },
      { name: "Blush Pink", hex: "#F3B6C9" },
      { name: "Black", hex: "#2A2622" },
      { name: "Sage Green", hex: "#A9BFA0" }
    ]
  },
  {
    id: "scrunchies",
    name: "Scrunchies ",
    category: "wearables",
    categoryLabel: "Wearables & Accessories",
    price: 222,
    original: 350,
    discount: 37,
    image: "assets/img/scrunchies.jpg",
    desc: "A trio of textured scrunchies in teal, marigold, and blush — soft on the wrist, softer on the hair.",
    long: "Three ruffled scrunchies in a mixed colourway — teal and black, marigold, and blush and cream. Worked in a stretch-friendly stitch so they sit gently on hair without snagging.",
    trending: false,
    rating: 4.8,
    reviews: 21,
    colors: [
      { name: "Teal & Black", hex: "#1F8A8A" },
      { name: "Marigold", hex: "#E8A33D" },
      { name: "Blush & Cream", hex: "#F3B6C9" },
      { name: "Custom mix", hex: "#B23A3A" }
    ]
  },
  {
    id: "ocean-bag",
    name: "Crochet Ocean Bag",
    category: "bags",
    categoryLabel: "Bags",
    price: 2899,
    original: 3500,
    discount: 17,
    image: "assets/img/ocean-bag.jpg",
    desc: "A deep-navy shell bag with a ruffled ric-rac strap, starfish appliqués, and a hand-stitched jellyfish charm.",
    long: "A structured navy shoulder bag built from shell stitch, with a long ruffled strap trimmed in cream ric-rac. Decorated with two crochet starfish, seed pearls, and a dangling jellyfish charm. One-of-a-kind, made to order.",
    trending: true,
    rating: 5.0,
    reviews: 44,
    colors: [
      { name: "Deep Navy", hex: "#1B2A4A" },
      { name: "Seafoam", hex: "#7FC7C2" },
      { name: "Sunset Coral", hex: "#E8836A" },
      { name: "Cream", hex: "#F3ECDD" }
    ]
  },
  {
    id: "mesh-bag",
    name: "Mesh Bag",
    category: "bags",
    categoryLabel: "Bags",
    price: 1999,
    original: 3000,
    discount: 33,
    image: "assets/img/mesh-bag.jpg",
    desc: "An open-stitch pouch bag tied with satin-soft bows — roomy enough for the everyday essentials.",
    long: "A blush-pink pouch bag in a breezy open stitch, cinched with black bow ties along the strap. Roomy enough for your phone, lipstick, and cards — the everyday bag that still looks handmade.",
    trending: false,
    rating: 4.7,
    reviews: 19,
    colors: [
      { name: "Blush & Black", hex: "#F3B6C9" },
      { name: "Cream & Black", hex: "#F3ECDD" },
      { name: "Lilac & Cream", hex: "#C6A7D9" }
    ]
  },
  {
    id: "bird-keychain",
    name: "Cute Bird Keychain",
    category: "keychains",
    categoryLabel: "Keychains & Charms",
    price: 444,
    original: 599,
    discount: 26,
    image: "assets/img/bird-keychain.jpg",
    desc: "A tiny amigurumi bird in a red scarf, ready to ride along on your keys or bag.",
    long: "A rounded little bird, stitched in seafoam with a yellow beak and feet, wrapped in a red knit scarf with blushed cheeks. Attached to a sturdy keyring — tiny bird, big cuteness.",
    trending: true,
    rating: 4.9,
    reviews: 67,
    colors: [
      { name: "Seafoam Blue", hex: "#7FC7C2" },
      { name: "Marigold", hex: "#E8A33D" },
      { name: "Blush Pink", hex: "#F3B6C9" },
      { name: "Lilac", hex: "#C6A7D9" }
    ]
  },
  {
    id: "rolled-cake-keychain",
    name: "Mini Rolled Cake Keychain",
    category: "keychains",
    categoryLabel: "Keychains & Charms",
    price: 199,
    original: 399,
    discount: 50,
    image: "assets/img/rolled-cake-keychain.jpg",
    desc: "A miniature strawberry swiss-roll charm, stitched stitch by stitch, sweet enough to eat (please don't).",
    long: "A tightly coiled strawberry swiss-roll, worked in pink and cream with a red cherry topper. Sized to hang from a bag or keyring without adding bulk.",
    trending: true,
    rating: 4.8,
    reviews: 29,
    colors: [
      { name: "Strawberry Pink", hex: "#F3B6C9" },
      { name: "Chocolate Brown", hex: "#6B4A34" },
      { name: "Matcha Green", hex: "#A9BFA0" }
    ]
  },
  {
    id: "spiderman",
    name: "Crochet Spiderman",
    category: "keychains",
    categoryLabel: "Keychains & Charms",
    price: 699,
    original: 999,
    discount: 30,
    image: "assets/img/spiderman.jpg",
    desc: "A web-slinging car charm crocheted in classic red and black, ready to swing from your rearview mirror.",
    long: "A rearview-mirror hanger with a crocheted web canopy in white and a red-and-black masked head below. A fun, handmade way to dress up the dashboard.",
    trending: false,
    rating: 4.9,
    reviews: 15,
    colors: [
      { name: "Classic Red & Black", hex: "#B23A3A" },
      { name: "Symbiote Black", hex: "#2A2622" },
      { name: "Blue & Red", hex: "#1B2A4A" }
    ]
  },
  {
    id: "bouquet-blanket",
    name: "Rose Bouquet Blanket",
    category: "bouquets",
    categoryLabel: "Bouquets",
    price: 2999,
    original: 4000,
    discount: 25,
    image: "assets/img/bouquet-blanket.jpg",
    desc: "A hand-tied bouquet of crochet roses on a cream blanket base — a bouquet that never wilts.",
    long: "Dozens of individually crocheted roses in deep red, trailed across a folded cream blanket base with green vine trim. Doubles as a bouquet for gifting and a keepsake throw afterwards — a bouquet that never wilts.",
    trending: true,
    rating: 5.0,
    reviews: 33,
    colors: [
      { name: "Deep Red Roses", hex: "#B23A3A" },
      { name: "Blush Roses", hex: "#F3B6C9" },
      { name: "Sunset Orange Roses", hex: "#E8836A" },
      { name: "White Roses", hex: "#F3ECDD" }
    ]
  },
  {
    id: "sunflower-bouquet",
    name: "Sunflower Bouquet",
    category: "bouquets",
    categoryLabel: "Bouquets",
    price: 1999,
    original: 2222,
    discount: 10,
    image: "assets/img/sunflower-bouquet.jpg",
    desc: "A cheerful bunch of crochet sunflowers wrapped in burlap, made to be kept forever.",
    long: "Six full sunflower blooms in marigold and chocolate-brown thread, arranged on green crochet stems and wrapped in burlap with a tied bow. A sunflower bouquet that never needs water.",
    trending: false,
    rating: 4.9,
    reviews: 24,
    colors: [
      { name: "Marigold", hex: "#E8A33D" },
      { name: "Blush Mix", hex: "#F3B6C9" },
      { name: "Lavender Mix", hex: "#C6A7D9" }
    ]
  }
];

/* Testimonials shown on the homepage strip and the full Reviews page */
const REVIEWS = [
  { name: "Aastha R.", item: "Crochet Ocean Bag", rating: 5, text: "The starfish and jellyfish charm are so detailed — genuinely looks like something from a boutique, not a DM order. Worth the wait." },
  { name: "Priska T.", item: "Cute Bird Keychain", rating: 5, text: "Ordered two as gifts and Neha matched the scarf colour to what I asked for exactly. So soft and well stitched." },
  { name: "Sneha M.", item: "Rose Bouquet Blanket", rating: 5, text: "Gave this to my mum instead of real flowers and she cried a little. It's now folded on her bed as a throw." },
  { name: "Bibek S.", item: "Crochet Shrug", rating: 5, text: "Fits exactly like the photos, the bow detail is adorable in person. Shipped safely via Pathao with tracking updates the whole way." },
  { name: "Kriti P.", item: "Sunflower Hairbun", rating: 4, text: "Beautiful piece, holds my hair really well. Took a little longer than 3 weeks but Neha kept me updated the whole time." },
  { name: "Anmol G.", item: "Mesh Bag", rating: 5, text: "Custom-matched the bow colour to my outfit for a wedding and it turned out perfect. Compliments all night." }
];

function formatRs(n) {
  return "Rs. " + n.toLocaleString("en-IN");
}

function starString(rating) {
  const full = Math.round(rating);
  return "\u2605".repeat(full) + "\u2606".repeat(5 - full);
}

function whatsappOrderLink(product, colorName) {
  let msg;
  if (product) {
    msg = `Hi! I'd like to order the ${product.name} (${formatRs(product.price)}) from Crochet by Neha 🧶`;
    if (colorName) msg += ` — colourway: ${colorName}`;
  } else {
    msg = `Hi! I'd like to ask about your crochet pieces 🧶`;
  }
  return `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

function swatchesHTML(product, selectedIdx) {
  if (!product.colors || !product.colors.length) return "";
  selectedIdx = selectedIdx || 0;
  return `<div class="swatches" data-product="${product.id}">
    ${product.colors.map((c, i) => `
      <button type="button" class="swatch ${i === selectedIdx ? 'active' : ''}" style="background:${c.hex}" data-idx="${i}" title="${c.name}" aria-label="${c.name}"></button>
    `).join("")}
  </div>`;
}

function productCardHTML(p) {
  return `
  <article class="card">
    <a href="product.html?id=${p.id}" class="card-media">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <span class="tag-off">-${p.discount}%</span>
      ${p.trending ? '<span class="tag-trend">\uD83D\uDD25 Trending</span>' : ''}
    </a>
    <div class="card-body">
      <p class="card-cat">${p.categoryLabel}</p>
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <p class="card-rating"><span class="stars">${starString(p.rating)}</span> <span class="rating-num">${p.rating.toFixed(1)}</span> <span class="rating-count">(${p.reviews})</span></p>
      <p class="card-desc">${p.desc}</p>
      ${p.colors ? `<p class="card-color-label">Colourways</p>${swatchesHTML(p)}` : ""}
      <p class="card-price">
        <span class="now">${formatRs(p.price)}</span>
        <span class="was">${formatRs(p.original)}</span>
      </p>
      <div class="card-actions">
        <a class="btn btn-line" href="product.html?id=${p.id}">View &amp; customize</a>
        <a class="btn btn-whatsapp" href="${whatsappOrderLink(p)}" target="_blank" rel="noopener">Order on WhatsApp</a>
      </div>
    </div>
  </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-whatsapp-link]").forEach(el => {
    el.href = whatsappOrderLink(null);
  });
  document.querySelectorAll("[data-whatsapp-number]").forEach(el => {
    el.textContent = STORE.whatsappDisplay;
  });
  document.querySelectorAll("[data-hotline-number]").forEach(el => {
    el.textContent = STORE.hotlineDisplay;
    if (el.tagName === "A") el.href = "tel:+" + STORE.hotline;
  });
  document.querySelectorAll("[data-pathao-link]").forEach(el => {
    el.href = STORE.pathao;
  });

  // swatch clicks on cards just preview the colour name; full customization
  // (and the colour-aware WhatsApp order link) lives on product.html
  document.querySelectorAll(".swatches").forEach(group => {
    group.addEventListener("click", (e) => {
      const btn = e.target.closest(".swatch");
      if (!btn) return;
      e.preventDefault();
      group.querySelectorAll(".swatch").forEach(s => s.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
