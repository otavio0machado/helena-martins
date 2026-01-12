import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-800">Como posso te ajudar</h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Serviços pensados para se adaptar à sua rotina e transformar sua relação com a comida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group bg-stone-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start border border-stone-100"
            >
              <div className="w-12 h-12 bg-emerald-100/50 rounded-full flex items-center justify-center mb-6 text-emerald-700">
                <service.Icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-6 flex-grow">
                {service.description}
              </p>
              <a 
                href="#contato"
                className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors group-hover:translate-x-1 duration-300"
              >
                Saiba mais
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};