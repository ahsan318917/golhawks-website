"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ShieldCheck, Truck, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-20 md:pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="text-3xl font-black tracking-tighter flex items-center gap-2 mb-10 group">
              <span className="text-brand-red italic transition-transform group-hover:skew-x-[-10deg]">GOL</span>
              <span className="group-hover:text-brand-red transition-colors">HAWKS</span>
            </Link>
            <p className="p-lg max-w-md mb-10">
              Elite manufacturing based in Sialkot, Pakistan. Serving global apparel brands with technical precision and scalable production infrastructure.
            </p>
            <div className="flex gap-10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-red" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Factory Direct</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-brand-red" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Global Freight</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.3em] text-[10px]">Operations</h4>
            <ul className="space-y-4">
              <li><div className="text-white/40 hover:text-white transition-colors cursor-default text-[13px] font-bold uppercase tracking-wider">Sialkot, Pakistan</div></li>
              <li><div className="text-white/40 hover:text-white transition-colors cursor-default text-[13px] font-bold uppercase tracking-wider">OEM/ODM Services</div></li>
              <li><div className="text-white/40 hover:text-white transition-colors cursor-default text-[13px] font-bold uppercase tracking-wider">Batch QC Protocols</div></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.3em] text-[10px]">Social Connect</h4>
            <div className="flex gap-4">
              {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-red hover:border-brand-red/40 hover:bg-brand-red/5 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">© 2026 Golhawks International. Serving global apparel brands.</p>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Production Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
