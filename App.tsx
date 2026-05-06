import React from 'react';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ApproachSection } from './components/ApproachSection';
import { ServicesSection } from './components/ServicesSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-paper text-graphite selection:bg-clay/30 selection:text-graphite">
      <Header />
      <main>
        <AboutSection />
        <ApproachSection />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
