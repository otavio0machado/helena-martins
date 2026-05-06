import React from 'react';
import { HERO, CREDENTIALS, PROFESSIONAL } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="topo" className="pt-32 pb-20 md:pt-40 md:pb-28 px-5 md:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14 items-start">
        <div className="md:col-span-7 order-2 md:order-1">
          <ScrollReveal>
            <p className="label-mono text-clay mb-5">{HERO.kicker}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-graphite mb-7 tracking-tight-2">
              {HERO.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg text-graphite-soft leading-relaxed mb-5 max-w-2xl">
              {HERO.lead}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-base md:text-lg text-graphite-soft leading-relaxed mb-9 max-w-2xl">
              {HERO.detail}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PROFESSIONAL.doctoraliaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-graphite text-paper px-5 py-3 hover:bg-graphite-soft transition-colors text-[15px]"
              >
                Agendar pelo Doctoralia
              </a>
              <a
                href="#abordagem"
                className="inline-flex items-center justify-center border rule px-5 py-3 hover:bg-paper-warm transition-colors text-[15px] text-graphite"
              >
                Como funciona
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Credenciais à direita — formato ficha clínica, não cartão IA */}
        <aside id="sobre" className="md:col-span-5 order-1 md:order-2 md:border-l rule md:pl-10">
          <ScrollReveal delay={0.25}>
            <p className="label-mono text-graphite-soft mb-5">Ficha profissional</p>
            <dl className="space-y-5">
              {CREDENTIALS.map((c) => (
                <div key={c.label} className="border-b rule pb-4 last:border-0">
                  <dt className="label-mono text-graphite-soft mb-1.5">{c.label}</dt>
                  <dd className="text-[15px] text-graphite leading-snug">{c.value}</dd>
                  {c.source && (
                    <dd className="text-xs text-graphite-soft mt-1 italic">{c.source}</dd>
                  )}
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </aside>
      </div>
    </section>
  );
};
