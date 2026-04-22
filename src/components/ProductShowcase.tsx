"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Martial Arts Wear",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop",
    tech: "Heavyweight Cotton • Reinforced • Professional Fit",
  },
  {
    title: "Performance Wear",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    tech: "Polyester Blend • Moisture-Wicking • Compression Fit",
  },
  {
    title: "Team Gear",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=2069&auto=format&fit=crop",
    tech: "Nylon Microfiber • Breathable • Athletic Cut",
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Product Categories</span>
            <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">
              BATTLE <br />
              <span className="text-white/20 italic">CERTIFIED</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="relative group cursor-pointer overflow-hidden rounded-[3rem] aspect-[3/4] border border-white/10"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out contrast-110 brightness-75 group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <div className="overflow-hidden mb-4">
                  <p className="text-brand-red font-black text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-full group-hover:translate-y-0">
                    {cat.tech}
                  </p>
                </div>
                <h3 className="text-4xl font-black text-white leading-[0.9] tracking-tighter">
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

export default ProductShowcase;
