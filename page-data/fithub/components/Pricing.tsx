import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '₹2,999',
    period: '/month',
    description: 'Perfect for single-location studios',
    features: [
      'Up to 200 active members',
      'Unlimited class scheduling',
      'Basic trainer management',
      'POS & UPI payments',
      'GST-compliant receipts',
      'WhatsApp reminders',
      'Email support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '₹7,999',
    period: '/month',
    description: 'For growing multi-studio operations',
    features: [
      'Up to 1,000 active members',
      'Multi-location dashboard',
      'Advanced trainer payroll',
      'Access control integration',
      'Custom packages & add-ons',
      'SMS + WhatsApp + Email',
      'Priority support',
      'Revenue analytics',
    ],
    cta: 'Request Demo',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Franchise & enterprise solutions',
    features: [
      'Unlimited members',
      'Unlimited locations',
      'Dedicated account manager',
      'Custom integrations',
      'API access',
      'White-label options',
      'SLA guarantee',
      'On-site training',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include core features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 ${
                tier.highlighted
                  ? 'bg-orange-500 border-2 border-orange-500 shadow-2xl scale-105'
                  : 'bg-gray-800 border border-gray-700'
              }`}
            >
              {tier.highlighted && (
                <div className="bg-white text-orange-500 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-300 mb-6">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-gray-300">{tier.period}</span>
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                  tier.highlighted
                    ? 'bg-white text-orange-500 hover:bg-gray-100'
                    : 'bg-blue-500 text-white hover:bg-blue-500/80'
                }`}
              >
                {tier.cta}
              </button>
              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
