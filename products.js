/* ============================================================
   AERONOVA — SITE DATA FILE
   This is the ONLY file you need to touch to run the business.
   Change text here, save, refresh the browser. No code required.
   ============================================================ */

// ---------- 1. BRAND & CONTACT SETTINGS ----------
const SITE_CONFIG = {
  brandName: "AeroNova",
  tagline: "Own the sky. Fly it your way.",
  whatsappNumber: "9779800000000",       // country code + number, no + or spaces
  email: "hello@aeronova.example",
  instagram: "https://instagram.com/aeronova",
  tiktok: "https://tiktok.com/@aeronova",
  gmail: "mailto:hello@aeronova.example",
  pathaoMerchantUrl: "https://merchant.pathao.com/",   // replace with your Pathao store checkout link
  ncmTrackingUrl: "https://ncmfast.com/#/track",        // official NCM tracking page (opens in new tab)
  heroExteriorImage: "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?q=80&w=1800&auto=format&fit=crop",
  heroInteriorImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1800&auto=format&fit=crop",
};

// ---------- 2. THE PLANE — HOTSPOTS ----------
// left/top are percentages (0-100) positioned over the hero image.
// Clicking a hotspot opens WhatsApp with the price + specs pre-filled.
const HOTSPOTS = [
  {
    id: "cockpit",
    label: "Cockpit",
    left: 14, top: 42,
    price: "Charter from $4,200/hr",
    specs: "Dual Garmin G5000 avionics, 2-pilot crew, Cat III autoland.",
  },
  {
    id: "cabin",
    label: "Cabin",
    left: 42, top: 46,
    price: "Seats 8–14 pax · from $2,900/leg",
    specs: "Full-flat leather seating, 6'2\" stand height, private lavatory.",
  },
  {
    id: "wing",
    label: "Wing & Engine",
    left: 66, top: 60,
    price: "GE Passport turbofan",
    specs: "18,920 lbf thrust, 3,200 nm range, Stage 5 noise compliant.",
  },
  {
    id: "cargo",
    label: "Cargo Hold",
    left: 80, top: 68,
    price: "Up to 195 cu ft",
    specs: "Heated hold, ski/golf bag certified, 2,650 lb capacity.",
  },
];

// ---------- 3. PRODUCTS / PACKAGES ----------
// Add a new product by copying a block below and editing it.
// category is used for the horizontal rows. price is a NUMBER (no $ sign) — used for sorting into tiers.
const PRODUCTS = [
  {
    id: "p1",
    name: "Half-Day City Hop",
    category: "Charter Experience",
    price: 890,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=900&auto=format&fit=crop",
    specs: "Up to 4 pax · 1.5 flight hrs · single pilot",
    badge: "Best for first flights",
  },
  {
    id: "p2",
    name: "Coastal Weekend Charter",
    category: "Charter Experience",
    price: 2900,
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=900&auto=format&fit=crop",
    specs: "Up to 8 pax · round trip · in-flight catering",
    badge: "Most booked",
  },
  {
    id: "p3",
    name: "Transcontinental Charter",
    category: "Charter Experience",
    price: 8400,
    image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=900&auto=format&fit=crop",
    specs: "Up to 14 pax · 3,200 nm range · full cabin crew",
  },
  {
    id: "p4",
    name: "AeroNova 1:100 Die-Cast Model",
    category: "Collector Merch",
    price: 45,
    image: "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?q=80&w=900&auto=format&fit=crop",
    specs: "Metal alloy, display stand included",
  },
  {
    id: "p5",
    name: "Pilot Leather Flight Jacket",
    category: "Collector Merch",
    price: 210,
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=900&auto=format&fit=crop",
    specs: "Sheepskin lined, embroidered squadron patch",
  },
  {
    id: "p6",
    name: "Cockpit Headset — AeroNova Edition",
    category: "Pilot Gear",
    price: 320,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=900&auto=format&fit=crop",
    specs: "Active noise cancelling, Bluetooth audio-in",
  },
  {
    id: "p7",
    name: "Flight Bag — Ballistic Nylon",
    category: "Pilot Gear",
    price: 85,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=900&auto=format&fit=crop",
    specs: "Fits kneeboard, charts, iPad, headset",
  },
  {
    id: "p8",
    name: "Private Jet Ownership Consult",
    category: "Charter Experience",
    price: 15000,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop",
    specs: "Fractional & full-ownership advisory, 1 year support",
    badge: "Premium",
  },
];

// ---------- 4. PRICE TIERS (used to group the shop into rows) ----------
const PRICE_TIERS = [
  { id: "under-100", label: "Under $100", min: 0, max: 100 },
  { id: "100-1000", label: "$100 – $1,000", min: 100, max: 1000 },
  { id: "1000-5000", label: "$1,000 – $5,000", min: 1000, max: 5000 },
  { id: "5000-plus", label: "$5,000+", min: 5000, max: Infinity },
];
