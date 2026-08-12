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
    description: "Technical combat apparel engineered for extreme durability, traditional cuts, and professional performance.",
    filterTabs: ["All Products", "BJJ Gis", "Kata Karate Gis", "Taekwondo Uniforms", "Judo Gis", "No-Gi Rashguards", "MMA Fight Shorts", "Muay Thai & Boxing"],
    specs: {
      weight: "220 - 750 GSM (7oz - 16oz)",
      composition: "100% Smooth Cotton Canvas / Pearl Weave / Ripstop",
      leadTime: "4 - 6 Weeks",
      sampleTime: "7 - 10 Days",
      moq: "100 Pieces / Style",
      production: "OEM / ODM Private Label",
      shippingTerms: "FOB Sialkot / Air & Sea Freight",
      packaging: "Individual Polybag / Master Carton"
    },
    manufacturingHighlights: [
      { title: "Smooth Cotton Canvas (Kata)", details: "Heavyweight 14oz (450 GSM) smooth 100% cotton canvas with flat lapel panels (no rice-grain weave)." },
      { title: "Traditional Japanese Cut", details: "Authentic Kata jacket cut with crisp snap lapels and straight wide-leg cotton canvas trousers." },
      { title: "Reinforced 3-Ply Stitching", details: "Stress points, armpits, and side slits reinforced with 3-ply heavy bar-tack stitching." },
      { title: "Sample Dispatch", details: "Physical counter-sample dispatch within 7-10 working days upon receiving tech pack." }
    ],
    customisation: ["Custom Embroidery", "Woven Patches", "Reinforced Triple Stitching", "EVA Foam Collars"],
    products: [
      { 
        id: "bjj-gi", name: "Pro BJJ Gi", spec: "450 GSM Pearl Weave Cotton • 10oz Ripstop Pants",
        description: "Our core BJJ Gi is constructed for consistent, heavy-duty mat use. The jacket uses a 450 GSM pearl weave cotton that balances weight and breathability, while the pants are built from a durable 10oz ripstop blend.",
        features: [
          "Pre-shrunk 450 GSM pearl weave cotton jacket",
          "10oz (300 GSM) ripstop cotton-polyester blend pants",
          "Thick EVA foam collar to resist gripping",
          "Triple-stitched at all major stress points"
        ],
        intendedUse: "Regular Grappling & BJJ Training",
        colors: ["Obsidian Black", "Arctic White", "Royal Blue"],
        fabrics: ["450 GSM Pearl Weave", "10oz Ripstop Poly-Cotton"],
        images: ["/images/Martial Arts/pro bjj gi.png"],
        productType: "BJJ Gis", collection: "Pro", gender: "Unisex", tags: ["bjj", "gi", "grappling", "kimono"],
        dateAdded: "2026-06-01", popularity: 95, featured: true
      },
      { 
        id: "karate-gi", name: "Kata Karate Gi", spec: "14oz (450 GSM) 100% Smooth Cotton Canvas",
        description: "A traditional heavyweight Kata Karate Gi designed for kata practitioners. Constructed from smooth, heavy 14oz (450 GSM) 100% cotton canvas (flat texture, no rice-grain or judo weave) with traditional straight wide-leg trousers for a sharp snap sound.",
        features: [
          "14oz (450 GSM) smooth 100% cotton canvas (no rice-grain/judo panels)",
          "Traditional Japanese Kata cut with shorter sleeves",
          "Straight wide-leg cotton canvas trousers (no narrow cuffs)",
          "Crisp reinforced lapel with multi-row flat stitching"
        ],
        intendedUse: "Traditional Martial Arts & Kata Competition",
        colors: ["Arctic White"],
        fabrics: ["14oz (450 GSM) Smooth Cotton Canvas"],
        images: ["/images/Martial Arts/kata_karate_gi.png"],
        productType: "Kata Karate Gis", collection: "Core", gender: "Unisex", tags: ["karate", "gi", "kata", "canvas"],
        dateAdded: "2026-05-15", popularity: 90, featured: true
      },
      { 
        id: "taekwondo-gi", name: "Taekwondo Uniform Set", spec: "8oz (240 GSM) Ribbed Poly-Cotton Uniform",
        description: "Standard WT-style Taekwondo uniform engineered for speed, high kicking flexibility, and freedom of movement. V-neck jacket with elastic waistband trousers.",
        features: [
          "8oz (240 GSM) lightweight ribbed poly-cotton fabric",
          "Traditional WTF V-neck collar construction",
          "Full length gusseted crotch for maximum 180-degree kicking",
          "Elastic waist with internal drawcord"
        ],
        intendedUse: "Taekwondo Training & Poomsae Competition",
        colors: ["White / Black V-Neck"],
        fabrics: ["8oz Ribbed Poly-Cotton"],
        images: ["/images/Martial Arts/takenwodo_.png"],
        productType: "Taekwondo Uniforms", collection: "Competition", gender: "Unisex", tags: ["taekwondo", "tkd", "uniform"],
        dateAdded: "2026-06-20", popularity: 88, featured: false
      },
      { 
        id: "pro-judo-gi", name: "Pro Judo Gi", spec: "750 GSM 100% Cotton Double Weave",
        description: "A robust, competition-grade Judo Gi built to withstand heavy gripping and throwing. The jacket features a thick 750 GSM double-weave cotton top half for grip resistance, transitioning into a diamond skirt.",
        features: [
          "750 GSM double-weave heavy cotton jacket top",
          "Diamond weave lower skirt section",
          "Reinforced chest, shoulders, and lapels",
          "Double-layered knee panels on trousers"
        ],
        intendedUse: "Judo Grading & International Competition",
        colors: ["Arctic White", "Royal Blue"],
        fabrics: ["750 GSM Cotton Double Weave"],
        images: ["/images/Martial Arts/PRO_JUDO_GI.png"],
        productType: "Judo Gis", collection: "Pro", gender: "Unisex", tags: ["judo", "gi", "competition"],
        dateAdded: "2026-06-12", popularity: 85, featured: false
      },
      { 
        id: "rash-guard", name: "Combat Rash Guard", spec: "240 GSM 4-Way Stretch Poly-Spandex (88/12)",
        description: "A functional, skin-tight rash guard built for No-Gi grappling and MMA training. Manufactured using high-density 240 GSM 88% polyester / 12% spandex blend for muscle compression and mat burn protection.",
        features: [
          "240 GSM 88% Polyester / 12% Spandex stretch matrix",
          "Flatlock 6-thread seam construction to prevent chafing",
          "Silicone anti-slip inner waistband gripper",
          "Dye-sublimated graphics that never peel or crack"
        ],
        intendedUse: "No-Gi Grappling & MMA Base Layer",
        colors: ["Rank Colors", "Obsidian Black"],
        fabrics: ["240 GSM Poly-Spandex (88/12)"],
        images: ["/images/Martial Arts/Rash guard.png"],
        productType: "No-Gi Rashguards", collection: "Pro", gender: "Men", tags: ["rashguard", "nogi", "mma", "compression"],
        dateAdded: "2026-06-10", popularity: 92, featured: true
      },
      { 
        id: "fight-shorts", name: "MMA Fight Shorts", spec: "180 GSM Microfiber Stretch Woven",
        description: "Lightweight, unrestrictive fight shorts designed for mixed martial arts. Constructed from 180 GSM microfiber stretch fabric, featuring high side slits for kicking mobility and fold-over velcro closure.",
        features: [
          "180 GSM microfiber 4-way stretch body fabric",
          "High lateral slits for maximum leg extension",
          "Lycra stretch crotch panel for grappling mobility",
          "Internal drawstring with locked-in velcro waist"
        ],
        intendedUse: "MMA, Kickboxing & No-Gi",
        colors: ["Matte Black", "Tactical Camo"],
        fabrics: ["180 GSM Stretch Microfiber"],
        images: ["/images/Martial Arts/MMA Fight Shorts.png"],
        productType: "MMA Fight Shorts", collection: "Core", gender: "Men", tags: ["shorts", "mma", "nogi"],
        dateAdded: "2026-05-20", popularity: 86, featured: false
      },
      { 
        id: "muay-thai-shorts", name: "Satin Muay Thai Kickboxing Shorts", spec: "220 GSM Heavyweight Satin Polyester",
        description: "Traditional Muay Thai fight shorts crafted from luxurious 220 GSM satin fabric. Features a wide 8-strip elastic waistband, deep side cuts for kicking, and retro side paneling.",
        features: [
          "220 GSM high-grade satin polyester fabric",
          "Traditional 8-strip elastic waistband",
          "Deep lateral leg cutouts for knees and high kicks",
          "Reinforced double stitching along all seams"
        ],
        intendedUse: "Muay Thai & Kickboxing",
        colors: ["Matte Black & Gold", "Red & White"],
        fabrics: ["220 GSM Satin Polyester"],
        images: ["/images/Martial Arts/muay_thai_shorts.png"],
        productType: "Muay Thai & Boxing", collection: "Pro", gender: "Unisex", tags: ["muaythai", "boxing", "shorts"],
        dateAdded: "2026-06-22", popularity: 89, featured: true
      }
    ]
  },

  "cotton-apparel": {
    title: "COTTON & CASUALWEAR",
    description: "Premium cotton apparel manufacturing ranging from 180 GSM Pima tees to 260 GSM heavyweight streetwear blanks.",
    filterTabs: ["All Products", "Heavyweight Tees", "Pique Polo Shirts", "Casual Shirts", "Long Sleeves", "Pima Cotton Tees", "Vintage Washed Tees", "Tank Tops"],
    specs: {
      weight: "180 - 260 GSM",
      composition: "100% Combed Cotton / Organic Cotton Pique / Peruvian Pima",
      leadTime: "4 - 5 Weeks",
      sampleTime: "7 - 10 Days",
      moq: "100 Pieces / Style",
      production: "OEM / ODM Private Label",
      shippingTerms: "FOB Sialkot / Air & Sea Freight",
      packaging: "Individual Sealed Polybag / Tagged"
    },
    manufacturingHighlights: [
      { title: "240 GSM Combed Cotton", details: "High-density 240 GSM ring-spun cotton pre-shrunk for premium streetwear weight and hand-feel." },
      { title: "Reactive Eco Dyes", details: "Dyed with eco-friendly reactive dyes ensuring Grade 4+ colorfastness after multiple washes." },
      { title: "Twin-Needle Coverstitch", details: "Collars, cuffs, and bottom hems finished with tight twin-needle coverstitching." },
      { title: "Sample Dispatch", details: "Physical counter-sample dispatch within 7-10 working days upon receiving tech pack." }
    ],
    customisation: ["Screen Printing", "Puff Print", "High-Density Embroidery", "Woven Labels", "Custom Hangtags", "Acid Wash Finish"],
    products: [
      { 
        id: "heavyweight-oversized-tee", name: "Heavyweight Oversized Streetwear Tee", spec: "240 GSM Combed Ring-Spun Cotton",
        description: "A dense 240 GSM cotton streetwear tee featuring a drop-shoulder boxy fit and tight 1x1 ribbed collar. Pre-shrunk to retain shape after washing.",
        features: [
          "240 GSM 100% combed ring-spun cotton",
          "Relaxed drop-shoulder boxy silhouette",
          "Thick 1x1 ribbed neckband with twin-needle collar",
          "Smooth combed face optimized for screen & puff printing"
        ],
        intendedUse: "Streetwear Brand Blanks & Retail",
        colors: ["Obsidian Black", "Vintage Wash Grey", "Off-White"],
        fabrics: ["240 GSM Combed Cotton"],
        images: ["/images/Cotton Casualwear/Heavyweight oversized tee.png"],
        productType: "Heavyweight Tees", collection: "Streetwear", gender: "Unisex", tags: ["tee", "tshirt", "heavyweight", "oversized"],
        dateAdded: "2026-06-15", popularity: 96, featured: true
      },
      { 
        id: "executive-pique-polo", name: "Executive Pique Polo Shirt", spec: "220 GSM Organic Cotton Pique",
        description: "Classic executive polo shirt constructed from 220 GSM organic cotton pique. Features a structured 3-button placket, ribbed collar, and fitted sleeve cuffs.",
        features: [
          "220 GSM 100% organic cotton pique fabric",
          "3-button placket with tone-on-tone engraved buttons",
          "Shape-retaining ribbed collar and cuff bands",
          "Side seam vents at hem for comfortable fit"
        ],
        intendedUse: "Corporate Apparel & Golf Retail",
        colors: ["Navy Blue", "Carbon Black", "Arctic White"],
        fabrics: ["220 GSM Cotton Pique"],
        images: ["/images/Cotton Casualwear/executive-pique_polo.png"],
        productType: "Pique Polo Shirts", collection: "Executive", gender: "Men", tags: ["polo", "shirt", "pique", "corporate"],
        dateAdded: "2026-06-18", popularity: 91, featured: true
      },
      { 
        id: "casual-button-down", name: "Cotton Oxford Button-Down Shirt", spec: "180 GSM Combed Cotton Oxford",
        description: "A tailored casual button-down shirt made from breathable 180 GSM combed cotton Oxford cloth. Soft-washed for immediate comfort.",
        features: [
          "180 GSM 100% combed cotton Oxford weave",
          "Button-down collar points and box pleat back",
          "Single chest patch pocket",
          "Double-needle felled side seam construction"
        ],
        intendedUse: "Smart Casual & Lifestyle Retail",
        colors: ["Light Blue", "Arctic White"],
        fabrics: ["180 GSM Cotton Oxford"],
        images: ["/images/Cotton Casualwear/casual_button_down.png"],
        productType: "Casual Shirts", collection: "Classic", gender: "Men", tags: ["shirt", "oxford", "buttondown"],
        dateAdded: "2026-06-10", popularity: 84, featured: false
      },
      { 
        id: "heavyweight-long-sleeve", name: "Heavyweight Ribbed Long Sleeve Shirt", spec: "260 GSM Heavyweight Cotton",
        description: "An ultra-durable 260 GSM long sleeve tee built for colder seasons. Features heavy elastane-reinforced ribbed cuffs and a relaxed torso.",
        features: [
          "260 GSM 100% ring-spun cotton jersey",
          "2x2 elastane ribbed cuffs for stretch recovery",
          "Side-seam construction to eliminate twisting",
          "Ideal blank canvas for arm sleeve printing"
        ],
        intendedUse: "Fall/Winter Streetwear Merch",
        colors: ["Obsidian Black", "Heather Grey", "Olive Green"],
        fabrics: ["260 GSM Heavy Cotton"],
        images: ["/images/Cotton Casualwear/Heavyweight_long_sleeve.png"],
        productType: "Long Sleeves", collection: "Heavyweight", gender: "Unisex", tags: ["longsleeve", "shirt", "heavyweight"],
        dateAdded: "2026-06-12", popularity: 87, featured: false
      },
      { 
        id: "luxury-pima-tee", name: "Luxury Pima Cotton Crewneck Tee", spec: "180 GSM 100% Peruvian Pima Cotton",
        description: "Silky-smooth 180 GSM Pima cotton crewneck tee engineered for luxury fashion brands. Extra-long staple fibers provide ultra-soft hand feel.",
        features: [
          "180 GSM 100% extra-long staple Pima cotton",
          "Silky smooth hand-feel with subtle luster",
          "Tailored premium slim fit",
          "Pre-shrunk with minimal fuzzing over time"
        ],
        intendedUse: "Luxury Retail & Boutique Programs",
        colors: ["Arctic White", "Matte Black", "Sand"],
        fabrics: ["180 GSM Pima Cotton"],
        images: ["/images/Cotton Casualwear/luxury pima tee.png"],
        productType: "Pima Cotton Tees", collection: "Luxury", gender: "Unisex", tags: ["pima", "tee", "luxury"],
        dateAdded: "2026-06-25", popularity: 93, featured: true
      },
      { 
        id: "vintage-acid-wash-tee", name: "Vintage Acid Wash Streetwear Tee", spec: "220 GSM Enzyme-Treated Cotton",
        description: "A 220 GSM mid-weight streetwear tee processed with custom enzyme and acid wash distressing for an authentic worn vintage look.",
        features: [
          "220 GSM 100% cotton processed with vintage wash",
          "Individual unique wash variations per garment",
          "Distressed collar edge detailing",
          "Pre-washed for zero post-purchase shrinkage"
        ],
        intendedUse: "Vintage Streetwear Collections",
        colors: ["Acid Charcoal", "Washed Olive"],
        fabrics: ["220 GSM Washed Cotton"],
        images: ["/images/Cotton Casualwear/vintage_acid_wash_tee.png"],
        productType: "Vintage Washed Tees", collection: "Vintage", gender: "Unisex", tags: ["acidwash", "vintage", "tee"],
        dateAdded: "2026-06-08", popularity: 89, featured: false
      },
      { 
        id: "athletic-ribbed-tank", name: "Athletic Ribbed Cotton Tank Top", spec: "200 GSM 2x1 Ribbed Cotton",
        description: "A form-fitting 200 GSM ribbed cotton tank top designed for gym wear and casual layering. Deep armhole cutouts provide full mobility.",
        features: [
          "200 GSM 95% Cotton / 5% Elastane 2x1 rib knit",
          "Deep scoop neckline and armhole binding",
          "Form-fitting stretch recovery",
          "Reinforced shoulder seam binding"
        ],
        intendedUse: "Gym Bodybuilding & Casualwear",
        colors: ["Obsidian Black", "Arctic White"],
        fabrics: ["200 GSM Ribbed Cotton"],
        images: ["/images/Cotton Casualwear/athletic_ribbed_tank.png"],
        productType: "Tank Tops", collection: "Core", gender: "Men", tags: ["tank", "singlet", "ribbed"],
        dateAdded: "2026-06-05", popularity: 82, featured: false
      }
    ]
  },

  "team-jerseys": {
    title: "SPORTS SHIRTS & TEAM JERSEYS",
    description: "Custom athletic team kits, sublimated sports jerseys, and high-performance club apparel engineered for match day and professional leagues.",
    filterTabs: ["All Products", "Football Kits", "Cricket Team Shirts", "Basketball Uniforms", "Rugby Sports Jerseys", "Esports Team Tops", "Team Warmup Jackets", "Multi-Sport Tees"],
    specs: {
      weight: "140 - 280 GSM",
      composition: "Micro-Interlock Polyester / Breathable Jacquard Mesh / Poly-Spandex",
      leadTime: "3 - 4 Weeks",
      sampleTime: "7 - 10 Days",
      moq: "50 Kits / Style",
      production: "Full Sublimation & OEM Private Label",
      shippingTerms: "FOB Sialkot / Air & Sea Freight",
      packaging: "Individual Polybag / Number Tagged"
    },
    manufacturingHighlights: [
      { title: "Full Dye-Sublimation", details: "HD Italian sublimation inks ensuring zero color fading, cracking, or peeling after washes." },
      { title: "Breathable Jacquard Mesh", details: "Moisture-wicking micro-mesh channels optimized for maximum heat management on match day." },
      { title: "Reinforced Athletic Seams", details: "Heavy-duty 4-needle flatlock seam stitching built to endure intense contact sports." },
      { title: "Sample Dispatch", details: "Physical counter-sample dispatch within 7-10 working days upon receiving tech pack." }
    ],
    customisation: ["Full Sublimation Printing", "Custom Club Crest Badges", "Player Name & Number Customization", "Rubberized 3D Crests", "Heat-Transfer Logos"],
    products: [
      { 
        id: "football-match-kits", name: "Pro Football & Soccer Match Kit", spec: "180 GSM Micro-Interlock Poly • Sublimated Kit",
        description: "Official match day soccer kit including sublimated jersey and shorts. Manufactured from 180 GSM moisture-wicking micro-interlock poly with mesh side ventilation panels.",
        features: [
          "180 GSM 100% moisture-wicking micro-interlock poly",
          "Includes matching sublimated match shorts",
          "Mesh side panels for maximum airflow during 90 minutes",
          "Reinforced ribbed collar and sleeve cuffs"
        ],
        intendedUse: "Professional Soccer Club Match Kits",
        colors: ["Custom Club Colors", "Black & Gold"],
        fabrics: ["180 GSM Micro-Interlock Poly"],
        images: ["/images/SPORTS SHIRTS & TEAM JERSEYS/Football Match Kits.png"],
        productType: "Football Kits", collection: "Pro", gender: "Unisex", tags: ["soccer", "football", "jersey", "kit"],
        dateAdded: "2026-06-15", popularity: 98, featured: true
      },
      { 
        id: "cricket-team-shirts", name: "Custom Cricket Team Shirt & Polo", spec: "200 GSM Breathable Jacquard Mesh",
        description: "Professional cricket match shirt featuring structured 3-button collar, sublimated body graphics, and UV-resistant performance mesh fabric.",
        features: [
          "200 GSM UV-protective breathable jacquard mesh",
          "3-button collar placket with reinforced collar core",
          "Dye-sublimated front body & sleeve graphics",
          "Side seam hem vents for ease of movement"
        ],
        intendedUse: "Cricket Leagues & Club Tournaments",
        colors: ["Custom Team Colors"],
        fabrics: ["200 GSM Jacquard Mesh"],
        images: ["/images/SPORTS SHIRTS & TEAM JERSEYS/Cricket Team Shirts.png"],
        productType: "Cricket Team Shirts", collection: "Pro", gender: "Unisex", tags: ["cricket", "shirt", "polo", "jersey"],
        dateAdded: "2026-06-18", popularity: 95, featured: true
      },
      { 
        id: "basketball-uniforms", name: "Pro Double-Layer Basketball Uniform Set", spec: "220 GSM Retro Double-Layer Athletic Mesh",
        description: "Sleeveless basketball jersey and shorts set crafted from heavyweight 220 GSM double-layer poly mesh with wide armhole binding for free shooting motion.",
        features: [
          "220 GSM heavy double-layer poly mesh construction",
          "Wide armhole cut for unhindered shooting & rebounding",
          "Sublimated team name & bold player numbers",
          "Elastic waist shorts with inner drawstring"
        ],
        intendedUse: "Basketball Leagues & College Tournaments",
        colors: ["Navy & Gold", "Black & Crimson"],
        fabrics: ["220 GSM Poly Mesh"],
        images: ["/images/SPORTS SHIRTS & TEAM JERSEYS/Basketball Team Uniforms.png"],
        productType: "Basketball Uniforms", collection: "Pro", gender: "Unisex", tags: ["basketball", "jersey", "uniform"],
        dateAdded: "2026-06-10", popularity: 91, featured: false
      },
      { 
        id: "rugby-sports-jerseys", name: "Heavy-Duty Contact Rugby Jersey", spec: "280 GSM Reinforced Stretch Poly-Elastane",
        description: "Heavyweight contact sports jersey built with 280 GSM reinforced poly-elastane, tough flat-lay collar, and double bar-tack collar stitching for extreme tackling durability.",
        features: [
          "280 GSM high-density stretch poly-elastane matrix",
          "Reinforced flat-lay rubber collar to resist pulling",
          "Double-needle coverstitched seams throughout",
          "Sublimated club striping and sponsor crests"
        ],
        intendedUse: "Rugby Union, League & Contact Sports",
        colors: ["Red & Black Stripes", "Navy"],
        fabrics: ["280 GSM Stretch Poly-Elastane"],
        images: ["/images/SPORTS SHIRTS & TEAM JERSEYS/Rugby Sports Jerseys.png"],
        productType: "Rugby Sports Jerseys", collection: "Heavyweight", gender: "Men", tags: ["rugby", "jersey", "contact"],
        dateAdded: "2026-06-22", popularity: 89, featured: true
      },
      { 
        id: "esports-team-tops", name: "Custom Sublimated Esports Gaming Top", spec: "160 GSM Smooth Performance Poly-Spandex",
        description: "Ultra-smooth V-neck gaming jersey tailored for esports teams and streaming organizations. Fully customizable with crisp dye-sublimated partner logos.",
        features: [
          "160 GSM ultra-soft poly-spandex performance fabric",
          "Sharp high-definition dye-sublimation print",
          "Comfortable ergonomic V-neck collar",
          "Wrinkle-resistant and quick drying"
        ],
        intendedUse: "Esports Teams, Streamers & Gaming Orgs",
        colors: ["Purple Cyber", "Neon Volt"],
        fabrics: ["160 GSM Poly-Spandex"],
        images: ["/images/SPORTS SHIRTS & TEAM JERSEYS/Esports & Gaming Team Tops.png"],
        productType: "Esports Team Tops", collection: "Pro", gender: "Unisex", tags: ["esports", "gaming", "jersey"],
        dateAdded: "2026-06-05", popularity: 87, featured: false
      },
      { 
        id: "team-warmup-jackets", name: "Pro Team Warmup & Training Track Jacket", spec: "200 GSM Aero-Shell Poly • Zipper Pockets",
        description: "Matching team track jacket for sideline warmups and travel. Features full YKK front zipper, stand collar, ribbed cuffs, and custom club crest printing.",
        features: [
          "200 GSM water-resistant aero-shell polyester",
          "Full front YKK zipper with stand collar",
          "Concealed zipper side pockets for essentials",
          "Matching team color-block sleeve paneling"
        ],
        intendedUse: "Sideline Warmup & Club Travel Apparel",
        colors: ["Black & Red", "Navy & White"],
        fabrics: ["200 GSM Aero-Shell Poly"],
        images: ["/images/SPORTS SHIRTS & TEAM JERSEYS/Team Warmup & Training Track Jackets.png"],
        productType: "Team Warmup Jackets", collection: "Core", gender: "Unisex", tags: ["jacket", "warmup", "tracksuit", "team"],
        dateAdded: "2026-06-08", popularity: 93, featured: true
      },
      { 
        id: "volleyball-multi-sport-tees", name: "Multi-Sport Tournament Athletic Tee", spec: "140 GSM Featherlight Moisture-Wicking Poly",
        description: "Versatile multi-sport team tee suitable for volleyball, track & field, and school athletics. Constructed from 140 GSM ultralight rapid-dry mesh fabric.",
        features: [
          "140 GSM featherlight moisture-wicking mesh",
          "V-neck athletic neckband binding",
          "Full 360-degree sublimation capability",
          "Anti-chafing flatlock seam finish"
        ],
        intendedUse: "Volleyball, Athletics & Tournament Teams",
        colors: ["Navy & Gold", "White & Blue"],
        fabrics: ["140 GSM Poly Mesh"],
        images: ["/images/SPORTS SHIRTS & TEAM JERSEYS/Volleyball & Multi-Sport Athletic Tees.png"],
        productType: "Multi-Sport Tees", collection: "Core", gender: "Unisex", tags: ["volleyball", "multisport", "jersey"],
        dateAdded: "2026-06-02", popularity: 84, featured: false
      }
    ]
  },

  "denim": {
    title: "DENIM PRODUCTS",
    description: "Premium denim manufacturing ranging from 6oz lightweight chambray shirts to 16oz industrial selvedge workwear.",
    filterTabs: ["All Products", "Japanese Selvedge", "Trucker Jackets", "Classic Jeans", "Denim Shirts", "Utility Workwear", "Distressed Denim", "Denim Overshirts"],
    specs: {
      weight: "6oz – 16oz (200 - 520 GSM)",
      composition: "100% Cotton Denim / Stretch Denim / Japanese Selvedge",
      leadTime: "5 – 7 Weeks",
      sampleTime: "7 - 10 Days",
      moq: "150 Pieces / Style",
      production: "OEM / ODM Private Label",
      shippingTerms: "FOB Sialkot / Air & Sea Freight",
      packaging: "Individual Polybag / Master Carton"
    },
    manufacturingHighlights: [
      { title: "Shuttle Loom Selvedge", details: "Authentic 14oz red-line selvedge denim woven on traditional shuttle looms." },
      { title: "Industrial Wash Finishing", details: "Enzyme, stone wash, laser whisker, and tinting capabilities tailored to brand tech packs." },
      { title: "Heavy-Duty Hardware", details: "Custom brass shank buttons, copper rivets, and debossed genuine leather waist patches." },
      { title: "Sample Dispatch", details: "Physical counter-sample dispatch within 7-10 working days upon receiving tech pack." }
    ],
    customisation: ["Stone Wash", "Acid Wash", "Enzyme Wash", "Laser Distressing", "Embroidery", "Leather Patches", "Custom Hardware"],
    products: [
      { 
        id: "selvedge-denim", name: "Japanese Selvedge Denim Jeans", spec: "14oz (450 GSM) Shuttle-Loomed Selvedge",
        description: "Classic straight-leg jeans manufactured using traditional shuttle-loomed 14oz selvedge denim. Shipped raw and unwashed for natural fade development.",
        features: [
          "14oz (450 GSM) raw selvedge denim woven on shuttle looms",
          "Signature red-line selvedge outseam ID",
          "Hidden copper back pocket rivets",
          "Chain-stitched hems for authentic roping fade"
        ],
        intendedUse: "Heritage Streetwear & Denim Retail",
        colors: ["Indigo Raw", "Washed Black"],
        fabrics: ["14oz Japanese Selvedge"],
        images: ["/images/Denim Products/Selvedge Denim.png"],
        productType: "Japanese Selvedge", collection: "Heritage", gender: "Men", tags: ["jeans", "selvedge", "raw", "denim"],
        dateAdded: "2026-06-05", popularity: 95, featured: true
      },
      { 
        id: "denim-jacket", name: "Classic Type-III Trucker Jacket", spec: "12oz (380 GSM) Stretch Denim",
        description: "A standard Type-III trucker jacket built from 12oz denim with slight stretch blend for shoulder mobility. Available raw or factory vintage washed.",
        features: [
          "12oz (380 GSM) cotton denim with 2% elastane",
          "Classic V-seam front detailing with chest flap pockets",
          "Branded shank button closures",
          "Adjustable waist tabs at rear hem"
        ],
        intendedUse: "Casual Outerwear",
        colors: ["Vintage Blue", "Overdyed Black"],
        fabrics: ["12oz Stretch Denim"],
        images: ["/images/Denim Products/Denim Jacket.png"],
        productType: "Trucker Jackets", collection: "Heritage", gender: "Unisex", tags: ["jacket", "trucker", "outerwear"],
        dateAdded: "2026-05-28", popularity: 88, featured: true
      },
      { 
        id: "denim-jeans", name: "Essential 5-Pocket Retail Jeans", spec: "12oz (380 GSM) Mid-Weight Denim",
        description: "Core 5-pocket denim jean designed for bulk retail production. Using 12oz stretch denim, offering immediate comfort without break-in period.",
        features: [
          "12oz (380 GSM) mid-weight stretch denim",
          "Standard 5-pocket layout with coin pocket",
          "Reinforced bartacks at high-stress points",
          "Fully customizable industrial wash profiles"
        ],
        intendedUse: "Everyday Retail Wear",
        colors: ["Indigo", "Light Blue", "Black"],
        fabrics: ["12oz Stretch Denim"],
        images: ["/images/Denim Products/Denim Jeans.png"],
        productType: "Classic Jeans", collection: "Core", gender: "Unisex", tags: ["jeans", "denim", "bottoms"],
        dateAdded: "2026-06-15", popularity: 90, featured: false
      },
      { 
        id: "denim-shirt", name: "Western Indigo Denim Shirt", spec: "6oz (200 GSM) Lightweight Cotton Chambray",
        description: "A breathable western-inspired denim shirt made from lightweight 6oz chambray cotton. Features front and back yoke styling and snap fasteners.",
        features: [
          "6oz (200 GSM) lightweight cotton chambray",
          "Western-style chest pockets and yokes",
          "Pearl snap button closures throughout",
          "Double-needle chainstitching along side seams"
        ],
        intendedUse: "Smart Casual Wear",
        colors: ["Light Blue", "Indigo"],
        fabrics: ["6oz Cotton Chambray"],
        images: ["/images/Denim Products/denim_shirt_new.png"],
        productType: "Denim Shirts", collection: "Core", gender: "Men", tags: ["shirt", "chambray", "top"],
        dateAdded: "2026-06-10", popularity: 82, featured: false
      },
      { 
        id: "denim-workwear", name: "Industrial Workwear Overalls", spec: "16oz (520 GSM) Industrial Heavy Denim",
        description: "Heavy-duty denim work bib overalls engineered for severe daily abrasion. Built from stiff 16oz raw denim with triple-stitched felled seams.",
        features: [
          "16oz (520 GSM) heavyweight industrial-grade denim",
          "Triple-stitched felled main seams for extreme durability",
          "Double-layered knee panels",
          "Utility tool chest pockets and hammer loop"
        ],
        intendedUse: "Industrial Utility & Workwear",
        colors: ["Raw Indigo", "Charcoal"],
        fabrics: ["16oz Heavyweight Denim"],
        images: ["/images/Denim Products/Denim Workwear.png"],
        productType: "Utility Workwear", collection: "Utility", gender: "Men", tags: ["workwear", "utility", "overalls"],
        dateAdded: "2026-06-20", popularity: 85, featured: true
      },
      { 
        id: "distressed-vintage-jeans", name: "Vintage Enzyme Distressed Jeans", spec: "13oz (410 GSM) Ring-Spun Denim",
        description: "Heavyweight 13oz ring-spun denim jeans customized with hand-finished laser whiskering, abrasion distressing, and enzyme vintage wash.",
        features: [
          "13oz (410 GSM) 100% cotton ring-spun denim",
          "Laser-cut knee distressing and whiskering",
          "Enzyme stone wash for soft broken-in feel",
          "Heavy brass zipper fly"
        ],
        intendedUse: "Streetwear Fashion Retail",
        colors: ["Vintage Light Wash", "Dirty Wash Indigo"],
        fabrics: ["13oz Ring-Spun Denim"],
        images: ["/images/Denim Products/Distressed Vintage Jeans.png"],
        productType: "Distressed Denim", collection: "Streetwear", gender: "Unisex", tags: ["distressed", "jeans", "streetwear"],
        dateAdded: "2026-06-14", popularity: 87, featured: false
      },
      { 
        id: "denim-utility-overshirt", name: "Utility Denim Work Overshirt", spec: "10oz (320 GSM) Cotton Canvas Denim",
        description: "A rugged 10oz denim overshirt suitable as light outerwear. Features twin oversized flap chest pockets and heavy-duty shank button closure.",
        features: [
          "10oz (320 GSM) mid-weight cotton denim canvas",
          "Oversized utility gusseted chest pockets",
          "Straight hem cutoff styling",
          "Double-needle seam reinforcement"
        ],
        intendedUse: "Layered Casual & Workwear",
        colors: ["Raw Indigo", "Washed Olive"],
        fabrics: ["10oz Denim Canvas"],
        images: ["/images/Denim Products/Denim Utility OVERSHIRT.png"],
        productType: "Denim Overshirts", collection: "Utility", gender: "Men", tags: ["overshirt", "denim", "outerwear"],
        dateAdded: "2026-06-03", popularity: 81, featured: false
      }
    ]
  },

  "fleece": {
    title: "FLEECE & STREETWEAR",
    description: "Premium fleece garments ranging from 280 GSM crewnecks to 400 GSM heavy boxy French Terry hoodies.",
    filterTabs: ["All Products", "Boxy Hoodies", "Crewneck Sweatshirts", "Tapered Joggers", "Zip Hoodies", "Luxury Tracksuits", "Quarter-Zip Pullovers", "Fleece Shorts"],
    specs: {
      weight: "280–400 GSM",
      composition: "100% Cotton French Terry / Cotton-Poly Fleece",
      leadTime: "4–6 Weeks",
      sampleTime: "7 - 10 Days",
      moq: "100 Pieces / Style",
      production: "OEM / ODM Private Label",
      shippingTerms: "FOB Sialkot / Air & Sea Freight",
      packaging: "Individual Polybag / Master Carton"
    },
    manufacturingHighlights: [
      { title: "400 GSM Heavy French Terry", details: "High-density 400 GSM cotton fleece pre-washed for soft hand-feel and minimal shrinkage." },
      { title: "2x2 Ribbing & Fit Recovery", details: "Heavy 2x2 elastane ribbing at cuffs and hem to maintain elastic recovery over extended wear." },
      { title: "Print & Branding Ready", details: "Smooth combed cotton surface optimized for screen printing, puff ink, and high-density embroidery." },
      { title: "Sample Dispatch", details: "Physical counter-sample dispatch within 7-10 working days upon receiving tech pack." }
    ],
    customisation: ["Screen Printing", "Puff Printing", "Embroidery", "Silicone Badges", "Rubber Patches", "Woven Labels", "DTF Printing", "Reflective Prints"],
    products: [
      { 
        id: "premium-hoodies", name: "Heavyweight Boxy Drop-Shoulder Hoodie", spec: "400 GSM 100% Cotton French Terry",
        description: "A heavyweight streetwear staple constructed from dense 400 GSM cotton fleece. Features a modern drop-shoulder boxy fit and double-lined hood.",
        features: [
          "400 GSM heavyweight cotton-rich French Terry",
          "Double-lined hood with no drawcords for clean aesthetic",
          "Drop-shoulder, slightly cropped boxy fit",
          "Heavy 2x2 elastane ribbed cuffs and hem"
        ],
        intendedUse: "Premium Streetwear Brand Blank",
        colors: ["Heather Grey", "Vintage Wash Black", "Bone"],
        fabrics: ["400 GSM French Terry Cotton"],
        images: ["/images/FLEECE&Streetwear/Premium_Hoodies.png"],
        productType: "Boxy Hoodies", collection: "Streetwear", gender: "Unisex", tags: ["hoodie", "fleece", "heavyweight", "oversized"],
        dateAdded: "2026-06-10", popularity: 96, featured: true
      },
      { 
        id: "crewneck-sweatshirts", name: "Essential Crewneck Sweatshirt", spec: "320 GSM Cotton-Poly Fleece Blend",
        description: "A classic crewneck pullover using mid-weight 320 GSM fleece blend that holds shape well. Features reinforced V-stitch collar insert.",
        features: [
          "320 GSM mid-weight cotton-polyester blend fleece",
          "Set-in sleeve construction",
          "Reinforced ribbed crew neckline with V-insert",
          "Smooth outer face optimized for screen printing"
        ],
        intendedUse: "Everyday Retail Apparel & Merch",
        colors: ["Navy Blue", "Heather Grey", "Black"],
        fabrics: ["320 GSM Cotton Fleece"],
        images: ["/images/FLEECE&Streetwear/Crewneck&Sweat shirts.png"],
        productType: "Crewneck Sweatshirts", collection: "Core", gender: "Unisex", tags: ["crewneck", "sweatshirt", "fleece"],
        dateAdded: "2026-06-12", popularity: 92, featured: true
      },
      { 
        id: "joggers", name: "Tapered Athletic Fleece Joggers", spec: "350 GSM Brushed-Back Thermal Fleece",
        description: "Tapered sweatpants designed to pair with our hoodie collection. Featuring a relaxed thigh that tapers aggressively down to elastic ankle cuffs.",
        features: [
          "350 GSM brushed-back thermal fleece",
          "Tapered athletic fit with elastic ankle cuffs",
          "Deep side pockets and single rear patch pocket",
          "Thick elastic waistband with hidden internal drawcords"
        ],
        intendedUse: "Lifestyle & Lounge Wear",
        colors: ["Heather Grey", "Vintage Wash Black"],
        fabrics: ["350 GSM Brushed Fleece"],
        images: ["/images/FLEECE&Streetwear/Joggers.png"],
        productType: "Tapered Joggers", collection: "Core", gender: "Unisex", tags: ["joggers", "sweatpants", "fleece"],
        dateAdded: "2026-06-10", popularity: 85, featured: false
      },
      { 
        id: "zip-hoodies", name: "Full-Zip Heavyweight Fleece Hoodie", spec: "350 GSM Combed Cotton Brushed Fleece",
        description: "Full-zip variant of our premium hoodie, built for easy layering. Incorporates heavy-duty metal YKK zipper running cleanly from hem to collar.",
        features: [
          "350 GSM cotton-blend brushed fleece",
          "Heavy-duty YKK metal front zipper",
          "Split front kangaroo pockets with bartack reinforcements",
          "True-to-size layering fit"
        ],
        intendedUse: "Layered Casual & Streetwear",
        colors: ["Obsidian Black", "Charcoal"],
        fabrics: ["350 GSM Brushed Fleece"],
        images: ["/images/FLEECE&Streetwear/ZIP_Hoodie.png"],
        productType: "Zip Hoodies", collection: "Core", gender: "Unisex", tags: ["zip hoodie", "fleece", "outerwear"],
        dateAdded: "2026-06-15", popularity: 88, featured: false
      },
      { 
        id: "tracksuits-coords", name: "Matching Luxury Fleece Tracksuit Set", spec: "380 GSM Premium Cotton Fleece Top & Bottom",
        description: "Matched top and bottom tracksuit sets cut from the exact same dye lot to ensure flawless color matching. Tailored modern athletic silhouette.",
        features: [
          "Color-matched 380 GSM premium fleece top and bottom",
          "Slightly tailored modern athletic silhouette",
          "Custom tonal hardware and drawcords",
          "Available for custom side-stripe paneling"
        ],
        intendedUse: "Luxury Streetwear Sets",
        colors: ["Bone White", "Mocha", "Black"],
        fabrics: ["380 GSM Fleece Blend"],
        images: ["/images/FLEECE&Streetwear/Tracksuits &co-ords.png"],
        productType: "Luxury Tracksuits", collection: "Luxury", gender: "Unisex", tags: ["tracksuit", "co-ord", "set"],
        dateAdded: "2026-06-20", popularity: 94, featured: true
      },
      { 
        id: "quarter-zip-pullover", name: "Quarter-Zip Fleece Pullover Sweatshirt", spec: "340 GSM Mid-Weight Fleece",
        description: "Smart casual quarter-zip fleece pullover featuring high stand collar and metal zipper closure. Ideal for corporate merch and activewear.",
        features: [
          "340 GSM cotton-poly brushed fleece",
          "High stand collar with silver metal quarter-zip",
          "Ribbed waist cuffs and hem",
          "Double-needle seam stitching"
        ],
        intendedUse: "Golf, Activewear & Corporate Merch",
        colors: ["Navy Blue", "Heather Charcoal"],
        fabrics: ["340 GSM Brushed Fleece"],
        images: ["/images/FLEECE&Streetwear/Quarter_Zip_Pullover.png"],
        productType: "Quarter-Zip Pullovers", collection: "Executive", gender: "Unisex", tags: ["quarterzip", "pullover", "fleece"],
        dateAdded: "2026-06-14", popularity: 87, featured: false
      },
      { 
        id: "streetwear-fleece-shorts", name: "Streetwear Heavyweight Fleece Shorts", spec: "380 GSM Heavy French Terry Cotton",
        description: "Heavyweight 380 GSM unbrushed French Terry fleece shorts featuring thick ribbed waistband and raw hem cut for streetwear aesthetics.",
        features: [
          "380 GSM 100% cotton heavy French Terry",
          "Raw edge hem styling",
          "Deep slanted side pockets",
          "Heavy drawstrings with metal tips"
        ],
        intendedUse: "Summer Streetwear Sets",
        colors: ["Vintage Black", "Sand"],
        fabrics: ["380 GSM French Terry"],
        images: ["/images/FLEECE&Streetwear/streetwear_fleece_shorts.png"],
        productType: "Fleece Shorts", collection: "Streetwear", gender: "Unisex", tags: ["shorts", "fleece", "streetwear"],
        dateAdded: "2026-06-02", popularity: 84, featured: false
      }
    ]
  },

  "performance": {
    title: "PERFORMANCE WEAR",
    description: "Advanced compression and moisture-management apparel ranging from 140 GSM aero shorts to 300 GSM high-impact sports bras.",
    filterTabs: ["All Products", "Compression Tops", "Moisture-Wicking Tees", "Aero Shorts", "Squat-Proof Leggings", "Sports Bras", "Windbreakers & Outerwear", "Seamless Active Tops"],
    specs: {
      weight: "140 - 300 GSM",
      composition: "Nylon Spandex / Recycled Poly Microfiber / Aero Ripstop",
      leadTime: "4 - 5 Weeks",
      sampleTime: "7 - 10 Days",
      moq: "100 Pieces / Color",
      production: "OEM / ODM Private Label",
      shippingTerms: "FOB Sialkot / Air & Sea Freight",
      packaging: "Individual Sealed Polybag / Tagged"
    },
    manufacturingHighlights: [
      { title: "4-Needle 6-Thread Flatlock", details: "Ultra-flat seam construction preventing skin chafing during high-intensity workouts." },
      { title: "Squat-Proof High Knit Density", details: "Interlock knit structure ensuring 100% zero transparency when fully stretched." },
      { title: "Capillary Moisture Wicking", details: "Yarn-level moisture management pulls sweat away from skin for rapid evaporation." },
      { title: "Sample Dispatch", details: "Physical counter-sample dispatch within 7-10 working days upon receiving tech pack." }
    ],
    customisation: ["Sublimation", "Reflective Heat Transfer", "Laser Cut Venting", "Silicone Grippers"],
    products: [
      { 
        id: "compression-wear", name: "4-Way Stretch Compression Base Layer Top", spec: "240 GSM Poly-Spandex Blend (85/15)",
        description: "Form-fitting compression top designed to support muscle recovery and regulate body temperature. Applies graduated pressure while pulling sweat away.",
        features: [
          "240 GSM 85% Polyester / 15% Spandex blend",
          "Graduated compression profile for muscle support",
          "Moisture-wicking capillary yarn technology",
          "Strategic mesh underarm panels for heat dumping"
        ],
        intendedUse: "Athletic Base Layer & Recovery",
        colors: ["Obsidian Black", "Arctic White", "Crimson Red"],
        fabrics: ["240 GSM Poly-Spandex (85/15)"],
        images: ["/images/Performancewear/Compression wear.png"],
        productType: "Compression Tops", collection: "Pro", gender: "Men", tags: ["compression", "top", "baselayer"],
        dateAdded: "2026-06-10", popularity: 98, featured: true
      },
      { 
        id: "training-tshirts", name: "Moisture-Wicking Athletic Dry-Fit Tee", spec: "160 GSM 100% Recycled Polyester Microfiber",
        description: "Standard lightweight athletic tee built for gym and fitness programs. Manufactured using 160 GSM recycled polyester microfiber for high breathability.",
        features: [
          "160 GSM 100% recycled polyester microfiber",
          "Standard athletic fit (not overly compressive)",
          "Anti-odor fabric treatment",
          "Tagless collar design to prevent irritation"
        ],
        intendedUse: "General Fitness & Gym Retail",
        colors: ["White", "Black", "Neon Volt"],
        fabrics: ["160 GSM Recycled Polyester"],
        images: ["/images/Performancewear/Training T shirts.png"],
        productType: "Moisture-Wicking Tees", collection: "Core", gender: "Unisex", tags: ["tee", "dryfit", "training"],
        dateAdded: "2026-06-25", popularity: 88, featured: false
      },
      { 
        id: "performance-shorts", name: "Lightweight Aero Cross-Training Shorts", spec: "140 GSM 4-Way Stretch Woven",
        description: "Versatile training shorts optimized for running and lifting. The woven 140 GSM 4-way stretch shell moves freely without catching on knees.",
        features: [
          "140 GSM lightweight 4-way stretch woven shell",
          "Laser-cut ventilation perforations on side panels",
          "Low-profile invisible zipper pockets",
          "Elastic waistband with internal drawcord"
        ],
        intendedUse: "Cross-Training & Running",
        colors: ["Matte Black", "Gunmetal Grey"],
        fabrics: ["140 GSM Stretch Woven"],
        images: ["/images/Performancewear/performance_shorts_new.png"],
        productType: "Aero Shorts", collection: "Aero", gender: "Men", tags: ["shorts", "training", "running"],
        dateAdded: "2026-06-15", popularity: 90, featured: true
      },
      { 
        id: "performance-legging", name: "Squat-Proof High-Rise Active Leggings", spec: "280 GSM Interlock Poly-Spandex (80/20)",
        description: "Opaque 280 GSM squat-proof leggings designed for running and high-impact training. Tightly interlock knit to ensure zero transparency.",
        features: [
          "280 GSM interlock poly-spandex (100% squat-proof)",
          "High-rise double-layered compression waistband",
          "Drop-in side pockets for smartphones",
          "Flatlock 6-thread seam construction"
        ],
        intendedUse: "Activewear & Yoga Retail",
        colors: ["Carbon Black", "Navy Blue"],
        fabrics: ["280 GSM Interlock Poly-Spandex"],
        images: ["/images/Performancewear/Performance Leggings.png"],
        productType: "Squat-Proof Leggings", collection: "Core", gender: "Women", tags: ["leggings", "activewear", "squatproof"],
        dateAdded: "2026-05-01", popularity: 85, featured: false
      },
      { 
        id: "sports-bras-active-tops", name: "High-Support Impact Sports Bra", spec: "300 GSM Dual-Layer Compression Fabric",
        description: "High-impact sports bra engineered to minimize bounce during rigorous activities. Constructed from 300 GSM dual-layer compressive fabric.",
        features: [
          "300 GSM compressive dual-layer fabric construction",
          "Racerback design for full shoulder mobility",
          "Removable perforated foam modesty cups",
          "Brushed elastic underband for chafe-free support"
        ],
        intendedUse: "High-Impact Athletics & Running",
        colors: ["Carbon Black", "Navy Blue"],
        fabrics: ["300 GSM Dual-Layer Compression"],
        images: ["/images/Performancewear/Sports Bra & Active Tops.png"],
        productType: "Sports Bras", collection: "Core", gender: "Women", tags: ["sportsbra", "activetop", "training"],
        dateAdded: "2026-06-11", popularity: 92, featured: true
      },
      { 
        id: "windbreaker-jacket", name: "Pro Athletic Windbreaker Jacket", spec: "120 GSM Water-Resistant Aero Ripstop Shell",
        description: "Ultra-lightweight weather-resistant windbreaker jacket built for outdoor athletic training. Features a packable hood, laser-vented back yoke, and water-repellent DWR finish.",
        features: [
          "120 GSM ultralight ripstop shell with DWR coating",
          "Packable hood with elastic cinch drawstrings",
          "Concealed zipper side pockets",
          "Elastic cuffs and dropped rear back hem"
        ],
        intendedUse: "Outdoor Athletics & Weather Protection",
        colors: ["Matte Black"],
        fabrics: ["120 GSM Aero Ripstop"],
        images: ["/images/Performancewear/Windbreajer.png"],
        productType: "Windbreakers & Outerwear", collection: "Pro", gender: "Unisex", tags: ["windbreaker", "jacket", "outerwear", "performance"],
        dateAdded: "2026-06-07", popularity: 89, featured: true
      },
      { 
        id: "seamless-crop-top", name: "Seamless Compression Active Crop Top", spec: "220 GSM Seamless Knit Nylon-Spandex",
        description: "Form-fitting seamless active crop top knitted from 220 GSM nylon-spandex. Features rib-textured side contouring and thumbholes.",
        features: [
          "220 GSM seamless circular knit nylon-spandex",
          "Body-mapping contour ribbing",
          "Integrated thumbholes on long sleeves",
          "Chafe-free seamless waistband"
        ],
        intendedUse: "Activewear & Fitness Programs",
        colors: ["Charcoal Grey", "Rose Pink"],
        fabrics: ["220 GSM Seamless Knit"],
        images: ["/images/Performancewear/Seamless Croptop.png"],
        productType: "Seamless Active Tops", collection: "Seamless", gender: "Women", tags: ["croptop", "seamless", "activewear"],
        dateAdded: "2026-06-19", popularity: 89, featured: false
      }
    ]
  }
};
