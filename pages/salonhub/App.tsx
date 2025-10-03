"use client";

import React, { useEffect } from 'react';
import { initGSAP } from './lib/gsap-init';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductTour from './components/ProductTour';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import PricingTeaser from './components/PricingTeaser';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    initGSAP();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Features />
        <HowItWorks />
        <ProductTour />
        <Integrations />
        <Testimonials />
        <PricingTeaser />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;