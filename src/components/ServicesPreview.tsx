"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Settings, Tag, Package, PenTool, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Settings className="w-6 h-6 text-brand-red" />,
    title: "Batch Manufacturing",
    description: "Consistent production for established brands requiring scalability.",
  },
  {
    icon: <Tag className="w-6 h-6 text-brand-red" />,
    title: "Private Labeling",
    description: "End-to-end white-label solutions including custom technical packaging.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-brand-red" />,
    title: "Apparel R&D",
    description: "Technical tech-pack development and specialized textile sourcing.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-32 bg-brand-gray/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-xl">
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Capabilities</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">OUR SOLUTIONS</h2>
            <p className="text-white/40 text-lg">Integrated manufacturing systems designed for elite athletic performance and brand scalability.</p>
          </div>
          <Link href="/services" className="group flex items-center gap-4 text-white hover:text-brand-red transition-all font-black uppercase tracking-[0.2em] text-[10px] border-b border-white/10 pb-4">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 hover:border-brand-red/30 transition-all duration-700"
            >
              <div className="mb-8 p-5 bg-brand-black border border-white/5 rounded-2xl w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
