"use client";

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import ProductTour from './components/ProductTour';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DemoForm from './components/DemoForm';

function App() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  useEffect(() => {
    if (isDemoFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDemoFormOpen]);

  return (
    <>
      <Navbar onDemoClick={() => setIsDemoFormOpen(true)} />
      <main>
        <Hero onDemoClick={() => setIsDemoFormOpen(true)} />
        <Problems />
        <HowItWorks />
        <FeatureGrid />
        <ProductTour />
        <UseCases />
        <Pricing onContactClick={() => setIsDemoFormOpen(true)} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onDemoClick={() => setIsDemoFormOpen(true)} />
      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </>
  );
}

export default App;
