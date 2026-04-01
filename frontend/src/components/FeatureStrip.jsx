import React from 'react';
import { Truck, Wrench, CreditCard, Shield, UserCheck, Building } from 'lucide-react';

const iconMap = {
  'Truck': Truck,
  'Wrench': Wrench,
  'CreditCard': CreditCard,
  'Shield': Shield,
  'UserCheck': UserCheck,
  'Building': Building
};

const FeatureStrip = ({ features = [] }) => {
  const defaultFeatures = [
    { icon: 'Truck', text: 'Home Delivery' },
    { icon: 'Wrench', text: 'Free Installation' },
    { icon: 'CreditCard', text: 'EMI Available' },
    { icon: 'Shield', text: 'Warranty Support' },
    { icon: 'UserCheck', text: 'Expert Technicians' },
    { icon: 'Building', text: 'Bulk Orders' }
  ];

  const displayFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <section 
      data-testid="feature-strip"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 relative z-10"
    >
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 sm:p-6">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {displayFeatures.slice(0, 6).map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Shield;
            return (
              <div 
                key={index}
                className="feature-item flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="feature-icon w-10 h-10 sm:w-12 sm:h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mb-2 group-hover:bg-yellow-100 transition-all">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-slate-700 leading-tight">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
