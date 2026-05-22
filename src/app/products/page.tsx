"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import Image from "next/image";
import { ShieldCheck, Zap, Scissors, Globe, Settings } from "lucide-react";

const productCategories = [
  {
    id: "martial-arts",
    title: "Martial Arts Wear",
    subtitle: "Combat Engineering",
    description: "Technical combat apparel engineered for extreme durability and professional performance. Our manufacturing facility specializes in heavyweight weaves and reinforced construction for elite global combat brands.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop",
    specs: [
      "Heavyweight Pearl Weave Cotton (450-550 GSM)",
      "Reinforced Triple-Needle Contrast Stitching",
      "Anti-Microbial & Pre-Shrunk Fabric Treatment",
      "EVA Foam Padded Collars for Structural Integrity",
      "IBJJF & Tournament Compliant Specifications"
    ],
    fabric: "100% Cotton Pearl Weave / Ripstop Poly-Cotton",
    capabilities: "Full OEM/ODM Production • Custom Embroidery • Woven Patch Integration",
    tags: ["BJJ GIs", "Karate Gi", "Judo Uniforms", "Rank Belts", "Training Apparel"]
  },
  {
    id: "denim",
    title: "Denim Products",
    subtitle: "Selvedge Authority",
    description: "Premium selvedge denim, custom washed finishes, and expert tailoring. From raw denim to complex distressed streetwear, we provide scalable manufacturing solutions for premium global labels.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2052&auto=format&fit=crop",
    specs: [
      "Premium Selvedge & Stretch Denim Options",
      "Custom Laser Distressing & Hand-Scraping",
      "Enzyme, Stone, and Acid Wash Specializations",
      "Reinforced Rivet Placement & YKK Hardware",
      "Precision Tapering & Engineered Fit Systems"
    ],
    fabric: "Organic Cotton Denim / Selvedge / Elastane Blends",
    capabilities: "Proprietary Washing Lab • Custom Hardware Sourcing • Pattern Engineering",
    tags: ["Raw Denim", "Denim Jackets", "Washed Jeans", "Streetwear", "Custom Apparel"]
  },
  {
    id: "fleece",
    title: "Fleece & Streetwear",
    subtitle: "Urban Essentials",
    description: "Heavyweight fleece and urban coordinates engineered for the modern streetwear market. We focus on oversized silhouettes, premium hand-feel, and high-density branding applications.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop",
    specs: [
      "Heavyweight French Terry & Brushed Fleece (300-450 GSM)",
      "Oversized Drop-Shoulder Patterns & Boxy Fits",
      "Double-Lined Hoods & Heavy-Ribbed Cuffs",
      "High-Density Screen Print & Puff Print Capabilities",
      "Sustainable Fabric Sourcing & Custom Dyeing"
    ],
    fabric: "Premium Combed Cotton / Polyester Interlock Blends",
    capabilities: "Large Scale Screen Printing • Custom Pantones • Private Label Packaging",
    tags: ["Hoodies", "Joggers", "Tech Fleece", "Oversized Tees", "Urban Sets"]
  },
  {
    id: "performance",
    title: "Performance Wear",
    subtitle: "Technical Athleticism",
    description: "Advanced compression and moisture-management apparel for professional athletes. Our production line utilizes laser-cutting and flat-lock stitching for friction-less athletic performance.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    specs: [
      "4-Way Stretch Compression Technology",
      "Advanced Moisture-Wicking & Rapid-Dry Finish",
      "Flat-Lock Frictionless Seam Construction",
      "Laser-Cut Ventilation & Heat-Mapped Zones",
      "Sublimation Printing & Reflective Branding"
    ],
    fabric: "Nylon Spandex / Recycled Polyester / Mesh Blends",
    capabilities: "Sublimation Lab • Laser Cutting • Heat Press Integration",
    tags: ["Compression", "Training Shorts", "Rash Guards", "Tracksuits", "Leggings"]
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-brand-black selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Intro Section */}
      <section className="pt-32 md:pt-56 pb-20 md:pb-32 border-b border-white/5 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden">
        {/* Cinematic Background Glows */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-red/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/[0.02] blur-[100px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
            >
              <Zap className="w-4 h-4 text-brand-red" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Manufacturing Excellence</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-10 uppercase text-white"
            >
              ENGINEERED <br />
              <span className="text-zinc-800 italic">CATEGORIES</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-2xl"
            >
              We provide end-to-end manufacturing solutions for global apparel brands, specializing in high-performance technical wear and premium denim construction.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Category Sections */}
      {productCategories.map((category, i) => (
        <section 
          key={category.id}
          className={`section-padding relative overflow-hidden ${
            i % 2 === 0 ? 'bg-brand-black' : 'bg-zinc-950'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${
              i % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              
              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full lg:w-1/2 group"
              >
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                  
                  {/* Floating Overlay Info */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="flex items-center gap-4">
                      <Settings className="w-5 h-5 text-brand-red animate-spin-slow" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">{category.capabilities}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Column */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block">
                    {category.subtitle}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase text-white tracking-tighter">
                    {category.title}
                  </h2>
                  <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed mb-10">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-1 gap-8 mb-12">
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] mb-4">
                        <Zap className="w-4 h-4 text-brand-red" />
                        Technical Specs
                      </h4>
                      <ul className="space-y-3">
                        {category.specs.map((spec, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm md:text-base text-zinc-300 font-bold border-b border-white/5 pb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] mb-3">
                          <Scissors className="w-4 h-4 text-zinc-500" />
                          Fabric System
                        </h4>
                        <p className="text-sm font-bold text-zinc-500 uppercase tracking-tight">{category.fabric}</p>
                      </div>
                      
                      <div>
                        <h4 className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] mb-3">
                          <Globe className="w-4 h-4 text-zinc-500" />
                          OEM/ODM Categories
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.tags.map((tag, j) => (
                            <span key={j} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-white hover:border-brand-red/30 transition-all cursor-default">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <CTA />
      
      <Footer />
    </main>
  );
}
