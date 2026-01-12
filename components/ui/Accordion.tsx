import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-emerald-700' : 'text-charcoal group-hover:text-emerald-600'}`}>
          {question}
        </span>
        <span className="ml-4 flex-shrink-0 text-emerald-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100 mb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};