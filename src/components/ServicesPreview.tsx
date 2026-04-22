"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Settings, Tag, Package, PenTool, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Settings className="w-5 h-5 md:w-6 md:h-6 text-brand-red" />,
    title: "Batch Manufacturing",
    description: "Consistent production for established brands requiring scalability.",
  },
  {
    icon: <Tag className="w-5 h-5 md:w-6 md:h-6 text-brand-red" />,
    title: "Private Labeling",
    description: "End-to-end white-label solutions including custom technical packaging.",
  },
  {
    icon: <PenTool className="w-5 h-5 md:w-6 md:h-6 text-brand-red" />,
    title: "Apparel R&D",
    description: "Technical tech-pack development and specialized textile sourcing.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-gray/30 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:20 gap-6 md:gap-10">
          <div className="max-w-xl">
            <span className="text-brand-red font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px] mb-4 md:mb-6 block text-left">Capabilities</span>
            <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 tracking-tighter text-left">OUR SOLUTIONS</h2>
            <p className="text-white/40 text-sm md:text-lg text-left">Integrated manufacturing systems designed for elite athletic performance and brand scalability.</p>
          </div>
          <Link href="/services" className="group inline-flex items-center gap-4 text-white hover:text-brand-red transition-all font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] border-b border-white/10 pb-3 md:pb-4 w-fit">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 md:p-10 hover:border-brand-red/30 transition-all duration-700"
            >
              <div className="mb-6 md:mb-8 p-4 md:p-5 bg-brand-black border border-white/5 rounded-2xl w-fit">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-black mb-3 md:mb-4 tracking-tight text-left">{service.title}</h3>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed mb-4 md:mb-8 text-left">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
