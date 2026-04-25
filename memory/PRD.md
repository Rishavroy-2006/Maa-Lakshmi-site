# MA LAKSHMI RADIO SALES & SERVICE — Product Requirements Document

## Original Problem Statement
Build a fully responsive, modern electronics showroom website for "MA LAKSHMI RADIO SALES & SERVICE" inspired by Amazon/Flipkart. The site must be a product showcase to drive WhatsApp and phone enquiries (no e-commerce checkout/cart). It must use a **frontend-only architecture** with data fetched dynamically from Google Sheets via SheetDB API, with a fallback to high-quality demo data if the API fails.

## Business Info
- **Shop Name**: MA LAKSHMI RADIO SALES & SERVICE
- **Location**: Dasnagar, Howrah, West Bengal – 711108
- **WhatsApp**: +91 8777252242
- **Phone**: +91 8777252242
- **Live deployment**: Vercel (environment variables set there for SheetDB)

## Architecture
- **Frontend-only** React app (no backend, no database)
- Data source: Google Sheets → SheetDB API → React frontend
- Fallback: `demoData.js` when SheetDB not configured or fails
- Deployment: Vercel-ready static site

## Tech Stack
- React (Create React App + CRACO)
- Tailwind CSS + shadcn/ui components
- SheetDB API (Google Sheets integration)
- WhatsApp deep-links for enquiries

## What's Been Implemented (as of April 2026)

### Core Layout
- Sticky header with search bar, WhatsApp & Call buttons
- Horizontal category navigation bar
- Hero carousel (4 banners from SheetDB or demo)
- Feature strip below hero (Free Delivery, Warranty, EMI, etc.)
- Footer with categories and contact info
- Floating WhatsApp + Call buttons

### Product Display
- Product sections per category (TVs, ACs, Refrigerators, Washing Machines, Kitchen Appliances, Audio, Fans)
- Category filtering and search
- Minimal product cards: **image + name + price only** (or "Call for Price")
- Multiple images badge (+2, +1) on cards
- Offer badge (Festival Sale, Best Seller, etc.)

### Product Detail Modal (Flipkart-style) — Added April 2026
- Opens when any product card is clicked
- **Image gallery**: Main image + clickable thumbnails + prev/next arrows + dot indicators
- **Product Highlights**: Bullet-point list of key features
- **Tabbed details**: Specifications | Description | Warranty
- **Specifications**: Flipkart-style sections (bold heading + 2-column key:value grid + thin dividers)
- **CTA Buttons**: WhatsApp for Best Price + Call (always visible at bottom)
- Mobile-first: full-width bottom sheet on mobile, centered modal on desktop
- Closes on X button, overlay click, or Escape key

### Enquiry System
- All WhatsApp links pre-fill product name in message
- Contact form redirects to WhatsApp
- Call buttons use tel: links

### Data Layer
- `useSheetData.js` hook: fetches from SheetDB, falls back to demoData
- `sheetdb.js`: parses SheetDB JSON/CSV, transforms to product format
  - Supports: `images` (pipe-separated), `price`, `specifications`, `description`, `warranty`
- `demoData.js`: full demo product set with specs, descriptions, warranties

## Google Sheet Column Reference (Products tab)
| Column | Required | Description |
|--------|----------|-------------|
| id | Yes | Unique ID (e.g. tv-001) |
| name | Yes | Product name |
| brand | No | Brand name |
| category | Yes | e.g. TVs & LED |
| subcategory | No | e.g. 32 LED |
| images | No* | Pipe-separated image URLs |
| image | No* | Single image URL (fallback) |
| price | No | Numeric price, blank = Call for Price |
| features | No | Pipe-separated highlights |
| specifications | No | ##Section##Key:Value\|Key:Value format |
| description | No | Plain text description |
| warranty | No | Plain text warranty info |
| offer | No | Badge text (Best Seller, etc.) |
| inStock | No | true/false |
| priority | No | 1 = first, 99 = last |

**Specifications format**: `##General##Capacity:1.5 Ton|Type:Split AC##Performance##Turbo Mode:Yes|ISEER:4.35`

## Remaining / Future Tasks (Backlog)

### P1 (High Priority — next to implement)
- SEO meta tags (title, description, Open Graph for WhatsApp/Google preview)
- Favicon update

### P2 (Medium Priority)
- Product search results page (currently works via state, could add URL params)
- Breadcrumb navigation in modal

### P3 (Future / Nice to Have)
- Admin panel for enquiry tracking (would need EmailJS or similar)
- Customer reviews section
- EMI calculator widget
- Compare products feature
- Social media share buttons on product detail
