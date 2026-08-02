"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Settings, Tag, Package, PenTool, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Settings className="w-6 h-6 md:w-7 md:h-7 text-brand-red" />,
    title: "Batch Manufacturing",
    description: "Consistent production for established brands requiring scalability.",
  },
  {
    icon: <Tag className="w-6 h-6 md:w-7 md:h-7 text-brand-red" />,
    title: "Private Labeling",
    description: "End-to-end white-label solutions including custom technical packaging.",
  },
  {
    icon: <PenTool className="w-6 h-6 md:w-7 md:h-7 text-brand-red" />,
    title: "Apparel R&D",
    description: "Technical tech-pack development and specialized textile sourcing.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-zinc-900 via-black to-zinc-950 relative overflow-hidden border-t border-zinc-800">
      {/* Cinematic Lighting - Radial Red Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_60%)] blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-10"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/50 px-4.5 py-2 rounded-full mb-4 md:mb-6 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-white">Capabilities</span>
            </div>
            <h2 className="h-lg mb-4 md:mb-6 uppercase text-white">OUR SOLUTIONS</h2>
            <p className="p-lg">Integrated manufacturing systems designed for elite athletic performance and brand scalability.</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/services" className="group inline-flex items-center gap-4 text-white hover:text-brand-red transition-all font-black uppercase tracking-[0.2em] text-xs md:text-sm border-b border-zinc-600 hover:border-brand-red pb-3 md:pb-4 w-fit">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(196, 18, 48, 0.6)",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.7), 0 0 30px rgba(196, 18, 48, 0.2)"
              }}
              className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700/80 rounded-[2rem] p-6 md:p-10 transition-all duration-300 relative overflow-hidden group active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-4 md:mb-8 p-3.5 md:p-5 bg-zinc-950 border border-zinc-700 rounded-xl md:rounded-2xl w-fit relative z-10 group-hover:border-brand-red/50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-tight relative z-10 text-white uppercase whitespace-normal break-keep max-w-[12rem] md:max-w-none">{service.title}</h3>
              <p className="text-sm md:text-base text-zinc-200 leading-relaxed font-medium relative z-10 group-hover:text-white transition-colors">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
