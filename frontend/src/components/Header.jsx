import React, { useState } from 'react';
import { Search, Phone, MessageCircle, Menu, X, MapPin, ChevronDown, Truck } from 'lucide-react';
import { getWhatsAppUrl, getPhoneUrl, scrollToSection } from '../utils/helpers';
import { PHONE_NUMBER, SHOP_ADDRESS } from '../data/demoData';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = ({ categories = [], onSearch, onCategorySelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleCategoryClick = (category) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
    scrollToSection('products');
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white header-shadow">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-btn"
            className="lg:hidden p-2 -ml-2 text-slate-700 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div data-testid="header-logo" className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                  MA LAKSHMI<span className="text-yellow-400">.</span>
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-500 tracking-wide uppercase">
                  Radio Sales & Service
                </span>
              </div>
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <form 
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-2xl mx-4"
          >
            <div className="search-container flex w-full border-2 border-yellow-400 rounded-md overflow-hidden bg-white">
              {/* Category Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    type="button"
                    data-testid="category-dropdown-trigger"
                    className="hidden lg:flex items-center gap-1 px-3 py-2.5 bg-slate-50 border-r border-slate-200 text-sm text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    All Categories
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {categories.map((cat) => (
                    <DropdownMenuItem 
                      key={cat.id}
                      data-testid={`category-dropdown-item-${cat.id}`}
                      onClick={() => handleCategoryClick(cat.name)}
                    >
                      {cat.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <input
                type="text"
                data-testid="search-input"
                placeholder="Search for TVs, ACs, Refrigerators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 text-slate-900 focus:outline-none text-sm"
              />
              <button
                type="submit"
                data-testid="search-btn"
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-2.5 flex items-center justify-center transition-colors btn-press"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Location - Desktop */}
            <div className="hidden xl:flex items-center gap-1 text-sm text-slate-600">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-xs">Dasnagar, Howrah</span>
            </div>

            {/* Home Delivery Badge - Desktop */}
            <div className="hidden lg:flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
              <Truck className="w-3.5 h-3.5" />
              <span>Home Delivery</span>
            </div>

            {/* Call Button */}
            <a
              href={getPhoneUrl()}
              data-testid="header-call-btn"
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors btn-press"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-whatsapp-btn"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors btn-press"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <form 
          onSubmit={handleSearch}
          className="md:hidden pb-3"
        >
          <div className="search-container flex w-full border-2 border-yellow-400 rounded-md overflow-hidden bg-white">
            <input
              type="text"
              data-testid="mobile-search-input"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 text-slate-900 focus:outline-none text-sm"
            />
            <button
              type="submit"
              data-testid="mobile-search-btn"
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-4 py-2.5 flex items-center justify-center transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          data-testid="mobile-menu"
          className="lg:hidden bg-white border-t border-slate-200 absolute w-full shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  data-testid={`mobile-category-${cat.id}`}
                  onClick={() => handleCategoryClick(cat.name)}
                  className="w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{SHOP_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{PHONE_NUMBER}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
