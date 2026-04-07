import React from "react";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { getWhatsAppUrl, getPhoneUrl, scrollToSection } from "../utils/helpers";
import { PHONE_NUMBER, SHOP_ADDRESS, SHOP_NAME } from "../data/demoData";

const Footer = ({ categories = [], onCategorySelect, onResetFilters }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Home Delivery",
    "Free Installation",
    "AC Servicing",
    "Warranty Support",
    "Technician Visit",
    "Bulk Orders",
  ];

  const handleQuickLinkClick = (href) => {
    if (href === "#") {
      if (onResetFilters) {
        onResetFilters();
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href === "#products" && onResetFilters) {
      onResetFilters();
    }

    scrollToSection(href.replace("#", ""));
  };

  const handleCategoryClick = (categoryName) => {
    if (onCategorySelect) {
      onCategorySelect(categoryName);
    }
    scrollToSection("products");
  };

  return (
    <footer
      data-testid="footer"
      className="bg-slate-900 text-white pt-12 sm:pt-16 pb-20 sm:pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-black tracking-tight">
                MA LAKSHMI<span className="text-yellow-400">.</span>
              </span>
              <p className="text-xs text-slate-400 uppercase tracking-wider">
                Radio Sales & Service
              </p>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Your trusted electronics partner in Howrah since 2004. Authorized
              dealer for all major brands.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">{SHOP_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a
                  href={getPhoneUrl()}
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-slate-300">
                  Mon-Sat: 10AM-9PM
                </span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base font-bold mb-4">Categories</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {categories.map((category) => (
                <li key={category.id || category.name}>
                  <button
                    onClick={() => handleCategoryClick(category.name)}
                    className="text-sm text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Services */}
          <div>
            <h4 className="text-base font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleQuickLinkClick(link.href)}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-base font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-base font-bold mb-4">Get in Touch</h4>
            <p className="text-sm text-slate-400 mb-4">
              Have questions? Reach out to us directly for the best deals.
            </p>

            <div className="space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp-btn"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-bold transition-colors btn-press w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href={getPhoneUrl()}
                data-testid="footer-call-btn"
                className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg font-bold transition-colors btn-press w-full"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              © {currentYear} {SHOP_NAME}. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 text-center sm:text-right">
              Electronics | Appliances | Service & Repair
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
