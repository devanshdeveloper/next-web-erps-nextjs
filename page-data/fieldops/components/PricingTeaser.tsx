import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';

interface PricingTeaserProps {
  onGetQuote: () => void;
}

const PricingTeaser: React.FC<PricingTeaserProps> = ({ onGetQuote }) => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small field teams',
      price: '₹299',
      period: '/technician/month',
      popular: false,
      features: [
        'Up to 10 technicians',
        'Basic job scheduling',
        'Mobile app access',
        'WhatsApp notifications',
        'Email support'
      ]
    },
    {
      name: 'Growth',
      description: 'For growing service businesses',
      price: '₹499',
      period: '/technician/month',
      popular: true,
      features: [
        'Unlimited technicians',
        'Route optimization',
        'SLA management',
        'Parts tracking',
        'API integrations',
        'Phone support'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Advanced features & custom integrations',
      price: 'Custom',
      period: 'pricing',
      popular: false,
      features: [
        'Custom workflows',
        'Advanced analytics',
        'Multi-location support',
        'Priority support',
        'Dedicated success manager',
        'Custom integrations'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your team size and requirements. 
            All plans include mobile apps, WhatsApp integration, and 24/7 uptime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border-2 ${
                plan.popular ? 'border-orange' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline">
                  <span className="font-poppins font-bold text-3xl text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onGetQuote}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                  plan.popular
                    ? 'bg-orange-500 text-white hover:bg-orange/90'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <h4 className="font-semibold text-lg text-gray-900 mb-4">
              All plans include:
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-teal-500 mr-2" />
                30-day free trial
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-teal-500 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-teal-500 mr-2" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-teal-500 mr-2" />
                Data migration
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-teal-500 mr-2" />
                Training included
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-teal-500 mr-2" />
                99.9% uptime SLA
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTeaser;