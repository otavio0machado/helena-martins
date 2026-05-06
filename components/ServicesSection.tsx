import React from 'react';
import { SERVICES } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const ServicesSection: React.FC = () => {
  return (
    <section id="valores" className="py-20 md:py-28 border-t rule">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <p className="label-mono text-clay mb-3">Sessões e valores</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight-2 text-graphite mb-3 max-w-2xl leading-tight">
            Três formatos, todos online.
          </h2>
          <p className="text-graphite-soft mb-12 max-w-2xl leading-relaxed">
            Pagamento via PIX ou cartão (link da Hotpay) até 24 horas antes da
            sessão. Recibo padrão CFN para reembolso é enviado por e-mail no
            mesmo dia.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-px bg-paper-line border rule">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.06}>
              <article className="bg-paper p-7 md:p-8 h-full flex flex-col">
                <s.Icon size={22} strokeWidth={1.5} className="text-clay mb-6" />
                <h3 className="font-serif text-2xl text-graphite leading-tight mb-2">{s.title}</h3>
                <div className="flex items-baseline gap-3 mb-6 font-mono">
                  <span className="text-[15px] text-graphite font-medium">{s.price}</span>
                  <span className="label-mono text-graphite-soft">{s.duration}</span>
                </div>
                <p className="text-[14px] text-graphite-soft italic leading-relaxed mb-4">
                  {s.who}
                </p>
                <p className="text-[15px] text-graphite leading-relaxed">
                  {s.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
