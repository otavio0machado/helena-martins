import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Accordion } from './ui/Accordion';
import { ScrollReveal } from './ui/ScrollReveal';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="duvidas" className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
      <div className="mb-12 text-center space-y-4">
        <ScrollReveal width="100%">
          {/* Gold decorative accent */}
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-300 mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-semibold">Perguntas Frequentes</h2>
        </ScrollReveal>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <Accordion
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};