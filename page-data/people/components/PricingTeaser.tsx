import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const PricingTeaser = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      employees: 'Up to 25 employees',
      features: [
        'Basic payroll processing',
        'Attendance tracking',
        'Employee self-service',
        'Standard reports',
        'Email support',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Growth',
      description: 'Ideal for growing businesses',
      employees: 'Up to 100 employees',
      features: [
        'Advanced payroll & compliance',
        'Biometric integration',
        'Performance management',
        'Custom reports',
        'Priority support',
        'API access',
      ],
      cta: 'Most Popular',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for larger organizations',
      employees: 'Unlimited employees',
      features: [
        'Full HRMS suite',
        'Multi-location support',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager',
        'On-site training',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the plan that grows with your business. All plans include core HRMS features.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-blue-500 text-white shadow-2xl scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 shadow-sm hover:shadow-md'
              } transition-all`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className={`text-sm font-semibold ${plan.popular ? 'text-blue-200' : 'text-blue'}`}>
                  {plan.employees}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'text-blue-200' : 'text-teal'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-blue-50' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-md font-semibold transition-colors flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-white text-blue-500 hover:bg-gray-100'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                {plan.cta}
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Pricing notes */}
        <motion.div
          className="text-center mt-16 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600">
            All plans include GST compliance, PF/ESI support, and mobile access.
          </p>
          <p className="text-sm text-gray-500">
            Need custom features? Contact our team for enterprise solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <button className="text-blue-500 hover:text-teal-500 font-semibold transition-colors">
              View Detailed Pricing
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-blue-500 hover:text-teal-500 font-semibold transition-colors">
              Calculate Your Cost
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-blue-500 hover:text-teal-500 font-semibold transition-colors">
              Free Trial Available
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTeaser;