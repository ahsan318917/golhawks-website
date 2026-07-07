"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, SlidersHorizontal, Search, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { CATEGORY_DATA } from "@/data/categories";
import { notFound } from "next/navigation";

import { useQuoteCart } from "@/context/QuoteContext";
import { use, useState, useMemo } from "react";

export default function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
  const { categorySlug } = use(params);
  const categoryData = CATEGORY_DATA[categorySlug];
  
  if (!categoryData) {
    notFound();
  }

  const { addItem } = useQuoteCart();
  const [activeTab, setActiveTab] = useState(categoryData.filterTabs[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Featured");
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Filters state
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);

  // Deriving available filters
  const availableFabrics = useMemo(() => Array.from(new Set(categoryData.products.flatMap(p => p.fabrics))), [categoryData]);
  const availableCollections = useMemo(() => Array.from(new Set(categoryData.products.map(p => p.collection))), [categoryData]);
  const availableGenders = useMemo(() => Array.from(new Set(categoryData.products.map(p => p.gender))), [categoryData]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = categoryData.products;

    // 1. Tab Filtering
    if (activeTab !== "All Products") {
      result = result.filter(p => p.productType === activeTab);
    }

    // 2. Search Filtering
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.fabrics.some(f => f.toLowerCase().includes(query)) ||
        p.tags.some(t => t.toLowerCase().includes(query)) ||
        p.productType.toLowerCase().includes(query)
      );
    }

    // 3. Panel Filtering
    if (selectedFabrics.length > 0) {
      result = result.filter(p => p.fabrics.some(f => selectedFabrics.includes(f)));
    }
    if (selectedCollections.length > 0) {
      result = result.filter(p => selectedCollections.includes(p.collection));
    }
    if (selectedGenders.length > 0) {
      result = result.filter(p => selectedGenders.includes(p.gender));
    }

    // 4. Sorting
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "Newest":
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        case "A-Z":
          return a.name.localeCompare(b.name);
        case "Most Popular":
          return b.popularity - a.popularity;
        case "Featured":
        default:
          return (a.featured === b.featured) ? 0 : a.featured ? -1 : 1;
      }
    });

    return result;
  }, [categoryData, activeTab, searchQuery, selectedFabrics, selectedCollections, selectedGenders, sortBy]);

  const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-brand-red selection:text-white overflow-x-hidden relative">
      <Navbar />

      {/* 1. Editorial Hero */}
      <section className="pt-24 md:pt-32 h-[75vh] md:h-[65vh] px-6 md:px-12 relative overflow-hidden bg-zinc-950 flex flex-col items-center justify-center text-center">
         {/* Background Texture & Premium Depth */}
         <div className="absolute inset-0 noise-bg opacity-[0.05] z-0" />
         <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
         
         {/* Subtly animated gradient orb for premium lighting */}
         <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] aspect-square bg-[radial-gradient(circle_at_center,rgba(196,18,48,0.08),transparent_70%)] blur-[80px] pointer-events-none z-0" 
         />
         
         <motion.div 
           initial="hidden" 
           animate="visible" 
           variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
           }} 
           className="w-full max-w-6xl mx-auto relative z-10 flex flex-col items-center"
         >
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-black leading-[0.9] tracking-tighter uppercase text-white mb-6 md:mb-10 w-full"
            >
               {categoryData.title}
            </motion.h1>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
              }}
              className="w-12 h-1 bg-brand-red mb-6 md:mb-8" 
            />
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
              }}
              className="text-sm md:text-lg text-zinc-200 font-medium leading-relaxed max-w-2xl text-balance whitespace-pre-wrap px-4"
            >
               {categoryData.description}
            </motion.p>
         </motion.div>
      </section>

      {/* 2. Lightweight Browsing Controls (Filters / Nav) */}
      <section className="sticky top-0 z-40 bg-zinc-900/95 backdrop-blur-xl border-y border-zinc-700 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
           {/* Featured Category Navigation */}
           <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar pb-2 md:pb-0">
             {categoryData.filterTabs.map((f, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTab(f)}
                  className={`text-xs md:text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${activeTab === f ? "text-white border-b-2 border-white pb-1" : "text-zinc-300 hover:text-zinc-200"}`}
                >
                   {f}
                </button>
             ))}
           </div>
           
           {/* Filters & Sort Controls */}
           <div className="flex items-center gap-6 text-zinc-300 relative">
             {isSearchOpen ? (
                <div className="flex items-center gap-2 border-b border-zinc-600 pb-1">
                  <Search className="w-3 h-3 text-white" />
                  <input 
                    autoFocus
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs font-bold uppercase tracking-widest text-white outline-none w-32 md:w-48 placeholder:text-zinc-300"
                  />
                  <button onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}><X className="w-3 h-3 hover:text-white" /></button>
                </div>
             ) : (
                <button onClick={() => setIsSearchOpen(true)} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                  <Search className="w-3 h-3" /> Search
                </button>
             )}

             <button onClick={() => setIsFiltersOpen(!isFiltersOpen)} className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors ${isFiltersOpen || selectedFabrics.length > 0 || selectedCollections.length > 0 || selectedGenders.length > 0 ? "text-white" : ""}`}>
               <SlidersHorizontal className="w-3 h-3" /> Filters {(selectedFabrics.length + selectedCollections.length + selectedGenders.length) > 0 && `(${(selectedFabrics.length + selectedCollections.length + selectedGenders.length)})`}
             </button>

             <div className="relative">
               <button onClick={() => setIsSortOpen(!isSortOpen)} className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors ${isSortOpen ? "text-white" : ""}`}>
                 Sort By: {sortBy} <ChevronDown className={`w-3 h-3 transition-transform ${isSortOpen ? "rotate-180" : ""}`} />
               </button>
               <AnimatePresence>
                 {isSortOpen && (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                     className="absolute right-0 top-full mt-4 w-48 bg-zinc-900 border border-zinc-700 shadow-2xl py-2 flex flex-col z-50"
                   >
                     {["Featured", "Newest", "A-Z", "Most Popular"].map(opt => (
                       <button key={opt} onClick={() => { setSortBy(opt); setIsSortOpen(false); }} className={`text-left px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors ${sortBy === opt ? "text-white bg-zinc-800" : "text-zinc-200"}`}>
                         {opt}
                       </button>
                     ))}
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
           </div>
        </div>

        {/* Expandable Filters Panel */}
        <AnimatePresence>
          {isFiltersOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-zinc-700 mt-4"
            >
               <div className="max-w-7xl mx-auto pt-6 pb-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Fabric</h4>
                   <div className="flex flex-col gap-2">
                     {availableFabrics.map(f => (
                       <label key={f} className="flex items-center gap-3 cursor-pointer group w-fit">
                         <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${selectedFabrics.includes(f) ? "border-brand-red bg-brand-red" : "border-zinc-600 group-hover:border-zinc-8000"}`}>
                           {selectedFabrics.includes(f) && <div className="w-2 h-2 bg-white" />}
                         </div>
                         <span className="text-xs font-bold uppercase tracking-widest text-zinc-200 group-hover:text-zinc-200">{f}</span>
                         <input type="checkbox" className="hidden" checked={selectedFabrics.includes(f)} onChange={() => toggleFilter(setSelectedFabrics, f)} />
                       </label>
                     ))}
                   </div>
                 </div>
                 <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Collection</h4>
                   <div className="flex flex-col gap-2">
                     {availableCollections.map(c => (
                       <label key={c} className="flex items-center gap-3 cursor-pointer group w-fit">
                         <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${selectedCollections.includes(c) ? "border-brand-red bg-brand-red" : "border-zinc-600 group-hover:border-zinc-8000"}`}>
                           {selectedCollections.includes(c) && <div className="w-2 h-2 bg-white" />}
                         </div>
                         <span className="text-xs font-bold uppercase tracking-widest text-zinc-200 group-hover:text-zinc-200">{c}</span>
                         <input type="checkbox" className="hidden" checked={selectedCollections.includes(c)} onChange={() => toggleFilter(setSelectedCollections, c)} />
                       </label>
                     ))}
                   </div>
                 </div>
                 <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Gender</h4>
                   <div className="flex flex-col gap-2">
                     {availableGenders.map(g => (
                       <label key={g} className="flex items-center gap-3 cursor-pointer group w-fit">
                         <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${selectedGenders.includes(g) ? "border-brand-red bg-brand-red" : "border-zinc-600 group-hover:border-zinc-8000"}`}>
                           {selectedGenders.includes(g) && <div className="w-2 h-2 bg-white" />}
                         </div>
                         <span className="text-xs font-bold uppercase tracking-widest text-zinc-200 group-hover:text-zinc-200">{g}</span>
                         <input type="checkbox" className="hidden" checked={selectedGenders.includes(g)} onChange={() => toggleFilter(setSelectedGenders, g)} />
                       </label>
                     ))}
                   </div>
                 </div>
               </div>
               
               <div className="max-w-7xl mx-auto flex justify-end pb-4">
                 {(selectedFabrics.length > 0 || selectedCollections.length > 0 || selectedGenders.length > 0) && (
                   <button 
                     onClick={() => { setSelectedFabrics([]); setSelectedCollections([]); setSelectedGenders([]); }}
                     className="text-xs font-bold uppercase tracking-widest text-brand-red hover:text-white transition-colors"
                   >
                     Clear All Filters
                   </button>
                 )}
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 3. Large Product Showcase Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-zinc-900 border-t border-zinc-800">
         {/* Background Texture & Depth */}
         <div className="absolute inset-0 noise-bg opacity-[0.03] z-0" />
         <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_60%)] blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05),transparent_60%)] blur-[100px] -translate-x-1/2 pointer-events-none z-0" />

         <div className="max-w-7xl mx-auto min-h-[50vh] relative z-10">
        {filteredProducts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
            className="flex flex-col items-center justify-center py-32 text-center border border-zinc-800 bg-zinc-900 w-full"
          >
            <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight mb-4">No products found.</h3>
            <p className="text-xs md:text-xs font-bold uppercase tracking-widest text-zinc-300">Try another filter or search term</p>
            <button 
              onClick={() => { setActiveTab("All Products"); setSearchQuery(""); setSelectedFabrics([]); setSelectedCollections([]); setSelectedGenders([]); setIsFiltersOpen(false); }} 
              className="mt-8 px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors"
            >
               Reset Filters
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-16 md:gap-y-20">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p, i) => (
                 <motion.div 
                   key={p.id}
                   layout
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.4 }}
                   className="group relative"
                 >
                   <Link href={`/products/${categorySlug}/${p.id}`} className="block w-full">
                     <div className="flex flex-col gap-6 md:gap-8">
                       <div className="relative w-full aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-zinc-700 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group-active:scale-[0.98]">
                         <Image 
                           src={p.images[0]}
                           alt={p.name}
                           fill
                           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                           className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] contrast-[1.05] saturate-[1.05] group-hover:scale-105"
                           loading={i < 3 ? "eager" : "lazy"}
                           priority={i < 3}
                         />
                         
                         {/* Add to Quote Overlay */}
                         <div className="absolute inset-0 bg-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                       </div>
                       
                       <div className="flex flex-col gap-3 px-2 md:px-4">
                         <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-none tracking-tighter uppercase transition-colors duration-500 group-hover:text-zinc-200">
                           {p.name}
                         </h3>
                         <p className="text-zinc-300 font-bold text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">
                           {p.spec}
                         </p>
                         <p className="text-zinc-200 text-xs md:text-sm leading-relaxed font-medium line-clamp-2 md:line-clamp-3 mt-1">
                           {p.description}
                         </p>
                       </div>
                     </div>
                   </Link>
                   
                   {/* Overlay Button */}
                   <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[20px] group-hover:translate-y-0 z-20">
                     <button 
                       onClick={(e) => {
                         e.preventDefault();
                         e.stopPropagation();
                         addItem({
                           id: p.id,
                           title: p.name,
                           category: p.productType,
                           image: p.images[0]
                         });
                       }}
                       className="flex items-center gap-2 bg-brand-red text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-red-700 transition-colors shadow-2xl hover:scale-105 active:scale-95"
                     >
                       <MessageCircle className="w-3.5 h-3.5" />
                       Add to Quote
                     </button>
                   </div>
                 </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
         </div>
      </section>

      {/* 4. Manufacturing Details Section (The B2B Anchor) */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-t border-zinc-800 relative overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-zinc-950">
         {/* Background Texture & Depth */}
         <div className="absolute inset-0 noise-bg opacity-[0.03] z-0" />
         <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.06),transparent_60%)] blur-[100px] -translate-x-1/2 pointer-events-none z-0" />
         
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
            <div className="flex flex-col">
              <h4 className="text-white/90 font-bold uppercase tracking-[0.2em] text-xs mb-8 border-b border-zinc-800 pb-4">
                Product Specifications
              </h4>
              <ul className="space-y-5">
                <li className="flex justify-between items-baseline text-xs md:text-sm border-b border-white/[0.02] pb-5">
                  <span className="text-zinc-300/80 font-medium uppercase tracking-widest text-xs">Fabric Weight</span>
                  <span className="text-white/80 font-medium tracking-wide text-xs">{categoryData.specs.weight}</span>
                </li>
                <li className="flex justify-between items-baseline text-xs md:text-sm border-b border-white/[0.02] pb-5">
                  <span className="text-zinc-300/80 font-medium uppercase tracking-widest text-xs">Composition</span>
                  <span className="text-white/80 font-medium tracking-wide text-xs text-right max-w-[65%]">{categoryData.specs.composition}</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-white/90 font-bold uppercase tracking-[0.2em] text-xs mb-8 border-b border-zinc-800 pb-4">
                Customisation Options
              </h4>
              <ul className="space-y-5">
                <li className="flex flex-col gap-4 text-xs md:text-sm border-b border-white/[0.02] pb-5">
                  <span className="text-zinc-300/80 font-medium uppercase tracking-widest text-xs">Available Methods</span>
                  <div className="flex flex-wrap gap-2.5">
                    {categoryData.customisation.map((method, idx) => (
                      <span key={idx} className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-sm text-xs text-white/70 font-medium uppercase tracking-wide">
                        {method}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-white/90 font-bold uppercase tracking-[0.2em] text-xs mb-8 border-b border-zinc-800 pb-4">
                Manufacturing Details
              </h4>
              <ul className="space-y-5">
                <li className="flex justify-between items-baseline text-xs md:text-sm border-b border-white/[0.02] pb-5">
                  <span className="text-zinc-300/80 font-medium uppercase tracking-widest text-xs">Minimum Order</span>
                  <span className="text-white/80 font-medium tracking-wide text-xs text-right">{categoryData.specs.moq}</span>
                </li>
                <li className="flex justify-between items-baseline text-xs md:text-sm border-b border-white/[0.02] pb-5">
                  <span className="text-zinc-300/80 font-medium uppercase tracking-widest text-xs">Lead Time</span>
                  <span className="text-white/80 font-medium tracking-wide text-xs text-right">{categoryData.specs.leadTime}</span>
                </li>
                {categoryData.specs.production && (
                  <li className="flex justify-between items-baseline text-xs md:text-sm border-b border-white/[0.02] pb-5">
                    <span className="text-zinc-300/80 font-medium uppercase tracking-widest text-xs">Production</span>
                    <span className="text-white/80 font-medium tracking-wide text-xs text-right">{categoryData.specs.production}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Premium Inquiry CTA */}
      <CTA />
      
      <Footer />
    </main>
  );
}
