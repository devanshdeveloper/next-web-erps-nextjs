import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';
import DemoForm from './DemoForm';

const Pricing = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for single location businesses",
      price: "₹4,999",
      period: "per month",
      description: "Essential procurement tools for small businesses",
      features: [
        "Up to 100 POs per month",
        "5 vendor management", 
        "Basic approval workflows",
        "GRN & invoice matching",
        "Email & SMS notifications",
        "Mobile app access",
        "Standard support"
      ],
      popular: false,
      cta: "Start Free Trial",
      color: "border-gray-200"
    },
    {
      name: "Growth",
      subtitle: "Ideal for multi-site operations", 
      price: "₹14,999",
      period: "per month",
      description: "Advanced features for growing businesses",
      features: [
        "Unlimited POs",
        "50 vendor management",
        "Advanced approval workflows",
        "Multi-location support",
        "API integrations",
        "Custom reports & analytics",
        "Priority support",
        "Training included"
      ],
      popular: true,
      cta: "Get Started",
      color: "border-blue-500"
    },
    {
      name: "Enterprise", 
      subtitle: "Custom solutions for large businesses",
      price: "Custom",
      period: "pricing",
      description: "Tailored procurement suite for enterprises",
      features: [
        "Unlimited everything",
        "Custom approval workflows",
        "Dedicated account manager",
        "Advanced integrations",
        "Custom reporting",
        "SLA guarantee",
        "24/7 phone support",
        "On-site implementation"
      ],
      popular: false,
      cta: "Contact Sales",
      color: "border-gray-200"
    }
  ];

  return (
    <>
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business size and procurement needs. No hidden fees, cancel anytime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative bg-white rounded-2xl p-8 border-2 ${plan.color} ${
                  plan.popular ? 'ring-4 ring-blue/20' : ''
                } transition-all duration-300 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.subtitle}
                  </p>
                  
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDemoForm(true)}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-blue-500 hover:bg-blue-700 text-white'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                All plans include:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-2">
                  <Check className="h-5 w-5 text-teal-500 " />
                  <span className="text-gray-700">GST-ready compliance</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Check className="h-5 w-5 text-teal-500 " />
                  <span className="text-gray-700">Mobile & web access</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Check className="h-5 w-5 text-teal-500 " />
                  <span className="text-gray-700">Data security & backups</span>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-600 mb-4">
                  Need a custom solution? Our team can build workflows specific to your industry.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDemoForm(true)}
                  className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md font-semibold transition-all duration-200"
                >
                  Schedule a Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoForm isOpen={showDemoForm} onClose={() => setShowDemoForm(false)} />
    </>
  );
};

export default Pricing;