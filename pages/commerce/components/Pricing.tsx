import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PricingCardProps {
  tier: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  onCtaClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  tier, 
  price, 
  period,
  description, 
  features, 
  popular = false, 
  cta,
  onCtaClick 
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
        popular 
          ? 'border-orange-500 shadow-xl scale-105' 
          : 'border-gray-200 hover:border-blue-500 shadow-lg'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Star size={16} />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-2">{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onCtaClick}
        className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
          popular
            ? 'bg-orange-500 text-white hover:bg-orange-600'
            : 'bg-blue-500 text-white hover:bg-blue-700'
        }`}
      >
        <span>{cta}</span>
        <ArrowRight size={20} />
      </motion.button>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const handleCtaClick = () => {
    // This would open the demo modal or redirect to contact
    console.log('CTA clicked');
  };

  const pricingPlans = [
    {
      tier: "Starter",
      price: "₹999",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 100 products",
        "1 sales channel",
        "Basic inventory management",
        "GST invoicing",
        "Email support",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      onCtaClick: handleCtaClick
    },
    {
      tier: "Growth",
      price: "₹2,999",
      period: "/month", 
      description: "Ideal for growing businesses with multiple channels",
      features: [
        "Up to 1,000 products",
        "5 sales channels",
        "Advanced inventory control",
        "Automated workflows",
        "Analytics & reports",
        "Priority support",
        "API access",
        "Multi-location inventory"
      ],
      popular: true,
      cta: "Start Free Trial",
      onCtaClick: handleCtaClick
    },
    {
      tier: "Enterprise",
      price: "₹9,999",
      period: "/month",
      description: "Complete solution for large businesses",
      features: [
        "Unlimited products",
        "Unlimited sales channels",
        "Advanced automation",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom reports",
        "White-label options"
      ],
      cta: "Contact Sales",
      onCtaClick: handleCtaClick
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, transparent <span className="text-blue-500">pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your business size. Start with a 14-day free trial, no credit card required.
          </p>
          
          <div className="inline-flex bg-white p-2 rounded-lg shadow-sm">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 text-gray-600 hover:text-gray-900 font-medium">
              Yearly (20% off)
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All plans include
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🔒</div>
                <div className="font-medium text-gray-900">Secure Hosting</div>
              </div>
              <div>
                <div className="text-2xl mb-2">📱</div>
                <div className="font-medium text-gray-900">Mobile Apps</div>
              </div>
              <div>
                <div className="text-2xl mb-2">🌍</div>
                <div className="font-medium text-gray-900">Global CDN</div>
              </div>
              <div>
                <div className="text-2xl mb-2">📊</div>
                <div className="font-medium text-gray-900">Basic Analytics</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;