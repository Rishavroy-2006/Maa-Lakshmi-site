// SheetDB Configuration
// Replace this URL with your SheetDB API endpoint after setup

// HOW TO SET UP SHEETDB:
// 1. Create a Google Sheet with your products data
// 2. Go to https://sheetdb.io/ and create a free account
// 3. Connect your Google Sheet to SheetDB
// 4. Copy the API URL and paste it below
// 5. Make sure your sheet has columns: id, name, brand, category, subcategory, image, features, inStock, offer, priority

// For banners sheet, use columns: id, title, subtitle, image, ctaText, category, priority

export const SHEETDB_CONFIG = {
  // Main products sheet URL - Replace with your SheetDB API URL
  productsUrl: process.env.REACT_APP_SHEETDB_PRODUCTS_URL || '',
  
  // Banners sheet URL (can be same sheet different tab, or separate sheet)
  bannersUrl: process.env.REACT_APP_SHEETDB_BANNERS_URL || '',
  
  // Enable/disable SheetDB (set to false to always use demo data)
  enabled: process.env.REACT_APP_SHEETDB_ENABLED === 'true',
};

// Transform raw sheet data to product format
export const transformSheetProduct = (row) => {
  return {
    id: row.id || String(Math.random()),
    name: row.name || '',
    brand: row.brand || '',
    category: row.category || '',
    subcategory: row.subcategory || '',
    image: row.image || '',
    features: row.features ? row.features.split('|').map(f => f.trim()).filter(Boolean) : [],
    inStock: row.inStock === 'true' || row.inStock === 'TRUE' || row.inStock === '1' || row.inStock === true,
    offer: row.offer || '',
    priority: parseInt(row.priority) || 99
  };
};

// Transform raw sheet data to banner format
export const transformSheetBanner = (row) => {
  return {
    id: row.id || String(Math.random()),
    title: row.title || '',
    subtitle: row.subtitle || '',
    image: row.image || '',
    ctaText: row.ctaText || 'Enquire Now',
    category: row.category || '',
    priority: parseInt(row.priority) || 99
  };
};
