import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  CreditCard, 
  MessageCircle, 
  Map, 
  Smartphone, 
  Building,
  Zap,
  Globe
} from 'lucide-react';

const Integrations: React.FC = () => {
  const integrations = [
    {
      name: 'NextWeb Inventory',
      description: 'Seamlessly track parts consumption and auto-update stock levels',
      icon: Database,
      category: 'Core Integration',
      color: 'bg-blue-500'
    },
    {
      name: 'NextWeb BillDesk',
      description: 'Automated invoicing and payment collection with UPI support',
      icon: CreditCard,
      category: 'Billing & Payments',
      color: 'bg-teal-500'
    },
    {
      name: 'WhatsApp Business',
      description: 'Send job updates, ETAs, and invoices directly via WhatsApp',
      icon: MessageCircle,
      category: 'Communication',
      color: 'bg-green-500'
    },
    {
      name: 'Google Maps',
      description: 'Real-time routing, traffic data, and location services',
      icon: Map,
      category: 'Location Services',
      color: 'bg-red-500'
    },
    {
      name: 'Android SDK',
      description: 'Barcode scanning, camera, GPS, and offline capabilities',
      icon: Smartphone,
      category: 'Mobile Platform',
      color: 'bg-green-600'
    },
    {
      name: 'CRM/ERP Systems',
      description: 'Sync customer data and job history with existing systems',
      icon: Building,
      category: 'Enterprise',
      color: 'bg-purple-500'
    },
    {
      name: 'SMS Gateways',
      description: 'Multi-provider SMS integration for notifications and OTPs',
      icon: Zap,
      category: 'Communication',
      color: 'bg-orange-500'
    },
    {
      name: 'API Platform',
      description: 'REST APIs for custom integrations and third-party apps',
      icon: Globe,
      category: 'Developer Tools',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="integrations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Integrations & Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            NextWeb FieldOps connects with your existing tools and services. 
            Built for the Indian market with WhatsApp, UPI, and local service providers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${integration.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {integration.category}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {integration.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {integration.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-12"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-4">
                Quick & Easy Setup
              </h3>
              <p className="text-gray-600 mb-6">
                Our team handles the integration process. Most setups are completed 
                within 24-48 hours with minimal downtime.
              </p>
              <div className="space-y-3">
                {[
                  'API configuration and testing',
                  'Data migration and sync setup',
                  'User training and documentation'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['NextWeb Suite', 'WhatsApp', 'Google Maps', 'UPI Payments', 'SMS Gateway', 'CRM/ERP'].map((service) => (
                  <div key={service} className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="w-8 h-8 bg-blue/10 rounded-lg mx-auto mb-2"></div>
                    <span className="text-xs text-gray-600">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;