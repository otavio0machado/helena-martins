import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <Leaf size={26} strokeWidth={1.8} className="text-sage-500" />
          <span className="text-xl md:text-2xl font-serif font-medium text-charcoal tracking-wide">Helena Martins.</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#sobre" className="relative text-sm font-medium text-charcoal/70 hover:text-sage-600 transition-colors group">
            Sobre
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#servicos" className="relative text-sm font-medium text-charcoal/70 hover:text-sage-600 transition-colors group">
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#duvidas" className="relative text-sm font-medium text-charcoal/70 hover:text-sage-600 transition-colors group">
            Dúvidas
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <a
          href="#contato"
          className={`px-7 py-2.5 border-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${isScrolled
              ? 'border-sage-500 text-sage-600 hover:bg-sage-500 hover:text-white hover:shadow-lg'
              : 'border-charcoal/60 text-charcoal hover:bg-gold-400 hover:border-gold-400 hover:text-white hover:shadow-lg'
            }`}
        >
          Agendar Consulta
        </a>
      </div>
    </nav>
  );
};