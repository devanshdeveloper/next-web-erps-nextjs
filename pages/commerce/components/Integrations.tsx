import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Truck, Calculator, Globe, Smartphone, BarChart3 } from 'lucide-react';

const Integrations: React.FC = () => {
  const integrationCategories = [
    {
      title: "Payment Gateways",
      icon: <CreditCard className="text-green-600" size={32} />,
      partners: ["Razorpay", "PayU", "Paytm", "Cashfree", "Instamojo", "CCAvenue"],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Shipping Partners", 
      icon: <Truck className="text-blue-600" size={32} />,
      partners: ["Delhivery", "Blue Dart", "DTDC", "Xpressbees", "Ecom Express", "India Post"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Marketplaces",
      icon: <Globe className="text-orange-500" size={32} />,
      partners: ["Amazon", "Flipkart", "Myntra", "Meesho", "JioMart", "Paytm Mall"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Accounting Tools",
      icon: <Calculator className="text-purple-600" size={32} />,
      partners: ["Tally", "Zoho Books", "QuickBooks", "Cleartax", "BUSY", "Marg"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Social Commerce",
      icon: <Smartphone className="text-pink-600" size={32} />,
      partners: ["WhatsApp Business", "Facebook Shop", "Instagram Shopping", "YouTube Shopping"],
      color: "bg-pink-50 border-pink-200"
    },
    {
      title: "Analytics & Marketing",
      icon: <BarChart3 className="text-indigo-600" size={32} />,
      partners: ["Google Analytics", "Facebook Pixel", "Google Ads", "Mailchimp", "WebEngage"],
      color: "bg-indigo-50 border-indigo-200"
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
            Seamless <span className="text-blue-500">integrations</span> with your favorite tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with the tools you already use. From payments to shipping, we integrate with India's leading service providers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${category.color} border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.partners.map((partner, partnerIndex) => (
                  <div
                    key={partnerIndex}
                    className="bg-white rounded-lg p-3 text-center text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a custom integration?
            </h3>
            <p className="text-gray-600 mb-6">
              Our API-first platform makes it easy to connect with any service. Get help from our technical team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View API Documentation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;