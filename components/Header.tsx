import React, { useState, useEffect } from 'react';
import { PROFESSIONAL } from '../constants';

const NAV = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como funciona', href: '#abordagem' },
  { label: 'Valores', href: '#valores' },
  { label: 'Dúvidas', href: '#duvidas' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-paper/95 backdrop-blur border-b rule' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
        <a href="#topo" className="font-serif text-lg text-graphite tracking-tight-2 leading-none">
          {PROFESSIONAL.name}<span className="text-clay">.</span>
          <span className="hidden sm:inline label-mono text-graphite-soft ml-3 align-middle">{PROFESSIONAL.crn}</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-graphite-soft hover:text-graphite transition-colors">
              {n.label}
            </a>
          ))}
          <a
            href={PROFESSIONAL.doctoraliaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-graphite text-paper px-4 py-2 text-sm hover:bg-graphite-soft transition-colors"
          >
            Agendar pelo Doctoralia
          </a>
        </div>
      </div>
    </nav>
  );
};
