"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, HelpCircle, Layers, Wrench, PackageCheck, Box, Tag, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORY_DATA } from "@/data/categories";

// Quick Search Chips
const QUICK_CHIPS = [
  "MOQ",
  "Private Label",
  "OEM",
  "Tech Pack",
  "Martial Arts",
  "Denim",
  "Performance Wear",
  "Embroidery",
  "Screen Printing",
  "Bulk Order"
];

// Empty State Suggestions
const EMPTY_SUGGESTIONS = [
  "Martial Arts",
  "MOQ",
  "Tech Pack",
  "Private Label",
  "Enquiry",
  "Screen Printing"
];

// Flatten all products
const allProducts = Object.entries(CATEGORY_DATA).flatMap(([slug, category]) => 
  category.products.map(p => ({
    type: "product" as const,
    id: p.id,
    title: p.name,
    subtitle: `${category.title} • ${p.spec}`,
    description: p.description,
    image: p.images[0],
    href: `/products/${slug}/${p.id}`,
    tags: p.tags
  }))
);

// Category items list
const categoriesList = Object.entries(CATEGORY_DATA).map(([slug, cat]) => ({
  type: "category" as const,
  id: slug,
  title: cat.title,
  subtitle: `${cat.products.length} Products Available`,
  description: cat.description,
  href: `/products/${slug}`
}));

// B2B Services Data
const b2bServices = [
  {
    type: "service" as const,
    id: "custom-embroidery",
    title: "Custom Embroidery & Woven Patches",
    subtitle: "Manufacturing Service",
    description: "High-density multi-color embroidery, chenille patches, and woven brand labels for apparel.",
    href: "/services",
    icon: Wrench
  },
  {
    type: "service" as const,
    id: "industrial-washing",
    title: "Denim Washing & Distressing",
    subtitle: "Manufacturing Service",
    description: "Stone wash, enzyme wash, acid wash, laser whiskering, and hand-scraping for custom denim.",
    href: "/services",
    icon: Wrench
  },
  {
    type: "service" as const,
    id: "sublimation-printing",
    title: "Dye Sublimation & Heat Transfers",
    subtitle: "Manufacturing Service",
    description: "Full-bleed anti-peel dye sublimation printing for rash guards, jerseys, and activewear.",
    href: "/services",
    icon: Wrench
  },
  {
    type: "service" as const,
    id: "private-labeling",
    title: "Private Labeling & Custom Packaging",
    subtitle: "Manufacturing Service",
    description: "Custom printed poly-bags, hangtags, woven neck labels, and barcoded packaging for retail.",
    href: "/services",
    icon: PackageCheck
  }
];

// Production Specifications Data
const productionSpecs = [
  {
    type: "spec" as const,
    id: "moq-info",
    title: "Minimum Order Quantities (MOQ)",
    subtitle: "Production Policy",
    description: "Standard MOQ is 100-150 pieces per style/color. Flexible terms for multi-product lot orders.",
    href: "/process",
    icon: Box
  },
  {
    type: "spec" as const,
    id: "lead-time",
    title: "Production Lead Times",
    subtitle: "Production Policy",
    description: "Sampling: 7-10 days. Bulk Lot Production: 4-6 weeks depending on custom wash & embroidery.",
    href: "/process",
    icon: Box
  },
  {
    type: "spec" as const,
    id: "global-freight",
    title: "Global Freight & Shipping Options",
    subtitle: "Logistics",
    description: "Air Express (DHL/FedEx: 4-7 days) and Sea Cargo (Door-to-Door / DDP options) worldwide.",
    href: "/contact",
    icon: Box
  }
];

// B2B FAQs Data
const faqs = [
  {
    type: "faq" as const,
    id: "faq-samples",
    question: "Can I request sample garments before placing a bulk lot order?",
    answer: "Yes! We produce pre-production samples with your exact branding and fabric specs within 7-10 business days for approval.",
    category: "Sample Policy"
  },
  {
    type: "faq" as const,
    id: "faq-payment",
    question: "What are the standard payment terms for lot booking?",
    answer: "Standard terms are 50% deposit upon order confirmation & tech pack approval, and 50% prior to dispatch following final QC inspection.",
    category: "Payment Terms"
  },
  {
    type: "faq" as const,
    id: "faq-techpack",
    question: "Do you offer custom tech pack and pattern development?",
    answer: "Our in-house R&D team can generate technical flat sketches, size grading charts, and complete tech packs from physical samples or photos.",
    category: "R&D & Patterns"
  },
  {
    type: "faq" as const,
    id: "faq-quality",
    question: "How is quality control handled during manufacturing?",
    answer: "Every lot undergoes 100% inline stitching audits, fabric GSM verification, color-fastness testing, and final AQL 2.5 inspection before packing.",
    category: "Quality Assurance"
  }
];

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "products" | "categories" | "services" | "faqs">("all");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      setQuery("");
      setActiveTab("all");
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const q = query.trim().toLowerCase();

  // Search Filtering
  const matchingProducts = q === "" ? [] : allProducts.filter(p => 
    p.title.toLowerCase().includes(q) ||
    p.subtitle.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );

  const matchingCategories = q === "" ? [] : categoriesList.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    q.includes("category") || q.includes("collection")
  );

  const matchingServices = q === "" ? [] : [...b2bServices, ...productionSpecs].filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.description.toLowerCase().includes(q) ||
    s.subtitle.toLowerCase().includes(q)
  );

  const matchingFaqs = q === "" ? [] : faqs.filter(f =>
    f.question.toLowerCase().includes(q) ||
    f.answer.toLowerCase().includes(q) ||
    f.category.toLowerCase().includes(q)
  );

  const totalResultsCount = matchingProducts.length + matchingCategories.length + matchingServices.length + matchingFaqs.length;
  const hasResults = totalResultsCount > 0;

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 top-0 left-0 w-screen h-screen z-[99999] bg-zinc-950 flex flex-col items-center pt-8 md:pt-12 pb-8 px-4 sm:px-8 overflow-hidden overscroll-none"
        >
          {/* 7. Ambient Subtle Red Radial Spotlights & Noise Texture */}
          <div className="absolute inset-0 noise-bg opacity-[0.03] pointer-events-none z-0" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(196,18,48,0.12),transparent_65%)] blur-[95px] pointer-events-none z-0" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(196,18,48,0.06),transparent_65%)] blur-[115px] pointer-events-none z-0" />

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white/90 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 p-3 rounded-full transition-all border border-zinc-700/80 shadow-xl z-20 hover:scale-105 cursor-pointer"
            aria-label="Close Search"
          >
            <X className="w-6 h-6" />
          </button>

          {/* 12. Desktop Balance: Widened Container */}
          <div className="w-full max-w-5xl lg:max-w-6xl h-full flex flex-col gap-6 md:gap-8 relative z-10 overflow-hidden">
            {/* Header & Eyebrow Badge */}
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-red flex items-center gap-2 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-red" /> GolHawks B2B Global Intelligence
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                Find Products, Services & Manufacturing Solutions
              </h2>
            </div>

            {/* 1. Hero Search Bar: Dominant Focal Point */}
            <motion.div 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.08, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              <div className="relative w-full bg-gradient-to-b from-zinc-900/95 via-zinc-900/90 to-zinc-950/95 border border-zinc-700/80 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_45px_rgba(196,18,48,0.12)] focus-within:border-brand-red/80 focus-within:ring-2 focus-within:ring-brand-red/30 focus-within:shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_65px_rgba(196,18,48,0.28)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] p-2 sm:p-2.5 overflow-hidden">
                {/* Inner Top Highlight Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-10" />
                
                <Search className="absolute left-6 sm:left-7 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 text-white pointer-events-none z-10" />
                <input 
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, services, MOQs, tech packs, FAQs..."
                  className="w-full bg-transparent text-xl sm:text-2xl md:text-3xl font-bold text-white outline-none placeholder:text-zinc-400 placeholder:font-medium pl-16 sm:pl-20 pr-20 py-4.5 sm:py-6 tracking-tight relative z-10"
                />
                {query && (
                  <button 
                    onClick={() => setQuery("")} 
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-widest bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-full transition-colors cursor-pointer z-20"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* 9. Quick Search Chips */}
              <div className="flex items-center gap-2 flex-wrap px-1">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-200 flex items-center gap-1.5 mr-1">
                  <Tag className="w-3.5 h-3.5 text-brand-red" /> Quick Search:
                </span>
                {QUICK_CHIPS.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(chip)}
                    className="bg-zinc-900/90 border border-zinc-700/80 hover:border-brand-red/80 text-zinc-100 hover:text-white text-xs sm:text-sm font-semibold px-4.5 py-2 rounded-full transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] hover:shadow-[0_8px_20px_rgba(196,18,48,0.2)] cursor-pointer shadow-sm"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Filter Tabs (Active when searching) */}
            {q !== "" && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {[
                  { id: "all", label: `All Results (${totalResultsCount})` },
                  { id: "products", label: `Products (${matchingProducts.length})` },
                  { id: "categories", label: `Categories (${matchingCategories.length})` },
                  { id: "services", label: `Services & Specs (${matchingServices.length})` },
                  { id: "faqs", label: `FAQs (${matchingFaqs.length})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`whitespace-nowrap px-4.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-brand-red text-white shadow-lg"
                        : "bg-zinc-900 text-zinc-200 border border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}

            {/* 11 & 5. Results & Custom Scrollbar Container */}
            <div className="w-full flex-1 min-h-0 overflow-y-auto overscroll-contain pr-2 custom-scrollbar pb-14">
              {q === "" ? (
                /* DEFAULT VIEW: Category Shortcuts & FAQs */
                <div className="flex flex-col gap-12 md:gap-14">
                  {/* 3 & 10. Premium Category Shortcut Cards */}
                  <div>
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-zinc-200 mb-5 flex items-center gap-2.5 pb-2.5 border-b border-zinc-800/60">
                      <Layers className="w-4 h-4 text-brand-red" /> Category Shortcuts
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                      {Object.entries(CATEGORY_DATA).map(([slug, cat], i) => (
                        <motion.div
                          key={slug}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 + 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Link
                            href={`/products/${slug}`}
                            onClick={onClose}
                            className="bg-gradient-to-b from-zinc-900/90 via-zinc-900/80 to-zinc-950/90 border border-zinc-800/90 hover:border-brand-red/60 p-6 rounded-2xl flex flex-col justify-between gap-5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:bg-zinc-850/90 hover:shadow-[0_22px_45px_rgba(0,0,0,0.7),0_0_30px_rgba(196,18,48,0.15)] group cursor-pointer relative overflow-hidden h-full"
                          >
                            {/* Inner Top Highlight */}
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                            <div>
                              <span className="text-base sm:text-lg font-black uppercase text-zinc-100 group-hover:text-white transition-colors block mb-1">
                                {cat.title}
                              </span>
                              <span className="text-xs text-zinc-300 font-medium">
                                {cat.products.length} Products
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors pt-3 border-t border-zinc-800/80">
                              <span>Explore Catalog</span>
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 text-brand-red transition-all duration-300" />
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* 4 & 10. FAQ Cards with Breathing Room */}
                  <div>
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-zinc-200 mb-5 flex items-center gap-2.5 pb-2.5 border-b border-zinc-800/60">
                      <HelpCircle className="w-4 h-4 text-brand-red" /> Frequently Asked Questions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      {faqs.map((faq, i) => (
                        <motion.div 
                          key={faq.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 + 0.2, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="bg-gradient-to-b from-zinc-900/85 via-zinc-900/75 to-zinc-950/85 border border-zinc-800/90 p-7 sm:p-9 rounded-2xl flex flex-col gap-4.5 hover:border-zinc-700/90 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden"
                        >
                          {/* Inner Top Highlight */}
                          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-red mb-0.5 block">
                            {faq.category}
                          </span>
                          <h4 className="text-lg sm:text-xl font-extrabold text-white leading-snug tracking-tight mb-1">
                            {faq.question}
                          </h4>
                          <p className="text-xs sm:text-sm md:text-base text-zinc-200 leading-relaxed font-medium pt-4 border-t border-zinc-800/80 mt-1">
                            {faq.answer}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : !hasResults ? (
                /* Improved Empty State */
                <div className="text-center py-14 px-6 bg-zinc-900/80 rounded-2xl border border-zinc-800/90 shadow-xl flex flex-col items-center gap-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider mb-2">No results found for "{query}"</h3>
                    <p className="text-xs md:text-sm text-zinc-300 max-w-md mx-auto font-medium leading-relaxed">
                      We couldn't find exact matches for your search term. Try selecting one of the suggested B2B topics below:
                    </p>
                  </div>

                  {/* Suggested terms */}
                  <div className="flex items-center justify-center gap-2 flex-wrap max-w-xl">
                    {EMPTY_SUGGESTIONS.map((term, i) => (
                      <button
                        key={i}
                        onClick={() => setQuery(term)}
                        className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 text-zinc-200 hover:text-white text-xs font-semibold px-4.5 py-2 rounded-full transition-all hover:scale-105 cursor-pointer"
                      >
                        {term}
                      </button>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/923712362363"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-red text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-full hover:bg-red-700 transition-all shadow-lg hover:scale-105 cursor-pointer mt-2"
                  >
                    Direct Inquiry on WhatsApp <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                /* Live Search Autocomplete Results */
                <div className="flex flex-col gap-10">
                  {/* Products Section */}
                  {(activeTab === "all" || activeTab === "products") && matchingProducts.length > 0 && (
                    <div>
                      <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-zinc-200 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-800/60">
                        <Box className="w-4 h-4 text-brand-red" /> Products ({matchingProducts.length})
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {matchingProducts.map((product) => (
                          <Link 
                            key={product.id} 
                            href={product.href} 
                            onClick={onClose}
                            className="bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 p-4 rounded-2xl flex gap-4 items-center group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
                          >
                            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-950 flex-shrink-0 border border-zinc-800">
                              <Image src={product.image} alt={product.title} fill className="object-cover" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">{product.subtitle}</span>
                              <h4 className="text-sm font-black uppercase text-white group-hover:text-brand-red transition-colors leading-tight">{product.title}</h4>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Categories Section */}
                  {(activeTab === "all" || activeTab === "categories") && matchingCategories.length > 0 && (
                    <div>
                      <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-zinc-200 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-800/60">
                        <Layers className="w-4 h-4 text-brand-red" /> Categories ({matchingCategories.length})
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {matchingCategories.map((cat) => (
                          <Link 
                            key={cat.id} 
                            href={cat.href} 
                            onClick={onClose}
                            className="bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 p-4.5 rounded-2xl flex flex-col justify-between gap-2 group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
                          >
                            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-red">Catalog Category</span>
                            <h4 className="text-sm font-black uppercase text-white group-hover:text-brand-red transition-colors">{cat.title}</h4>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Manufacturing Services & Specs Section */}
                  {(activeTab === "all" || activeTab === "services") && matchingServices.length > 0 && (
                    <div>
                      <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-zinc-200 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-800/60">
                        <Wrench className="w-4 h-4 text-brand-red" /> Manufacturing Services & Specs ({matchingServices.length})
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
                        {matchingServices.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            onClick={onClose}
                            className="bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 p-5 rounded-2xl flex flex-col gap-2.5 group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-red">{service.subtitle}</span>
                              <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1.5 transition-all" />
                            </div>
                            <h4 className="text-sm font-black uppercase text-white group-hover:text-brand-red transition-colors">{service.title}</h4>
                            <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* FAQs Section */}
                  {(activeTab === "all" || activeTab === "faqs") && matchingFaqs.length > 0 && (
                    <div>
                      <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-zinc-200 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-800/60">
                        <HelpCircle className="w-4 h-4 text-brand-red" /> Frequently Asked Questions ({matchingFaqs.length})
                      </h3>
                      <div className="grid grid-cols-1 gap-4.5">
                        {matchingFaqs.map((faq) => (
                          <div key={faq.id} className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-3">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-red">{faq.category}</span>
                            <h4 className="text-base font-bold text-white">{faq.question}</h4>
                            <p className="text-xs md:text-sm text-zinc-200 font-medium leading-relaxed pt-3 border-t border-zinc-800/70">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
