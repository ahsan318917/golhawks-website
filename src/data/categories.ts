export type Product = {
  id: string;
  name: string;
  spec: string;
  description: string;
  intendedUse: string;
  colors: string[];
  fabrics: string[];
  images: string[];
  productType: string;
  collection: string;
  gender: string;
  tags: string[];
  dateAdded: string;
  popularity: number;
  featured: boolean;
};

export type CategoryData = {
  title: string;
  description: string;
  products: Product[];
  specs: {
    weight: string;
    composition: string;
    leadTime: string;
    moq: string;
    production?: string;
  };
  customisation: string[];
  filterTabs: string[];
};

export const CATEGORY_DATA: Record<string, CategoryData> = {
  "martial-arts": {
    title: "MARTIAL ARTS",
    description: "Technical combat apparel engineered for extreme durability and professional performance.",
    filterTabs: ["All Products", "Gis", "No-Gi", "Judo"],
    specs: {
      weight: "450 - 550 GSM",
      composition: "100% Cotton Pearl Weave / Ripstop",
      leadTime: "4 - 6 Weeks",
      moq: "100 Pieces / Style"
    },
    customisation: ["Custom Embroidery", "Woven Patches", "Reinforced Triple Stitching", "EVA Foam Collars"],
    products: [
      { 
        id: "bjj-gi", name: "Pro BJJ Gi", spec: "Pearl Weave 450GSM",
        description: "Tournament-grade Brazilian Jiu-Jitsu Gi engineered with anti-microbial treatments and pre-shrunk fabric.",
        intendedUse: "Professional Grappling",
        colors: ["Obsidian Black", "Arctic White", "Royal Blue"],
        fabrics: ["100% Cotton Pearl Weave", "Ripstop Poly-Cotton"],
        images: ["/images/Martial Arts/PRO BJJ GI.png"],
        productType: "Gis", collection: "Pro", gender: "Unisex", tags: ["bjj", "gi", "grappling", "kimono"],
        dateAdded: "2026-06-01", popularity: 95, featured: true
      },
      { 
        id: "karate-gi", name: "Kata Karate Gi", spec: "Heavyweight Canvas",
        description: "Traditional Karategi built for snap and durability during high-intensity kata and kumite.",
        intendedUse: "Traditional Martial Arts",
        colors: ["Arctic White", "Ivory"],
        fabrics: ["14oz Canvas Cotton"],
        images: ["/images/Martial Arts/Kata Karate GI.png"],
        productType: "Gis", collection: "Core", gender: "Unisex", tags: ["karate", "gi", "kata", "kumite"],
        dateAdded: "2026-05-15", popularity: 80, featured: false
      },
      { 
        id: "rash-guard", name: "Combat Rash Guard", spec: "4-Way Stretch Compression",
        description: "Second-skin combat rash guard featuring fully sublimated graphics that never crack or peel.",
        intendedUse: "No-Gi Grappling & MMA",
        colors: ["Rank Colors", "Custom Sublimation"],
        fabrics: ["88% Polyester / 12% Spandex"],
        images: ["/images/Martial Arts/Rash guard.png"],
        productType: "No-Gi", collection: "Pro", gender: "Men", tags: ["rashguard", "nogi", "mma", "compression"],
        dateAdded: "2026-06-10", popularity: 90, featured: true
      },
      { 
        id: "fight-shorts", name: "MMA Fight Shorts", spec: "Stretch Matrix",
        description: "Ultra-lightweight MMA shorts with high side slits and a locked-in velcro waist system.",
        intendedUse: "MMA & Kickboxing",
        colors: ["Matte Black", "Camo"],
        fabrics: ["Microfiber Stretch Matrix"],
        images: ["/images/Martial Arts/MMA Fight Shorts.png"],
        productType: "No-Gi", collection: "Core", gender: "Men", tags: ["shorts", "mma", "nogi"],
        dateAdded: "2026-05-20", popularity: 85, featured: false
      },
      { 
        id: "pro-judo-gi", name: "Pro Judo Gi", spec: "Competition Grade Cotton",
        description: "Heavyweight double weave Judo Gi designed for maximum throw retention and elite competition standards.",
        intendedUse: "Grading & Competition",
        colors: ["White", "Blue"],
        fabrics: ["100% Cotton Double Weave"],
        images: ["/images/Martial Arts/Pro judo gi.png"],
        productType: "Judo", collection: "Pro", gender: "Unisex", tags: ["judo", "gi", "competition"],
        dateAdded: "2026-06-12", popularity: 88, featured: false
      }
    ]
  },
  "denim": {
    title: "DENIM PRODUCTS",
    description: "Premium denim manufacturing for global fashion brands.\nFrom heavyweight selvedge to modern washed collections,\ncrafted with precision and built for OEM production.",
    filterTabs: ["All Products", "Selvedge", "Jackets", "Jeans", "Shirts", "Workwear"],
    specs: {
      weight: "10oz – 16oz",
      composition: "100% Cotton Denim / Stretch Denim / Selvedge",
      leadTime: "5–7 Weeks",
      moq: "150 Pieces / Style",
      production: "OEM / ODM"
    },
    customisation: ["Stone Wash", "Acid Wash", "Enzyme Wash", "Laser Distressing", "Embroidery", "Screen Printing", "Leather Patches", "Custom Hardware"],
    products: [
      { 
        id: "selvedge-denim", name: "Selvedge Denim", spec: "Premium Japanese Selvedge",
        description: "Classic straight-leg selvedge jeans constructed on vintage shuttle looms for an authentic fade profile.",
        intendedUse: "Premium Streetwear",
        colors: ["Indigo Raw", "Washed Black"],
        fabrics: ["14oz Japanese Selvedge"],
        images: ["/images/Denim Products/Selvedge Denim.png"],
        productType: "Selvedge", collection: "Heritage", gender: "Men", tags: ["jeans", "selvedge", "raw", "denim"],
        dateAdded: "2026-06-05", popularity: 95, featured: true
      },
      { 
        id: "denim-jacket", name: "Denim Jacket", spec: "Classic Trucker Construction",
        description: "Type-III inspired trucker jacket featuring custom-branded hardware and expert hand-scraping details.",
        intendedUse: "Outerwear",
        colors: ["Vintage Blue", "Overdyed Black"],
        fabrics: ["12oz Stretch Denim"],
        images: ["/images/Denim Products/Denim Jacket.png"],
        productType: "Jackets", collection: "Heritage", gender: "Unisex", tags: ["jacket", "trucker", "outerwear"],
        dateAdded: "2026-05-28", popularity: 88, featured: true
      },
      { 
        id: "denim-jeans", name: "Denim Jeans", spec: "Raw & Washed Denim",
        description: "Versatile denim jeans available in multiple washes, offering a perfect balance of comfort and durability.",
        intendedUse: "Everyday Wear",
        colors: ["Indigo", "Light Blue", "Black"],
        fabrics: ["12oz Stretch Denim"],
        images: ["/images/Denim Products/Denim Jeans.png"],
        productType: "Jeans", collection: "Core", gender: "Unisex", tags: ["jeans", "denim", "bottoms"],
        dateAdded: "2026-06-15", popularity: 90, featured: false
      },
      { 
        id: "denim-shirt", name: "Denim Shirt", spec: "Lightweight Indigo Denim",
        description: "Breathable lightweight denim shirt featuring reinforced seams and pearl snap buttons.",
        intendedUse: "Smart Casual Streetwear",
        colors: ["Light Blue", "Indigo"],
        fabrics: ["6oz Cotton Chambray"],
        images: ["/images/Denim Products/Denim Shirt.png"],
        productType: "Shirts", collection: "Core", gender: "Men", tags: ["shirt", "chambray", "top"],
        dateAdded: "2026-06-10", popularity: 82, featured: false
      },
      { 
        id: "denim-workwear", name: "Denim Workwear", spec: "Industrial Utility Collection",
        description: "Heavy-duty denim workwear built for demanding environments with triple-stitched seams.",
        intendedUse: "Industrial Utility",
        colors: ["Raw Indigo", "Charcoal"],
        fabrics: ["16oz Heavyweight Denim"],
        images: ["/images/Denim Products/Denim Workwear.png"],
        productType: "Workwear", collection: "Utility", gender: "Men", tags: ["workwear", "utility", "heavy-duty"],
        dateAdded: "2026-06-20", popularity: 85, featured: true
      }
    ]
  },
  "performance": {
    title: "PERFORMANCE WEAR",
    description: "Advanced compression and moisture-management apparel for professional athletes.",
    filterTabs: ["All Products", "COMPRESSION", "TRAINING", "SHORTS", "WOMEN"],
    specs: {
      weight: "180 - 250 GSM",
      composition: "Nylon Spandex / Recycled Poly",
      leadTime: "4 - 5 Weeks",
      moq: "100 Pieces / Color"
    },
    customisation: ["Sublimation", "Reflective Heat Transfer", "Laser Cut Venting", "Silicone Grippers"],
    products: [
      { 
        id: "compression-wear", name: "Compression Wear", spec: "4-WAY STRETCH COMPRESSION",
        description: "Advanced 4-way stretch compression engineered for elite combat and athletic performance.",
        intendedUse: "Professional Athletics",
        colors: ["Obsidian Black", "Arctic White", "Crimson"],
        fabrics: ["Poly-Spandex Blend (85/15)"],
        images: ["/images/Performancewear/Compression Wear.png"],
        productType: "COMPRESSION", collection: "Pro", gender: "Men", tags: ["compression", "top", "baselayer", "training"],
        dateAdded: "2026-06-10", popularity: 98, featured: true
      },
      { 
        id: "training-tshirts", name: "Training T-Shirts", spec: "MOISTURE WICKING POLYESTER",
        description: "Ultra-breathable training t-shirt using rapid-dry microfiber technology.",
        intendedUse: "General Fitness",
        colors: ["White", "Black", "Neon Volt"],
        fabrics: ["100% Recycled Polyester"],
        images: ["/images/Performancewear/Training T-Shirts.png"],
        productType: "TRAINING", collection: "Core", gender: "Unisex", tags: ["tee", "tshirt", "dryfit", "training"],
        dateAdded: "2026-06-25", popularity: 88, featured: false
      },
      { 
        id: "performance-shorts", name: "Performance Shorts", spec: "LIGHTWEIGHT PERFORMANCE FABRIC",
        description: "High-performance athletic shorts featuring invisible zip pockets and heat-mapped ventilation zones.",
        intendedUse: "Cross-Training & Running",
        colors: ["Matte Black", "Gunmetal Grey"],
        fabrics: ["4-Way Stretch Woven"],
        images: ["/images/Performancewear/Performance Shorts.png"],
        productType: "SHORTS", collection: "Aero", gender: "Men", tags: ["shorts", "training", "running"],
        dateAdded: "2026-06-15", popularity: 90, featured: true
      },
      { 
        id: "performance-legging", name: "Performance Legging", spec: "SECOND-SKIN PERFORMANCE FIT",
        description: "Winter training base layer constructed with brushed inner fleece for maximum heat retention.",
        intendedUse: "Athletics",
        colors: ["Carbon Black", "Navy"],
        fabrics: ["Thermal Poly-Blend"],
        images: ["/images/Performancewear/Performance Legging.png"],
        productType: "WOMEN", collection: "Core", gender: "Women", tags: ["baselayer", "thermal", "winter", "leggings"],
        dateAdded: "2026-05-01", popularity: 85, featured: false
      },
      { 
        id: "sports-bras-active-tops", name: "Sports Bras & Active Tops", spec: "HIGH SUPPORT • ACTIVE COMFORT",
        description: "High-support activewear engineered for maximum comfort and stability during rigorous athletic performance.",
        intendedUse: "Athletics",
        colors: ["Carbon Black", "Navy"],
        fabrics: ["Poly-Spandex Blend (85/15)"],
        images: ["/images/Performancewear/Sports Bras & Active Tops.png"],
        productType: "WOMEN", collection: "Core", gender: "Women", tags: ["sportsbra", "activetop", "training"],
        dateAdded: "2026-06-11", popularity: 92, featured: true
      }
    ]
  },
  "fleece": {
    title: "FLEECE & STREETWEAR",
    description: "Premium fleece garments engineered for comfort, durability and modern streetwear brands. Custom manufacturing for hoodies, sweatshirts, joggers and coordinated apparel collections.",
    filterTabs: ["All Products", "Premium Hoodies", "Crewneck", "Joggers", "Zip Hoodies", "Tracksuits"],
    specs: {
      weight: "280–420 GSM",
      composition: "Cotton / Polyester Fleece",
      leadTime: "4–6 Weeks",
      moq: "100 Pieces / Style"
    },
    customisation: ["Screen Printing", "Puff Printing", "Embroidery", "Silicone Badges", "Rubber Patches", "Woven Labels", "DTF Printing", "Reflective Prints"],
    products: [
      { 
        id: "premium-hoodies", name: "Premium Hoodies", spec: "Heavyweight Brushed Fleece",
        description: "Oversized drop-shoulder hoodie featuring a double-lined hood and zero-shrink fabric processing.",
        intendedUse: "Premium Streetwear",
        colors: ["Heather Grey", "Vintage Wash Black"],
        fabrics: ["100% Cotton French Terry"],
        images: ["/images/FLEECE&Streetwear/Premium Hoodies.png"],
        productType: "Premium Hoodies", collection: "Core", gender: "Unisex", tags: ["hoodie", "fleece", "heavyweight", "oversized"],
        dateAdded: "2026-06-10", popularity: 96, featured: true
      },
      { 
        id: "crewneck-sweatshirts", name: "Crewneck Sweatshirts", spec: "Premium Cotton Blend",
        description: "Classic crewneck sweatshirt with ribbed cuffs and hem, designed for everyday comfort and layering.",
        intendedUse: "Streetwear Essentials",
        colors: ["Navy", "Heather Grey", "Black"],
        fabrics: ["Cotton Blend Fleece"],
        images: ["/images/FLEECE&Streetwear/Crewneck&Sweatshirts.png"],
        productType: "Crewneck", collection: "Core", gender: "Unisex", tags: ["crewneck", "sweatshirt", "fleece"],
        dateAdded: "2026-06-12", popularity: 92, featured: true
      },
      { 
        id: "joggers", name: "Joggers", spec: "Tapered Comfort Fit",
        description: "Relaxed fit sweatpants with heavy-ribbed cuffs and hidden drawcords for a clean aesthetic.",
        intendedUse: "Lifestyle & Recovery",
        colors: ["Heather Grey", "Vintage Wash Black"],
        fabrics: ["French Terry 400GSM"],
        images: ["/images/FLEECE&Streetwear/Joggers.png"],
        productType: "Joggers", collection: "Core", gender: "Unisex", tags: ["joggers", "sweatpants", "fleece", "bottoms"],
        dateAdded: "2026-06-10", popularity: 85, featured: false
      },
      { 
        id: "zip-hoodies", name: "Zip Hoodies", spec: "Full Zip Premium Fleece",
        description: "Premium full-zip hoodie with heavyweight metal hardware and structured hood design.",
        intendedUse: "Layered Streetwear",
        colors: ["Black", "Charcoal"],
        fabrics: ["Brushed Cotton Fleece"],
        images: ["/images/FLEECE&Streetwear/Zip Hoodie.png"],
        productType: "Zip Hoodies", collection: "Core", gender: "Unisex", tags: ["zip hoodie", "fleece", "outerwear"],
        dateAdded: "2026-06-15", popularity: 88, featured: false
      },
      { 
        id: "tracksuits-coords", name: "Tracksuits & Co-ords", spec: "Matching Luxury Sets",
        description: "Coordinated luxury fleece sets engineered for a cohesive and elevated streetwear look.",
        intendedUse: "Luxury Streetwear",
        colors: ["Bone", "Mocha", "Black"],
        fabrics: ["Premium Fleece Blend"],
        images: ["/images/FLEECE&Streetwear/Tracksuits & Co-ords.png"],
        productType: "Tracksuits", collection: "Luxury", gender: "Unisex", tags: ["tracksuit", "co-ord", "set", "luxury"],
        dateAdded: "2026-06-20", popularity: 94, featured: true
      }
    ]
  }
};
