import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExclamationTriangleIcon, DocumentTextIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Problems = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(sectionRef.current.querySelectorAll('.problem-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );
  }, []);

  const problems = [
    {
      icon: DocumentTextIcon,
      title: 'Manual Payroll Spreadsheets',
      description: 'Hours spent calculating salaries, taxes, and deductions with high error risk',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: ClockIcon,
      title: 'Attendance Mismatch',
      description: 'Biometric data doesn\'t sync with payroll, causing disputes and delays',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Compliance Risk',
      description: 'PF, ESI, and tax filing deadlines missed, leading to penalties',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: ChartBarIcon,
      title: 'Poor Performance Visibility',
      description: 'No clear view of employee goals, reviews, or growth tracking',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            HR challenges that slow down your business
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Manual processes, compliance gaps, and disconnected systems create headaches for growing teams.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-card bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${problem.bgColor} mb-4`}>
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 mb-6">
            <strong>NextWeb People</strong> solves these problems with one integrated platform.
          </p>
          <a
            href="#features"
            className="inline-flex items-center text-blue-500 font-semibold hover:text-teal-500 transition-colors"
          >
            See how we help
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;