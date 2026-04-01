import React from 'react';
import { Truck, ThumbsUp, RotateCcw, CreditCard, Award } from 'lucide-react';

const FeatureStrip = () => {
  const features = [
    { 
      icon: Truck, 
      title: "Free Delivery", 
      subtitle: "from ₹5000" 
    },
    { 
      icon: ThumbsUp, 
      title: "99% Positive", 
      subtitle: "Feedbacks" 
    },
    { 
      icon: RotateCcw, 
      title: "365 days", 
      subtitle: "for free return" 
    },
    { 
      icon: CreditCard, 
      title: "Payment", 
      subtitle: "Secure System" 
    },
    { 
      icon: Award, 
      title: "Only Best", 
      subtitle: "Brands" 
    }
  ];

  return (
    <section 
      data-testid="feature-strip"
      className="bg-white border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-5 divide-x divide-slate-200">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center justify-center gap-3 py-4 sm:py-5 px-2 sm:px-4 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 flex-shrink-0" strokeWidth={1.5} />
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-slate-800 leading-tight">
                  {feature.title}
                </p>
                <p className="text-xs text-slate-500 leading-tight">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
