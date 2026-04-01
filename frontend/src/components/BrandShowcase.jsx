import React from 'react';
import Marquee from 'react-fast-marquee';

const BrandShowcase = ({ brands = [] }) => {
  const defaultBrands = [
    "Samsung",
    "LG",
    "Sony",
    "Whirlpool",
    "Voltas",
    "Haier",
    "Godrej",
    "Panasonic",
    "Philips",
    "Crompton",
    "Orient",
    "Bajaj"
  ];

  const displayBrands = brands.length > 0 ? brands : defaultBrands;

  return (
    <section 
      data-testid="brand-showcase"
      className="py-8 sm:py-12 bg-white border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 text-center">
          Our Trusted Brands
        </h2>
        <p className="text-sm text-slate-500 text-center mt-2">
          Authorized dealer for all major electronics brands
        </p>
      </div>

      <div className="marquee-pause">
        <Marquee
          gradient={true}
          gradientColor="#ffffff"
          gradientWidth={100}
          speed={40}
          pauseOnHover={true}
        >
          {displayBrands.map((brand, index) => (
            <div
              key={index}
              data-testid={`brand-${brand.toLowerCase().replace(/\s+/g, '-')}`}
              className="brand-logo mx-8 sm:mx-12 py-4"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-400 hover:text-slate-700 transition-all tracking-tight cursor-pointer">
                {brand.toUpperCase()}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default BrandShowcase;
