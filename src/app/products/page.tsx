"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const productCategories = [
 {
 id: "martial-arts",
 title: "Martial Arts Wear",
 subtitle: "Combat Engineering",
 description: "Technical combat apparel engineered for extreme durability, traditional cuts, and professional performance. Specializing in 14oz smooth cotton canvas Kata Gis, pearl weave BJJ Gis, and satin Muay Thai shorts.",
 image: "/images/martial-arts/pro-bjj-gi.png",
 specs: [
 " Smooth Cotton Canvas Kata Gis",
 "Heavyweight Pearl Weave Cotton (BJJ Gis)",
 "Reinforced Triple-Needle & 3-Ply Bar-Tack Stitching",
 "Anti-Microbial & Pre-Shrunk Fabric Treatment",
 "Satin Muay Thai & Sparring Shorts"
 ],
 fabric: "100% Cotton Canvas / Pearl Weave / Ripstop Poly-Cotton",
 capabilities: "Full OEM/ODM Production • Custom Embroidery • Woven Patch Integration",
 tags: ["BJJ Gis", "Kata Karate Gis", "Taekwondo Uniforms", "Judo Gis", "No-Gi Rashguards", "MMA Shorts", "Muay Thai & Boxing"]
 },
 {
 id: "cotton-apparel",
 title: "Cotton & Casualwear",
 subtitle: "Streetwear & Retail Blanks",
 description: "Premium cotton apparel manufacturing ranging from Peruvian Pima tees to heavyweight oversized streetwear blanks and organic pique polos.",
 image: "/images/cotton-casualwear/heavyweight-oversized-tee.png",
 specs: [
 "Heavyweight Oversized Streetwear Tees ",
 "Organic Cotton Pique Polo Shirts ",
 "Luxury Peruvian Pima Crewnecks ",
 "Custom Acid Wash & Vintage Wash Distressing",
 "Twin-Needle Collar & Sleeve Coverstitching"
 ],
 fabric: "100% Combed Ring-Spun Cotton / Organic Pique / Peruvian Pima",
 capabilities: "High-Density Screen Printing • Puff Ink • Custom Woven Neck Tags",
 tags: ["Heavyweight Tees", "Pique Polo Shirts", "Casual Shirts", "Long Sleeves", "Pima Cotton", "Vintage Wash", "Tank Tops"]
 },
 {
 id: "team-jerseys",
 title: "Sports Shirts & Team Jerseys",
 subtitle: "Custom Match Day Apparel",
 description: "Custom athletic team kits, sublimated sports jerseys, and high-performance club apparel engineered for match day and professional leagues.",
 image: "/images/team-jerseys/football-match-kits.png",
 specs: [
 "Sublimated Soccer & Football Match Day Kits ",
 "UV-Protective Cricket Team Shirts & Polos ",
 "Double-Layer Retro Mesh Basketball Uniforms ",
 "Heavyweight Contact Rugby & Multi-Sport Jerseys ",
 "Full HD Dye-Sublimation & Custom Club Crest Badges"
 ],
 fabric: "Micro-Interlock Poly / Breathable Jacquard Mesh / Poly-Spandex",
 capabilities: "HD Italian Dye-Sublimation • Rubberized 3D Crests • Player Name/Number Customization",
 tags: ["Football Kits", "Cricket Team Shirts", "Basketball Uniforms", "Rugby Jerseys", "Esports Tops", "Warmup Jackets", "Multi-Sport Tees"]
 },
 {
 id: "denim",
 title: "Denim Products",
 subtitle: "Selvedge Authority",
 description: "Premium selvedge denim, custom washed finishes, and expert tailoring. From raw denim to complex distressed streetwear, we provide scalable manufacturing solutions for premium global labels.",
 image: "/images/denim/selvedge-denim.png",
 specs: [
 " Shuttle-Loomed Japanese Selvedge",
 "Custom Laser Distressing & Hand-Scraping",
 "Enzyme, Stone, and Acid Wash Specializations",
 " Heavy-Duty Industrial Workwear",
 "Precision Tapering & Engineered Fit Systems"
 ],
 fabric: "Organic Cotton Denim / Selvedge / Elastane Blends",
 capabilities: "Proprietary Washing Lab • Custom Hardware Sourcing • Pattern Engineering",
 tags: ["Japanese Selvedge", "Trucker Jackets", "Classic Jeans", "Denim Shirts", "Utility Workwear", "Distressed Denim", "Denim Overshirts"]
 },
 {
 id: "fleece",
 title: "Fleece & Streetwear",
 subtitle: "Urban Essentials",
 description: "Heavyweight fleece and urban coordinates engineered for the modern streetwear market. We focus on oversized silhouettes, premium hand-feel, and high-density branding applications.",
 image: "/images/fleece/premium-hoodies.png",
 specs: [
 "Heavyweight Boxy Hoodies (French Terry)",
 "Oversized Drop-Shoulder Patterns & Boxy Fits",
 "Double-Lined Hoods & Heavy 2x2 Ribbed Cuffs",
 "High-Density Screen Print & Puff Print Capabilities",
 "Matching Dye-Lot Luxury Tracksuit Sets "
 ],
 fabric: "Premium Combed Cotton / Polyester Interlock Blends",
 capabilities: "Large Scale Screen Printing • Custom Pantones • Private Label Packaging",
 tags: ["Boxy Hoodies", "Crewnecks", "Tapered Joggers", "Zip Hoodies", "Luxury Tracksuits", "Quarter-Zips", "Fleece Shorts"]
 },
 {
 id: "performance",
 title: "Performance Wear",
 subtitle: "Technical Athleticism",
 description: "Advanced compression and moisture-management apparel for professional athletes. Our production line utilizes laser-cutting and flat-lock stitching for friction-less athletic performance.",
 image: "/images/performance/compression-wear.png",
 specs: [
 "4-Way Stretch Compression Base Layers",
 "Squat-Proof Interlock Leggings ",
 "4-Needle 6-Thread Flat-Lock Frictionless Seams",
 "High-Support Impact Sports Bras ",
 "Sublimation Printing & Reflective Branding"
 ],
 fabric: "Nylon Spandex / Recycled Polyester / Mesh Blends",
 capabilities: "Sublimation Lab • Laser Cutting • Heat Press Integration",
 tags: ["Compression Tops", "Moisture-Wicking Tees", "Aero Shorts", "Squat-Proof Leggings", "Sports Bras", "Windbreakers", "Seamless Active Tops"]
 }
];

export default function ProductsPage() {
 return (
 <main className="min-h-screen bg-zinc-950 selection:bg-brand-red selection:text-white overflow-x-hidden">
 <Navbar />
 
 {/* Hero Section */}
 <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 border-b border-zinc-800">
 <div className="absolute inset-0 noise-bg opacity-[0.03] z-0" />
 <div className="max-w-7xl mx-auto relative z-10 text-center">
 <motion.span 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="text-xs md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-brand-red mb-4 block"
 >
 Product Catalog & Division Directory
 </motion.span>
 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-none"
 >
 B2B Manufacturing <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">Divisions</span>
 </motion.h1>
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="text-base md:text-xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed"
 >
 Explore our specialized OEM/ODM production divisions in Sialkot, Pakistan. Engineered for global brands requiring exact GSM weights, technical fabric blends, and custom tech packs.
 </motion.p>
 </div>
 </section>

 {/* Category Grid Section */}
 <section className="py-20 md:py-32 px-6 md:px-12 bg-zinc-950">
 <div className="max-w-7xl mx-auto space-y-24 md:space-y-36">
 {productCategories.map((category, index) => {
 const isEven = index % 2 === 0;
 return (
 <motion.div
 key={category.id}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8 }}
 className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center ${
 isEven ? "" : "lg:flex-row-reverse"
 }`}
 >
 {/* Image Container */}
 <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
 <Link href={`/products/${category.id}`} className="group block relative">
 <div className="relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl transition-all duration-700 group-hover:border-brand-red/60 group-hover:shadow-[0_20px_50px_rgba(220,38,38,0.2)]">
 <Image
 src={category.image}
 alt={category.title}
 fill
 sizes="(max-width: 1024px) 100vw, 50vw"
 className="object-cover transition-transform duration-1000 group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
 
 {/* Badge */}
 <div className="absolute top-6 left-6 z-10">
 <span className="bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
 {category.subtitle}
 </span>
 </div>
 </div>
 </Link>
 </div>

 {/* Content Container */}
 <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
 <div className="space-y-2">
 <span className="text-xs font-black uppercase tracking-widest text-brand-red">
 Division 0{index + 1}
 </span>
 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
 {category.title}
 </h2>
 </div>

 <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-medium">
 {category.description}
 </p>

 {/* Specs List */}
 <div className="space-y-3 pt-2">
 <h3 className="text-xs font-black uppercase tracking-widest text-zinc-300">
 Construction Details
 </h3>
 <div className="grid grid-cols-1 gap-2">
 {category.specs.map((spec, i) => (
 <div key={i} className="flex items-center gap-3 text-xs font-bold text-zinc-200">
 <div className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
 <span>{spec}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Fabric & Capabilities */}
 <div className="pt-4 border-t border-zinc-800/80 space-y-3">
 <div className="text-xs font-medium text-zinc-400">
 <strong className="text-zinc-300 font-bold uppercase tracking-wider block mb-1">Fabric System</strong>
 {category.fabric}
 </div>
 <div className="text-xs font-medium text-zinc-400">
 <strong className="text-zinc-300 font-bold uppercase tracking-wider block mb-1">OEM Capabilities</strong>
 {category.capabilities}
 </div>
 </div>

 {/* Sub-Category Tags */}
 <div className="flex flex-wrap gap-2 pt-2">
 {category.tags.map((tag, i) => (
 <span key={i} className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
 {tag}
 </span>
 ))}
 </div>

 {/* Action Link */}
 <div className="pt-4">
 <Link
 href={`/products/${category.id}`}
 className="inline-flex items-center gap-3 bg-white hover:bg-brand-red text-zinc-950 hover:text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 group"
 >
 <span>Explore {category.title} Line</span>
 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
 </Link>
 </div>
 </div>
 </motion.div>
 );
 })}
 </div>
 </section>

 {/* Custom B2B CTA */}
 <CTA />

 <Footer />
 </main>
 );
}
