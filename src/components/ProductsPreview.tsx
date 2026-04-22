"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Martial Arts Wear",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop",
    tech: "Heavyweight Cotton • 450+ GSM",
  },
  {
    title: "Performance Wear",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    tech: "Polyester Blend • Moisture-Wicking",
  },
];

const ProductsPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-zinc-950 via-black to-zinc-900 relative overflow-hidden border-t border-white/5">
      {/* Background Depth - Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_60%)] blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-8 md:gap-10"
        >
          <div>
            <span className="text-red-500 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px] mb-4 md:mb-6 block">Product Range</span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase text-white">BATTLE <br /><span className="text-zinc-800 italic">READY</span></h2>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/products" className="group flex items-center gap-4 text-white hover:text-red-500 transition-all font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] border-b border-white/10 pb-3 md:pb-4 w-fit">
              Explore All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.5)",
                borderColor: "rgba(220, 38, 38, 0.3)"
              }}
              className="relative group cursor-pointer overflow-hidden rounded-[2rem] md:rounded-[3rem] aspect-[4/3] md:aspect-[16/9] border border-white/10 active:scale-[0.98] transition-all duration-700"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out contrast-110 brightness-75 group-hover:brightness-50 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full transform group-hover:translate-y-[-10px] transition-transform duration-700">
                <p className="text-red-500 font-black text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] mb-2 md:mb-4">
                  {cat.tech}
                </p>
                <h3 className="text-2xl md:text-5xl font-black text-white leading-none tracking-tighter uppercase">
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
