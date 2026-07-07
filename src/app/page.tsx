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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golhawks International | Custom Sportswear Manufacturing & Private Label Production",
  description: "Custom sportswear manufacturing, private label apparel production, sourcing, quality control, and global fulfillment from Sialkot, Pakistan.",
  openGraph: {
    title: "Golhawks International | Custom Sportswear Manufacturing & Private Label Production",
    description: "Custom sportswear manufacturing, private label apparel production, sourcing, quality control, and global fulfillment from Sialkot, Pakistan.",
    url: "https://golhawksinternational.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golhawks International | Custom Sportswear Manufacturing & Private Label Production",
    description: "Custom sportswear manufacturing, private label apparel production, sourcing, quality control, and global fulfillment from Sialkot, Pakistan.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 selection:bg-brand-red selection:text-white overflow-x-hidden">
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
