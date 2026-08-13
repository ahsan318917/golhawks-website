"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { Settings, Plus, MessageCircle, ShieldCheck, Clock, PackageCheck, Truck, CheckCircle2, Sliders } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCustomizer from "@/components/ProductCustomizer";

import { CATEGORY_DATA } from "@/data/categories";
import { notFound } from "next/navigation";


export function ProductPageClient({ categorySlug, productId }: { categorySlug: string; productId: string }) {
  
  const categoryData = CATEGORY_DATA[categorySlug];
  if (!categoryData) notFound();
  
  const PRODUCT = categoryData.products.find(p => p.id === productId);
  if (!PRODUCT) notFound();

  const relatedProducts = categoryData.products.filter(p => p.id !== productId).slice(0, 3);

  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                 <p className="text-base md:text-lg text-zinc-300 font-medium leading-relaxed mb-8 max-w-2xl">
                   {PRODUCT.description}
                 </p>

                 {/* Authentic B2B Manufacturing Badges */}
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                   <div className="flex items-center gap-2 text-zinc-300">
                     <Clock className="w-4 h-4 text-brand-red shrink-0" />
                     <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">7-10 Days Sample</span>
                   </div>
                   <div className="flex items-center gap-2 text-zinc-300">
                     <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
                     <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Pre-Shipment QC</span>
                   </div>
                   <div className="flex items-center gap-2 text-zinc-300">
                     <PackageCheck className="w-4 h-4 text-brand-red shrink-0" />
                     <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Tech Pack Ready</span>
                   </div>
                   <div className="flex items-center gap-2 text-zinc-300">
                     <Truck className="w-4 h-4 text-brand-red shrink-0" />
                     <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">FOB Sialkot Cargo</span>
                   </div>
                 </div>

                 {PRODUCT.features && PRODUCT.features.length > 0 && (
                   <ul className="mb-12 space-y-4">
                     {PRODUCT.features.map((feature, idx) => (
                       <li key={idx} className="flex items-start gap-4 text-sm md:text-base text-zinc-200 font-medium">
                         <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                         <span className="leading-relaxed">{feature}</span>
                       </li>
                     ))}
                   </ul>
                 )}
                 
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
                 
                 <div className="mt-12 flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`https://wa.me/923712362363?text=${encodeURIComponent(`Hi GolHawks! I would like to inquire about lot booking for: ${PRODUCT.name}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-red text-white text-sm md:text-base font-black uppercase tracking-widest px-8 py-5 rounded-full hover:bg-brand-red-dark transition-all duration-300 hover:scale-105 premium-shadow-red cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                      Contact Us for Lot Booking
                    </a>

                    <a 
                      href="#customizer-builder"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-700 hover:border-brand-red text-white text-sm md:text-base font-black uppercase tracking-widest px-8 py-5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <Sliders className="w-5 h-5 text-brand-red" />
                      Customize Spec Order
                    </a>
                 </div>
               </motion.div>
            </div>
            
            {/* Right: Manufacturing Specifications (Sticky B2B Anchor) */}
            <div className="lg:col-span-5 relative">
               <div className="bg-zinc-900 backdrop-blur-xl border border-zinc-700 p-8 md:p-12 lg:sticky lg:top-32 shadow-2xl rounded-2xl">
                 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8 flex items-center gap-3 border-b border-zinc-700 pb-6">
                   <Settings className="w-4 h-4 text-brand-red" /> Technical & Manufacturing Specs
                 </h3>
                 <ul className="space-y-5">
                   <li className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-800 pb-4">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs">Minimum Order</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right">{categoryData.specs.moq}</span>
                   </li>
                   <li className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-800 pb-4">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs">Sample Dispatch</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right">{categoryData.specs.sampleTime || "7 - 10 Days"}</span>
                   </li>
                   <li className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-800 pb-4">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs">Bulk Production</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right">{categoryData.specs.leadTime}</span>
                   </li>
                   <li className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-800 pb-4">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs">Fabric Weight</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right">{categoryData.specs.weight}</span>
                   </li>
                   <li className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-800 pb-4">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs">Composition</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right max-w-[60%]">{categoryData.specs.composition}</span>
                   </li>
                   <li className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-800 pb-4">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs">Production Type</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right">{categoryData.specs.production || "OEM / ODM Private Label"}</span>
                   </li>
                   <li className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-800 pb-4">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs">Shipping Terms</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right max-w-[60%]">{categoryData.specs.shippingTerms || "FOB Sialkot / Air & Sea Freight"}</span>
                   </li>
                   <li className="flex justify-between items-center text-xs md:text-sm pb-2">
                     <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs">Packaging</span>
                     <span className="text-white font-bold uppercase tracking-wide text-right">{categoryData.specs.packaging || "Individual Polybag / Master Carton"}</span>
                   </li>
                 </ul>
               </div>
            </div>
            </div>
         </div>
      </section>

      {/* 4. Manufacturing Quality Highlights & Customisation Options */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-y border-zinc-800 relative overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-zinc-950 mt-12">
         {/* Background Texture */}
         <div className="absolute inset-0 noise-bg opacity-[0.03] z-0" />
         
        <div className="max-w-[1400px] mx-auto relative z-10">
          {categoryData.manufacturingHighlights && categoryData.manufacturingHighlights.length > 0 && (
            <div className="mb-20">
              <div className="text-center mb-12">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-red block mb-3">Authentic Factory Standards</span>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white">
                  Manufacturing & Quality Control Protocols
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryData.manufacturingHighlights.map((hl, idx) => (
                  <div key={idx} className="border border-zinc-800 bg-zinc-900/60 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-red/40 transition-colors">
                    <div>
                      <div className="w-8 h-8 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-4 h-4 text-brand-red" />
                      </div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-white mb-2">{hl.title}</h4>
                      <p className="text-xs text-zinc-300 leading-relaxed font-medium">{hl.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/50 px-4.5 py-2 rounded-full shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-white">Private Labeling</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-12 text-center">
              Customization Options For This Product
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
               {categoryData.customisation.map((cap, i) => (
                  <div key={i} className="border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 md:p-8 flex flex-col items-start gap-6 hover:bg-zinc-900 hover:border-brand-red/50 transition-all duration-300 group rounded-2xl">
                     <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-brand-red/50 transition-colors">
                       <Plus className="w-4 h-4 text-brand-red" />
                     </div>
                     <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                       {cap}
                     </span>
                  </div>
               ))}
            </div>
          </div>

          {/* Interactive B2B Order Specification Builder */}
          <div id="customizer-builder" className="pt-12">
            <ProductCustomizer
              categoryTitle={categoryData.title}
              productName={PRODUCT.name}
              defaultColors={PRODUCT.colors}
              customisationOptions={categoryData.customisation}
            />
          </div>
        </div>
      </section>

      {/* 5. Related Products */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
         <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-12">
           Similar Constructions
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {relatedProducts.map((relatedProduct) => (
               <Link key={relatedProduct.id} href={`/products/${categorySlug}/${relatedProduct.id}`} className="group block cursor-pointer">
                 <div className="relative aspect-[4/5] w-full bg-zinc-900 mb-6 overflow-hidden border border-zinc-800 rounded-2xl">
                   <Image 
                     src={relatedProduct.images[0]} 
                     alt={relatedProduct.name} 
                     fill 
                     sizes="(max-width: 768px) 100vw, 33vw"
                     className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]" 
                   />
                 </div>
                 <h4 className="text-lg font-black uppercase tracking-tight text-white mb-2 group-hover:text-zinc-200 transition-colors">
                   {relatedProduct.name}
                 </h4>
                 <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">{relatedProduct.spec}</p>
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

      {/* Sticky Mobile & Tablet Lot-Booking Action Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[90] lg:hidden bg-zinc-950/95 backdrop-blur-2xl border-t border-zinc-800 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-zinc-900 border border-zinc-700 shrink-0">
                  <Image 
                    src={PRODUCT.images[0]} 
                    alt={PRODUCT.name} 
                    fill 
                    className="object-cover" 
                    sizes="44px"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-black uppercase text-white truncate leading-tight">
                    {PRODUCT.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-brand-red tracking-wider">
                    MOQ: {categoryData.specs.moq}
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/923712362363?text=${encodeURIComponent(`Hi GolHawks! I would like to inquire about lot booking for: ${PRODUCT.name}`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-full transition-all shadow-lg active:scale-95 shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Inquire Lot</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
