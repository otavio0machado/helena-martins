import React from 'react';
import { SOCIALS } from '../constants';
import { Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">

        {/* Gold divider line */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>

        <div className="flex items-center gap-2.5">
          <Leaf size={22} strokeWidth={1.8} className="text-sage-400" />
          <span className="font-serif font-medium text-cream-100 text-lg tracking-wide">Dra. Helena Martins</span>
        </div>

        <div className="flex gap-4">
          {SOCIALS.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="p-3 bg-charcoal border border-cream-200/20 rounded-full text-cream-300 hover:text-gold-400 hover:border-gold-400/50 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <social.Icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-cream-400/60 text-xs text-center">
          © {new Date().getFullYear()} Helena Martins Nutrição. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};