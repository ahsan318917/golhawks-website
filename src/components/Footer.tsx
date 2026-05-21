"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ShieldCheck, Truck, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-20 md:pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-6 mb-12 group w-fit">
              <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden p-2 transition-all group-hover:border-brand-red/50 group-hover:bg-brand-red/[0.02]">
                <Image
                  src="/images/Logo (2).png"
                  alt="GolHawks International Logo"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black tracking-[-0.05em] leading-none text-white">
                  GOL<span className="text-brand-red italic">HAWKS</span>
                </span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] text-white/30 mt-3 group-hover:text-white/60 transition-colors">
                  International
                </span>
              </div>
            </Link>
            <p className="p-lg max-w-md mb-12 text-zinc-400 leading-relaxed">
              Elite manufacturing authority based in Sialkot, Pakistan. Engineering the next generation of performance apparel for global athletic brands.
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
              <a
                href="#"
                className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-red hover:border-brand-red/40 hover:bg-brand-red/5 transition-all"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-red hover:border-brand-red/40 hover:bg-brand-red/5 transition-all"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-red hover:border-brand-red/40 hover:bg-brand-red/5 transition-all"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-red hover:border-brand-red/40 hover:bg-brand-red/5 transition-all"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">© 2026 GolHawks International. Serving global apparel brands.</p>
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
