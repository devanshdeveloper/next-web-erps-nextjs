import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Zap } from 'lucide-react';

const PricingTeaser = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for single stylists",
      price: "₹999",
      period: "per month",
      description: "Everything you need to get started",
      features: [
        "Up to 100 appointments/month",
        "1 staff member",
        "Basic inventory tracking",
        "WhatsApp notifications",
        "POS billing with GST",
        "Client profiles",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "blue-500"
    },
    {
      name: "Growth", 
      subtitle: "For growing salons",
      price: "₹1,999",
      period: "per month",
      description: "Scale your business with advanced features",
      features: [
        "Unlimited appointments",
        "Up to 5 staff members",
        "Advanced inventory management",
        "Loyalty programs",
        "Analytics & reports", 
        "Multi-location support",
        "Priority support",
        "Custom branding"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "pink-500"
    },
    {
      name: "Enterprise",
      subtitle: "For salon chains",
      price: "Custom",
      period: "pricing",
      description: "Complete solution for franchise operations",
      features: [
        "Everything in Growth",
        "Unlimited staff & locations",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced analytics",
        "Custom training",
        "24/7 phone support",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "orange-500"
    }
  ];

  const getColorClasses = (color, popular = false) => {
    if (popular) {
      return {
        card: "bg-gradient-to-br from-pink-500 to-pink-500/80 text-white border-pink-500",
        price: "text-white",
        feature: "text-pink-500/90",
        cta: "bg-white text-pink-500 hover:bg-gray-50"
      };
    }
    
    switch (color) {
      case 'blue-500':
        return {
          card: "bg-white border-slate-200 hover:border-blue/50",
          price: "text-blue-500", 
          feature: "text-slate-600",
          cta: "bg-blue-500 text-white hover:bg-blue/90"
        };
      case 'orange-500':
        return {
          card: "bg-white border-slate-200 hover:border-orange-500/50",
          price: "text-orange-500",
          feature: "text-slate-600", 
          cta: "bg-orange-500 text-white hover:bg-orange-500/90"
        };
      default:
        return {
          card: "bg-white border-slate-200",
          price: "text-slate-900",
          feature: "text-slate-600",
          cta: "bg-slate-900 text-white hover:bg-slate-800"
        };
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue/10 text-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Simple Pricing</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            Plans that grow{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
              with your salon
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your salon. All plans include a 14-day free trial with no setup fees.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>24/7 support</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.popular);
            
            return (
              <motion.div
                key={index}
                className={`relative rounded-3xl border-2 p-8 ${colors.card} ${
                  plan.popular ? 'scale-105 shadow-xl' : 'shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: plan.popular ? 0 : -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`font-poppins font-bold text-2xl mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.popular ? 'text-pink-500/90' : 'text-slate-600'}`}>
                    {plan.subtitle}
                  </p>
                  <div className="mb-2">
                    <span className={`text-5xl font-bold ${colors.price}`}>
                      {plan.price}
                    </span>
                    {plan.period !== 'pricing' && (
                      <span className={`text-lg ${plan.popular ? 'text-pink-500/80' : 'text-slate-600'}`}>
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${plan.popular ? 'text-pink-500/90' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? 'bg-white/20' : 'bg-green-100'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-green-600'}`} />
                      </div>
                      <span className={colors.feature}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-colors duration-200 ${colors.cta} flex items-center justify-center space-x-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-12">
            <h3 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Book a free consultation with our salon experts. We'll help you choose the best plan and get you set up for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue/90 transition-colors duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-500 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Compare All Features
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTeaser;