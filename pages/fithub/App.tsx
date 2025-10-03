"use client";

import { useState, useEffect } from 'react';
import { initGSAP } from './lib/gsap-init';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import Integrations from './components/Integrations';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DemoForm from './components/DemoForm';
import StickyMobileCTA from './components/StickyMobileCTA';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    initGSAP();
  }, []);

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onCTAClick={handleOpenForm} />
      <Hero onPrimaryClick={handleOpenForm} />
      <Problems />
      <FeatureGrid />
      <HowItWorks />
      <Integrations />
      <UseCases />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
      <DemoForm isOpen={isFormOpen} onClose={handleCloseForm} />
      <StickyMobileCTA onCTAClick={handleOpenForm} />
    </div>
  );
}

export default App;
