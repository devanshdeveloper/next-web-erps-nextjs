import React from 'react';
import { motion } from 'framer-motion';
import { BuildingStorefrontIcon, WrenchScrewdriverIcon, ScissorsIcon } from '@heroicons/react/24/outline';

const UseCases = () => {
  const useCases = [
    {
      icon: BuildingStorefrontIcon,
      title: 'Retail & E-commerce',
      description: 'Manage store staff, shift scheduling, commission tracking, and multi-location attendance.',
      features: ['Shift management', 'Commission calculation', 'Multi-store support', 'POS integration'],
      color: 'blue-500',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Manufacturing',
      description: 'Factory floor attendance, overtime tracking, contractor management, and safety compliance.',
      features: ['Biometric integration', 'Overtime automation', 'Contractor payroll', 'Safety tracking'],
      color: 'teal-500',
    },
    {
      icon: ScissorsIcon,
      title: 'Services & Agencies',
      description: 'Project-based teams, client billing integration, freelancer management, and time tracking.',
      features: ['Project time tracking', 'Client billing', 'Freelancer onboarding', 'Performance metrics'],
      color: 'orange-500',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      'blue-500': { bg: 'bg-blue-500', text: 'text-blue', border: 'border-blue' },
      'teal-500': { bg: 'bg-teal-500', text: 'text-teal', border: 'border-teal' },
      'orange-500': { bg: 'bg-orange-500', text: 'text-orange', border: 'border-orange' },
    };
    return colorMap[color] || colorMap['blue-500'];
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Perfect for every industry
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tailored features and workflows for different business types across India.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const colors = getColorClasses(useCase.color);
            
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} text-white mb-6`}>
                  <useCase.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Key Features:</p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full ${colors.bg} flex items-center justify-center`}>
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industry CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Don't see your industry? NextWeb People adapts to any business model.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Discuss Your Requirements
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;