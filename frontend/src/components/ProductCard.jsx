import React, { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { getProductWhatsAppUrl, getPhoneUrl } from "../utils/helpers";

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
      <div className="relative aspect-square bg-slate-50 overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 img-placeholder" />
        )}

        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
            <span className="text-[10px] sm:text-xs text-center px-2">
              Image not available
            </span>
          </div>
        )}

        {/* Offer Badge */}
        {product.offer && (
          <span
            data-testid={`product-offer-badge-${product.id}`}
            className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-red-500 text-white text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded badge-pulse"
          >
            {product.offer}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-grow">
        {/* Brand */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {product.brand}
          </span>
          <span
            data-testid={`product-stock-badge-${product.id}`}
            className={`text-[9px] sm:text-[10px] md:text-xs font-semibold ${
              product.inStock ? "text-green-600" : "text-slate-400"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Title */}
        <h3
          data-testid={`product-title-${product.id}`}
          className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-900 line-clamp-2 mt-0.5 sm:mt-1 mb-1.5 sm:mb-2 leading-snug min-h-[2.5em] sm:min-h-[2.75em]"
        >
          {product.name}
        </h3>

        {/* Features - Hidden on very small screens */}
        <ul className="hidden sm:block text-[10px] md:text-xs text-slate-500 mb-2 md:mb-3 space-y-0.5 flex-grow">
          {product.features?.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-1">
              <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Best Price Badge */}
        <div
          data-testid={`product-price-badge-${product.id}`}
          className="bg-yellow-50 border border-yellow-200 rounded px-2 py-1.5 sm:py-2 mb-2 sm:mb-3 text-center"
        >
          <span className="text-[10px] sm:text-xs md:text-sm font-bold text-yellow-700">
            Best Price on WhatsApp
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-1.5 sm:gap-2">
          <a
            href={getProductWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`product-whatsapp-btn-${product.id}`}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-1 py-1.5 sm:py-2 md:py-2.5 rounded text-[10px] sm:text-xs md:text-sm font-bold transition-colors btn-press"
          >
            <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <span className="hidden xs:inline">Chat</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href={getPhoneUrl()}
            data-testid={`product-call-btn-${product.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded text-[10px] sm:text-xs md:text-sm font-bold transition-colors btn-press"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
