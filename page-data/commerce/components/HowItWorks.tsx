import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ShoppingCart, Truck, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Plus className="text-blue-500" size={32} />,
      title: "Add Products",
      description: "Import your product catalog with images, descriptions, and pricing. Set up inventory levels and variants.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <ShoppingCart className="text-orange-500" size={32} />,
      title: "Accept Orders", 
      description: "Receive orders from your website, marketplaces, and social channels. All orders sync to one dashboard.",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Truck className="text-green-600" size={32} />,
      title: "Fulfill & Ship",
      description: "Generate invoices, pack orders, and ship with integrated logistics partners. Track everything in real-time.",
      color: "bg-green-50 border-green-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How it works — <span className="text-blue-500">3 simple steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your online store running in no time with our streamlined workflow
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-24 left-1/4 right-1/4 h-px bg-gradient-to-r from-blue-500 via-orange-500 to-green-600 opacity-30"></div>
            
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className={`${step.color} border rounded-2xl p-8 text-center relative`}>
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Arrow for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <ArrowRight size={24} />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-blue-500 rounded-2xl p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to streamline your e-commerce operations?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of Indian SMBs who have simplified their online business with NextWeb Commerce.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-200"
              >
                Start Your Free Trial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;