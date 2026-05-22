"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ShieldCheck, Truck, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-16 md:pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 mb-16 md:mb-24">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12 group w-fit">
              <div className="relative w-14 h-14 md:w-24 md:h-24 bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl overflow-hidden p-2 transition-all group-hover:border-brand-red/50 group-hover:bg-brand-red/[0.02]">
                <Image
                  src="/images/Logo (2).png"
                  alt="GolHawks International Logo"
                  fill
                  sizes="(max-width: 768px) 56px, 96px"
                  className="object-cover scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-5xl font-black tracking-[-0.05em] leading-none text-white uppercase">
                  GOL<span className="text-brand-red italic">HAWKS</span>
                </span>
                <span className="text-[8px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/30 mt-2 md:mt-3 group-hover:text-white/60 transition-colors">
                  International
                </span>
              </div>
            </Link>
            <p className="text-sm md:text-lg max-w-md mb-8 md:mb-12 text-zinc-400 leading-relaxed font-medium">
              Elite manufacturing authority based in Sialkot, Pakistan. Engineering the next generation of performance apparel for global athletic brands.
            </p>
            <div className="flex gap-8 md:gap-10">
              <div className="flex items-center gap-2 md:gap-3">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-brand-red" />
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/60">Factory Direct</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Truck className="w-4 h-4 md:w-5 md:h-5 text-brand-red" />
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/60">Global Freight</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 col-span-1 lg:col-span-1">
            <div>
              <h4 className="text-white font-black mb-6 md:mb-8 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px]">Operations</h4>
              <ul className="space-y-3 md:space-y-4">
                <li><div className="text-white/40 hover:text-white transition-colors cursor-default text-[11px] md:text-[13px] font-bold uppercase tracking-wider">Sialkot, Pakistan</div></li>
                <li><div className="text-white/40 hover:text-white transition-colors cursor-default text-[11px] md:text-[13px] font-bold uppercase tracking-wider">OEM/ODM Services</div></li>
                <li><div className="text-white/40 hover:text-white transition-colors cursor-default text-[11px] md:text-[13px] font-bold uppercase tracking-wider">Batch QC Protocols</div></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black mb-6 md:mb-8 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px]">Connect</h4>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-red hover:border-brand-red/40 hover:bg-brand-red/5 transition-all"
                >
                  <FaFacebook className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-red hover:border-brand-red/40 hover:bg-brand-red/5 transition-all"
                >
                  <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-red hover:border-brand-red/40 hover:bg-brand-red/5 transition-all"
                >
                  <FaTwitter className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-red hover:border-brand-red/40 hover:bg-brand-red/5 transition-all"
                >
                  <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-white/20 text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-center md:text-left">© 2026 GolHawks International. Serving global apparel brands.</p>
          <div className="flex gap-8 md:gap-12 text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-white/20">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Production Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
