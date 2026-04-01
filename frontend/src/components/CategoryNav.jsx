import React from 'react';
import { 
  Tv, 
  Snowflake, 
  Refrigerator, 
  WashingMachine, 
  ChefHat, 
  Speaker, 
  Fan, 
  Home, 
  Wrench 
} from 'lucide-react';
import { scrollToSection } from '../utils/helpers';

const iconMap = {
  'Tv': Tv,
  'Snowflake': Snowflake,
  'Refrigerator': Refrigerator,
  'WashingMachine': WashingMachine,
  'ChefHat': ChefHat,
  'Speaker': Speaker,
  'Fan': Fan,
  'Home': Home,
  'Wrench': Wrench
};

// Short names for mobile
const shortNames = {
  'TVs & LED': 'TVs',
  'Air Conditioners': 'ACs',
  'Refrigerators': 'Fridge',
  'Washing Machines': 'Washer',
  'Kitchen Appliances': 'Kitchen',
  'Audio Systems': 'Audio',
  'Fans & Coolers': 'Fans',
  'Home Essentials': 'Home',
  'Repair & Service': 'Service'
};

const CategoryNav = ({ categories = [], onCategorySelect, activeCategory }) => {
  const handleCategoryClick = (categoryName) => {
    if (onCategorySelect) {
      onCategorySelect(categoryName);
    }
    scrollToSection('products');
  };

  return (
    <nav 
      data-testid="category-nav" 
      className="bg-white border-b border-slate-200 sticky top-[56px] sm:top-[60px] md:top-[68px] z-40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center overflow-x-auto no-scrollbar py-1.5 sm:py-2 px-2 sm:px-4 lg:px-8 gap-1">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Home;
            const isActive = activeCategory === category.name;
            const shortName = shortNames[category.name] || category.name.split(' ')[0];
            
            return (
              <button
                key={category.id}
                data-testid={`category-nav-${category.id}`}
                onClick={() => handleCategoryClick(category.name)}
                className={`category-item flex flex-col items-center justify-center flex-shrink-0 w-[56px] sm:w-[70px] md:w-[90px] lg:w-[100px] p-1 sm:p-1.5 md:p-2 rounded-lg transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <div 
                  className={`category-icon w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center mb-0.5 sm:mb-1 transition-colors ${
                    isActive 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-center leading-tight w-full">
                  <span className="md:hidden">{shortName}</span>
                  <span className="hidden md:inline whitespace-nowrap">{category.name}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
