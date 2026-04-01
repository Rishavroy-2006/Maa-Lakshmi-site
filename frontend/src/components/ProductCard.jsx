import React, { useState } from 'react';
import { MessageCircle, Phone, Check } from 'lucide-react';
import { getProductWhatsAppUrl, getPhoneUrl } from '../utils/helpers';

const ProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div 
      data-testid={`product-card-${product.id}`}
      className="product-card bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-slate-50 flex items-center justify-center p-4">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 img-placeholder" />
        )}
        
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
            <span className="text-xs">Image not available</span>
          </div>
        )}

        {/* Offer Badge */}
        {product.offer && (
          <span 
            data-testid={`product-offer-badge-${product.id}`}
            className="absolute top-2 left-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded badge-pulse"
          >
            {product.offer}
          </span>
        )}

        {/* Stock Badge */}
        {product.inStock && (
          <span 
            data-testid={`product-stock-badge-${product.id}`}
            className="absolute top-2 right-2 bg-green-100 text-green-700 text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1"
          >
            <Check className="w-3 h-3" />
            <span className="hidden sm:inline">In Stock</span>
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        {/* Brand */}
        <span className="text-[10px] sm:text-xs font-medium text-blue-600 uppercase tracking-wider">
          {product.brand}
        </span>

        {/* Title */}
        <h3 
          data-testid={`product-title-${product.id}`}
          className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 mt-1 mb-2 leading-snug"
        >
          {product.name}
        </h3>

        {/* Features */}
        <ul className="text-[10px] sm:text-xs text-slate-500 mb-3 space-y-0.5 flex-grow">
          {product.features?.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-1">
              <span className="text-green-500 mt-0.5">•</span>
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Best Price Badge */}
        <div 
          data-testid={`product-price-badge-${product.id}`}
          className="bg-yellow-50 border border-yellow-200 rounded-md px-3 py-2 mb-3 text-center"
        >
          <span className="text-xs sm:text-sm font-bold text-yellow-700">
            Best Price on WhatsApp
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <a
            href={getProductWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`product-whatsapp-btn-${product.id}`}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-1.5 py-2 sm:py-2.5 rounded text-xs sm:text-sm font-bold transition-colors btn-press"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </a>
          <a
            href={getPhoneUrl()}
            data-testid={`product-call-btn-${product.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 rounded text-xs sm:text-sm font-bold transition-colors btn-press"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
