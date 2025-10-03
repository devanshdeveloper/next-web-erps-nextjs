import { gsap } from 'gsap';
let ScrollTrigger;

export { gsap, ScrollTrigger };

export const initScrollAnimation =  async (element, options = {}) => {

    if (typeof window !== 'undefined') {
    ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  }
  if (!gsap || typeof window === 'undefined') return;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return null;
  }

  const defaults = {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
  };

  return gsap.from(element, {
    ...defaults,
    ...options,
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger,
    },
  });
};

export const animateCounter = (element, endValue, options = {}) => {
  if (!gsap || typeof window === 'undefined') return;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    element.textContent = endValue;
    return null;
  }

  const obj = { value: 0 };

  return gsap.to(obj, {
    value: endValue,
    duration: options.duration || 2,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.round(obj.value) + (options.suffix || '');
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger,
    },
  });
};


export default () => {};