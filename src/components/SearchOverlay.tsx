"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORY_DATA } from "@/data/categories";

// Flatten all products
const allProducts = Object.entries(CATEGORY_DATA).flatMap(([slug, category]) => 
  category.products.map(p => ({
    ...p,
    categorySlug: slug,
    categoryName: category.title
  }))
);

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setQuery("");
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const results = query.trim() === "" ? [] : allProducts.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.productType.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 8); // Limit to 8 results for performance

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-zinc-950/95 backdrop-blur-3xl flex flex-col items-center pt-24 md:pt-40 px-6"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="w-full max-w-4xl flex flex-col gap-12">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative w-full border-b-2 border-zinc-600 focus-within:border-brand-red transition-colors pb-4"
            >
              <Search className="absolute left-0 bottom-6 w-8 h-8 text-white/40" />
              <input 
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, materials, collections..."
                className="w-full bg-transparent text-3xl md:text-5xl font-black uppercase tracking-tighter text-white outline-none placeholder:text-white/20 pl-14 pb-2"
              />
            </motion.div>

            <div className="w-full">
              {query.trim() !== "" && results.length === 0 ? (
                <div className="text-center py-20 opacity-50">
                  <p className="text-xl font-bold text-white uppercase tracking-widest">No results found for "{query}"</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-h-[60vh] overflow-y-auto pb-20 custom-scrollbar">
                  {results.map((product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link 
                        href={`/products/${product.categorySlug}/${product.id}`}
                        onClick={onClose}
                        className="group flex flex-col gap-4"
                      >
                        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                          <Image 
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-300 mb-1">{product.categoryName}</p>
                          <h4 className="text-sm font-black uppercase text-white tracking-tight group-hover:text-brand-red transition-colors">{product.name}</h4>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
