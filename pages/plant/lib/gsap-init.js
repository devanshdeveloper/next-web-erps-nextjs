import { gsap } from 'gsap';


// Initialize scroll animations
export const initScrollAnimations =  async () => {

    if (typeof window !== 'undefined') {
    ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  }

  // Fade in animations for sections
  gsap.utils.toArray('.gsap-fade').forEach((element) => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Production workflow timeline
  const workflowSteps = gsap.utils.toArray('.workflow-step');
  workflowSteps.forEach((step, index) => {
    gsap.fromTo(step,
      {
        opacity: 0,
        scale: 0.8,
        y: 50
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Feature cards staggered animation
  const featureCards = gsap.utils.toArray('.feature-card');
  gsap.fromTo(featureCards,
    {
      opacity: 0,
      y: 40
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      }
    }
  );
};

export default gsap;