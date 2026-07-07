import { Mail, Phone, MapPin } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-brand-red text-white py-2 px-6 md:px-12 hidden lg:block border-b border-brand-black/20 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="mailto:info@golhawksinternational.com" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-white/80 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            info@golhawksinternational.com
          </a>
          <div className="w-px h-3 bg-white/20" />
          <a href="https://wa.me/923712362363" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-white/80 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            +92 371 2362363
          </a>
        </div>
        
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/90">
          <MapPin className="w-3.5 h-3.5" />
          Sialkot, Pakistan (GMT+5)
        </div>
      </div>
    </div>
  );
};

export default Topbar;
