"use client";

import { motion } from "framer-motion";
import { Settings, Tag, Package, PenTool } from "lucide-react";

const services = [
  {
    icon: <Settings className="w-8 h-8 text-brand-red" />,
    title: "Batch Production",
    description: "Consistent, repeatable manufacturing for established apparel brands requiring scalability.",
    meta: "MOQ: 100 pcs • Lead Time: 3-4 weeks",
  },
  {
    icon: <Tag className="w-8 h-8 text-brand-red" />,
    title: "White Labeling",
    description: "End-to-end private label solutions including custom branding and technical packaging.",
    meta: "Custom Labels • Poly-bag Packing",
  },
  {
    icon: <Package className="w-8 h-8 text-brand-red" />,
    title: "Global Distribution",
    description: "Direct-to-warehouse shipping with quality-vetted freight and customs management.",
    meta: "Door-to-Door • Air/Sea Freight",
  },
  {
    icon: <PenTool className="w-8 h-8 text-brand-red" />,
    title: "Apparel R&D",
    description: "Technical tech-pack development and fabric sourcing for specialized athletic wear.",
    meta: "Prototyping • Fabric Sourcing",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-brand-gray/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">B2B Core Systems</span>
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">MANUFACTURING <br /><span className="text-white/20 italic">SOLUTIONS</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="glass-card p-12 group hover:bg-brand-red/[0.04] transition-all duration-700 border-white/[0.05] hover:border-brand-red/30 premium-shadow-red relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="mb-12 p-6 bg-brand-black border border-white/5 rounded-[2rem] w-fit group-hover:border-brand-red/40 transition-all duration-700 relative z-10">
                <div className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tighter group-hover:text-white transition-colors relative z-10">{service.title}</h3>
              <p className="text-white/40 text-base leading-[1.8] font-medium group-hover:text-white/60 transition-colors mb-10 relative z-10">
                {service.description}
              </p>
              
              <div className="pt-8 border-t border-white/5 relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-red/60 group-hover:text-brand-red transition-colors">
                  {service.meta}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
