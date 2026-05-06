import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Accordion } from './ui/Accordion';
import { ScrollReveal } from './ui/ScrollReveal';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-20 md:py-28 border-t rule bg-paper-warm">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <p className="label-mono text-clay mb-3">Dúvidas</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight-2 text-graphite mb-12 leading-tight">
            O que pacientes me perguntam antes de marcar.
          </h2>
        </ScrollReveal>

        <div className="border-t rule">
          {FAQS.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.04}>
              <Accordion
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
