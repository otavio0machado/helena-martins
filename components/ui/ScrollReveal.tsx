import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  width?: 'fit-content' | '100%';
  className?: string;
}

// Passthrough — a versão original era um wrapper framer-motion com
// initial opacity-0/y-30 + whileInView que produzia conteúdo invisível
// quando o elemento já estava no viewport na primeira pintura. Para uma
// landing editorial densa, sem necessidade real de fade-on-scroll,
// passthrough é o comportamento correto.
export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, width = '100%', className = '' }) => (
  <div className={className} style={{ width }}>
    {children}
  </div>
);
