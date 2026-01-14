import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`border border-sage-100 rounded-xl mb-3 transition-all duration-300 ${isOpen ? 'bg-white shadow-md' : 'bg-cream-50 hover:bg-white hover:shadow-sm'}`}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-sage-600' : 'text-charcoal group-hover:text-sage-600'}`}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`ml-4 flex-shrink-0 ${isOpen ? 'text-gold-400' : 'text-sage-400'}`}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="w-12 h-0.5 bg-gold-300 mb-3"></div>
              <p className="text-charcoal/70 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
