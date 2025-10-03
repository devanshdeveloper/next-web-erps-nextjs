"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import ProductTour from './components/ProductTour';
import Integrations from './components/Integrations';
import UseCases from './components/UseCases';
import PricingTeaser from './components/PricingTeaser';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DemoForm from './components/DemoForm';

function App() {
  const [demoFormOpen, setDemoFormOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDemoClick = () => {
    setDemoFormOpen(true);
  };

  const handleTrialClick = () => {
    setDemoFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onDemoClick={handleDemoClick} />
      <Hero onDemoClick={handleDemoClick} onTrialClick={handleTrialClick} />
      <Problems />
      <FeatureGrid />
      <HowItWorks />
      <ProductTour />
      <Integrations />
      <UseCases />
      <PricingTeaser />
      <Testimonials />
      <FAQ />
      <Footer />

      <DemoForm isOpen={demoFormOpen} onClose={() => setDemoFormOpen(false)} />

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue/90 transition-colors z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-orange-500 text-white px-4 py-3 md:hidden z-40 shadow-lg">
        <button onClick={handleDemoClick} className="w-full font-semibold text-center">
          Request Demo
        </button>
      </div>
    </div>
  );
}

export default App;
