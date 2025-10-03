import { gsap } from 'gsap';

gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

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

  if (prefersReducedMotion.matches) {
    gsap.globalTimeline.timeScale(0);
    return;
  }
  
  // Global GSAP defaults
  gsap.defaults({
    ease: "power2.out",
    duration: 0.6
  });
};

export { gsap, ScrollTrigger };

export default () => {};