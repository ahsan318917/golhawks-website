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
    <main className="min-h-screen bg-black selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 md:pt-48 pb-14 md:pb-24 border-b border-white/5 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden">
        {/* Cinematic Glow */}
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_70%)] blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Core Capabilities</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-12 uppercase text-white">
              INDUSTRIAL <br />
              <span className="text-zinc-700 italic">SOLUTIONS</span>
            </h1>
            <p className="p-lg">
              We provide integrated manufacturing systems engineered for elite athletic performance and global brand scalability.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-zinc-900 via-zinc-950 to-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {fullServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.01,
                  borderColor: "rgba(220, 38, 38, 0.4)",
                  boxShadow: "0 0 30px rgba(220, 38, 38, 0.15)"
                }}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 md:p-16 group transition-all duration-500 active:scale-[0.99]"
              >
                <div className="text-red-600 mb-10 group-hover:scale-110 transition-transform duration-700">
                  {service.icon}
                </div>
                <h2 className="h-md mb-6 uppercase text-white">{service.title}</h2>
                <p className="p-lg mb-10 text-zinc-400">
                  {service.description}
                </p>
                <div className="space-y-4">
                  {service.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-4 text-zinc-300 font-bold uppercase tracking-widest text-[10px] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-red-600" />
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
