"use client";

import React, { useState, useEffect } from 'react';
import { initScrollAnimations } from './lib/gsap-init';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import FeatureGrid from './components/FeatureGrid';
import Workflow from './components/Workflow';
import ProductTour from './components/ProductTour';
import Integrations from './components/Integrations';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import PricingTeaser from './components/PricingTeaser';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DemoForm from './components/DemoForm';

function App() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  useEffect(() => {
    // Initialize GSAP animations after component mount
    const timer = setTimeout(() => {
      initScrollAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleDemoClick = () => {
    setIsDemoFormOpen(true);
  };

  const handleCloseDemoForm = () => {
    setIsDemoFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onDemoClick={handleDemoClick} />
      <main>
        <Hero onDemoClick={handleDemoClick} />
        <Problems />
        <FeatureGrid />
        <Workflow />
        <ProductTour />
        <Integrations />
        <UseCases />
        <Testimonials />
        <PricingTeaser onDemoClick={handleDemoClick} />
        <FAQ />
      </main>
      <Footer onDemoClick={handleDemoClick} />
      <DemoForm isOpen={isDemoFormOpen} onClose={handleCloseDemoForm} />
    </div>
  );
}

export default App;