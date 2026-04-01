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
      className="bg-white border-b border-slate-200 sticky top-[72px] sm:top-[76px] z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1 sm:gap-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Home;
            const isActive = activeCategory === category.name;
            
            return (
              <button
                key={category.id}
                data-testid={`category-nav-${category.id}`}
                onClick={() => handleCategoryClick(category.name)}
                className={`category-item flex flex-col items-center justify-center min-w-[70px] sm:min-w-[80px] p-2 rounded-lg transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <div 
                  className={`category-icon w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-1 transition-colors ${
                    isActive 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-center leading-tight whitespace-nowrap">
                  {category.name.length > 12 
                    ? category.name.split(' ').slice(0, 2).join(' ') 
                    : category.name}
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
