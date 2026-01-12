import React from 'react';
import { SOCIALS } from '../constants';
import { Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-6 border-t border-stone-100">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        
        <div className="flex items-center gap-2 text-emerald-800">
          <Leaf size={20} strokeWidth={1.5} className="text-emerald-600" />
          <span className="font-serif font-medium text-slate-800">Dra. Helena Martins</span>
        </div>

        <div className="flex gap-6">
          {SOCIALS.map((social, index) => (
            <a 
              key={index}
              href={social.href}
              className="p-3 bg-stone-50 rounded-full text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <social.Icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-slate-400 text-xs text-center">
          © {new Date().getFullYear()} Helena Martins Nutrição. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};