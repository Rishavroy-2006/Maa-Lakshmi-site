// SheetDB Configuration
// Replace this URL with your SheetDB API endpoint after setup

// HOW TO SET UP SHEETDB:
// 1. Create a Google Sheet with your products data
// 2. Go to https://sheetdb.io/ and create a free account
// 3. Connect your Google Sheet to SheetDB
// 4. Copy the API URL and paste it below
// 5. Make sure your sheet has columns: id, name, brand, category, subcategory, image, features, inStock, featured, priority
// 6. Optional highlight badge text column: offer (or highlight)

// For banners sheet, use columns: id, title, subtitle, image, ctaText, category, priority

export const SHEETDB_CONFIG = {
  // Main products source URL - supports SheetDB JSON or published Google Sheet CSV
  productsUrl:
    process.env.REACT_APP_PRODUCTS_CSV_URL ||
    process.env.REACT_APP_SHEETDB_PRODUCTS_URL ||
    "",

  // Banners source URL (optional) - supports SheetDB JSON or published CSV
  bannersUrl:
    process.env.REACT_APP_BANNERS_CSV_URL ||
    process.env.REACT_APP_SHEETDB_BANNERS_URL ||
    "",

  // Enable/disable external sheet data source (set to false to always use demo data)
  enabled: process.env.REACT_APP_SHEETDB_ENABLED !== "false",
};

// Detect whether a configured URL is CSV based
export const isCsvUrl = (url = "") => {
  return /output=csv/i.test(url) || /\.csv(?:$|\?)/i.test(url);
};

// Parse one CSV row with quoted-field support
const parseCsvLine = (line) => {
  const cells = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      cells.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  cells.push(current);
  return cells;
};

// Convert CSV text into row objects using first row as headers
export const parseCsvToRows = (csvText = "") => {
  const lines = csvText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    return [];
  }

  const headers = parseCsvLine(lines[0]).map((header) => header.trim());

  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const row = {};

    headers.forEach((header, index) => {
      row[header] = (values[index] || "").trim();
    });

    return row;
  });
};

// Parse rows from either JSON API response or CSV response
export const parseRowsFromResponse = async (response, sourceUrl = "") => {
  const contentType = response.headers.get("content-type") || "";
  const treatAsCsv =
    isCsvUrl(sourceUrl) ||
    /text\/csv|application\/csv|text\/plain/i.test(contentType);

  if (treatAsCsv) {
    const csvText = await response.text();
    return parseCsvToRows(csvText);
  }

  const jsonData = await response.json();
  return Array.isArray(jsonData) ? jsonData : [];
};

// Read row fields in a case-insensitive way and support aliases
const getRowValue = (row = {}, keys = []) => {
  const entries = Object.entries(row || {});

  for (const key of keys) {
    const matchedEntry = entries.find(
      ([rowKey]) => rowKey.toLowerCase() === key.toLowerCase(),
    );

    if (
      matchedEntry &&
      matchedEntry[1] !== undefined &&
      matchedEntry[1] !== null
    ) {
      const value =
        typeof matchedEntry[1] === "string"
          ? matchedEntry[1].trim()
          : matchedEntry[1];
      if (value !== "") {
        return value;
      }
    }
  }

  return "";
};

const parseBooleanValue = (value) => {
  if (typeof value === "boolean") {
    return value;
  }

  const normalized = String(value || "")
    .trim()
    .toLowerCase();

  return ["true", "1", "yes", "y", "in stock", "instock"].includes(normalized);
};

// Transform raw sheet data to product format
export const transformSheetProduct = (row) => {
  const featuresText = getRowValue(row, ["features", "feature", "highlights", "highlight"]);
  const highlightText = getRowValue(row, [
    "offer",
    "badge",
    "tag",
    "label",
  ]);
  const isFeatured = parseBooleanValue(
    getRowValue(row, ["featured", "isFeatured", "is_featured"]),
  );

  // Parse images: pipe-separated URLs in "images" column, or fall back to "image"
  const imagesText = getRowValue(row, ["images", "image_urls", "imageUrls"]);
  const singleImage = getRowValue(row, ["image", "imageUrl", "imageURL"]);
  const images = imagesText
    ? imagesText.split("|").map((u) => u.trim()).filter(Boolean)
    : singleImage
    ? [singleImage]
    : [];

  return {
    id: getRowValue(row, ["id"]) || String(Math.random()),
    name: getRowValue(row, ["name"]),
    brand: getRowValue(row, ["brand"]),
    category: getRowValue(row, ["category"]),
    subcategory: getRowValue(row, [
      "subcategory",
      "subCategory",
      "sub_category",
    ]),
    image: images[0] || "",
    images,
    price: getRowValue(row, ["price", "Price"]) || "",
    features: featuresText
      ? featuresText
          .split("|")
          .map((f) => f.trim())
          .filter(Boolean)
      : [],
    specifications: getRowValue(row, ["specifications", "specs", "Specifications"]) || "",
    description: getRowValue(row, ["description", "desc", "Description"]) || "",
    warranty: getRowValue(row, ["warranty", "Warranty"]) || "",
    inStock: parseBooleanValue(
      getRowValue(row, ["inStock", "in_stock", "stock", "availability"]),
    ),
    featured: isFeatured,
    offer: String(highlightText || ""),
    priority:
      parseInt(getRowValue(row, ["priority", "sort", "rank"]), 10) || 99,
  };
};

// Transform raw sheet data to banner format
export const transformSheetBanner = (row) => {
  return {
    id: row.id || String(Math.random()),
    title: row.title || "",
    subtitle: row.subtitle || "",
    image: row.image || "",
    ctaText: row.ctaText || "Enquire Now",
    category: row.category || "",
    priority: parseInt(row.priority) || 99,
  };
};
