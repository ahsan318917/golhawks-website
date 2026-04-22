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
    <section className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div>
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Product Range</span>
            <h2 className="text-5xl md:text-[8rem] font-black leading-[0.85] tracking-tighter">BATTLE <br /><span className="text-white/20 italic">READY</span></h2>
          </div>
          <Link href="/products" className="group flex items-center gap-4 text-white hover:text-brand-red transition-all font-black uppercase tracking-[0.2em] text-[10px] border-b border-white/10 pb-4">
            Explore All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group cursor-pointer overflow-hidden rounded-[3rem] aspect-[16/9] border border-white/10"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out contrast-110 brightness-75 group-hover:brightness-50 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <p className="text-brand-red font-black text-[10px] uppercase tracking-[0.4em] mb-4">
                  {cat.tech}
                </p>
                <h3 className="text-4xl font-black text-white leading-none tracking-tighter">
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
