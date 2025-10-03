import React from 'react';
import { motion } from 'framer-motion';
import { Store, Factory, UtensilsCrossed, ShoppingCart } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Store,
      title: "Retail Chains",
      description: "Multi-store inventory procurement, centralized vendor management, and consistent pricing across locations.",
      metrics: "50+ locations managed",
      color: "bg-blue-500"
    },
    {
      icon: Factory,
      title: "Small Manufacturers",
      description: "Raw material procurement, supplier quality tracking, and just-in-time inventory management.",
      metrics: "40% cost reduction",
      color: "bg-purple-500"
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurants & Hotels",
      description: "Fresh ingredient sourcing, menu costing, and supplier performance monitoring for consistency.",
      metrics: "60% faster ordering",
      color: "bg-green-500"
    },
    {
      icon: ShoppingCart,
      title: "FMCG Distributors",
      description: "High-volume procurement, multiple vendor coordination, and automated reorder management.",
      metrics: "1000+ SKUs handled",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by businesses across industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From retail chains to manufacturers, see how NextWeb Procure streamlines procurement workflows
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 ${useCase.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-500 transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-teal/10 text-teal-500 rounded-full text-sm font-medium">
                    {useCase.metrics}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-teal rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to transform your procurement process?
            </h3>
            <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
              Join hundreds of Indian businesses who've streamlined their supplier management with NextWeb Procure.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors duration-200"
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;