import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onContactClick: () => void;
}

export default function Pricing({ onContactClick }: PricingProps) {
  const tiers = [
    {
      name: 'Starter',
      description: 'Perfect for small institutes',
      features: [
        'Up to 200 students',
        'Basic attendance & fees',
        'Parent SMS notifications',
        'Single campus',
        'Email support',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
    {
      name: 'Growth',
      description: 'For growing institutions',
      features: [
        'Up to 1,000 students',
        'Advanced reporting',
        'WhatsApp notifications',
        'Timetable & exams',
        'Priority support',
        'Mobile apps',
      ],
      cta: 'Contact Sales',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Multi-campus management',
      features: [
        'Unlimited students',
        'Multi-campus control',
        'Custom integrations',
        'Dedicated account manager',
        'Training & onboarding',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your institution. All plans include core features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                tier.popular ? 'border-2 border-orange-500 ring-4 ring-orange-100' : 'border border-gray-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onContactClick}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2 ${
                  tier.popular
                    ? 'bg-orange-500 text-white hover:bg-orange/90 focus:ring-orange-500 shadow-lg hover:shadow-xl'
                    : 'bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue'
                }`}
              >
                {tier.cta}
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Need a custom plan?{' '}
            <button onClick={onContactClick} className="text-blue-500 font-semibold hover:underline">
              Let's talk
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
