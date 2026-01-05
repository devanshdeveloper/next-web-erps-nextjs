"use client";

import { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhoShouldApply from './components/WhoShouldApply';
import PartnershipTypes from './components/PartnershipTypes';
import ApplicationProcess from './components/ApplicationProcess';
import TrustAuthority from './components/TrustAuthority';
import ResultsKPIs from './components/ResultsKPIs';
import PartnerTestimonials from './components/PartnerTestimonials';
import ApplicationForm, { ApplicationFormRef } from './components/ApplicationForm';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

/**
 * Partnership Apply Page - Next Web Campus
 * 
 * A high-trust, conversion-focused page for partnership applications.
 * Designed to filter serious applicants and reduce low-quality signups.
 * 
 * Structure:
 * 1. Hero - Apply with confidence
 * 2. Who Should Apply - Filtering section
 * 3. Partnership Types - District Operator & Referral Partner
 * 4. Application Process - Step-by-step transparency
 * 5. Trust & Authority - Why we exist
 * 6. Results KPIs - Real-world performance metrics
 * 7. Partner Testimonials - Social proof
 * 8. Application Form - Multi-step form
 * 9. FAQs - Objection handling
 * 10. Final CTA - Reassuring close
 */
export default function App() {
  const formRef = useRef<ApplicationFormRef>(null);

  const scrollToForm = () => {
    formRef.current?.scrollToForm();
  };

  return (
    <>
      <Navbar onApplyClick={scrollToForm} />
      <main>
        <HeroSection onApplyClick={scrollToForm} />
        <WhoShouldApply />
        <PartnershipTypes />
        <ApplicationProcess />
        <TrustAuthority />
        <ResultsKPIs />
        <PartnerTestimonials />
        <ApplicationForm ref={formRef} />
        <FAQSection />
        <FinalCTA onApplyClick={scrollToForm} />
      </main>
      <Footer />
    </>
  );
}
