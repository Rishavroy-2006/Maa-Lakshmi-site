// Helper functions for MA LAKSHMI Electronics Showroom

import { WHATSAPP_NUMBER } from '../data/demoData';

/**
 * Generate WhatsApp URL with pre-filled message
 * @param {string} message - Message to pre-fill
 * @returns {string} WhatsApp URL
 */
export const getWhatsAppUrl = (message = "Hello, I am interested in your products.") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * Generate WhatsApp URL for product enquiry
 * @param {string} productName - Product name
 * @returns {string} WhatsApp URL
 */
export const getProductWhatsAppUrl = (productName) => {
  const message = `Hello, I want the best price for ${productName}`;
  return getWhatsAppUrl(message);
};

/**
 * Generate phone call URL
 * @param {string} number - Phone number
 * @returns {string} Tel URL
 */
export const getPhoneUrl = (number = "+918777252242") => {
  return `tel:${number.replace(/\s/g, '')}`;
};

/**
 * Group products by category
 * @param {Array} products - Array of products
 * @returns {Object} Products grouped by category
 */
export const groupProductsByCategory = (products) => {
  return products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
};

/**
 * Sort products by priority
 * @param {Array} products - Array of products
 * @returns {Array} Sorted products
 */
export const sortByPriority = (products) => {
  return [...products].sort((a, b) => (a.priority || 99) - (b.priority || 99));
};

/**
 * Filter products by category
 * @param {Array} products - Array of products
 * @param {string} category - Category to filter
 * @returns {Array} Filtered products
 */
export const filterByCategory = (products, category) => {
  return products.filter(product => product.category === category);
};

/**
 * Search products by name or brand
 * @param {Array} products - Array of products
 * @param {string} query - Search query
 * @returns {Array} Matching products
 */
export const searchProducts = (products, query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.brand.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Format category name for display
 * @param {string} category - Category name
 * @returns {string} Formatted category name
 */
export const formatCategoryName = (category) => {
  return category.replace(/&/g, '&');
};

/**
 * Get unique categories from products
 * @param {Array} products - Array of products
 * @returns {Array} Unique categories
 */
export const getUniqueCategories = (products) => {
  return [...new Set(products.map(product => product.category))];
};

/**
 * Scroll to section smoothly
 * @param {string} sectionId - Section element ID
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
