# Maa Lakshmi Radio Sales and Service

Official website project for MA LAKSHMI RADIO SALES and SERVICE, built as a responsive React storefront for electronics products and local service enquiries.

## Overview

This project delivers a modern showroom website with:

- Product discovery across multiple appliance categories
- Hero banners and featured sections
- Search and category filtering
- Brand and service highlights
- Contact section with map and WhatsApp enquiry flow
- Demo data fallback when live sheet data is not available

## Tech Stack

- React 19
- React Router
- Tailwind CSS
- CRACO
- Radix UI components
- Lucide icons
- SheetDB for product and banner data source

## Project Structure

- frontend
  - src
    - components: UI and page sections
    - hooks: data fetching logic
    - config: external data config
    - data: demo and static data
    - utils: helper methods
  - public: static assets
  - package.json: scripts and dependencies
- backend_test.py: API test utility script
- design_guidelines.json: design reference data
- test_result.md: testing protocol and logs

## Features

- Responsive UI for mobile, tablet, and desktop
- Dynamic product listing using external sheet data
- Automatic fallback to demo products when data source is unavailable
- Product search by name, brand, or category
- Category-based browsing
- WhatsApp-first enquiry form
- Click-to-call support links
- Store map integration
- Service area and business hours display

## Getting Started

### Prerequisites

- Node.js 18 or newer
- Yarn 1.22 or newer

### Install

1. Move into the frontend directory.
2. Install dependencies.

Commands:

cd frontend  
yarn install

### Run Development Server

yarn start

The app runs on the default Create React App development port unless changed by your environment.

## Environment Configuration

Create a .env file inside the frontend directory and add:

REACT_APP_SHEETDB_ENABLED=true  
REACT_APP_SHEETDB_PRODUCTS_URL=your_products_api_url  
REACT_APP_SHEETDB_BANNERS_URL=your_banners_api_url

Notes:

- Set REACT_APP_SHEETDB_ENABLED to false to force demo data mode.
- If banner URL is not provided, banner fallback data is used.

## Data Source Format

### Products columns

- id
- name
- brand
- category
- subcategory
- image
- features (pipe-separated values)
- inStock
- offer
- priority

### Banners columns

- id
- title
- subtitle
- image
- ctaText
- category
- priority

## Build for Production

From frontend:

yarn build

This generates an optimized production build in the build directory.

## Testing

Frontend test command:

yarn test

Additional API validation utility is available at project root via backend_test.py.

## Deployment Notes

For static hosting platforms:

- Build command: yarn build
- Publish directory: frontend/build

If deploying from a monorepo-style root, ensure the build runs from the frontend folder.

## Contact Information Used in App

- Business: MA LAKSHMI RADIO SALES and SERVICE
- Phone: +91 8777252242
- Location: Dasnagar, Howrah, West Bengal, 711108
- Service area: Howrah, Kolkata, and suburbs

## Troubleshooting

- If products are not loading, verify sheet URLs and environment values.
- If demo banner appears, the app is using fallback data due to missing or failed live fetch.
- If styles look broken, ensure dependencies installed successfully and restart the dev server.

## License

Private project for business use.