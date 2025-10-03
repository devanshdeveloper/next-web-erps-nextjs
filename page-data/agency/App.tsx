"use client";

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import ProductTour from './components/ProductTour';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Integrations from './components/Integrations';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DemoForm from './components/DemoForm';

function App() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onRequestDemo={() => setIsDemoFormOpen(true)} />
      <Hero onRequestDemo={() => setIsDemoFormOpen(true)} />
      <Problems />
      <FeatureGrid />
      <HowItWorks />
      <ProductTour />
      <UseCases />
      <Pricing />
      <Testimonials />
      <Integrations />
      <FAQ />
      <Footer onRequestDemo={() => setIsDemoFormOpen(true)} />
      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </div>
  );
}

export default App;
