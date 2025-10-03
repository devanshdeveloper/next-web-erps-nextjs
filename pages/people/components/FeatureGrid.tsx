import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  UserPlusIcon, 
  BanknotesIcon, 
  ClockIcon, 
  ChartBarIcon,
  DocumentCheckIcon,
  CogIcon,
  PhoneIcon,
  PresentationChartBarIcon
} from '@heroicons/react/24/outline';

const FeatureGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(sectionRef.current.querySelectorAll('.feature-card'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
        }
      }
    );
  }, []);

  const features = [
    {
      icon: UserPlusIcon,
      title: 'Recruitment & ATS',
      description: 'Job posting, candidate tracking, interview scheduling, and hiring workflows.',
      tag: 'Hiring',
      color: 'blue-500',
    },
    {
      icon: DocumentCheckIcon,
      title: 'Onboarding Checklists',
      description: 'Digital document collection, task assignments, and new hire orientation.',
      tag: 'Onboarding',
      color: 'teal-500',
    },
    {
      icon: BanknotesIcon,
      title: 'Payroll Engine',
      description: 'GST-compliant salary processing, PF/ESI calculations, and tax deductions.',
      tag: 'Payroll',
      color: 'orange-500',
    },
    {
      icon: ClockIcon,
      title: 'Attendance & Biometric',
      description: 'Real-time attendance tracking with biometric device integration.',
      tag: 'Attendance',
      color: 'purple-600',
    },
    {
      icon: CogIcon,
      title: 'Leave & Shift Management',
      description: 'Leave applications, approvals, shift scheduling, and overtime tracking.',
      tag: 'Management',
      color: 'green-600',
    },
    {
      icon: ChartBarIcon,
      title: 'Performance Reviews',
      description: 'Goal setting, performance appraisals, 360-degree feedback, and OKRs.',
      tag: 'Performance',
      color: 'red-600',
    },
    {
      icon: PhoneIcon,
      title: 'Employee Self-Service',
      description: 'Mobile app for payslips, leave requests, profile updates, and notifications.',
      tag: 'Self-Service',
      color: 'indigo-600',
    },
    {
      icon: PresentationChartBarIcon,
      title: 'HR Reports & Analytics',
      description: 'Statutory reports, payroll analytics, attendance insights, and dashboards.',
      tag: 'Analytics',
      color: 'pink-600',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { icon: string; tag: string; hover: string } } = {
      'blue-500': { icon: 'text-blue', tag: 'bg-blue-500', hover: 'group-hover:bg-blue/5' },
      'teal-500': { icon: 'text-teal', tag: 'bg-teal-500', hover: 'group-hover:bg-teal/5' },
      'orange-500': { icon: 'text-orange', tag: 'bg-orange-500', hover: 'group-hover:bg-orange/5' },
      'purple-600': { icon: 'text-purple-600', tag: 'bg-purple-600', hover: 'group-hover:bg-purple-50' },
      'green-600': { icon: 'text-green-600', tag: 'bg-green-600', hover: 'group-hover:bg-green-50' },
      'red-600': { icon: 'text-red-600', tag: 'bg-red-600', hover: 'group-hover:bg-red-50' },
      'indigo-600': { icon: 'text-indigo-600', tag: 'bg-indigo-600', hover: 'group-hover:bg-indigo-50' },
      'pink-600': { icon: 'text-pink-600', tag: 'bg-pink-600', hover: 'group-hover:bg-pink-50' },
    };
    return colorMap[color] || colorMap['blue-500'];
  };

  return (
    <section id="features" ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Complete HRMS capabilities in one platform
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From hiring to payroll to performance — everything your growing business needs to manage people effectively.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            
            return (
              <motion.div
                key={index}
                className={`feature-card group bg-white rounded-xl p-6 border hover:border-gray-300 transition-all duration-300 ${colors.hover}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 group-hover:bg-white transition-colors`}>
                    <feature.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <span className={`text-xs text-white px-2 py-1 rounded-full ${colors.tag}`}>
                    {feature.tag}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-gray-800">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Ready to see how it all works together?
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Schedule a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;