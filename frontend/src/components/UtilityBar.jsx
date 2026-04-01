import React from 'react';
import { Truck, CreditCard, Wrench, Shield, UserCheck, Building, ChevronRight } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const UtilityBar = () => {
  const utilityItems = [
    { icon: Truck, text: "Free Home Delivery" },
    { icon: CreditCard, text: "Easy EMI Options" },
    { icon: Wrench, text: "Free Installation" },
    { icon: Shield, text: "Warranty Support" },
    { icon: UserCheck, text: "Expert Service" },
    { icon: Building, text: "Bulk Orders" }
  ];

  return (
    <div 
      data-testid="utility-bar" 
      className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white"
    >
      {/* Desktop Version - Static */}
      <div className="hidden md:block py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {utilityItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                  <item.icon className="w-3.5 h-3.5 text-yellow-400" />
                </div>
                <span className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version - Marquee */}
      <div className="md:hidden py-2 overflow-hidden">
        <Marquee gradient={false} speed={30} pauseOnHover={true}>
          {utilityItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 mx-6"
            >
              <item.icon className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-xs font-medium text-slate-200 whitespace-nowrap">
                {item.text}
              </span>
              <ChevronRight className="w-3 h-3 text-slate-500" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default UtilityBar;
