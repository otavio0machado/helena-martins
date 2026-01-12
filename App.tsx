import React from 'react';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-emerald-200 selection:text-emerald-900">
      <Header />
      <main>
        <AboutSection />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;