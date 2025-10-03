"use client";

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import ProductTour from './components/ProductTour';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DemoForm from './components/DemoForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFormOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFormOpen]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onRequestDemo={() => setIsFormOpen(true)} />
      <Hero
        onRequestDemo={() => setIsFormOpen(true)}
        onStartTrial={() => setIsFormOpen(true)}
      />
      <Problems />
      <FeatureGrid />
      <HowItWorks />
      <ProductTour />
      <Integrations />
      <Pricing onRequestDemo={() => setIsFormOpen(true)} />
      <Testimonials />
      <FAQ />
      <Footer />
      <DemoForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default App;
