"use client";

import React, { useState, useEffect } from 'react';
import { initGSAP } from './lib/gsap-init';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import FeatureGrid from './components/FeatureGrid';
import Workflow from './components/Workflow';
import DemoForm from './components/DemoForm';
import StickyDemoCTA from './components/StickyDemoCTA';
import Footer from './components/Footer';

function App() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  useEffect(() => {
    // Initialize GSAP when component mounts
    initGSAP();
  }, []);

  const openDemoForm = () => {
    setIsDemoFormOpen(true);
  };

  const closeDemoForm = () => {
    setIsDemoFormOpen(false);
  };

  return (
    <div className="min-h-screen font-inter antialiased bg-white">
      {/* Navigation */}
      <Navbar onOpenDemoForm={openDemoForm} />
      
      {/* Main Content */}
      <main>
        <Hero onOpenDemoForm={openDemoForm} />
        <Problems />
        <FeatureGrid onOpenDemoForm={openDemoForm} />
        <Workflow />
      </main>

      {/* Footer */}
      <Footer />

      {/* Demo Form Modal */}
      <DemoForm 
        isOpen={isDemoFormOpen} 
        onClose={closeDemoForm} 
      />

      {/* Sticky Mobile CTA */}
      <StickyDemoCTA onClick={openDemoForm} />

    </div>
  );
}

export default App;