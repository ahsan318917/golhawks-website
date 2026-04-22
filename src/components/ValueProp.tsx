"use client";

import { motion } from "framer-motion";

const features = [
  { title: "Direct Source", desc: "Sialkot based factory direct operations." },
  { title: "Technical R&D", desc: "Prototyping and fabric engineering." },
  { title: "Quality QC", desc: "Batch consistency and audit reports." },
  { title: "Global Freight", desc: "Reliable distribution to all continents." },
];

const ValueProp = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-black via-zinc-950 to-zinc-900 border-b border-white/5 relative overflow-hidden">
      {/* Visual Depth - Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(196,18,48,0.08),transparent_70%)] blur-[80px] -mr-32 -mt-32 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.9] tracking-tighter uppercase text-white">
              BEYOND MANUFACTURING. <br />
              <span className="text-zinc-700 italic">WE ENGINEER BRANDS.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="grid sm:grid-cols-2 gap-8 md:gap-12"
          >
            {features.map((item, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ x: 5 }}
                className="space-y-3 group cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-red-600 group-hover:w-10 transition-all duration-500" />
                  <h4 className="font-black text-white tracking-widest uppercase text-[10px] md:text-xs group-hover:text-red-500 transition-colors">{item.title}</h4>
                </div>
                <p className="p-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
