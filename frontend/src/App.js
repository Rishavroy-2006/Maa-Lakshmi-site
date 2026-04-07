import React, { useState, useMemo } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import HeroCarousel from "./components/HeroCarousel";
import FeatureStrip from "./components/FeatureStrip";
import ProductSection from "./components/ProductSection";
import BrandShowcase from "./components/BrandShowcase";
import ServicesSection from "./components/ServicesSection";
import B2BSection from "./components/B2BSection";
import ContactSection from "./components/ContactSection";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import DemoBanner from "./components/DemoBanner";

// Hooks & Data
import { useSheetData } from "./hooks/useSheetData";
import { demoCategories, demoFeatures } from "./data/demoData";
import { searchProducts, filterByCategory } from "./utils/helpers";

const HomePage = () => {
  const {
    banners,
    products,
    categories: categoriesData,
    services,
    brands,
    features,
    isLoading,
    isUsingDemoData,
    error,
    refetch,
  } = useSheetData();

  const [searchQuery, setSearchQuery] = useState("");
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

  // Featured products are controlled by `featured=true` in sheet rows.
  const featuredProducts = useMemo(() => {
    return products.filter((product) => product.featured === true);
  }, [products]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setActiveCategory(null);
  };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setSearchQuery("");
  };

  const handleResetFilters = () => {
    setActiveCategory(null);
    setSearchQuery("");
  };

  const categories = categoriesData?.length ? categoriesData : demoCategories;
  const displayCategories = categories.filter((category) => category?.name);
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
    <div
      className="min-h-screen bg-slate-50 overflow-x-hidden"
      data-testid="home-page"
    >
      {/* Demo Data Banner */}
      {isUsingDemoData && <DemoBanner onRefresh={refetch} />}

      {/* Inline SheetDB Error Banner */}
      {error && (
        <div
          className="bg-red-50 border-b border-red-200 py-2 px-4"
          data-testid="sheetdb-error-banner"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
            <span className="text-red-700 font-medium">
              Live catalogue data could not be loaded. Showing fallback data.
            </span>
            <button
              onClick={refetch}
              data-testid="sheetdb-error-retry-btn"
              className="ml-2 text-red-700 hover:text-red-900 underline"
            >
              Retry
            </button>
          </div>
        </div>
      )}

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

      {/* Feature Strip - Below Hero, Like Reference */}
      <FeatureStrip />

      {/* Products Section */}
      <div id="products">
        {/* If searching or filtering, show filtered results */}
        {searchQuery || activeCategory ? (
          <ProductSection
            title={activeCategory || `Search: "${searchQuery}"`}
            products={filteredProducts}
            showViewAll={false}
            maxItems={20}
          />
        ) : (
          /* Show category-wise products (dynamic from fetched categories) */
          <>
            {featuredProducts.length > 0 && (
              <ProductSection
                title="Featured Products"
                products={featuredProducts}
                showViewAll={false}
                maxItems={10}
              />
            )}

            {displayCategories.map((category) => (
              <ProductSection
                key={category.id || category.name}
                title={category.name}
                products={products}
                category={category.name}
                onViewAll={() => handleCategorySelect(category.name)}
              />
            ))}
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
      <Footer
        categories={displayCategories}
        onCategorySelect={handleCategorySelect}
        onResetFilters={handleResetFilters}
      />

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
