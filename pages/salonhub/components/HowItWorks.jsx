import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Scissors, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book",
      subtitle: "Easy Scheduling",
      description: "Clients book online or walk-in. Automatic confirmations sent via WhatsApp. Staff gets instant notifications.",
      features: ["Online booking portal", "Walk-in management", "WhatsApp confirmations", "Calendar sync"]
    },
    {
      icon: Scissors,
      title: "Serve",
      subtitle: "Seamless Service",
      description: "Access client history and preferences. Process payments instantly. Update inventory automatically.",
      features: ["Client history access", "POS billing", "Inventory updates", "Service notes"]
    },
    {
      icon: Heart,
      title: "Retain",
      subtitle: "Customer Loyalty",
      description: "Automated follow-ups and loyalty rewards. Collect reviews and feedback. Book next appointment.",
      features: ["Follow-up messages", "Loyalty points", "Review requests", "Rebooking prompts"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ArrowRight className="w-4 h-4" />
            <span>Simple Process</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            How SalonHub works
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Three simple steps to transform your salon operations and create delighted customers
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Card */}
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue/10 to-pink-500/10 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-blue-500" />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <div className="text-pink-500 font-semibold mb-4">
                      {step.subtitle}
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center justify-center space-x-2 text-sm text-slate-600"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <motion.div
                      className="w-8 h-8 bg-white rounded-full border-2 border-pink-500 flex items-center justify-center shadow-lg"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4 text-pink-500" />
                    </motion.div>
                  </div>
                )}

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <motion.div
                      className="w-8 h-8 bg-pink-500/10 rounded-full flex items-center justify-center"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4 text-pink-500 rotate-90" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-4">
            See it in action
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Watch how SalonHub can transform your daily operations and boost customer satisfaction
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-shadow duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Live Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;