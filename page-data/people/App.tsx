"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import FeatureGrid from "./components/FeatureGrid";
import Workflow from "./components/Workflow";
import ProductTour from "./components/ProductTour";
import Integrations from "./components/Integrations";
import UseCases from "./components/UseCases";
import PricingTeaser from "./components/PricingTeaser";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// Register GSAP plugins

function App() {
  useEffect(() => {
    let gsapModule: any = null;
    let hasScrollTo = false;

    // real handler that will be referenced for both add/remove
    const onClick = async (e: Event) => {
      const target = e.target as HTMLElement | null;
      // support clicks on children of anchor tags
      const anchor = target?.closest?.('a') as HTMLAnchorElement | null;
      if (!anchor || !anchor.hash) return;

      e.preventDefault();

      // load GSAP & plugins lazily on first click
      if (!gsapModule) {
        const [{ default: gsap }, ScrollTriggerMod, ScrollToMod] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger').catch(() => undefined),
          import('gsap/ScrollToPlugin').catch(() => undefined),
        ]);

        gsapModule = gsap;
        const ScrollTrigger = ScrollTriggerMod?.ScrollTrigger ?? ScrollTriggerMod?.default ?? ScrollTriggerMod;
        const ScrollTo = ScrollToMod?.default ?? ScrollToMod;
        try {
          if (ScrollTrigger) gsapModule.registerPlugin(ScrollTrigger);
          if (ScrollTo) {
            gsapModule.registerPlugin(ScrollTo);
            hasScrollTo = true;
          }
        } catch (err) {
          // ignore double-registration
        }

        // example initialization
        gsapModule.set('body', { overflow: 'visible' });
      }

      const element = document.querySelector(anchor.hash);
      if (!element) return;

      // if ScrollToPlugin is available, use it; otherwise fall back to native smooth scroll
      if (gsapModule && hasScrollTo) {
        gsapModule.to(window, {
          duration: 1,
          scrollTo: element,
          ease: 'power2.inOut',
        });
      } else {
        (element as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      // optional: kill ScrollTrigger instances if you imported it and gsap is loaded
      try {
        gsapModule?.ScrollTrigger?.kill?.();
      } catch (e) {}
    };
  }, []);


  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <FeatureGrid />
        <Workflow />
        <ProductTour />
        <Integrations />
        <UseCases />
        <PricingTeaser />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
