import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import ValueProp from "@/components/ValueProp";
import ServicesPreview from "@/components/ServicesPreview";
import ProductsPreview from "@/components/ProductsPreview";
import ProcessPreview from "@/components/ProcessPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <ValueProp />
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
