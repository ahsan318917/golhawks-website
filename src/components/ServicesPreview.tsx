"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Settings, Tag, Package, PenTool, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Settings className="w-5 h-5 md:w-6 md:h-6 text-red-600" />,
    title: "Batch Manufacturing",
    description: "Consistent production for established brands requiring scalability.",
  },
  {
    icon: <Tag className="w-5 h-5 md:w-6 md:h-6 text-red-600" />,
    title: "Private Labeling",
    description: "End-to-end white-label solutions including custom technical packaging.",
  },
  {
    icon: <PenTool className="w-5 h-5 md:w-6 md:h-6 text-red-600" />,
    title: "Apparel R&D",
    description: "Technical tech-pack development and specialized textile sourcing.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-zinc-900 via-black to-zinc-950 relative overflow-hidden">
      {/* Cinematic Lighting - Radial Red Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_60%)] blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-10"
        >
          <div className="max-w-xl">
            <span className="text-red-500 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px] mb-3 md:mb-6 block">Capabilities</span>
            <h2 className="h-lg mb-4 md:mb-6 uppercase text-white">OUR SOLUTIONS</h2>
            <p className="p-lg">Integrated manufacturing systems designed for elite athletic performance and brand scalability.</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/services" className="group inline-flex items-center gap-4 text-white hover:text-red-500 transition-all font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] border-b border-white/10 pb-3 md:pb-4 w-fit">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
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
                borderColor: "rgba(239, 68, 68, 0.4)",
                boxShadow: "0 0 30px rgba(220, 38, 38, 0.2)"
              }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 transition-all duration-500 relative overflow-hidden group active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-6 md:mb-8 p-4 md:p-5 bg-black/40 border border-white/10 rounded-2xl w-fit relative z-10 group-hover:border-red-500/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-black mb-3 md:mb-4 tracking-tight relative z-10 text-white uppercase">{service.title}</h3>
              <p className="p-sm relative z-10 group-hover:text-zinc-300 transition-colors">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
