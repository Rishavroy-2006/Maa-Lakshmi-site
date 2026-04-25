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
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400",
      "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=400"
    ],
    price: "18999",
    features: ["HD Ready 1366x768 Display", "Smart TV with Built-in Apps", "20W Speaker Output", "3 HDMI | 1 USB Ports"],
    specifications: "##Display##Resolution:HD Ready (1366x768)|Screen Size:32 Inch|Display Type:LED|Refresh Rate:60 Hz##Connectivity##HDMI Ports:3|USB Ports:1|Wi-Fi:Yes|Bluetooth:Yes##Audio##Speaker Output:20W|Sound Technology:Dolby Digital Plus##General##Brand:Samsung|Model:UA32T4340|Warranty:1 Year",
    description: "The Samsung 32\" HD Ready Smart LED TV delivers vibrant visuals and an immersive viewing experience. With built-in Wi-Fi and Bluetooth, stream your favourite content from apps like YouTube, Netflix, and Prime Video directly on the screen.\n\nIts slim design fits perfectly in any room, while the powerful 20W speaker system delivers rich, clear sound.",
    warranty: "1 Year Comprehensive Warranty by Samsung India.\n\nPanel: 1 Year\nAll Parts & Labour: 1 Year\n\nFor warranty service, contact Samsung Care at 1800-40-SAMSUNG or visit the nearest Samsung service centre.",
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
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400"
    ],
    price: "34999",
    features: ["4K Ultra HD (3840x2160)", "WebOS Smart Platform", "AI ThinQ with Voice Control", "4K Upscaling"],
    specifications: "##Display##Resolution:4K Ultra HD (3840x2160)|Screen Size:43 Inch|Display Type:LED|HDR:HDR10 Pro##Connectivity##HDMI Ports:3|USB Ports:2|Wi-Fi:Yes|Bluetooth:5.0##Audio##Speaker Output:20W|Dolby Atmos:Yes##General##Model:43UQ7500PSF|Warranty:1 Year",
    description: "Experience true 4K clarity on the LG 43\" UHD Smart TV. Powered by the α5 Gen5 AI Processor 4K, the TV optimises picture and sound based on the content you're watching.\n\nThe WebOS platform offers a seamless smart TV experience with access to all major streaming apps.",
    warranty: "1 Year Manufacturer Warranty by LG Electronics India.\n\nFor service: Call LG Care at 1800-315-9999 or visit lg.com/in/support",
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
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
      "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=400",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400"
    ],
    price: "59999",
    features: ["Google TV Platform", "Triluminos Pro Display", "Dolby Atmos + DTS:X Audio", "HDMI 2.1 with 4K/120fps"],
    specifications: "##Display##Resolution:4K Ultra HD|Screen Size:55 Inch|Panel:X-Reality PRO|HDR:Dolby Vision / HDR10##Audio##Speaker Output:30W|Dolby Atmos:Yes|DTS:X:Yes##Connectivity##HDMI Ports:4 (HDMI 2.1)|USB Ports:2|Wi-Fi:Wi-Fi 5|Bluetooth:5.0##Smart Features##OS:Google TV|Voice Assistant:Google Assistant|Chromecast:Built-in",
    description: "The Sony BRAVIA 55\" 4K Google TV brings Hollywood to your living room. The X-Reality PRO picture engine upscales every scene to near-4K quality, while Acoustic Multi-Audio™ ensures sound comes exactly where the action is.",
    warranty: "1 Year Comprehensive Warranty by Sony India.\nPanel Warranty: 1 Year\nFor service: 1800-103-7799",
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
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400"
    ],
    price: "",
    features: ["HD Display", "USB Movie Playback", "Wall Mountable", "Slim Bezel Design"],
    specifications: "##Display##Screen Size:24 Inch|Resolution:HD Ready (1366x768)|Display Type:LED##Connectivity##HDMI Ports:1|USB Ports:1##General##Wall Mount:Yes|Brand:Samsung|Warranty:1 Year",
    description: "A compact and versatile LED TV perfect for smaller spaces like bedrooms, kitchens, or study rooms. Supports USB movie playback and can be wall-mounted for a clean look.",
    warranty: "1 Year Manufacturer Warranty",
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
    image: "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/ae7e73aa61ea9dcfa8010030b5a4d9b1d862f01f61a01338906ed65F5d76c3bc.png",
    images: [
      "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/ae7e73aa61ea9dcfa8010030b5a4d9b1d862f01f61a01338906ed65f5d76c3bc.png",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400"
    ],
    price: "42999",
    features: ["5 Star BEE Rating", "Inverter Compressor Technology", "Copper Condenser Coil", "Auto-Restart & Self-Cleaning"],
    specifications: "##General##Capacity:1.5 Ton|Star Rating:5 Star|Type:Split AC|Compressor:Inverter##Performance Features##ISEER:4.7 W/W|Turbo Cool:Yes|Cooling Mode:Yes|Dehumidifier:Yes##Air Flow & Filter Features##Auto Air Swing:Yes|Dust Filter:Yes|Air Swing:4-Way|Auto Clean:Yes##Remote Control Features##Battery Type:2 AA|Sleep Mode:Yes|Timer:On/Off Timer##Installation##Type:Split (Indoor + Outdoor)|Refrigerant:R32|Copper Pipe:Included",
    description: "The Voltas 1.5 Ton 5 Star Inverter AC is designed for India's tough summer conditions. Its Inverter technology adjusts the compressor speed to maintain the desired temperature, saving up to 40% electricity compared to non-inverter ACs.\n\nThe anti-dust filter keeps the indoor air clean and fresh, while the 4-way auto swing ensures even cooling throughout the room.",
    warranty: "1 Year Comprehensive + 5 Years Compressor Warranty by Voltas.\n\nInstallation Details (Split AC):\n- Drilling holes into wall for pipe routing\n- Fixing indoor and outdoor units\n- Copper pipe connection (standard kit)\n- Temperature & gas pressure testing\n\nNote: Core cutting and additional copper pipe charges are extra. Contact our shop for free installation quote.",
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
    images: [
      "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/ae7e73aa61ea9dcfa8010030b5a4d9b1d862f01f61a01338906ed65f5d76c3bc.png"
    ],
    price: "35999",
    features: ["Dual Inverter Compressor", "4-Way Auto Swing", "Anti-Virus Protection Filter", "HD Filter"],
    specifications: "##General##Capacity:1 Ton|Star Rating:3 Star|Type:Split AC|Compressor:Dual Inverter##Performance##ISEER:3.85 W/W|Cooling Capacity:3.5 kW|Turbo Cool:Yes##Filtration##Anti-Virus Filter:Yes|HD Filter:Yes|Auto Clean:Yes##Connectivity##Wi-Fi:Optional|Smart Diagnosis:Yes",
    description: "LG's Dual Inverter compressor technology provides faster cooling and greater energy savings. The Anti-Virus Protection filter keeps your room free from harmful micro-organisms.",
    warranty: "1 Year Comprehensive + 10 Years Compressor Warranty by LG India.",
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
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400"
    ],
    price: "9499",
    features: ["70L Large Tank Capacity", "Honeycomb Cooling Pad", "4-Way Air Deflection", "Auto-Fill Water Level"],
    specifications: "##General##Tank Capacity:70 Litres|Type:Desert Cooler|Coverage Area:Up to 40 sq. m.##Performance##Airflow:2000 m³/hr|Pad Type:Honeycomb|Fan Speed:3##Features##Auto-Fill:Yes|4-Way Air Deflection:Yes|Ice Chamber:Yes|Castor Wheels:Yes",
    description: "The Symphony Sumo 70 Desert Air Cooler is ideal for large rooms and open areas. With a 70L tank and powerful 2000 m³/hr airflow, it provides effective cooling even in dry, hot climates.",
    warranty: "1 Year Warranty by Symphony Ltd.",
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
    images: [
      "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/f5cd08f57cc3b1d1b1a9ac2e9a2e3ad46a1c71010a22a89f50a19106a2776a0c.png"
    ],
    price: "28499",
    features: ["Digital Inverter Technology", "Convertible 5-in-1 Mode", "All Around Cooling", "Frost Free"],
    specifications: "##General##Capacity:253 Litres|Type:Double Door Frost Free|Star Rating:3 Star|Compressor:Digital Inverter##Storage##Fridge Capacity:176 L|Freezer Capacity:77 L|Shelves:Toughened Glass (3)##Features##Convertible Mode:5-in-1|All Around Cooling:Yes|Stabilizer Free:Yes (100V - 300V)|Door Alarm:Yes",
    description: "Samsung's 253L Double Door Refrigerator with Digital Inverter technology adjusts its speed according to the cooling demand, consuming less energy and operating quietly.\n\nThe 5-in-1 Convertible feature lets you convert the freezer to fridge space as per your storage needs.",
    warranty: "1 Year Comprehensive + 10 Years Compressor Warranty by Samsung India.",
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
    images: [
      "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/f5cd08f57cc3b1d1b1a9ac2e9a2e3ad46a1c71010a22a89f50a19106a2776a0c.png"
    ],
    price: "",
    features: ["Door-in-Door Design", "Linear Inverter Compressor", "Smart Diagnosis via App", "Hygiene Fresh+"],
    specifications: "##General##Capacity:687 Litres|Type:Side by Side|Compressor:Linear Inverter##Features##Door-in-Door:Yes|Smart Diagnosis:Yes|Hygiene Fresh+:Yes|Multi-Air Flow:Yes##Dimensions##Height:178.5 cm|Width:91.2 cm|Depth:73.5 cm",
    description: "LG's 687L Side by Side refrigerator is designed for large families. The Door-in-Door feature lets you access frequently used items without opening the main door, preserving cold air.",
    warranty: "1 Year Comprehensive + 10 Years Compressor Warranty by LG India.",
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
    images: [
      "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/f5cd08f57cc3b1d1b1a9ac2e9a2e3ad46a1c71010a22a89f50a19106a2776a0c.png"
    ],
    price: "14999",
    features: ["Direct Cool Technology", "Stabilizer Free Operation", "Large Vegetable Crisper", "5 Star Rating"],
    specifications: "##General##Capacity:190 Litres|Type:Single Door Direct Cool|Star Rating:5 Star##Features##Stabilizer Free:Yes (135V - 290V)|Toughened Glass Shelves:Yes|Crisper:Large##Power##Annual Energy Consumption:101 kWh",
    description: "An ideal refrigerator for small families and bachelor flats. Whirlpool's 190L Direct Cool refrigerator is energy efficient with a 5 Star rating and requires no external stabilizer.",
    warranty: "1 Year Comprehensive + 5 Years Compressor Warranty by Whirlpool India.",
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
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400"
    ],
    price: "",
    features: ["Hard Top Lid", "Tropicalized Compressor", "Low Power Consumption", "Heavy Duty Use"],
    specifications: "##General##Capacity:300 Litres|Type:Hard Top Deep Freezer|Temperature Range:-18°C to -25°C##Features##Tropicalized Compressor:Yes|Interior Lighting:Yes|Lockable Lid:Yes|Drain Pipe:Yes",
    description: "The Blue Star 300L Deep Freezer is built for commercial and heavy-duty use. Ideal for stores, restaurants, and bulk storage. Its tropicalized compressor performs reliably in India's high ambient temperatures.",
    warranty: "1 Year Comprehensive + 5 Years Compressor Warranty by Blue Star.",
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
    images: [
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400"
    ],
    price: "21999",
    features: ["Smart Inverter Motor", "TurboDrum Technology", "Smart Diagnosis via App", "6 Motion DD"],
    specifications: "##General##Capacity:7 Kg|Type:Fully Automatic Top Load|Spin Speed:700 RPM##Motor##Motor Type:Smart Inverter|Motor Warranty:10 Years##Wash Programs##Wash Programs:8|Child Lock:Yes|Delay Start:Yes##Dimensions##Width:54 cm|Depth:57 cm|Height:91 cm",
    description: "LG's 7Kg Top Load washing machine with Smart Inverter Motor offers energy efficiency and quiet operation. The TurboDrum technology creates a powerful water stream for thorough cleaning.",
    warranty: "2 Years Comprehensive Warranty + 10 Years Motor Warranty by LG India.",
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
    images: [
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400"
    ],
    price: "24999",
    features: ["Digital Inverter Motor", "Wobble Technology", "Magic Filter", "Eco Tub Clean"],
    specifications: "##General##Capacity:8 Kg|Type:Fully Automatic Top Load|Spin Speed:700 RPM##Features##Wobble Technology:Yes|Magic Filter:Yes|Child Lock:Yes|Delay End:Yes##Motor##Motor Type:Digital Inverter|Motor Warranty:10 Years",
    description: "Samsung's 8Kg washing machine features Wobble Technology that creates a multi-directional waterfall, ensuring gentle yet effective cleaning for all fabric types.",
    warranty: "3 Years Comprehensive Warranty + 10 Years Motor Warranty by Samsung India.",
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
    images: [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400"
    ],
    price: "2799",
    features: ["750W Powerful Motor", "3 Stainless Steel Jars", "2 Year Warranty", "Anti-Vibration Feet"],
    specifications: "##General##Power:750W|Jars:3 (1.5L + 1L + 0.4L)|Material:Stainless Steel##Features##Overload Protection:Yes|Speed Settings:3 + Pulse|Anti-Vibration:Yes|Suction Feet:Yes",
    description: "Prestige's 750W Mixer Grinder is built for daily Indian cooking. The 3-jar set covers all your grinding, blending, and chopping needs. The powerful motor handles even hard spices with ease.",
    warranty: "2 Years Manufacturer Warranty by Prestige.",
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
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400"
    ],
    price: "2299",
    features: ["2100W High Power", "Feather Touch Controls", "Auto-Off Safety Function", "8 Preset Menus"],
    specifications: "##General##Power:2100W|Power Levels:5|Preset Menus:8##Safety##Auto-Off:Yes|Child Safety Lock:Yes|Residual Heat Indicator:Yes##Dimensions##Weight:1.5 kg|Cord Length:1.5 m",
    description: "Cook faster and safer with the Philips 2100W Induction Cooktop. The feather-touch panel makes it easy to select power levels, and the auto-off function ensures safety when you leave the kitchen.",
    warranty: "2 Years Manufacturer Warranty by Philips India.",
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
    images: [
      "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?w=400"
    ],
    price: "4499",
    features: ["25L Capacity", "Motorized Rotisserie", "Convection + Grill + Bake", "Timer with Auto-Off"],
    specifications: "##General##Capacity:25 Litres|Type:OTG|Functions:Bake, Grill, Rotisserie, Convection##Features##Timer:60 Min|Temperature Range:100°C - 250°C|Motorized Rotisserie:Yes|Interior Lamp:Yes",
    description: "The Bajaj 25L OTG is perfect for baking cakes, grilling chicken, and making pizzas at home. Its motorized rotisserie ensures even cooking, while the 60-minute timer gives you precise control.",
    warranty: "2 Years Warranty by Bajaj Electricals.",
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
    images: [
      "https://images.unsplash.com/photo-1648655757419-22fc8d6e7b21?w=400"
    ],
    price: "6999",
    features: ["Rapid Air Technology", "4.1L Large Capacity", "Digital Touch Display", "Dishwasher Safe Parts"],
    specifications: "##General##Capacity:4.1 Litres|Power:1400W|Display:Digital Touch##Cooking##Temperature Range:80°C - 200°C|Timer:60 Min|Rapid Air Technology:Yes##Accessories##Baking Tray:Included|Basket:Dishwasher Safe",
    description: "Enjoy crispy, guilt-free food with Philips' Rapid Air Technology that uses hot air to fry with little to no oil. The 4.1L basket is large enough for family-size portions.",
    warranty: "2 Years Warranty by Philips India.",
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
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
    ],
    price: "1799",
    features: ["Non-Stick Soleplate", "Steam Boost Function", "Dry & Steam Ironing", "2 Year Warranty"],
    specifications: "##General##Power:1000W|Soleplate:Non-Stick|Type:Steam Iron##Performance##Steam Output:30 g/min|Steam Boost:100 g/min|Water Tank:220 ml",
    description: "The Philips 1000W Steam Iron makes ironing quick and effortless. The smooth non-stick soleplate glides over all fabrics, while the steam boost function removes stubborn wrinkles in one stroke.",
    warranty: "2 Years Manufacturer Warranty by Philips India.",
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
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400",
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400"
    ],
    price: "24999",
    features: ["1000W Total Output Power", "Bluetooth & USB Playback", "Dolby Digital Decoding", "S-Force PRO Front Surround"],
    specifications: "##General##Total Power:1000W RMS|Channels:5.1|Dolby Digital:Yes|DTS:Yes##Connectivity##Bluetooth:Yes|USB:Yes|HDMI ARC:Yes|Optical In:Yes##Speakers##Front:120W x2|Centre:120W|Surround:120W x2|Subwoofer:160W",
    description: "Transform your living room into a cinema with the Sony 5.1 Channel Home Theater. Dolby Digital and DTS surround sound decoding brings movie audio to life, while Bluetooth connectivity lets you stream music wirelessly.",
    warranty: "1 Year Comprehensive Warranty by Sony India.",
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
    images: [
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400"
    ],
    price: "14999",
    features: ["300W Total Output", "Wireless Subwoofer", "HDMI ARC Support", "Dolby Atmos"],
    specifications: "##General##Total Power:300W|Channels:2.1|Dolby Atmos:Yes##Connectivity##HDMI ARC:Yes|Optical:Yes|Bluetooth:5.0|USB:Yes##Soundbar Dimensions##Width:89.6 cm|Height:5.5 cm|Depth:8.7 cm",
    description: "The JBL Bar 2.1 Deep Bass soundbar delivers powerful, room-filling sound with a wireless subwoofer that connects automatically. HDMI ARC lets you control everything with one remote.",
    warranty: "1 Year Warranty by Harman (JBL) India.",
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
    images: [
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400"
    ],
    price: "19999",
    features: ["300W Powerful Output", "Bi-Directional Sound", "LED Party Lights", "Karaoke Mode with Mic Input"],
    specifications: "##General##Total Power:300W|Type:Tower Speaker|Channels:2.0##Features##LED Lights:Yes|Karaoke:Yes (Mic Included)|Bi-Directional Sound:Yes##Connectivity##Bluetooth:Yes|USB:Yes|Optical:Yes|Guitar Input:Yes",
    description: "Party like never before with the Samsung MX-T50 Sound Tower. 300W of power with bi-directional sound fills every corner of the room, while the LED party lights create an immersive atmosphere.",
    warranty: "1 Year Warranty by Samsung India.",
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
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400"
    ],
    price: "1499",
    features: ["High Air Delivery", "Energy Efficient Motor", "5 Year Warranty", "Anti-Dust Coating"],
    specifications: "##General##Sweep:1200mm|RPM:380|Air Delivery:220 CMM|Power:70W##Features##Anti-Dust Blade:Yes|Double Ball Bearing:Yes|Warranty:5 Years",
    description: "Crompton's ceiling fan provides powerful, energy-efficient airflow for large rooms. The anti-dust blade coating keeps the fan looking clean for longer.",
    warranty: "5 Years Motor Warranty by Crompton Greaves.",
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
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400"
    ],
    price: "2199",
    features: ["Adjustable Height (1m - 1.3m)", "3 Speed Settings", "Auto-Oscillation", "Thermal Overload Protection"],
    specifications: "##General##Blade Size:400mm|Power:55W|Speed Settings:3##Features##Oscillation:Yes|Height Adjustment:Yes (100-130 cm)|Thermal Fuse:Yes",
    description: "Orient's 400mm Pedestal Stand Fan is perfect for spot cooling in any room. The adjustable height and wide oscillation ensure comfortable airflow from any angle.",
    warranty: "2 Years Manufacturer Warranty by Orient Electric.",
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
