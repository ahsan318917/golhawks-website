import { Mail, Phone, MapPin } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-brand-red text-white py-2 px-3 sm:px-6 md:px-12 border-b border-brand-black/20 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-x-4 sm:gap-6 gap-y-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-6 gap-y-1">
          <a href="mailto:info@golhawksinternational.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors whitespace-nowrap">
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span>info@golhawksinternational.com</span>
          </a>
          <div className="hidden sm:block w-px h-3 bg-white/20" />
          <a href="https://wa.me/923712362363" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white/80 transition-colors whitespace-nowrap">
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span>+92 371 2362363</span>
          </a>
        </div>
        
        <div className="flex items-center gap-1.5 text-white/90 whitespace-nowrap">
          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          <span>Sialkot, Pakistan (GMT+5)</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
