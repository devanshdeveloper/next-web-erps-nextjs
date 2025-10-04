import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { initScrollAnimation } from '../lib/gsap-init';

const plans = [
  {
    name: 'Starter',
    tagline: 'For small teams',
    features: ['Up to 3 agents', 'Email & chat support', 'Basic ticketing', 'Knowledge base', '30-day ticket history'],
    highlight: false,
  },
  {
    name: 'Growth',
    tagline: 'For growing teams',
    features: [
      'Up to 10 agents',
      'Multi-channel (Email, WhatsApp, chat)',
      'SLA management',
      'Automation & macros',
      'Integrations',
      'Advanced reporting',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For large teams',
    features: [
      'Unlimited agents',
      'All channels + phone',
      'Custom SLA rules',
      'API access',
      'Dedicated support',
      'Custom integrations',
    ],
    highlight: false,
  },
];

export default function PricingTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      initScrollAnimation(sectionRef.current, {
        y: 40,
        duration: 0.7,
      });
    }
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your team size and support needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-lg p-8 ${
                plan.highlight
                  ? 'bg-blue-500 text-white shadow-2xl scale-105 border-4 border-orange'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {plan.highlight && (
                <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  POPULAR
                </div>
              )}
              <h3 className={`font-display font-bold text-2xl mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/80' : 'text-gray-600'}`}>{plan.tagline}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-cyan' : 'text-blue'}`} />
                    <span className={`text-sm ${plan.highlight ? 'text-white' : 'text-gray-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-md font-semibold transition-all ${
                  plan.highlight
                    ? 'bg-orange-500 text-white hover:bg-orange-500/90'
                    : 'bg-blue-500 text-white hover:bg-blue-500/90'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-block text-blue-500 font-semibold hover:underline">
            View detailed pricing →
          </a>
        </div>
      </div>
    </section>
  );
}
