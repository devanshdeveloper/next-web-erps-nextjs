import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingProps {
  onRequestDemo: () => void;
}

export default function Pricing({ onRequestDemo }: PricingProps) {
  const plans = [
    {
      name: 'Starter',
      price: '₹999',
      period: '/month',
      description: 'Perfect for freelancers and small merchants',
      features: [
        'Up to 100 invoices/month',
        'GST-compliant invoicing',
        'Payment links (UPI, cards)',
        'Basic reconciliation',
        'Email support',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Business',
      price: '₹2,999',
      period: '/month',
      description: 'For growing SMBs with multiple branches',
      features: [
        'Unlimited invoices',
        'E-invoicing (IRN) support',
        'Advanced auto-reconciliation',
        'Multi-branch support',
        'Recurring billing',
        'Custom PDF templates',
        'Priority support',
      ],
      cta: 'Request Demo',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Multi-entity setups with dedicated SLA',
      features: [
        'Everything in Business',
        'Multiple GST entities',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options',
        '99.9% uptime SLA',
        'On-premise deployment',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-12 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include GST compliance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`bg-white rounded-xl p-6 lg:p-8 ${
                plan.highlighted
                  ? 'ring-2 ring-blue-500 shadow-xl scale-105'
                  : 'shadow-md'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl lg:text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-700">{plan.period}</span>
              </div>
              <p className="text-sm lg:text-base text-gray-700 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm lg:text-base text-gray-900">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onRequestDemo}
                className={`w-full py-3 rounded-md font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-orange-500 text-white hover:bg-opacity-90 shadow-md'
                    : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-700 mt-8"
        >
          All prices exclude GST. 14-day free trial on all plans. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
