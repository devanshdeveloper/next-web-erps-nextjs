"use client";

import React, { useState, useEffect } from 'react';
import { initGSAP } from './lib/gsap-init.js';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import ProductDemo from './components/ProductDemo';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Integrations from './components/Integrations';
import FAQ from './components/FAQ';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    // Initialize GSAP animations
    initGSAP().catch(console.error);
  }, []);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar onDemoClick={openDemoModal} />
      
      <main>
        <Hero onDemoClick={openDemoModal} />
        <ProblemSolution />
        <Features />
        <ProductDemo />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Integrations />
        <FAQ />
      </main>
      
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}

export default App;