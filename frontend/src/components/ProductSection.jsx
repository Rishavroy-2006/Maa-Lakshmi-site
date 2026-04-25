import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { sortByPriority, filterByCategory } from '../utils/helpers';

const ProductSection = ({ 
  title, 
  products = [], 
  category = null, 
  showViewAll = true,
  onViewAll,
  onProductClick,
  maxItems = 8 
}) => {
  // Filter by category if provided
  let displayProducts = category 
    ? filterByCategory(products, category) 
    : products;
  
  // Sort by priority and limit
  displayProducts = sortByPriority(displayProducts).slice(0, maxItems);

  if (displayProducts.length === 0) return null;

  return (
    <section 
      data-testid={`product-section-${title?.replace(/\s+/g, '-').toLowerCase()}`}
      className="py-8 sm:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
            {title}
          </h2>
          {showViewAll && (
            <button
              onClick={onViewAll}
              data-testid={`view-all-${title?.replace(/\s+/g, '-').toLowerCase()}`}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
