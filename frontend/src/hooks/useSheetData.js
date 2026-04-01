import { useState, useEffect, useCallback } from 'react';
import { 
  demoBanners, 
  demoProducts, 
  demoCategories, 
  demoServices, 
  demoBrands, 
  demoFeatures 
} from '../data/demoData';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

/**
 * Custom hook for fetching data from Google Sheets via backend API
 * Falls back to demo data if fetch fails
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

    try {
      const response = await fetch(`${API}/sheet-data`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.isDemo) {
        setIsUsingDemoData(true);
        setBanners(demoBanners);
        setProducts(demoProducts);
        setCategories(demoCategories);
        setServices(demoServices);
        setBrands(demoBrands);
        setFeatures(demoFeatures);
      } else {
        setIsUsingDemoData(false);
        setBanners(data.banners || demoBanners);
        setProducts(data.products || demoProducts);
        setCategories(data.categories || demoCategories);
        setServices(data.services || demoServices);
        setBrands(data.brands || demoBrands);
        setFeatures(data.features || demoFeatures);
      }
    } catch (err) {
      console.error('Error fetching sheet data:', err);
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
    refetch
  };
};

export default useSheetData;
