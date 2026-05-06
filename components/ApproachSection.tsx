import React from 'react';
import { Check, X } from 'lucide-react';
import { APPROACH } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const ApproachSection: React.FC = () => {
  return (
    <section id="abordagem" className="py-20 md:py-28 border-t rule bg-paper-warm">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <p className="label-mono text-clay mb-3">Abordagem</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight-2 text-graphite mb-12 max-w-2xl leading-tight">
            {APPROACH.title}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          <ScrollReveal>
            <div>
              <p className="label-mono text-moss mb-5">O que faço</p>
              <ul className="space-y-4">
                {APPROACH.yes.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-graphite">
                    <Check size={18} strokeWidth={1.5} className="text-moss shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div>
              <p className="label-mono text-clay mb-5">O que não faço</p>
              <ul className="space-y-4">
                {APPROACH.no.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-graphite">
                    <X size={18} strokeWidth={1.5} className="text-clay shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
