import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '₹4,999',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: [
        '1-10 users',
        'Pipeline CRM & proposals',
        'Basic project management',
        'Time tracking',
        'GST-ready invoicing',
        'Email support',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Growth',
      price: '₹14,999',
      period: '/month',
      description: 'For growing agencies with complex needs',
      features: [
        '11-50 users',
        'Everything in Starter',
        'Resource planning',
        'Client portal',
        'Advanced reports',
        'Priority support',
        'Custom integrations',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Agency Pro',
      price: 'Custom',
      period: '',
      description: 'Enterprise-grade for large agencies',
      features: [
        '50+ users',
        'Everything in Growth',
        'Multi-brand support',
        'Advanced P&L analytics',
        'Dedicated account manager',
        'Custom workflows',
        'API access',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your agency size. All plans include 14-day free trial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-gray-200 shadow-lg'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    tier.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm ${
                    tier.popular ? 'text-white/80' : 'text-gray-600'
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-4xl font-bold ${
                      tier.popular ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-lg ${
                      tier.popular ? 'text-white/80' : 'text-gray-600'
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold mb-6 flex items-center justify-center gap-2 transition-colors ${
                  tier.popular
                    ? 'bg-white text-blue-500 hover:bg-gray-100'
                    : 'bg-blue-500 text-white hover:bg-blue-700'
                }`}
              >
                {tier.cta}
                <ArrowRight size={18} />
              </motion.button>

              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`flex-shrink-0 mt-0.5 ${
                        tier.popular ? 'text-white' : 'text-green-600'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.popular ? 'text-white/90' : 'text-gray-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            All plans include GST. Need a custom solution?{' '}
            <a href="#contact" className="text-blue-500 font-semibold hover:underline">
              Contact our sales team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
