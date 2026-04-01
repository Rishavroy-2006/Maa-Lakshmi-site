# MA LAKSHMI RADIO SALES & SERVICE - Electronics Showroom Website

## Project Overview
A fully responsive, modern electronics showroom website inspired by Amazon/Flipkart style layouts. NOT an e-commerce website - no cart, no payment, no visible prices. Purpose: attract customers online, showcase products professionally, drive WhatsApp and phone enquiries.

## Brand Details
- **Shop Name:** MA LAKSHMI RADIO SALES & SERVICE
- **Location:** Dasnagar, Howrah, West Bengal – 711108
- **WhatsApp / Call:** +91 8777252242

## Architecture
- **Frontend:** React with Tailwind CSS, Framer Motion, react-fast-marquee
- **Backend:** FastAPI with MongoDB
- **Data Source:** Google Sheets CSV with demo data fallback

## Core Requirements (Static)
1. ✅ Sticky header with logo, search, Call/WhatsApp buttons
2. ✅ Top utility bar with services
3. ✅ Category navigation with icons
4. ✅ Hero banner carousel with CTAs
5. ✅ Feature strip with icons
6. ✅ Product cards with "Best Price on WhatsApp" (no prices)
7. ✅ Brand showcase marquee
8. ✅ Services section
9. ✅ B2B/Bulk orders section
10. ✅ Contact section with enquiry form
11. ✅ Floating WhatsApp/Call buttons
12. ✅ Professional footer
13. ✅ Mobile-first responsive design
14. ✅ Google Sheets integration with demo data fallback

## What's Been Implemented (April 1, 2026)
### Phase 1 - Initial MVP
- Full homepage with all sections
- Demo data system for products, banners, services
- Backend API for sheet data, enquiries
- WhatsApp/Call integration with pre-filled messages
- Contact form with MongoDB storage
- Responsive design (mobile/tablet/desktop)

## API Endpoints
- `GET /api/sheet-data` - Get products and banners
- `POST /api/sheet-config` - Save Google Sheet URL
- `POST /api/enquiry` - Submit enquiry
- `GET /api/products?category=` - Filter products
- `GET /api/banners` - Get hero banners

## User Personas
1. **Local Customer:** Looking for electronics, wants to see products before visiting store
2. **Price Seeker:** Wants best price via WhatsApp negotiation
3. **Bulk Buyer:** Hotels, offices, apartments seeking commercial orders
4. **Service Seeker:** Needs installation, repair, or maintenance

## Prioritized Backlog
### P0 (Done)
- All initial features implemented

### P1 (Next)
- Google Sheets integration setup guide
- Admin panel for managing sheet config

### P2 (Future)
- Product search suggestions
- Recently viewed products
- Push notifications for offers

## Google Sheets Setup Guide
1. Create a public Google Sheet
2. Add columns: id, name, brand, category, subcategory, image, features (pipe-separated), inStock, offer, priority
3. Publish to web: File > Share > Publish to web > CSV
4. Configure URL via API: POST /api/sheet-config
