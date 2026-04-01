import React, { useState, useMemo } from 'react';
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import UtilityBar from './components/UtilityBar';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import HeroCarousel from './components/HeroCarousel';
import FeatureStrip from './components/FeatureStrip';
import ProductSection from './components/ProductSection';
import BrandShowcase from './components/BrandShowcase';
import ServicesSection from './components/ServicesSection';
import B2BSection from './components/B2BSection';
import ContactSection from './components/ContactSection';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import DemoBanner from './components/DemoBanner';

// Hooks & Data
import { useSheetData } from './hooks/useSheetData';
import { demoCategories, demoFeatures } from './data/demoData';
import { searchProducts, filterByCategory, groupProductsByCategory } from './utils/helpers';

const HomePage = () => {
  const { 
    banners, 
    products, 
    services, 
    brands, 
    features,
    isLoading, 
    isUsingDemoData, 
    refetch 
  } = useSheetData();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    let result = products;
    
    if (searchQuery) {
      result = searchProducts(result, searchQuery);
    }
    
    if (activeCategory) {
      result = filterByCategory(result, activeCategory);
    }
    
    return result;
  }, [products, searchQuery, activeCategory]);

  // Group products by category for section display
  const productsByCategory = useMemo(() => {
    return groupProductsByCategory(products);
  }, [products]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setActiveCategory(null);
  };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  const categories = demoCategories;
  const displayFeatures = features.length > 0 ? features : demoFeatures;

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-600 font-medium">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50" data-testid="home-page">
      {/* Demo Data Banner */}
      {isUsingDemoData && <DemoBanner onRefresh={refetch} />}

      {/* Utility Bar */}
      <UtilityBar />

      {/* Header */}
      <Header 
        categories={categories}
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
      />

      {/* Category Navigation */}
      <CategoryNav 
        categories={categories}
        onCategorySelect={handleCategorySelect}
        activeCategory={activeCategory}
      />

      {/* Hero Carousel */}
      <HeroCarousel banners={banners} />

      {/* Feature Strip */}
      <FeatureStrip features={displayFeatures} />

      {/* Products Section */}
      <div id="products">
        {/* If searching or filtering, show filtered results */}
        {(searchQuery || activeCategory) ? (
          <ProductSection 
            title={activeCategory || `Search: "${searchQuery}"`}
            products={filteredProducts}
            showViewAll={false}
            maxItems={20}
          />
        ) : (
          /* Show category-wise products */
          <>
            {/* TVs & LED */}
            <ProductSection 
              title="Televisions & LED TVs"
              products={products}
              category="TVs & LED"
              onViewAll={() => handleCategorySelect("TVs & LED")}
            />

            {/* Air Conditioners */}
            <ProductSection 
              title="Air Conditioners & Coolers"
              products={products}
              category="Air Conditioners"
              onViewAll={() => handleCategorySelect("Air Conditioners")}
            />

            {/* Refrigerators */}
            <ProductSection 
              title="Refrigerators & Freezers"
              products={products}
              category="Refrigerators"
              onViewAll={() => handleCategorySelect("Refrigerators")}
            />

            {/* Kitchen Appliances */}
            <ProductSection 
              title="Kitchen Appliances"
              products={products}
              category="Kitchen Appliances"
              onViewAll={() => handleCategorySelect("Kitchen Appliances")}
            />

            {/* Washing Machines */}
            <ProductSection 
              title="Washing Machines"
              products={products}
              category="Washing Machines"
              onViewAll={() => handleCategorySelect("Washing Machines")}
            />

            {/* Audio Systems */}
            <ProductSection 
              title="Audio Systems"
              products={products}
              category="Audio Systems"
              onViewAll={() => handleCategorySelect("Audio Systems")}
            />

            {/* Fans & Coolers */}
            <ProductSection 
              title="Fans & Coolers"
              products={products}
              category="Fans & Coolers"
              onViewAll={() => handleCategorySelect("Fans & Coolers")}
            />
          </>
        )}
      </div>

      {/* Brand Showcase */}
      <BrandShowcase brands={brands} />

      {/* Services Section */}
      <div id="services">
        <ServicesSection services={services} />
      </div>

      {/* B2B Section */}
      <B2BSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer categories={categories} />

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
