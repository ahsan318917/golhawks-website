"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Martial Arts Wear",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop",
    tech: "Heavyweight Cotton • Reinforced • Professional Fit",
  },
  {
    title: "Denim Products",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2052&auto=format&fit=crop",
    tech: "Premium Selvedge • Hand-Crafted • OEM Production",
  },
  {
    title: "Performance Wear",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    tech: "Polyester Blend • Moisture-Wicking • Compression Fit",
  },
  {
    title: "Streetwear Denim",
    image: "https://images.unsplash.com/photo-1516575334481-f8528e94dd94?q=80&w=2070&auto=format&fit=crop",
    tech: "Distressed Style • Custom Hardware • Scalable Output",
  },
  {
    title: "Fleece & Streetwear",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop",
    tech: "Heavy Fleece • Tech Apparel • Urban Sets",
  },
  {
    title: "Fleece Tracksuits",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    tech: "Premium Interlock • Tapered Fit • Ribbed Finish",
  },
  {
    title: "Winter Sportswear",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop",
    tech: "Insulated Tech • Waterproof • Breathable Layering",
  },
  {
    title: "Washed Denim",
    image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=1972&auto=format&fit=crop",
    tech: "Acid Wash • Enzyme Finish • Vintage Feel",
  },
  {
    title: "Oversized Fleece",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
    tech: "Heavyweight Jersey • Relaxed Silhouette • Premium Comfort",
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-red font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[8px] md:text-[10px] mb-4 md:mb-6 block">Product Categories</span>
            <h2 className="text-4xl md:text-8xl font-black leading-[0.9] tracking-tighter">
              BATTLE <br />
              <span className="text-white/20 italic">CERTIFIED</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="relative group cursor-pointer overflow-hidden rounded-[1.5rem] md:rounded-[3rem] aspect-[4/5] md:aspect-[3/4] border border-white/10"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-[2s] ease-out contrast-110 brightness-75 md:group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="overflow-hidden mb-2 md:mb-4">
                  <p className="text-brand-red font-black text-[7px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:translate-y-full md:group-hover:translate-y-0">
                    {cat.tech}
                  </p>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white leading-[0.9] tracking-tighter uppercase">
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
