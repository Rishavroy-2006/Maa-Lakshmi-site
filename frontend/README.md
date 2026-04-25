# MA LAKSHMI RADIO SALES & SERVICE - Frontend Only

A fully responsive electronics showroom website that fetches product data directly from Google Sheets via SheetDB API.

## Features

- ✅ Frontend-only architecture (no backend required)
- ✅ Google Sheets / SheetDB integration for dynamic product updates
- ✅ Demo data fallback when SheetDB is not configured
- ✅ WhatsApp-based enquiry form
- ✅ Fully responsive design
- ✅ Ready for Vercel deployment

---

## SheetDB Setup Guide

### Step 1: Create Your Google Sheet

Create a Google Sheet with **two tabs**:

#### Tab 1: Products
| Column | Required | Description | Example |
|--------|----------|-------------|---------|
| id | Yes | Unique product ID | tv-001 |
| name | Yes | Product name | Samsung 32" HD Ready Smart LED TV |
| brand | No | Brand name | Samsung |
| category | Yes | Category (must match nav) | TVs & LED |
| subcategory | No | Subcategory | 32 LED |
| images | No* | Pipe-separated image URLs (multiple photos) | `https://img1.jpg\|https://img2.jpg\|https://img3.jpg` |
| image | No* | Single image URL (used if `images` not set) | https://example.com/image.jpg |
| price | No | Price in INR (leave blank for "Call for Price") | 18999 |
| features | No | Pipe-separated highlights shown on detail page | `5 Star Rating\|Inverter\|Copper Coil` |
| specifications | No | Structured specs (see format below) | `##General##Capacity:1.5 Ton\|Type:Split AC` |
| description | No | Plain text product description | A great TV for your living room... |
| warranty | No | Warranty information | 1 Year Manufacturer Warranty |
| offer | No | Badge text on card | Festival Sale |
| inStock | No | In stock (true/false) | true |
| priority | No | Display priority (1 = first) | 1 |

> **\*Images column is preferred.** If you have multiple photos, use `images` with pipe-separated URLs. If only one image, use the `image` column.

#### Specifications Format (for `specifications` column)
Use `##` to separate section names from their content, and `|` to separate key:value pairs:

```
##General##Capacity:1.5 Ton|Type:Split AC|Star Rating:5 Star##Performance Features##Turbo Mode:Yes|ISEER:4.35 W/W##Air Flow##Auto Air Swing:Yes|Dust Filter:Yes
```

This renders as Flipkart-style sections with key-value pairs in a 2-column grid, separated by thin lines.

**Example for a TV:**
```
##Display##Resolution:4K Ultra HD|Screen Size:55 Inch|Panel Type:LED##Connectivity##HDMI Ports:4|USB Ports:2|Wi-Fi:Yes|Bluetooth:5.0##Audio##Speaker Output:30W|Dolby Atmos:Yes
```

#### Tab 2: Banners (Optional)
| Column | Description | Example |
|--------|-------------|---------|
| id | Unique banner ID | banner-001 |
| title | Banner title | Best Deals on LED TVs |
| subtitle | Banner subtitle | 32" to 65" Smart TVs |
| image | Background image URL | https://example.com/banner.jpg |
| ctaText | CTA button text | Get Best Price |
| category | Category | TVs |
| priority | Display priority | 1 |

### Step 2: Connect to SheetDB

1. Go to [https://sheetdb.io](https://sheetdb.io)
2. Sign up for a free account
3. Click "Create new API"
4. Paste your Google Sheet URL
5. Copy the API endpoint URL (e.g., `https://sheetdb.io/api/v1/xxxxxxxxxx`)

### Step 3: Configure Environment Variables

Update your `.env` file:

```env
REACT_APP_SHEETDB_ENABLED=true
REACT_APP_SHEETDB_PRODUCTS_URL=https://sheetdb.io/api/v1/YOUR_PRODUCTS_SHEET_ID
REACT_APP_SHEETDB_BANNERS_URL=https://sheetdb.io/api/v1/YOUR_BANNERS_SHEET_ID
```

### Step 4: Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

---

## Vercel Deployment

### Build Settings

| Setting | Value |
|---------|-------|
| Framework | Create React App |
| Root Directory | `app/frontend` |
| Build Command | `yarn build` |
| Output Directory | `build` |
| Install Command | `yarn install` |

### Environment Variables (Add in Vercel Dashboard)

```
REACT_APP_SHEETDB_ENABLED=true
REACT_APP_SHEETDB_PRODUCTS_URL=your_sheetdb_url
REACT_APP_SHEETDB_BANNERS_URL=your_banners_sheetdb_url
```

---

## Project Structure

```
app/frontend/
├── src/
│   ├── components/       # React components (DO NOT MODIFY)
│   ├── config/
│   │   └── sheetdb.js   # SheetDB configuration
│   ├── data/
│   │   └── demoData.js  # Fallback demo data
│   ├── hooks/
│   │   └── useSheetData.js  # Data fetching hook
│   ├── utils/
│   │   └── helpers.js   # Utility functions
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
├── .env                 # Environment variables
└── package.json         # Dependencies
```

---

## How It Works

1. **On page load**: `useSheetData` hook checks if SheetDB is enabled
2. **If enabled**: Fetches data from SheetDB API
3. **If disabled or fails**: Falls back to demo data
4. **Demo banner**: Shows warning when using demo data

---

## Enquiry Form

The enquiry form now works via WhatsApp:
1. User fills out the form
2. Clicking "Send via WhatsApp" opens WhatsApp with pre-filled message
3. User sends the message to complete enquiry
4. No backend required!

---

## Support

- WhatsApp: +91 8777252242
- Location: Dasnagar, Howrah, West Bengal – 711108
