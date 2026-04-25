import React, { useState } from "react";

const formatPrice = (price) => {
  if (!price) return null;
  const num = Number(String(price).replace(/[^0-9.]/g, ''));
  if (isNaN(num) || num === 0) return null;
  return `₹${num.toLocaleString('en-IN')}`;
};

const ProductCard = ({ product, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const mainImage = product.images?.[0] || product.image;
  const formattedPrice = formatPrice(product.price);

  return (
    <div
      data-testid={`product-card-${product.id}`}
      className="product-card bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col h-full cursor-pointer group"
      onClick={() => onClick && onClick(product)}
    >
      {/* Image */}
      <div className="relative aspect-square bg-slate-50 overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 img-placeholder" />
        )}
        {!imageError ? (
          <img
            src={mainImage}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => { setImageError(true); setImageLoaded(true); }}
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
            className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-red-500 text-white text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded badge-pulse"
          >
            {product.offer}
          </span>
        )}

        {/* Multiple images indicator */}
        {product.images?.length > 1 && (
          <span className="absolute bottom-1.5 right-1.5 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded-full">
            +{product.images.length - 1}
          </span>
        )}
      </div>

      {/* Content: name + price only */}
      <div className="p-2 sm:p-3 flex flex-col flex-grow">
        <h3
          data-testid={`product-title-${product.id}`}
          className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-900 line-clamp-2 leading-snug mb-1.5"
        >
          {product.name}
        </h3>

        <div
          data-testid={`product-price-${product.id}`}
          className="mt-auto"
        >
          {formattedPrice ? (
            <span className="text-sm sm:text-base font-bold text-slate-900">
              {formattedPrice}
            </span>
          ) : (
            <span className="text-[10px] sm:text-xs font-semibold text-yellow-700">
              Call for Price
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
