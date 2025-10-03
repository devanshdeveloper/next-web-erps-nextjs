"use client";

import React, { useState } from 'react';
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

  const handleRequestDemo = () => {
    setIsDemoFormOpen(true);
  };

  const handleCloseDemoForm = () => {
    setIsDemoFormOpen(false);
  };

  const handleSeeFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetQuote = () => {
    setIsDemoFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar onRequestDemo={handleRequestDemo} />

      {/* Hero Section */}
      <Hero 
        onRequestDemo={handleRequestDemo}
        onSeeFeatures={handleSeeFeatures}
      />

      {/* Problems We Solve */}
      <Problems />

      {/* Core Features */}
      <div id="features">
        <FeatureGrid />
      </div>

      {/* How It Works */}
      <Workflow />

      {/* Product Tour */}
      <ProductTour />

      {/* Use Cases */}
      <UseCases />

      {/* Integrations */}
      <Integrations />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <PricingTeaser onGetQuote={handleGetQuote} />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Demo Form Modal */}
      <DemoForm 
        isOpen={isDemoFormOpen}
        onClose={handleCloseDemoForm}
      />
    </div>
  );
}

export default App;