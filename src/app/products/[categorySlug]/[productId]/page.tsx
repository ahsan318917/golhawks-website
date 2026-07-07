"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { Settings, Plus } from "lucide-react";
import { motion } from "framer-motion";

import { CATEGORY_DATA } from "@/data/categories";
import { notFound } from "next/navigation";

import { use } from "react";

export default function ProductDetailPage({ params }: { params: Promise<{ categorySlug: string, productId: string }> }) {
  const { categorySlug, productId } = use(params);
  
  const categoryData = CATEGORY_DATA[categorySlug];
  if (!categoryData) notFound();
  
  const PRODUCT = categoryData.products.find(p => p.id === productId);
  if (!PRODUCT) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-brand-red selection:text-white overflow-x-hidden relative">
      <Navbar />

      {/* 1. Large Editorial Image Gallery */}
      <section className="pt-32 md:pt-40 pb-12 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-zinc-900 border-b border-zinc-800">
         {/* Background Texture & Depth */}
         <div className="absolute inset-0 noise-bg opacity-[0.03] z-0" />
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.06),transparent_60%)] blur-[100px] translate-x-1/2 pointer-events-none z-0" />
         
         <div className="max-w-[1400px] mx-auto relative z-10">
         {/* Breadcrumbs */}
         <div className="mb-10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-300">
           <Link href="/products" className="hover:text-white transition-colors">Products</Link>
           <span>/</span>
           <Link href={`/products/${categorySlug}`} className="hover:text-white transition-colors">{categoryData.title}</Link>
           <span>/</span>
           <span className="text-white">{PRODUCT.name}</span>
         </div>

         {/* Masonry-style Split Gallery */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {PRODUCT.images.map((img, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: i * 0.1 }}
               >
                 <div className="relative w-full bg-zinc-900 aspect-[4/5] md:aspect-square group overflow-hidden group-hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-shadow duration-1000">
                   {/* Moody Vignette Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-1000 mix-blend-multiply" />
                   
                   <Image 
                     src={img} 
                     alt={`${PRODUCT.name} Gallery ${i + 1}`} 
                     fill 
                     sizes="(max-width: 768px) 100vw, 50vw"
                     className="object-cover transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 contrast-[1.15] saturate-[0.75] brightness-[0.85] sepia-[.1]" 
                   />
                 </div>
               </motion.div>
            ))}
         </div>
         </div>
      </section>

      {/* 2. Product Information Section & 3. Manufacturing Specs */}
      <section className="py-12 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-zinc-900">
         {/* Background Texture & Depth */}
         <div className="absolute inset-0 noise-bg opacity-[0.03] z-0" />
         <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.04),transparent_60%)] blur-[100px] -translate-x-1/2 pointer-events-none z-0" />

         <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left: Product Info */}
            <div className="lg:col-span-7">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                 <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter mb-6 leading-[0.9]">
                   {PRODUCT.name}
                 </h1>
                 <p className="text-lg md:text-xl text-zinc-200 font-medium leading-relaxed mb-12 max-w-2xl">
                   {PRODUCT.description}
                 </p>
                 
                 <div className="space-y-8">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 block mb-3">Intended Use</span>
                      <span className="text-sm font-bold uppercase tracking-wide text-white">{PRODUCT.intendedUse}</span>
                    </div>
                    <div className="h-px w-full bg-zinc-800" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 block mb-4">Available Colors</span>
                      <div className="flex flex-wrap gap-3">
                         {PRODUCT.colors.map((c, i) => (
                           <span key={i} className="text-xs md:text-xs font-bold uppercase tracking-widest text-zinc-200 border border-zinc-600 px-4 py-2 rounded-full">
                             {c}
                           </span>
                         ))}
                      </div>
                    </div>
                    <div className="h-px w-full bg-zinc-800" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 block mb-4">Fabric Options</span>
                      <div className="flex flex-wrap gap-3">
                         {PRODUCT.fabrics.map((f, i) => (
                           <span key={i} className="text-xs md:text-xs font-bold uppercase tracking-widest text-zinc-200 bg-zinc-800 px-4 py-2 rounded-full border border-transparent">
                             {f}
                           </span>
                         ))}
                      </div>
                    </div>
                 </div>
               </motion.div>
            </div>
            
            {/* Right: Manufacturing Specifications (Sticky B2B Anchor) */}
            <div className="lg:col-span-5 relative">
               <div className="bg-zinc-900 backdrop-blur-xl border border-zinc-700 p-8 md:p-12 lg:sticky lg:top-32 shadow-2xl">
                 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8 flex items-center gap-3 border-b border-zinc-700 pb-6">
                   <Settings className="w-4 h-4 text-brand-red" /> Technical Specs
                 </h3>
                 <ul className="space-y-6">
                   <li className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-800 pb-4">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs md:text-xs">Minimum Order</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right">{categoryData.specs.moq}</span>
                   </li>
                   <li className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-800 pb-4">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs md:text-xs">Lead Time</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right">{categoryData.specs.leadTime}</span>
                   </li>
                   <li className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-800 pb-4">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs md:text-xs">Fabric Weight</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right">{categoryData.specs.weight}</span>
                   </li>
                   <li className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-800 pb-4">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs md:text-xs">Composition</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right max-w-[60%]">{categoryData.specs.composition}</span>
                   </li>
                   <li className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-800 pb-4">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs md:text-xs">Packaging</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right">Poly-bagged / Tagged</span>
                   </li>
                 </ul>
               </div>
            </div>
            </div>
         </div>
      </section>

      {/* 4. Customisation Options */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-y border-zinc-800 relative overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-zinc-950 mt-12">
         {/* Background Texture */}
         <div className="absolute inset-0 noise-bg opacity-[0.03] z-0" />
         
        <div className="max-w-[1400px] mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-12 text-center">
            Manufacturing Capabilities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
             {categoryData.customisation.map((cap, i) => (
                <div key={i} className="border border-zinc-700 px-8 py-6 flex flex-col items-center justify-center text-center gap-4 hover:border-white/30 transition-colors group bg-zinc-900 hover:bg-zinc-950 min-w-[200px]">
                   <Plus className="w-5 h-5 md:w-6 md:h-6 text-brand-red group-hover:scale-125 transition-transform" />
                   <span className="text-xs font-bold uppercase tracking-widest text-zinc-200 group-hover:text-white transition-colors">
                     {cap}
                   </span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Related Products */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
         <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-12">
           Similar Constructions
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[1, 2, 3].map((_, i) => (
               <Link key={i} href="#" className="group block cursor-pointer">
                 <div className="relative aspect-[4/5] w-full bg-zinc-900 mb-6 overflow-hidden">
                   <Image 
                     src={PRODUCT.images[1]} 
                     alt="Related Product" 
                     fill 
                     sizes="(max-width: 768px) 100vw, 33vw"
                     className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]" 
                   />
                 </div>
                 <h4 className="text-lg font-black uppercase tracking-tight text-white mb-2 group-hover:text-zinc-200 transition-colors">
                   Heavyweight Hoodie
                 </h4>
                 <p className="text-xs font-bold uppercase tracking-widest text-zinc-300">French Terry 400GSM</p>
               </Link>
            ))}
         </div>
      </section>

      {/* 6. Final CTA Pre-Header */}
      <section className="pt-20 md:pt-32 px-6 text-center border-t border-zinc-700 relative z-10 bg-gradient-to-b from-brand-black to-zinc-900">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tighter max-w-4xl mx-auto">
          Interested in manufacturing this design?
        </h2>
      </section>
      
      <CTA />
      
      <Footer />
    </main>
  );
}
