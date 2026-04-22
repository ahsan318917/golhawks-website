import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import ServicesPreview from "@/components/ServicesPreview";
import ProductsPreview from "@/components/ProductsPreview";
import ProcessPreview from "@/components/ProcessPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <TrustMarquee />
      
      {/* Value Positioning Section */}
      <section className="py-24 bg-brand-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter">
              BEYOND MANUFACTURING. <br />
              <span className="text-white/20 italic">WE ENGINEER BRANDS.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-10">
              {[
                { title: "Direct Source", desc: "Sialkot based factory direct operations." },
                { title: "Technical R&D", desc: "Prototyping and fabric engineering." },
                { title: "Quality QC", desc: "Batch consistency and audit reports." },
                { title: "Global Freight", desc: "Reliable distribution to all continents." },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-bold text-white tracking-tight uppercase text-xs">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesPreview />
      <ProductsPreview />
      <ProcessPreview />
      <WhyChooseUs />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
