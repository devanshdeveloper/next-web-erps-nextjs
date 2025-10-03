import { gsap } from 'gsap';

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

  if (prefersReducedMotion) {
    gsap.set("*", { duration: 0.01 });
    ScrollTrigger.config({ limitCallbacks: true });
  }

  // Set default ease
  gsap.defaults({
    ease: "power2.out",
    duration: 0.8
  });
};

// Hero animation
export const animateHero = () => {
  if (prefersReducedMotion) return;

  const tl = gsap.timeline();

  tl.from('.hero-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })
    .from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .from('.hero-ctas', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3")
    .from('.hero-mockup', {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.8");
};

// Feature cards stagger animation
export const animateFeatures = () => {
  if (prefersReducedMotion) return;

  gsap.from('.feature-card', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.features-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Product tour animation
export const animateProductTour = () => {
  if (prefersReducedMotion) return;

  const sections = gsap.utils.toArray('.tour-section');

  sections.forEach((section, index) => {
    gsap.from(section, {
      x: index % 2 === 0 ? -100 : 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });
};

// Stats counter animation
export const animateStats = () => {
  if (prefersReducedMotion) return;

  gsap.from('.stat-number', {
    innerText: 0,
    duration: 2,
    ease: "power2.out",
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: '.stats-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

export { gsap, ScrollTrigger };