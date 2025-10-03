import { motion } from 'framer-motion';
import { CreditCard, Building2, FileText, Smartphone, Zap, Database } from 'lucide-react';

export default function Integrations() {
  const integrations = [
    { icon: CreditCard, name: 'Razorpay', category: 'Payments' },
    { icon: CreditCard, name: 'PayU', category: 'Payments' },
    { icon: Smartphone, name: 'UPI', category: 'Payments' },
    { icon: Building2, name: 'Bank APIs', category: 'Banking' },
    { icon: FileText, name: 'Tally', category: 'Accounting' },
    { icon: FileText, name: 'Zoho Books', category: 'Accounting' },
    { icon: Zap, name: 'NextWeb Finance', category: 'Internal' },
    { icon: Database, name: 'GST Portal', category: 'Compliance' },
  ];

  return (
    <section id="integrations" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Seamless Integrations
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto">
            Connect with your existing payment gateways, banks, and accounting software.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <integration.icon className="h-10 w-10 lg:h-12 lg:w-12 text-blue-500 mx-auto mb-3" />
              <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
                {integration.name}
              </h3>
              <p className="text-xs lg:text-sm text-gray-700">{integration.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
