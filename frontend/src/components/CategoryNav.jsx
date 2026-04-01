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
      className="bg-white border-b border-slate-200 sticky top-[56px] sm:top-[60px] md:top-[68px] z-40 overflow-hidden"
    >
      {/* Mobile - Horizontal scroll with icons */}
      <div className="md:hidden overflow-x-auto no-scrollbar">
        <div className="flex items-center py-2 px-2 gap-1 min-w-min">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Home;
            const isActive = activeCategory === category.name;
            const shortName = shortNames[category.name] || category.name.split(' ')[0];
            
            return (
              <button
                key={category.id}
                data-testid={`category-nav-${category.id}`}
                onClick={() => handleCategoryClick(category.name)}
                className={`category-item flex flex-col items-center justify-center flex-shrink-0 w-[56px] p-1 rounded-lg transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-0.5 transition-colors ${
                    isActive 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-[8px] font-medium text-center leading-tight w-full">
                  {shortName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop - Scrollable horizontal list */}
      <div className="hidden md:block overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-1 lg:gap-2 py-2 min-w-min">
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon] || Home;
              const isActive = activeCategory === category.name;
              
              return (
                <button
                  key={category.id}
                  data-testid={`category-nav-desktop-${category.id}`}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`flex items-center gap-1.5 lg:gap-2 px-2 lg:px-3 py-2 rounded-lg transition-all group flex-shrink-0 ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <div 
                    className={`w-8 h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                      isActive 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium whitespace-nowrap">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
