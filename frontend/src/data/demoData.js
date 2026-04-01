// Demo data for MA LAKSHMI RADIO SALES & SERVICE
// This data is used as fallback when Google Sheets fetch fails

export const WHATSAPP_NUMBER = "918777252242";
export const PHONE_NUMBER = "+91 8777252242";
export const SHOP_NAME = "MA LAKSHMI RADIO SALES & SERVICE";
export const SHOP_ADDRESS = "Dasnagar, Howrah, West Bengal – 711108";

export const demoBanners = [
  {
    id: 1,
    title: "Best Deals on LED TVs",
    subtitle: "32\" to 65\" Smart TVs from Top Brands",
    image: "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/eaea51a459c5fcad67e7704b93615f14273a623f13953a44c94f33a93b962a52.png",
    ctaText: "Get Best Price",
    category: "TVs",
    priority: 1
  },
  {
    id: 2,
    title: "AC Installation & Service",
    subtitle: "Expert Installation | Annual Maintenance | Gas Refilling",
    image: "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/55b9e489695c10d7aa91c449e6c74d2835ddf4664f5829c7ed3f27254dbf3106.png",
    ctaText: "Book Now",
    category: "Services",
    priority: 2
  },
  {
    id: 3,
    title: "Refrigerator & Washing Machine",
    subtitle: "Festive Offers on Top Brands",
    image: "https://images.pexels.com/photos/7614540/pexels-photo-7614540.jpeg",
    ctaText: "Enquire Now",
    category: "Appliances",
    priority: 3
  },
  {
    id: 4,
    title: "EMI & Finance Available",
    subtitle: "Easy EMI Options | 0% Down Payment | Quick Approval",
    image: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg",
    ctaText: "Know More",
    category: "Finance",
    priority: 4
  }
];

export const demoProducts = [
  // TVs & LED
  {
    id: "tv-001",
    name: "Samsung 32\" HD Ready Smart LED TV",
    brand: "Samsung",
    category: "TVs & LED",
    subcategory: "32 LED",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    features: ["HD Ready Display", "Smart TV with Apps", "20W Speaker Output"],
    inStock: true,
    offer: "Festival Sale",
    priority: 1
  },
  {
    id: "tv-002",
    name: "LG 43\" 4K Ultra HD Smart LED TV",
    brand: "LG",
    category: "TVs & LED",
    subcategory: "43 LED",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    features: ["4K Ultra HD", "WebOS Smart Platform", "AI ThinQ"],
    inStock: true,
    offer: "Best Seller",
    priority: 2
  },
  {
    id: "tv-003",
    name: "Sony 55\" 4K Android Smart TV",
    brand: "Sony",
    category: "TVs & LED",
    subcategory: "55 LED",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    features: ["Google TV", "Triluminos Display", "Dolby Atmos"],
    inStock: true,
    offer: "Premium Choice",
    priority: 3
  },
  {
    id: "tv-004",
    name: "Samsung 24\" LED Monitor TV",
    brand: "Samsung",
    category: "TVs & LED",
    subcategory: "24 LED",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    features: ["HD Display", "USB Movie Playback", "Wall Mountable"],
    inStock: true,
    offer: "",
    priority: 4
  },

  // Air Conditioners
  {
    id: "ac-001",
    name: "Voltas 1.5 Ton 5 Star Inverter Split AC",
    brand: "Voltas",
    category: "Air Conditioners",
    subcategory: "AC",
    image: "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/ae7e73aa61ea9dcfa8010030b5a4d9b1d862f01f61a01338906ed65f5d76c3bc.png",
    features: ["5 Star Rating", "Inverter Technology", "Copper Condenser"],
    inStock: true,
    offer: "Summer Special",
    priority: 1
  },
  {
    id: "ac-002",
    name: "LG 1 Ton 3 Star Dual Inverter Split AC",
    brand: "LG",
    category: "Air Conditioners",
    subcategory: "AC",
    image: "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/ae7e73aa61ea9dcfa8010030b5a4d9b1d862f01f61a01338906ed65f5d76c3bc.png",
    features: ["Dual Inverter", "4-Way Swing", "Anti-Virus Protection"],
    inStock: true,
    offer: "",
    priority: 2
  },
  {
    id: "ac-003",
    name: "Symphony 70L Desert Air Cooler",
    brand: "Symphony",
    category: "Air Conditioners",
    subcategory: "Cooler",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400",
    features: ["70L Tank", "Honeycomb Pad", "4-Way Air Deflection"],
    inStock: true,
    offer: "Hot Deal",
    priority: 3
  },

  // Refrigerators
  {
    id: "ref-001",
    name: "Samsung 253L Frost Free Double Door Refrigerator",
    brand: "Samsung",
    category: "Refrigerators",
    subcategory: "Frost Free Refrigerator",
    image: "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/f5cd08f57cc3b1d1b1a9ac2e9a2e3ad46a1c71010a22a89f50a19106a2776a0c.png",
    features: ["Digital Inverter", "Convertible 5-in-1", "All Around Cooling"],
    inStock: true,
    offer: "Best Seller",
    priority: 1
  },
  {
    id: "ref-002",
    name: "LG 687L Side by Side Refrigerator",
    brand: "LG",
    category: "Refrigerators",
    subcategory: "Side by Side Refrigerator",
    image: "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/f5cd08f57cc3b1d1b1a9ac2e9a2e3ad46a1c71010a22a89f50a19106a2776a0c.png",
    features: ["Door-in-Door", "Linear Inverter", "Smart Diagnosis"],
    inStock: true,
    offer: "Premium",
    priority: 2
  },
  {
    id: "ref-003",
    name: "Whirlpool 190L Single Door Refrigerator",
    brand: "Whirlpool",
    category: "Refrigerators",
    subcategory: "Refrigerator",
    image: "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/f5cd08f57cc3b1d1b1a9ac2e9a2e3ad46a1c71010a22a89f50a19106a2776a0c.png",
    features: ["Direct Cool", "Stabilizer Free", "Large Vegetable Crisper"],
    inStock: true,
    offer: "",
    priority: 3
  },
  {
    id: "ref-004",
    name: "Blue Star 300L Deep Freezer",
    brand: "Blue Star",
    category: "Refrigerators",
    subcategory: "Deep Freezer",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400",
    features: ["Hard Top", "Tropicalized Compressor", "Low Power Consumption"],
    inStock: true,
    offer: "Commercial",
    priority: 4
  },

  // Washing Machines
  {
    id: "wm-001",
    name: "LG 7Kg Fully Automatic Top Load Washing Machine",
    brand: "LG",
    category: "Washing Machines",
    subcategory: "Top Load Washing Machine",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
    features: ["Smart Inverter", "TurboDrum", "Smart Diagnosis"],
    inStock: true,
    offer: "Popular",
    priority: 1
  },
  {
    id: "wm-002",
    name: "Samsung 8Kg Fully Automatic Top Load",
    brand: "Samsung",
    category: "Washing Machines",
    subcategory: "Top Load Washing Machine",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
    features: ["Digital Inverter", "Wobble Technology", "Magic Filter"],
    inStock: true,
    offer: "",
    priority: 2
  },

  // Kitchen Appliances
  {
    id: "ka-001",
    name: "Prestige 750W Mixer Grinder",
    brand: "Prestige",
    category: "Kitchen Appliances",
    subcategory: "Mixer Grinder",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400",
    features: ["750W Motor", "3 Stainless Steel Jars", "2 Year Warranty"],
    inStock: true,
    offer: "Best Value",
    priority: 1
  },
  {
    id: "ka-002",
    name: "Philips 2100W Induction Cooktop",
    brand: "Philips",
    category: "Kitchen Appliances",
    subcategory: "Induction",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    features: ["2100W Power", "Feather Touch", "Auto-Off Function"],
    inStock: true,
    offer: "",
    priority: 2
  },
  {
    id: "ka-003",
    name: "Bajaj 25L OTG Oven",
    brand: "Bajaj",
    category: "Kitchen Appliances",
    subcategory: "OTG",
    image: "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?w=400",
    features: ["25L Capacity", "Motorized Rotisserie", "Timer Function"],
    inStock: true,
    offer: "New Arrival",
    priority: 3
  },
  {
    id: "ka-004",
    name: "Philips 4.1L Air Fryer",
    brand: "Philips",
    category: "Kitchen Appliances",
    subcategory: "Air Fryer",
    image: "https://images.unsplash.com/photo-1648655757419-22fc8d6e7b21?w=400",
    features: ["Rapid Air Technology", "4.1L Capacity", "Digital Display"],
    inStock: true,
    offer: "Trending",
    priority: 4
  },
  {
    id: "ka-005",
    name: "Philips 1000W Steam Iron",
    brand: "Philips",
    category: "Kitchen Appliances",
    subcategory: "Iron",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    features: ["Non-Stick Soleplate", "Steam Boost", "2 Year Warranty"],
    inStock: true,
    offer: "",
    priority: 5
  },

  // Audio Systems
  {
    id: "au-001",
    name: "Sony 5.1 Channel Home Theater System",
    brand: "Sony",
    category: "Audio Systems",
    subcategory: "Home Theater",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400",
    features: ["1000W Output", "Bluetooth", "USB Playback"],
    inStock: true,
    offer: "Premium",
    priority: 1
  },
  {
    id: "au-002",
    name: "JBL 2.1 Channel Sound Bar",
    brand: "JBL",
    category: "Audio Systems",
    subcategory: "Sound Bar",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400",
    features: ["300W Output", "Wireless Subwoofer", "HDMI ARC"],
    inStock: true,
    offer: "Best Seller",
    priority: 2
  },
  {
    id: "au-003",
    name: "Samsung Sound Tower 300W",
    brand: "Samsung",
    category: "Audio Systems",
    subcategory: "Sound Tower",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400",
    features: ["Bi-Directional Sound", "LED Party Lights", "Karaoke Mode"],
    inStock: true,
    offer: "Party Special",
    priority: 3
  },

  // Fans & Coolers
  {
    id: "fan-001",
    name: "Crompton 1200mm Ceiling Fan",
    brand: "Crompton",
    category: "Fans & Coolers",
    subcategory: "Ceiling Fan",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400",
    features: ["High Speed", "Energy Efficient", "5 Year Warranty"],
    inStock: true,
    offer: "",
    priority: 1
  },
  {
    id: "fan-002",
    name: "Orient Stand Fan 400mm",
    brand: "Orient",
    category: "Fans & Coolers",
    subcategory: "Stand Pedestal Fan",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400",
    features: ["Adjustable Height", "3 Speed Setting", "Oscillation"],
    inStock: true,
    offer: "",
    priority: 2
  }
];

export const demoCategories = [
  { id: "cat-1", name: "TVs & LED", icon: "Tv", count: 45 },
  { id: "cat-2", name: "Air Conditioners", icon: "Snowflake", count: 28 },
  { id: "cat-3", name: "Refrigerators", icon: "Refrigerator", count: 35 },
  { id: "cat-4", name: "Washing Machines", icon: "WashingMachine", count: 22 },
  { id: "cat-5", name: "Kitchen Appliances", icon: "ChefHat", count: 65 },
  { id: "cat-6", name: "Audio Systems", icon: "Speaker", count: 18 },
  { id: "cat-7", name: "Fans & Coolers", icon: "Fan", count: 30 },
  { id: "cat-8", name: "Home Essentials", icon: "Home", count: 40 },
  { id: "cat-9", name: "Repair & Service", icon: "Wrench", count: 0 }
];

export const demoServices = [
  {
    id: "srv-1",
    title: "Home Delivery",
    description: "Free delivery within Howrah & Kolkata for orders above ₹5000",
    icon: "Truck"
  },
  {
    id: "srv-2",
    title: "Free Installation",
    description: "Expert installation for ACs, TVs & major appliances",
    icon: "Wrench"
  },
  {
    id: "srv-3",
    title: "Technician Support",
    description: "Certified technicians for repairs & maintenance",
    icon: "UserCheck"
  },
  {
    id: "srv-4",
    title: "AC Servicing",
    description: "Gas refilling, cleaning & annual maintenance contracts",
    icon: "Snowflake"
  },
  {
    id: "srv-5",
    title: "Warranty Support",
    description: "Hassle-free warranty claims & extended warranty options",
    icon: "Shield"
  },
  {
    id: "srv-6",
    title: "Bulk Orders",
    description: "Special pricing for corporate & bulk purchases",
    icon: "Building"
  }
];

export const demoBrands = [
  "Samsung",
  "LG",
  "Sony",
  "Whirlpool",
  "Voltas",
  "Haier",
  "Godrej",
  "Panasonic",
  "Philips",
  "Crompton",
  "Orient",
  "Bajaj"
];

export const demoFeatures = [
  { icon: "Truck", text: "Home Delivery" },
  { icon: "Wrench", text: "Free Installation" },
  { icon: "CreditCard", text: "EMI Available" },
  { icon: "Shield", text: "Warranty Support" },
  { icon: "UserCheck", text: "Expert Technicians" },
  { icon: "Building", text: "Bulk Orders" }
];
