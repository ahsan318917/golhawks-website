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
    <main className="min-h-screen bg-zinc-950 selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Intro Section */}
      <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 relative overflow-hidden bg-zinc-950 border-b border-zinc-800">
         {/* Background Texture */}
         <div className="absolute inset-0 noise-bg opacity-[0.05] z-0" />
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

         <div className="max-w-7xl mx-auto relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
             
             {/* Left Text Content */}
             <motion.div 
               initial="hidden" 
               animate="visible" 
               variants={{
                 hidden: { opacity: 0 },
                 visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
               }} 
               className="flex flex-col items-start text-left"
             >
                <motion.span 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-6"
                >
                  Global Manufacturing
                </motion.span>
                <motion.h1 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black leading-[0.85] tracking-tighter uppercase text-white mb-8"
                >
                   THE <br/><span className="text-zinc-300/50 italic">ARCHIVE</span>
                </motion.h1>
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="w-12 h-1 bg-brand-red mb-8" 
                />
                <motion.p 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="text-base md:text-xl text-zinc-200 font-medium leading-relaxed max-w-md whitespace-pre-wrap"
                >
                   Premium end-to-end manufacturing for the world's most demanding apparel brands. Discover our engineered collections below.
                </motion.p>
             </motion.div>

             {/* Right Image Collage */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
               className="relative h-[50vh] lg:h-[60vh] w-full hidden md:block"
             >
               {/* Main large image - Martial Arts / Performance */}
               <div className="absolute right-0 top-0 w-3/4 h-5/6 rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl z-10">
                 <Image 
                   src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop"
                   alt="Martial Arts Manufacturing"
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
               {/* Overlapping smaller image - Denim / Streetwear */}
               <div className="absolute left-0 bottom-10 w-[55%] h-[60%] rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl z-20">
                 <Image 
                   src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2052&auto=format&fit=crop"
                   alt="Denim Detail"
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
             </motion.div>

           </div>
         </div>
      </section>

      {/* Product Category Sections */}
      {productCategories.map((category, i) => (
        <section 
          key={category.id}
          className="section-padding relative overflow-hidden bg-zinc-950 border-t border-zinc-800"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <Link href={`/products/${category.id}`} className="block group cursor-pointer">
              <div className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* Image Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full lg:w-[55%]"
                >
                  <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-white/15 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] group-hover:-translate-y-2">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 contrast-[1.05] saturate-[1.05]"
                      priority={i < 1}
                      loading={i < 1 ? "eager" : "lazy"}
                    />
                  </div>
                </motion.div>

              {/* Content Column */}
              <div className="w-full lg:w-[45%] lg:px-8">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase text-white tracking-tighter group-hover:text-zinc-200 transition-colors duration-500">
                    {category.title}
                  </h2>
                  <span className="text-zinc-300 font-bold uppercase tracking-[0.4em] text-xs md:text-xs mb-8 block">
                    {category.subtitle}
                  </span>
                  <p className="text-base md:text-lg text-zinc-200 font-medium leading-relaxed mb-12">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-1 gap-8 mb-12 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="space-y-4">
                      <h4 className="text-white font-black uppercase tracking-widest text-xs md:text-xs mb-4">
                        Construction Details
                      </h4>
                      <ul className="space-y-4">
                        {category.specs.map((spec, j) => (
                          <li key={j} className="text-xs md:text-sm text-zinc-200 font-bold border-b border-zinc-800 pb-4 uppercase tracking-wide">
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-8 mt-6">
                      <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs md:text-xs mb-4">
                          Fabric System
                        </h4>
                        <p className="text-xs md:text-sm font-bold text-zinc-300 uppercase tracking-wide">{category.fabric}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs md:text-xs mb-4">
                          Available Programs
                        </h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                          {category.tags.map((tag, j) => (
                            <span key={j} className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Explore Cursor Feedback */}
                    <div className="flex items-center gap-4 text-zinc-300 group-hover:text-white transition-colors duration-500 border-b border-zinc-700 group-hover:border-white/30 pb-3 w-fit mt-8">
                      <span className="text-xs font-bold uppercase tracking-widest">Explore Collection</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <CTA />
      
      <Footer />
    </main>
  );
}
