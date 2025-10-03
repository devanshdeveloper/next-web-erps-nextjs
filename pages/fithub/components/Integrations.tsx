import { motion } from 'framer-motion';
import { CreditCard, MessageSquare, Shield, FileText } from 'lucide-react';

const integrations = [
  {
    icon: <CreditCard className="w-8 h-8" />,
    name: 'Payment Gateways',
    items: 'Razorpay, PayU, UPI, Cards',
    color: 'blue-500',
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    name: 'Communication',
    items: 'WhatsApp, SMS, Email',
    color: 'green',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    name: 'Access Control',
    items: 'RFID, QR, Turnstiles',
    color: 'orange-500',
  },
  {
    icon: <FileText className="w-8 h-8" />,
    name: 'Accounting',
    items: 'Tally, Zoho, NextWeb Finance',
    color: 'purple',
  },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Integrations that power your business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Seamlessly connect with the tools you already use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:border-blue-500 transition-all"
            >
              <div className="text-blue-500 mb-4 flex justify-center">{integration.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{integration.name}</h3>
              <p className="text-sm text-gray-600">{integration.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
