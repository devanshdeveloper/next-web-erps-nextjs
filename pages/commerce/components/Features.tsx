import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Package, Calculator, BarChart3, Repeat, Users, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Globe className="text-blue-500" size={32} />,
      title: "Multi-channel Sync",
      description: "Sell on your website, marketplaces, and social media. Inventory and orders sync automatically across all channels."
    },
    {
      icon: <ShoppingCart className="text-orange-500" size={32} />,
      title: "Order Management",
      description: "Track orders from placement to delivery. Handle returns, exchanges, and refunds with ease."
    },
    {
      icon: <Package className="text-green-600" size={32} />,
      title: "Inventory Control",
      description: "Real-time stock tracking, low-stock alerts, and automated reorder points keep you stocked and ready."
    },
    {
      icon: <Calculator className="text-purple-600" size={32} />,
      title: "GST & Invoicing",
      description: "Generate GST-compliant invoices automatically. Handle all tax calculations and filing requirements."
    },
    {
      icon: <BarChart3 className="text-blue-600" size={32} />,
      title: "Business Analytics",
      description: "Detailed reports on sales, inventory, and customer behavior to make data-driven decisions."
    },
    {
      icon: <Repeat className="text-indigo-600" size={32} />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks like order processing, inventory updates, and customer notifications."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="features" className="features-section py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to run your <span className="text-blue-500">e-commerce business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From product management to order fulfillment, NextWeb Commerce provides all the tools Indian SMBs need to succeed online.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Plus many more features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Users className="text-blue-500 mb-3" size={32} />
              <span className="font-medium text-gray-900">Customer Management</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="text-green-600 mb-3" size={32} />
              <span className="font-medium text-gray-900">Secure Payments</span>
            </div>
            <div className="flex flex-col items-center">
              <Package className="text-orange-500 mb-3" size={32} />
              <span className="font-medium text-gray-900">Shipping Integration</span>
            </div>
            <div className="flex flex-col items-center">
              <BarChart3 className="text-purple-600 mb-3" size={32} />
              <span className="font-medium text-gray-900">Advanced Reports</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;