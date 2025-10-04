import React from 'react';
import { motion } from 'framer-motion';

const Integrations = () => {
  const integrations = [
    {
      category: 'Accounting & Finance',
      items: [
        { name: 'NextWeb BillDesk', logo: 'NB' },
        { name: 'Tally', logo: 'T' },
        { name: 'QuickBooks', logo: 'QB' },
        { name: 'Zoho Books', logo: 'ZB' },
      ],
    },
    {
      category: 'Biometric & Attendance',
      items: [
        { name: 'Matrix', logo: 'M' },
        { name: 'eSSL', logo: 'eS' },
        { name: 'Android Apps', logo: 'A' },
        { name: 'Face Recognition', logo: 'FR' },
      ],
    },
    {
      category: 'Banking & Payments',
      items: [
        { name: 'HDFC Bank', logo: 'HD' },
        { name: 'ICICI Bank', logo: 'IC' },
        { name: 'SBI', logo: 'SB' },
        { name: 'Axis Bank', logo: 'AX' },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Integrates with your existing systems
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect seamlessly with accounting software, biometric devices, banks, and more.
          </motion.p>
        </div>

        <div className="space-y-12">
          {integrations.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:shadow-md transition-shadow">
                      <span className="font-bold text-lg text-blue-500">{item.logo}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">{item.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration CTA */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Need a custom integration?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Our team can help you connect NextWeb People with any system through our API. 
            Get dedicated integration support for your business needs.
          </p>
          <button className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors">
            Discuss Integration
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;