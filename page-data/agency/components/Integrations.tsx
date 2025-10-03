import { motion } from 'framer-motion';
import { Database, MessageSquare, Calendar, CreditCard, HardDrive, Calculator } from 'lucide-react';

export default function Integrations() {
  const integrations = [
    {
      icon: HardDrive,
      name: 'Google Drive',
      description: 'Sync files and documents',
    },
    {
      icon: MessageSquare,
      name: 'Slack',
      description: 'Team notifications',
    },
    {
      icon: Calendar,
      name: 'Google Calendar',
      description: 'Schedule sync',
    },
    {
      icon: Calculator,
      name: 'QuickBooks & Tally',
      description: 'Accounting integration',
    },
    {
      icon: CreditCard,
      name: 'Payment Gateways',
      description: 'Razorpay, Stripe, PayU',
    },
    {
      icon: Database,
      name: 'NextWeb Suite',
      description: 'Finance & BillDesk',
    },
  ];

  return (
    <section id="integrations" className="py-16 lg:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            Connects with your favorite tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate with the tools you already use to power your agency
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{integration.name}</h3>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Need a custom integration? Our API makes it easy.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:underline"
          >
            View API Documentation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
