import React from 'react';
import { BIO_TEXT } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Column: Content */}
        <div className="order-2 md:order-1 space-y-8">
          <ScrollReveal>
            {/* Gold decorative accent */}
            <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-300 mb-6"></div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.15] font-semibold">
              {BIO_TEXT.greeting}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-lg md:text-xl text-charcoal/70 font-light leading-relaxed max-w-lg">
              {BIO_TEXT.intro}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-charcoal/60 leading-relaxed text-base">
              {BIO_TEXT.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="pt-4 space-y-3">
              {BIO_TEXT.credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-sage-400"></div>
                  <span className="text-sm text-charcoal/60">{credential}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Image */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
          <ScrollReveal delay={0.5} className="relative w-full max-w-md">
            {/* Sage background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-200 to-sage-300 rounded-tr-[80px] rounded-bl-[80px] -translate-x-4 translate-y-4 -z-10"></div>

            {/* Gold accent border */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-gold-400 rounded-tr-[40px]"></div>

            <img
              src="https://picsum.photos/500/700?grayscale"
              alt="Dra. Helena Martins"
              className="w-full h-[550px] object-cover rounded-tl-2xl rounded-tr-[80px] rounded-br-2xl rounded-bl-[80px] shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};