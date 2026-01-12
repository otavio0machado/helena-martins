import React from 'react';
import { BIO_TEXT } from '../constants';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Content */}
        <div className="order-2 md:order-1 space-y-8">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-800 leading-[1.15]">
            {BIO_TEXT.greeting}
          </h1>
          
          <div className="w-16 h-1 bg-emerald-200"></div>
          
          <h2 className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-lg">
            {BIO_TEXT.intro}
          </h2>

          <p className="text-slate-500 leading-relaxed text-base">
            {BIO_TEXT.description}
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            {/* Organic Shape Decoration */}
            <div className="absolute inset-0 bg-emerald-100 rounded-tr-[80px] rounded-bl-[80px] -translate-x-4 translate-y-4 -z-10"></div>
            
            <img 
              src="https://picsum.photos/500/700?grayscale" 
              alt="Dra. Helena Martins" 
              className="w-full h-[550px] object-cover rounded-tl-2xl rounded-tr-[80px] rounded-br-2xl rounded-bl-[80px] shadow-lg grayscale-[20%] hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};