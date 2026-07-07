"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

import { useQuoteCart } from "@/context/QuoteContext";

const categoryPills = [
  "All Products", "Martial Arts", "Denim", "Fleece & Streetwear", "Performance"
];

const featuredProducts = [
  {
    id: "bjj-gi",
    title: "Elite BJJ Gi - Pearl Weave",
    category: "Martial Arts Wear",
    image: "/images/Martial Arts/PRO BJJ GI.png",
    tech: "450 GSM • Triple-Needle Stitched",
  },
  {
    id: "selvedge-denim",
    title: "Selvedge Denim Jacket",
    category: "Denim Products",
    image: "/images/Denim Products/Denim Jacket.png",
    tech: "14oz Raw Denim • Custom Wash",
  },
  {
    id: "premium-hoodies",
    title: "Oversized Heavyweight Hoodie",
    category: "Fleece & Streetwear",
    image: "/images/FLEECE&Streetwear/Premium Hoodies.png",
    tech: "400 GSM French Terry • Drop Shoulder",
  },
  {
    id: "compression-wear",
    title: "Pro Compression Rash Guard",
    category: "Performance Wear",
    image: "/images/Performancewear/Compression Wear.png",
    tech: "4-Way Stretch • Moisture-Wicking",
  },
];

const ProductsPreview = () => {
  const { addItem } = useQuoteCart();
  
  return (
    <section className="section-padding bg-zinc-950 relative overflow-hidden border-t border-zinc-800">
      {/* Background Depth - Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05),transparent_60%)] blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6 md:gap-10"
        >
          <div>
            <h2 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase text-white mb-6">
              FEATURED <br /><span className="text-zinc-700 italic">PRODUCTS</span>
            </h2>
            <div className="w-12 h-1 bg-brand-red mb-4" />
          </div>
          <motion.div>
            <Link href="/products" className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-500 font-bold uppercase tracking-[0.3em] text-[11px] md:text-[11px] border-b border-zinc-600 hover:border-white pb-3 w-fit">
              View Entire Catalog
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500" />
            </Link>
          </motion.div>
        </motion.div>

        {/* E-Commerce Category Pills */}
        <div className="flex items-center gap-3 md:gap-4 overflow-x-auto pb-6 mb-8 scrollbar-hide">
          {categoryPills.map((pill, idx) => (
            <button 
              key={idx} 
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs md:text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                idx === 0 
                ? "bg-brand-red text-white" 
                : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Featured Products Grid / Slider */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10 custom-scrollbar">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="flex-none w-[80vw] sm:w-[45vw] md:w-auto snap-center flex flex-col gap-4 group"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border border-zinc-800">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:scale-105"
                  loading={i < 4 ? "eager" : "lazy"}
                />
                
                {/* E-commerce Quick Action Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-zinc-950/90 to-transparent opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 flex justify-center">
                  <button 
                    onClick={() => addItem(product)}
                    className="flex items-center justify-center w-full md:w-auto gap-2 bg-brand-red text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-red-700 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Add to Quote
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="flex flex-col gap-1 px-1">
                <p className="text-zinc-300 font-bold text-[11px] uppercase tracking-[0.2em]">
                  {product.category}
                </p>
                <h3 className="text-lg md:text-xl font-black text-white leading-tight tracking-tight uppercase transition-colors duration-500 md:group-hover:text-brand-red">
                  {product.title}
                </h3>
                <p className="text-zinc-400 text-xs mt-1">
                  {product.tech}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
