"use client";

import { motion } from 'framer-motion';
import { FileSearch, UserCheck, Phone, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    title: 'Application Review',
    description: 'Your application is reviewed by our team within 2-3 business days.',
    color: 'blue',
  },
  {
    icon: UserCheck,
    title: 'Verification',
    description: 'We verify basic details and check region availability in your district.',
    color: 'indigo',
  },
  {
    icon: Phone,
    title: 'Onboarding Call',
    description: 'A short call to discuss expectations, answer questions, and align goals.',
    color: 'violet',
  },
  {
    icon: Rocket,
    title: 'Access & Activation',
    description: 'Get access to partner tools, dashboard, and start your partnership journey.',
    color: 'purple',
  },
];

export default function ApplicationProcess() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Happens After You Apply
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A transparent, human-driven process. No automated approvals, no hidden conditions.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10
                    ${step.color === 'blue' ? 'bg-blue-600' : ''}
                    ${step.color === 'indigo' ? 'bg-indigo-600' : ''}
                    ${step.color === 'violet' ? 'bg-violet-600' : ''}
                    ${step.color === 'purple' ? 'bg-purple-600' : ''}
                  `}>
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center
                    ${step.color === 'blue' ? 'bg-blue-50' : ''}
                    ${step.color === 'indigo' ? 'bg-indigo-50' : ''}
                    ${step.color === 'violet' ? 'bg-violet-50' : ''}
                    ${step.color === 'purple' ? 'bg-purple-50' : ''}
                  `}>
                    <step.icon className={`w-8 h-8
                      ${step.color === 'blue' ? 'text-blue-600' : ''}
                      ${step.color === 'indigo' ? 'text-indigo-600' : ''}
                      ${step.color === 'violet' ? 'text-violet-600' : ''}
                      ${step.color === 'purple' ? 'text-purple-600' : ''}
                    `} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-6 hidden lg:block">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold
                  ${step.color === 'blue' ? 'bg-blue-600' : ''}
                  ${step.color === 'indigo' ? 'bg-indigo-600' : ''}
                  ${step.color === 'violet' ? 'bg-violet-600' : ''}
                  ${step.color === 'purple' ? 'bg-purple-600' : ''}
                `}>
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3
                  ${step.color === 'blue' ? 'bg-blue-50' : ''}
                  ${step.color === 'indigo' ? 'bg-indigo-50' : ''}
                  ${step.color === 'violet' ? 'bg-violet-50' : ''}
                  ${step.color === 'purple' ? 'bg-purple-50' : ''}
                `}>
                  <step.icon className={`w-6 h-6
                    ${step.color === 'blue' ? 'text-blue-600' : ''}
                    ${step.color === 'indigo' ? 'text-indigo-600' : ''}
                    ${step.color === 'violet' ? 'text-violet-600' : ''}
                    ${step.color === 'purple' ? 'text-purple-600' : ''}
                  `} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Fees Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">There are no upfront fees at any stage</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
