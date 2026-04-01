import React from 'react';
import { Building, Hotel, School, Home, MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppUrl, getPhoneUrl } from '../utils/helpers';

const B2BSection = () => {
  const clientTypes = [
    { icon: Building, label: 'Offices' },
    { icon: Hotel, label: 'Hotels' },
    { icon: School, label: 'Schools' },
    { icon: Home, label: 'Apartments' }
  ];

  return (
    <section 
      data-testid="b2b-section"
      className="py-12 sm:py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
              BULK ORDERS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Large Orders & Commercial Solutions
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-6">
              Special pricing and dedicated support for bulk purchases. 
              We serve offices, apartments, hotels, schools, and large residential projects.
            </p>

            {/* Client Types */}
            <div className="flex flex-wrap gap-4 mb-8">
              {clientTypes.map((type, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-slate-800 text-slate-300 px-4 py-2 rounded-lg"
                >
                  <type.icon className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">{type.label}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-300">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Special bulk pricing with volume discounts</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Dedicated project manager for large orders</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Complete installation & setup services</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Extended warranty & AMC options</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl("Hello, I want to request a bulk order quote.")}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="b2b-whatsapp-btn"
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-6 py-3 rounded-lg text-base font-bold transition-all btn-press shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Request Bulk Quote
              </a>
              <a
                href={getPhoneUrl()}
                data-testid="b2b-call-btn"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg text-base font-bold transition-all btn-press"
              >
                <Phone className="w-5 h-5" />
                Call for Details
              </a>
            </div>
          </div>

          {/* Image/Stats */}
          <div className="hidden lg:block">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-900 rounded-xl">
                  <div className="text-4xl font-black text-yellow-400 mb-2">500+</div>
                  <div className="text-sm text-slate-400">Corporate Orders</div>
                </div>
                <div className="text-center p-6 bg-slate-900 rounded-xl">
                  <div className="text-4xl font-black text-yellow-400 mb-2">20+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-slate-900 rounded-xl">
                  <div className="text-4xl font-black text-yellow-400 mb-2">50+</div>
                  <div className="text-sm text-slate-400">Brands Available</div>
                </div>
                <div className="text-center p-6 bg-slate-900 rounded-xl">
                  <div className="text-4xl font-black text-yellow-400 mb-2">10K+</div>
                  <div className="text-sm text-slate-400">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
