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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 text-emerald-800">
          <Leaf size={24} strokeWidth={1.5} className="text-emerald-600" />
          <span className="text-xl font-serif tracking-wide font-medium text-slate-800">Helena Martins.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors">Sobre</a>
          <a href="#servicos" className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors">Serviços</a>
          <a href="#duvidas" className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors">Dúvidas</a>
        </div>

        <a 
          href="#contato" 
          className={`px-6 py-2 border rounded-full text-sm tracking-wide transition-all duration-300 ${
            isScrolled 
              ? 'border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white' 
              : 'border-slate-700 text-slate-800 hover:bg-slate-700 hover:text-white'
          }`}
        >
          Agendar Consulta
        </a>
      </div>
    </nav>
  );
};