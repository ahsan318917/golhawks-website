export type Product = {
  id: string;
  name: string;
  spec: string;
  description: string;
  features?: string[];
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
    sampleTime?: string;
    moq: string;
    production?: string;
    shippingTerms?: string;
    packaging?: string;
  };
  customisation: string[];
  filterTabs: string[];
  manufacturingHighlights?: {
    title: string;
    details: string;
  }[];
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
      sampleTime: "7 - 10 Days",
      moq: "100 Pieces / Style",
      production: "OEM / ODM Private Label",
      shippingTerms: "FOB Sialkot / Air & Sea Freight",
      packaging: "Individual Polybag / Master Carton"
    },
    manufacturingHighlights: [
      { title: "Pre-Shrunk Weave", details: "Preshrunk fabric treatment ensures minimal dimensional change (<3%) after washing." },
      { title: "Reinforced Construction", details: "Stress points, armpits, and side slits reinforced with 3-ply heavy bar-tack stitching." },
      { title: "EVA Foam Collar", details: "Molded EVA foam lapel insert resists sweat absorption and maintains collar structure." },
      { title: "Sample Dispatch", details: "Physical counter-sample dispatch within 7-10 working days upon receiving tech pack." }
    ],
    customisation: ["Custom Embroidery", "Woven Patches", "Reinforced Triple Stitching", "EVA Foam Collars"],
    products: [
      { 
        id: "bjj-gi", name: "Pro BJJ Gi", spec: "Pearl Weave 450GSM",
        description: "Our core BJJ Gi is constructed for consistent, heavy-duty mat use. The jacket uses a 450GSM pearl weave cotton that balances weight and breathability, while the pants are built from a durable ripstop blend. Reinforced stress points ensure longevity under regular grappling conditions.",
        features: [
          "Pre-shrunk 450GSM pearl weave cotton jacket",
          "10oz ripstop cotton-polyester blend pants",
          "Thick EVA foam collar to resist gripping",
          "Triple-stitched at all major stress points"
        ],
        intendedUse: "Regular Grappling & Training",
        colors: ["Obsidian Black", "Arctic White", "Royal Blue"],
        fabrics: ["100% Cotton Pearl Weave", "Ripstop Poly-Cotton"],
        images: ["/images/Martial Arts/PRO BJJ GI.png"],
        productType: "Gis", collection: "Pro", gender: "Unisex", tags: ["bjj", "gi", "grappling", "kimono"],
        dateAdded: "2026-06-01", popularity: 95, featured: true
      },
      { 
        id: "karate-gi", name: "Kata Karate Gi", spec: "Heavyweight Canvas",
        description: "A traditional heavyweight Karate Gi designed specifically for kata practitioners. The 14oz canvas cotton provides a stiff, structural fit that produces the distinct 'snap' sound during fast movements, while maintaining enough mobility for deep stances.",
        features: [
          "14oz heavyweight 100% cotton canvas",
          "Traditional Japanese cut with shorter sleeves/trousers",
          "Brushed interior for skin comfort during long sessions",
          "Reinforced lapel with multi-row stitching"
        ],
        intendedUse: "Traditional Martial Arts & Kata",
        colors: ["Arctic White", "Ivory"],
        fabrics: ["14oz Canvas Cotton"],
        images: ["/images/Martial Arts/Kata Karate GI.png"],
        productType: "Gis", collection: "Core", gender: "Unisex", tags: ["karate", "gi", "kata", "kumite"],
        dateAdded: "2026-05-15", popularity: 80, featured: false
      },
      { 
        id: "rash-guard", name: "Combat Rash Guard", spec: "4-Way Stretch Compression",
        description: "A functional, skin-tight rash guard built for No-Gi grappling and MMA training. Manufactured using a high-density polyester-spandex blend, it provides effective muscle compression and protection against mat friction. Graphics are fully sublimated into the fabric to prevent peeling.",
        features: [
          "88% Polyester / 12% Spandex stretch matrix",
          "Flatlock seam construction to prevent skin chafing",
          "Silicone anti-slip waistband interior",
          "Dye-sublimated graphics that won't crack or fade"
        ],
        intendedUse: "No-Gi Grappling & MMA",
        colors: ["Rank Colors", "Custom Sublimation"],
        fabrics: ["88% Polyester / 12% Spandex"],
        images: ["/images/Martial Arts/Rash guard.png"],
        productType: "No-Gi", collection: "Pro", gender: "Men", tags: ["rashguard", "nogi", "mma", "compression"],
        dateAdded: "2026-06-10", popularity: 90, featured: true
      },
      { 
        id: "fight-shorts", name: "MMA Fight Shorts", spec: "Stretch Matrix",
        description: "Lightweight, unrestrictive fight shorts designed for mixed martial arts. The body is constructed from a microfiber stretch woven fabric, featuring high side slits for unrestricted kicking mobility and a locked-in velcro closure system to keep them secure during grappling.",
        features: [
          "Microfiber 4-way stretch body fabric",
          "High lateral slits for maximum leg extension",
          "Internal drawstring with fold-over velcro waistband",
          "Lycra stretch crotch panel for increased mobility"
        ],
        intendedUse: "MMA & Kickboxing",
        colors: ["Matte Black", "Camo"],
        fabrics: ["Microfiber Stretch Matrix"],
        images: ["/images/Martial Arts/MMA Fight Shorts.png"],
        productType: "No-Gi", collection: "Core", gender: "Men", tags: ["shorts", "mma", "nogi"],
        dateAdded: "2026-05-20", popularity: 85, featured: false
      },
      { 
        id: "pro-judo-gi", name: "Pro Judo Gi", spec: "Competition Grade Cotton",
        description: "A robust, competition-grade Judo Gi built to withstand heavy gripping and throwing. The jacket features a thick double-weave cotton top half for grip resistance, transitioning into a diamond weave skirt for flexibility. The knees are double-paneled for durability during groundwork.",
        features: [
          "Heavyweight double-weave cotton jacket top",
          "Diamond weave lower jacket skirt",
          "Reinforced chest, shoulders, and lapel",
          "Double-layered knee panels on trousers"
        ],
        intendedUse: "Judo Grading & Competition",
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
    description: "Premium denim manufacturing for global fashion brands. From heavyweight selvedge to modern washed collections.",
    filterTabs: ["All Products", "Selvedge", "Jackets", "Jeans", "Shirts", "Workwear"],
    specs: {
      weight: "10oz – 16oz",
      composition: "100% Cotton Denim / Stretch Denim / Selvedge",
      leadTime: "5–7 Weeks",
      sampleTime: "7 - 10 Days",
      moq: "150 Pieces / Style",
      production: "OEM / ODM Private Label",
      shippingTerms: "FOB Sialkot / Air & Sea Freight",
      packaging: "Individual Polybag / Master Carton"
    },
    manufacturingHighlights: [
      { title: "Shuttle Loom Selvedge", details: "Authentic selvedge edge weaving and premium elastane-blended indigo denims." },
      { title: "Industrial Wash Finishing", details: "Enzyme, stone wash, laser whisker, and tinting capabilities tailored to brand tech packs." },
      { title: "Heavy-Duty Hardware", details: "Custom brass shank buttons, copper rivets, and debossed genuine leather waist patches." },
      { title: "Sample Dispatch", details: "Physical counter-sample dispatch within 7-10 working days upon receiving tech pack." }
    ],
    customisation: ["Stone Wash", "Acid Wash", "Enzyme Wash", "Laser Distressing", "Embroidery", "Screen Printing", "Leather Patches", "Custom Hardware"],
    products: [
      { 
        id: "selvedge-denim", name: "Selvedge Denim", spec: "Premium Japanese Selvedge",
        description: "Classic straight-leg jeans manufactured using traditional shuttle-loomed selvedge denim. Shipped raw and unwashed, this 14oz fabric is rigid initially but breaks in naturally over time to create a personalized wear pattern unique to the user.",
        features: [
          "14oz raw selvedge denim woven on shuttle looms",
          "Signature red-line selvedge outseam ID",
          "Hidden copper back pocket rivets",
          "Chain-stitched hems for authentic roping fade"
        ],
        intendedUse: "Heritage Streetwear",
        colors: ["Indigo Raw", "Washed Black"],
        fabrics: ["14oz Japanese Selvedge"],
        images: ["/images/Denim Products/Selvedge Denim.png"],
        productType: "Selvedge", collection: "Heritage", gender: "Men", tags: ["jeans", "selvedge", "raw", "denim"],
        dateAdded: "2026-06-05", popularity: 95, featured: true
      },
      { 
        id: "denim-jacket", name: "Denim Jacket", spec: "Classic Trucker Construction",
        description: "A standard Type-III inspired trucker jacket built for reliable everyday wear. Constructed from a versatile 12oz denim, it features a slight stretch blend to improve mobility around the shoulders. Available in raw finishes or factory-washed vintage treatments.",
        features: [
          "12oz cotton denim with 2% elastane for comfort",
          "Classic V-seam front detailing with chest flap pockets",
          "Branded shank button closures",
          "Adjustable waist tabs at the rear hem"
        ],
        intendedUse: "Casual Outerwear",
        colors: ["Vintage Blue", "Overdyed Black"],
        fabrics: ["12oz Stretch Denim"],
        images: ["/images/Denim Products/Denim Jacket.png"],
        productType: "Jackets", collection: "Heritage", gender: "Unisex", tags: ["jacket", "trucker", "outerwear"],
        dateAdded: "2026-05-28", popularity: 88, featured: true
      },
      { 
        id: "denim-jeans", name: "Denim Jeans", spec: "Raw & Washed Denim",
        description: "Our core 5-pocket denim jean designed for bulk retail production. Using a mid-weight 12oz stretch denim, these jeans offer immediate comfort without a break-in period. They can be heavily customized with various industrial washes, distressing, and whiskering profiles.",
        features: [
          "12oz mid-weight denim suitable for year-round wear",
          "Standard 5-pocket construction with coin pocket",
          "Reinforced bartacks at high-stress points",
          "Fully customizable wash and distressing options"
        ],
        intendedUse: "Everyday Retail Wear",
        colors: ["Indigo", "Light Blue", "Black"],
        fabrics: ["12oz Stretch Denim"],
        images: ["/images/Denim Products/Denim Jeans.png"],
        productType: "Jeans", collection: "Core", gender: "Unisex", tags: ["jeans", "denim", "bottoms"],
        dateAdded: "2026-06-15", popularity: 90, featured: false
      },
      { 
        id: "denim-shirt", name: "Denim Shirt", spec: "Lightweight Indigo Denim",
        description: "A breathable, western-inspired denim shirt suitable for layering or standalone wear. Made from a lightweight 6oz chambray cotton, it drapes smoothly while retaining the rugged visual texture of heavier denim. Features classic yoke details and pearl snap fasteners.",
        features: [
          "6oz lightweight cotton chambray fabric",
          "Western-style front and back yokes",
          "Pearl snap button closures throughout",
          "Double-needle chainstitching along side seams"
        ],
        intendedUse: "Smart Casual Wear",
        colors: ["Light Blue", "Indigo"],
        fabrics: ["6oz Cotton Chambray"],
        images: ["/images/Denim Products/Denim Shirt.png"],
        productType: "Shirts", collection: "Core", gender: "Men", tags: ["shirt", "chambray", "top"],
        dateAdded: "2026-06-10", popularity: 82, featured: false
      },
      { 
        id: "denim-workwear", name: "Denim Workwear", spec: "Industrial Utility Collection",
        description: "Heavy-duty denim garments engineered specifically for manual labor and industrial environments. Utilizing a stiff 16oz raw denim, these pieces are constructed with triple-stitched felled seams and reinforced paneling to withstand severe daily abrasion.",
        features: [
          "16oz heavyweight industrial-grade denim",
          "Triple-stitched felled main seams for extreme durability",
          "Double-layered knee and elbow panels",
          "Utility tool pockets and hammer loops"
        ],
        intendedUse: "Industrial Utility & Labor",
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
      sampleTime: "7 - 10 Days",
      moq: "100 Pieces / Color",
      production: "OEM / ODM Private Label",
      shippingTerms: "FOB Sialkot / Air & Sea Freight",
      packaging: "Individual Polybag / Master Carton"
    },
    manufacturingHighlights: [
      { title: "4-Way Stretch Matrix", details: "High-elastane nylon & recycled polyester blends for shape retention and zero transparency." },
      { title: "Flatlock Seam Stitching", details: "Ultra-flat 4-needle 6-thread coverstitch to prevent skin chafing during intense movement." },
      { title: "Moisture Management", details: "Capillary wicking yarns facilitate rapid moisture dispersion and quick drying." },
      { title: "Sample Dispatch", details: "Physical counter-sample dispatch within 7-10 working days upon receiving tech pack." }
    ],
    customisation: ["Sublimation", "Reflective Heat Transfer", "Laser Cut Venting", "Silicone Grippers"],
    products: [
      { 
        id: "compression-wear", name: "Compression Wear", spec: "4-WAY STRETCH COMPRESSION",
        description: "Form-fitting athletic base layers designed to support muscle recovery and regulate body temperature during high-output activities. The fabric applies graduated pressure while actively pulling sweat away from the skin for rapid evaporation.",
        features: [
          "85% Polyester / 15% Spandex performance blend",
          "Graduated compression profile to support circulation",
          "Moisture-wicking capillary yarn technology",
          "Strategic mesh underarm panels for heat dumping"
        ],
        intendedUse: "Athletic Base Layer",
        colors: ["Obsidian Black", "Arctic White", "Crimson"],
        fabrics: ["Poly-Spandex Blend (85/15)"],
        images: ["/images/Performancewear/Compression Wear.png"],
        productType: "COMPRESSION", collection: "Pro", gender: "Men", tags: ["compression", "top", "baselayer", "training"],
        dateAdded: "2026-06-10", popularity: 98, featured: true
      },
      { 
        id: "training-tshirts", name: "Training T-Shirts", spec: "MOISTURE WICKING POLYESTER",
        description: "A standard lightweight athletic tee built for general fitness and gym use. Manufactured using 100% recycled polyester microfiber, it offers excellent breathability and a soft hand-feel, making it an ideal blank canvas for gym branding and merch.",
        features: [
          "100% recycled polyester microfiber construction",
          "Standard athletic fit (not overly compressive)",
          "Anti-odor fabric treatment",
          "Tagless collar design to prevent irritation"
        ],
        intendedUse: "General Fitness & Gym Wear",
        colors: ["White", "Black", "Neon Volt"],
        fabrics: ["100% Recycled Polyester"],
        images: ["/images/Performancewear/Training T-Shirts.png"],
        productType: "TRAINING", collection: "Core", gender: "Unisex", tags: ["tee", "tshirt", "dryfit", "training"],
        dateAdded: "2026-06-25", popularity: 88, featured: false
      },
      { 
        id: "performance-shorts", name: "Performance Shorts", spec: "LIGHTWEIGHT PERFORMANCE FABRIC",
        description: "Versatile training shorts optimized for running, lifting, and cross-training. The woven 4-way stretch shell moves freely without catching on the knees, while hidden zipper pockets provide secure storage for phones and keys during movement.",
        features: [
          "Lightweight 4-way stretch woven outer shell",
          "Laser-cut ventilation perforations on side panels",
          "Low-profile invisible zipper pockets",
          "Elastic waistband with internal drawcord"
        ],
        intendedUse: "Cross-Training & Running",
        colors: ["Matte Black", "Gunmetal Grey"],
        fabrics: ["4-Way Stretch Woven"],
        images: ["/images/Performancewear/Performance Shorts.png"],
        productType: "SHORTS", collection: "Aero", gender: "Men", tags: ["shorts", "training", "running"],
        dateAdded: "2026-06-15", popularity: 90, featured: true
      },
      { 
        id: "performance-legging", name: "Performance Legging", spec: "SECOND-SKIN PERFORMANCE FIT",
        description: "Opaque, squat-proof athletic leggings designed for yoga, running, and high-impact training. The fabric is tightly knit to ensure zero transparency when stretched, while the wide, high-rise waistband provides a secure, flattering fit that stays in place.",
        features: [
          "Tightly knit poly-spandex blend (100% squat-proof)",
          "High-rise, double-layered compression waistband",
          "Drop-in side pockets suitable for smartphones",
          "Flatlock seam construction to prevent chafing"
        ],
        intendedUse: "Activewear & Training",
        colors: ["Carbon Black", "Navy"],
        fabrics: ["Thermal Poly-Blend"],
        images: ["/images/Performancewear/Performance Legging.png"],
        productType: "WOMEN", collection: "Core", gender: "Women", tags: ["baselayer", "thermal", "winter", "leggings"],
        dateAdded: "2026-05-01", popularity: 85, featured: false
      },
      { 
        id: "sports-bras-active-tops", name: "Sports Bras & Active Tops", spec: "HIGH SUPPORT • ACTIVE COMFORT",
        description: "Medium to high-impact sports bras engineered to minimize bounce during rigorous activities. Constructed with a compressive outer layer and a soft, sweat-wicking inner liner, featuring removable molded cups and reinforced elastic underbands.",
        features: [
          "Compressive dual-layer fabric construction",
          "Racerback design for full shoulder blade mobility",
          "Removable perforated foam modesty cups",
          "Brushed elastic underband for secure, chafe-free support"
        ],
        intendedUse: "High-Impact Athletics",
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
    description: "Premium fleece garments engineered for comfort, durability and modern streetwear brands.",
    filterTabs: ["All Products", "Premium Hoodies", "Crewneck", "Joggers", "Zip Hoodies", "Tracksuits"],
    specs: {
      weight: "280–420 GSM",
      composition: "Cotton / Polyester Fleece",
      leadTime: "4–6 Weeks",
      sampleTime: "7 - 10 Days",
      moq: "100 Pieces / Style",
      production: "OEM / ODM Private Label",
      shippingTerms: "FOB Sialkot / Air & Sea Freight",
      packaging: "Individual Polybag / Master Carton"
    },
    manufacturingHighlights: [
      { title: "Heavyweight French Terry", details: "High-density 280-420 GSM cotton fleece pre-washed for soft hand-feel and minimal shrinkage." },
      { title: "Ribbing & Fit Recovery", details: "Heavy 2x2 elastane ribbing at cuffs and hem to maintain elastic recovery over extended wear." },
      { title: "Print & Branding Ready", details: "Smooth combed cotton surface optimized for screen printing, puff ink, and high-density embroidery." },
      { title: "Sample Dispatch", details: "Physical counter-sample dispatch within 7-10 working days upon receiving tech pack." }
    ],
    customisation: ["Screen Printing", "Puff Printing", "Embroidery", "Silicone Badges", "Rubber Patches", "Woven Labels", "DTF Printing", "Reflective Prints"],
    products: [
      { 
        id: "premium-hoodies", name: "Premium Hoodies", spec: "Heavyweight Brushed Fleece",
        description: "A heavyweight streetwear staple designed for premium blank programs. Constructed from a dense 400GSM cotton fleece, this hoodie features a modern, relaxed drop-shoulder fit. The fabric has been pre-washed to minimize shrinkage and provide an ultra-soft hand feel.",
        features: [
          "400GSM heavyweight cotton-rich fleece",
          "Double-lined hood with no drawcords for a clean aesthetic",
          "Drop-shoulder, slightly cropped boxy fit",
          "Heavy 2x2 ribbed cuffs and hem"
        ],
        intendedUse: "Premium Streetwear",
        colors: ["Heather Grey", "Vintage Wash Black"],
        fabrics: ["100% Cotton French Terry"],
        images: ["/images/FLEECE&Streetwear/Premium Hoodies.png"],
        productType: "Premium Hoodies", collection: "Core", gender: "Unisex", tags: ["hoodie", "fleece", "heavyweight", "oversized"],
        dateAdded: "2026-06-10", popularity: 96, featured: true
      },
      { 
        id: "crewneck-sweatshirts", name: "Crewneck Sweatshirts", spec: "Premium Cotton Blend",
        description: "A classic, versatile crewneck pullover suitable for both casual retail and branded merchandise. It uses a medium-weight 320GSM fleece blend that holds its shape well over time. The collar features a reinforced V-stitch insert to prevent stretching around the neckline.",
        features: [
          "320GSM mid-weight cotton-polyester blend fleece",
          "Classic set-in sleeve construction",
          "Reinforced ribbed crew neckline with V-insert",
          "Smooth outer face optimized for screen printing"
        ],
        intendedUse: "Everyday Retail Apparel",
        colors: ["Navy", "Heather Grey", "Black"],
        fabrics: ["Cotton Blend Fleece"],
        images: ["/images/FLEECE&Streetwear/Crewneck&Sweatshirts.png"],
        productType: "Crewneck", collection: "Core", gender: "Unisex", tags: ["crewneck", "sweatshirt", "fleece"],
        dateAdded: "2026-06-12", popularity: 92, featured: true
      },
      { 
        id: "joggers", name: "Joggers", spec: "Tapered Comfort Fit",
        description: "Comfortable, tapered sweatpants designed to pair with our hoodie collection. Featuring a relaxed thigh that tapers aggressively down to a thick, elasticated ankle cuff. The fabric is brushed on the inside for warmth and comfort during colder months.",
        features: [
          "350GSM brushed-back thermal fleece",
          "Tapered athletic fit with elastic ankle cuffs",
          "Deep side pockets and single rear patch pocket",
          "Thick elastic waistband with hidden internal drawcords"
        ],
        intendedUse: "Lifestyle & Lounge Wear",
        colors: ["Heather Grey", "Vintage Wash Black"],
        fabrics: ["French Terry 400GSM"],
        images: ["/images/FLEECE&Streetwear/Joggers.png"],
        productType: "Joggers", collection: "Core", gender: "Unisex", tags: ["joggers", "sweatpants", "fleece", "bottoms"],
        dateAdded: "2026-06-10", popularity: 85, featured: false
      },
      { 
        id: "zip-hoodies", name: "Zip Hoodies", spec: "Full Zip Premium Fleece",
        description: "A functional, full-zip variant of our premium hoodie, built for easy layering. It incorporates a heavy-duty, smooth-gliding metal zipper that runs cleanly from the hem to the collar. The split kangaroo pocket is deep and reinforced at the corners.",
        features: [
          "350GSM cotton-blend brushed fleece",
          "Heavy-duty YKK metal front zipper",
          "Split front kangaroo pockets with bartack reinforcements",
          "Standard, true-to-size layering fit"
        ],
        intendedUse: "Layered Casual Wear",
        colors: ["Black", "Charcoal"],
        fabrics: ["Brushed Cotton Fleece"],
        images: ["/images/FLEECE&Streetwear/Zip Hoodie.png"],
        productType: "Zip Hoodies", collection: "Core", gender: "Unisex", tags: ["zip hoodie", "fleece", "outerwear"],
        dateAdded: "2026-06-15", popularity: 88, featured: false
      },
      { 
        id: "tracksuits-coords", name: "Tracksuits & Co-ords", spec: "Matching Luxury Sets",
        description: "Fully matched top and bottom tracksuit sets designed to be sold as cohesive luxury outfits. Both pieces are cut from the exact same dye lot to ensure flawless color matching. The fit is slightly tailored to offer a sharper, more put-together look than standard sweats.",
        features: [
          "Color-matched 380GSM premium fleece top and bottom",
          "Slightly tailored, modern athletic silhouette",
          "Custom tonal hardware and drawcords",
          "Available for custom side-stripe or paneling requests"
        ],
        intendedUse: "Luxury Streetwear Sets",
        colors: ["Bone", "Mocha", "Black"],
        fabrics: ["Premium Fleece Blend"],
        images: ["/images/FLEECE&Streetwear/Tracksuits & Co-ords.png"],
        productType: "Tracksuits", collection: "Luxury", gender: "Unisex", tags: ["tracksuit", "co-ord", "set", "luxury"],
        dateAdded: "2026-06-20", popularity: 94, featured: true
      }
    ]
  }
};
