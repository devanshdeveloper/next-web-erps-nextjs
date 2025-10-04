import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserPlusIcon, DocumentCheckIcon, BanknotesIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Workflow = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    // Animate connecting line
    gsap.fromTo(lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        }
      }
    );

    // Animate workflow steps
    gsap.fromTo(sectionRef.current.querySelectorAll('.workflow-step'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  const steps = [
    {
      icon: UserPlusIcon,
      title: 'Recruit',
      description: 'Post jobs, screen candidates, schedule interviews, and make offers through our ATS.',
      color: 'blue-500',
    },
    {
      icon: DocumentCheckIcon,
      title: 'Onboard',
      description: 'Digital document collection, task assignments, and smooth new hire experience.',
      color: 'teal-500',
    },
    {
      icon: BanknotesIcon,
      title: 'Pay',
      description: 'Process payroll with GST compliance, PF/ESI calculations, and statutory filings.',
      color: 'orange-500',
    },
    {
      icon: ChartBarIcon,
      title: 'Review',
      description: 'Track performance, set goals, conduct appraisals, and drive employee growth.',
      color: 'purple-600',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      'blue-500': { bg: 'bg-blue-500', text: 'text-blue', border: 'border-blue' },
      'teal-500': { bg: 'bg-teal-500', text: 'text-teal', border: 'border-teal' },
      'orange-500': { bg: 'bg-orange-500', text: 'text-orange', border: 'border-orange' },
      'purple-600': { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600' },
    };
    return colorMap[color] || colorMap['blue-500'];
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Your complete people journey
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From first contact to ongoing development — streamline every step of the employee lifecycle.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop workflow */}
          <div className="hidden md:block relative">
            {/* Connecting line */}
            <div
              ref={lineRef}
              className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-teal-500 via-orange-500 to-purple-600 transform -translate-y-1/2 origin-left"
            />
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const colors = getColorClasses(step.color);
                
                return (
                  <div key={index} className="workflow-step text-center">
                    <div className="relative mb-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${colors.bg} text-white shadow-lg relative z-10`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-white border-2 border-gray-200 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {index + 1}. {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile workflow */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              
              return (
                <div key={index} className="workflow-step flex items-start gap-4">
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-full ${colors.bg} text-white shadow-lg`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 mb-6">
            See the complete workflow in action with a personalized demo.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Book Your Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;