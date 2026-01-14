import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-5">
          <ScrollReveal width="100%">
            {/* Gold decorative accent */}
            <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-300 mx-auto mb-6"></div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-semibold">Como posso te ajudar</h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.1}>
            <p className="text-charcoal/60 max-w-lg mx-auto text-base">
              Serviços pensados para se adaptar à sua rotina e transformar sua relação com a comida.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className="group relative bg-gradient-to-br from-cream-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-start border border-sage-100/50 h-full overflow-hidden"
              >
                {/* Gold accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-300 to-transparent"></div>

                {/* Icon with premium background */}
                <div className="w-14 h-14 bg-gradient-to-br from-sage-200 to-sage-300 rounded-2xl flex items-center justify-center mb-6 text-sage-700 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <service.Icon size={26} strokeWidth={1.8} />
                </div>

                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>

                <p className="text-charcoal/60 leading-relaxed text-sm mb-6 flex-grow">
                  {service.description}
                </p>

                <a
                  href="#contato"
                  className="inline-flex items-center text-sm font-medium text-sage-600 hover:text-gold-500 transition-colors group-hover:translate-x-1 duration-300"
                >
                  Saiba mais
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};