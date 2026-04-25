import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Phone } from 'lucide-react';
import { getProductWhatsAppUrl, getPhoneUrl } from '../utils/helpers';

// Parse specifications string into sections
// Format: ##Section Title##Key1:Value1|Key2:Value2##Another Section##Key3:Value3
const parseSpecs = (text) => {
  if (!text || !text.includes('##')) return [];
  const parts = text.split('##').filter(s => s.trim());
  const sections = [];
  for (let i = 0; i < parts.length; i += 2) {
    const title = parts[i]?.trim();
    const content = parts[i + 1]?.trim() || '';
    const pairs = content
      .split('|')
      .map(pair => {
        const colonIdx = pair.indexOf(':');
        if (colonIdx === -1) return { key: pair.trim(), value: '' };
        return {
          key: pair.slice(0, colonIdx).trim(),
          value: pair.slice(colonIdx + 1).trim(),
        };
      })
      .filter(p => p.key);
    if (title) sections.push({ title, pairs });
  }
  return sections;
};

const formatPrice = (price) => {
  if (!price) return null;
  const num = Number(String(price).replace(/[^0-9.]/g, ''));
  if (isNaN(num) || num === 0) return null;
  return `₹${num.toLocaleString('en-IN')}`;
};

const ProductDetailModal = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('specifications');

  const images =
    product.images?.length > 0
      ? product.images
      : product.image
      ? [product.image]
      : [];

  const formattedPrice = formatPrice(product.price);
  const specSections = parseSpecs(product.specifications);

  // Determine which tabs have content
  const tabs = [
    { id: 'specifications', label: 'Specifications', show: !!(product.specifications) },
    { id: 'description', label: 'Description', show: !!(product.description) },
    { id: 'warranty', label: 'Warranty', show: !!(product.warranty) },
  ].filter(t => t.show);

  // Reset to first available tab when product changes
  useEffect(() => {
    const first = [
      product.specifications && 'specifications',
      product.description && 'description',
      product.warranty && 'warranty',
    ].filter(Boolean)[0] || 'specifications';
    setActiveTab(first);
    setActiveImage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.id]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const prevImage = () =>
    setActiveImage(i => (i - 1 + images.length) % images.length);
  const nextImage = () =>
    setActiveImage(i => (i + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      data-testid="product-detail-modal"
    >
      <div className="bg-white w-full sm:max-w-4xl sm:rounded-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: '95vh' }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 flex-shrink-0">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {product.brand || product.category}
          </span>
          <button
            onClick={onClose}
            data-testid="modal-close-btn"
            className="p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col sm:flex-row flex-1 overflow-y-auto sm:overflow-hidden min-h-0">

          {/* Left: Image Gallery */}
          <div className="sm:w-[42%] bg-slate-50 flex-shrink-0">
            {/* Main image */}
            <div className="relative bg-white" style={{ aspectRatio: '1 / 1' }}>
              {images.length > 0 ? (
                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  data-testid="modal-main-image"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                  No Image Available
                </div>
              )}

              {/* Arrow navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    data-testid="modal-prev-image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1.5 shadow-md hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    data-testid="modal-next-image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1.5 shadow-md hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-700" />
                  </button>
                </>
              )}

              {/* Offer badge */}
              {product.offer && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.offer}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 p-3 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    data-testid={`modal-thumb-${idx}`}
                    className={`w-14 h-14 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
                      activeImage === idx ? 'border-blue-500' : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Image counter dots (mobile only) */}
            {images.length > 1 && (
              <div className="flex justify-center gap-1.5 pb-3 sm:hidden">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeImage === idx ? 'bg-blue-500' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="flex-1 flex flex-col p-4 sm:p-6 sm:overflow-y-auto">

            {/* Product name */}
            <h1
              className="text-base sm:text-xl font-bold text-slate-900 leading-snug mb-3"
              data-testid="modal-product-name"
            >
              {product.name}
            </h1>

            {/* Price */}
            <div className="mb-4" data-testid="modal-price">
              {formattedPrice ? (
                <span className="text-2xl font-bold text-slate-900">{formattedPrice}</span>
              ) : (
                <span className="text-sm font-semibold text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 inline-block">
                  Call / WhatsApp for Best Price
                </span>
              )}
            </div>

            {/* Product Highlights */}
            {product.features?.length > 0 && (
              <div className="mb-5">
                <h3 className="text-sm font-bold text-slate-800 mb-2.5">Product Highlights</h3>
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tabs */}
            {tabs.length > 0 && (
              <div className="flex-1">
                {/* Tab header */}
                <div className="border-b border-slate-200 mb-4">
                  <div className="flex gap-0 overflow-x-auto">
                    {tabs.map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        data-testid={`tab-${tab.id}`}
                        className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                          activeTab === tab.id
                            ? 'border-slate-900 text-slate-900'
                            : 'border-transparent text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab content */}
                <div className="text-sm text-slate-700 pb-4">

                  {/* Specifications Tab */}
                  {activeTab === 'specifications' && (
                    <div>
                      {specSections.length > 0 ? (
                        specSections.map((section, sIdx) => (
                          <div key={sIdx}>
                            {sIdx > 0 && (
                              <div className="border-t border-slate-100 my-4" />
                            )}
                            <h4 className="font-bold text-slate-900 mb-3 text-sm">
                              {section.title}
                            </h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                              {section.pairs.map((pair, pIdx) => (
                                <div
                                  key={pIdx}
                                  className="border-b border-slate-100 pb-2"
                                >
                                  <div className="text-xs text-slate-500 mb-0.5">
                                    {pair.key}
                                  </div>
                                  <div className="font-semibold text-slate-800 text-sm">
                                    {pair.value || '—'}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        // Fallback: show raw text if no ## sections
                        <p className="text-slate-600 whitespace-pre-line leading-relaxed">
                          {product.specifications}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Description Tab */}
                  {activeTab === 'description' && (
                    <p className="text-slate-600 whitespace-pre-line leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  {/* Warranty Tab */}
                  {activeTab === 'warranty' && (
                    <p className="text-slate-600 whitespace-pre-line leading-relaxed">
                      {product.warranty}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* CTA Buttons — always visible */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-slate-100 flex-shrink-0">
              <a
                href={getProductWhatsAppUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="modal-whatsapp-btn"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp for Best Price
              </a>
              <a
                href={getPhoneUrl()}
                data-testid="modal-call-btn"
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
