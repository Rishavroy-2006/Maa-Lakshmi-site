import { useState, useEffect, useCallback } from "react";
import {
  demoBanners,
  demoProducts,
  demoCategories,
  demoServices,
  demoBrands,
  demoFeatures,
} from "../data/demoData";
import {
  SHEETDB_CONFIG,
  transformSheetProduct,
  transformSheetBanner,
  parseRowsFromResponse,
} from "../config/sheetdb";

/**
 * Custom hook for fetching data directly from SheetDB API
 * Falls back to demo data if fetch fails or SheetDB is not configured
 */
export const useSheetData = () => {
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [brands, setBrands] = useState([]);
  const [features, setFeatures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUsingDemoData, setIsUsingDemoData] = useState(false);
  const [error, setError] = useState(null);

  const fetchSheetData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    // Check if SheetDB is enabled and configured
    if (!SHEETDB_CONFIG.enabled || !SHEETDB_CONFIG.productsUrl) {
      console.log("SheetDB not configured, using demo data");
      setIsUsingDemoData(true);
      setBanners(demoBanners);
      setProducts(demoProducts);
      setCategories(demoCategories);
      setServices(demoServices);
      setBrands(demoBrands);
      setFeatures(demoFeatures);
      setIsLoading(false);
      return;
    }

    try {
      // Fetch products from configured source (SheetDB JSON or CSV)
      const productsResponse = await fetch(SHEETDB_CONFIG.productsUrl);

      if (!productsResponse.ok) {
        throw new Error(`Products fetch failed: ${productsResponse.status}`);
      }

      const productsData = await parseRowsFromResponse(
        productsResponse,
        SHEETDB_CONFIG.productsUrl,
      );

      // Transform products data
      const transformedProducts = Array.isArray(productsData)
        ? productsData.map(transformSheetProduct).filter((p) => p.name)
        : [];

      // Normalize text fields from sheet rows to avoid empty/invalid categories in UI
      const normalizedProducts = transformedProducts.map((product) => ({
        ...product,
        name:
          typeof product.name === "string" ? product.name.trim() : product.name,
        brand:
          typeof product.brand === "string"
            ? product.brand.trim()
            : product.brand,
        category:
          typeof product.category === "string"
            ? product.category.trim()
            : product.category,
      }));

      // Fetch banners if URL is configured
      let transformedBanners = demoBanners;
      if (SHEETDB_CONFIG.bannersUrl) {
        try {
          const bannersResponse = await fetch(SHEETDB_CONFIG.bannersUrl);
          if (bannersResponse.ok) {
            const bannersData = await parseRowsFromResponse(
              bannersResponse,
              SHEETDB_CONFIG.bannersUrl,
            );
            transformedBanners = Array.isArray(bannersData)
              ? bannersData.map(transformSheetBanner).filter((b) => b.title)
              : demoBanners;
          }
        } catch (bannerErr) {
          console.warn("Failed to fetch banners, using demo:", bannerErr);
        }
      }

      // Check if we got valid data
      if (normalizedProducts.length > 0) {
        setIsUsingDemoData(false);
        setProducts(normalizedProducts);
        setBanners(
          transformedBanners.length > 0 ? transformedBanners : demoBanners,
        );

        // Extract unique categories from products
        const uniqueCategories = [
          ...new Set(
            normalizedProducts
              .map((p) =>
                typeof p.category === "string" ? p.category.trim() : "",
              )
              .filter(Boolean),
          ),
        ];
        const categoryObjects = uniqueCategories.map((cat, index) => ({
          id: `cat-${index + 1}`,
          name: cat,
          icon: getCategoryIcon(cat),
          count: normalizedProducts.filter((p) => p.category === cat).length,
        }));
        setCategories(
          categoryObjects.length > 0 ? categoryObjects : demoCategories,
        );

        // Extract unique brands
        const uniqueBrands = [
          ...new Set(normalizedProducts.map((p) => p.brand)),
        ].filter(Boolean);
        setBrands(uniqueBrands.length > 0 ? uniqueBrands : demoBrands);
      } else {
        // No valid products, use demo data
        setIsUsingDemoData(true);
        setBanners(demoBanners);
        setProducts(demoProducts);
        setCategories(demoCategories);
        setBrands(demoBrands);
      }

      // Always use demo for services and features (static content)
      setServices(demoServices);
      setFeatures(demoFeatures);
    } catch (err) {
      console.error("Error fetching sheet data:", err);
      setError(err.message);
      setIsUsingDemoData(true);

      // Use demo data as fallback
      setBanners(demoBanners);
      setProducts(demoProducts);
      setCategories(demoCategories);
      setServices(demoServices);
      setBrands(demoBrands);
      setFeatures(demoFeatures);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSheetData();
  }, [fetchSheetData]);

  const refetch = () => {
    fetchSheetData();
  };

  return {
    banners,
    products,
    categories,
    services,
    brands,
    features,
    isLoading,
    isUsingDemoData,
    error,
    refetch,
  };
};

// Helper function to map category names to icons
const getCategoryIcon = (categoryName) => {
  const iconMap = {
    "TVs & LED": "Tv",
    "Air Conditioners": "Snowflake",
    Refrigerators: "Refrigerator",
    "Washing Machines": "WashingMachine",
    "Kitchen Appliances": "ChefHat",
    "Audio Systems": "Speaker",
    "Fans & Coolers": "Fan",
    "Home Essentials": "Home",
    "Repair & Service": "Wrench",
  };
  return iconMap[categoryName] || "Home";
};

export default useSheetData;
