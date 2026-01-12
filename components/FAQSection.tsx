import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Accordion } from './ui/Accordion';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="duvidas" className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-800">Perguntas Frequentes</h2>
      </div>
      
      <div className="space-y-2">
        {FAQS.map((faq, index) => (
          <Accordion 
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};