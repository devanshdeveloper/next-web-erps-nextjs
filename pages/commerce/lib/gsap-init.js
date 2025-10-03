import { gsap } from 'gsap';

let ScrollTrigger;

export const initGSAP = async () => {
  if (typeof window !== 'undefined') {
    ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  }
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    gsap.set('*', { animation: 'none', transition: 'none' });
    return;
  }

  // Hero parallax effect
  gsap.to('.hero-bg', {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  // Feature cards reveal
  gsap.fromTo('.feature-card', 
    {
      opacity: 0,
      y: 60
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Product demo reveal
  gsap.fromTo('.demo-mockup', 
    {
      opacity: 0,
      scale: 0.8
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.demo-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Testimonials stagger
  gsap.fromTo('.testimonial-card', 
    {
      opacity: 0,
      x: -40
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

export { gsap, ScrollTrigger };

export default () => {}