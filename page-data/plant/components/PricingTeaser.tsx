import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface PricingTeaserProps {
  onDemoClick: () => void;
}

const PricingTeaser: React.FC<PricingTeaserProps> = ({ onDemoClick }) => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for single plant operations",
      features: [
        "Single plant support",
        "Basic work orders",
        "Mobile terminals",
        "Standard reports",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Growth",
      description: "Ideal for multi-plant manufacturers",
      features: [
        "Multi-plant support",
        "Advanced scheduling",
        "Quality management",
        "Custom workflows",
        "Priority support"
      ],
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom solution for large operations",
      features: [
        "Unlimited plants",
        "Advanced analytics",
        "API integrations",
        "Custom development",
        "Dedicated support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent <span className="text-blue-500">Pricing</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the plan that fits your manufacturing scale and requirements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative bg-white p-8 rounded-xl border-2 hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-orange-500 shadow-lg' : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                <p className="text-slate-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onDemoClick}
                className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {plan.cta}
                <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-6">
            All plans include implementation support, training, and data migration assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onDemoClick}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Demo Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Download Datasheet
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTeaser;