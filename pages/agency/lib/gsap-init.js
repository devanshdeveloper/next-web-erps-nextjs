import gsap from 'gsap';

export const initScrollAnimations = async () => {

  if (typeof window !== 'undefined') {
    ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  }
  if (!gsap || typeof window === 'undefined') return;


  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    gsap.set('*', { clearProps: 'all' });
    return;
  }

  return { gsap, ScrollTrigger };
};

export { gsap, ScrollTrigger };
