"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Settings, Tag, Package, PenTool, CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";

const fullServices = [
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Batch Manufacturing",
    description: "Consistent production for established brands requiring scalability. We specialize in high-volume repetitive output with surgical precision.",
    benefits: ["Consistent sizing profiles", "Rapid batch replenishment", "Advanced QC protocols"],
  },
  {
    icon: <Tag className="w-10 h-10" />,
    title: "Private Labeling",
    description: "End-to-end white-label solutions. We handle everything from custom neck labels to technical poly-bag packaging.",
    benefits: ["Custom brand tags", "Bespoke packaging", "Brand-exclusive designs"],
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "Scalable Production",
    description: "Infrastructure that grows with you. Our multi-line factory setup allows us to scale output based on your seasonal demands.",
    benefits: ["Flexible MOQ options", "Multi-line capacity", "Resource prioritization"],
  },
  {
    icon: <PenTool className="w-10 h-10" />,
    title: "Technical R&D",
    description: "Where science meets sportswear. We assist in fabric engineering, technical tech-pack audits, and high-performance prototyping.",
    benefits: ["Fabric engineering", "Pattern development", "Performance testing"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      
      <section className="pt-48 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-8 block text-white/40">Core Capabilities</span>
            <h1 className="text-5xl md:text-[7rem] font-black leading-[0.85] tracking-tighter mb-12">
              INDUSTRIAL <br />
              <span className="text-white/20 italic">SOLUTIONS</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed font-medium">
              We provide integrated manufacturing systems engineered for elite athletic performance and global brand scalability.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {fullServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-16 group hover:border-brand-red/30 transition-all duration-700"
              >
                <div className="text-brand-red mb-10 group-hover:scale-110 transition-transform duration-700">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-black mb-6 tracking-tighter uppercase">{service.title}</h2>
                <p className="text-white/40 text-lg leading-relaxed mb-10 font-medium">
                  {service.description}
                </p>
                <div className="space-y-4">
                  {service.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-4 text-white/80 font-bold uppercase tracking-widest text-[10px]">
                      <CheckCircle2 className="w-4 h-4 text-brand-red" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
