import React from 'react';
import { Truck, CreditCard, Wrench, Shield, UserCheck, Building } from 'lucide-react';

const UtilityBar = () => {
  const utilityItems = [
    { icon: Truck, text: "Home Delivery Available" },
    { icon: CreditCard, text: "EMI / Finance Available" },
    { icon: Wrench, text: "Installation Service" },
    { icon: Shield, text: "Warranty Support" },
    { icon: UserCheck, text: "Service & Repair" },
    { icon: Building, text: "Large Order Support" }
  ];

  return (
    <div 
      data-testid="utility-bar" 
      className="bg-slate-900 text-slate-300 text-xs py-1.5 hidden sm:block"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {utilityItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <item.icon className="w-3.5 h-3.5" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
