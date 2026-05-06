import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b rule">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-start justify-between gap-6 text-left hover:text-clay transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg md:text-xl leading-snug text-graphite">{question}</span>
        {isOpen ? (
          <Minus size={20} strokeWidth={1.5} className="text-clay shrink-0 mt-1.5" />
        ) : (
          <Plus size={20} strokeWidth={1.5} className="text-graphite-soft shrink-0 mt-1.5" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-[15px] text-graphite-soft leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
