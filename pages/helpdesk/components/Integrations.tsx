import { useEffect, useRef } from 'react';
import { CreditCard, Package, ShoppingCart, Users, MessageCircle, Slack, Webhook, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { initScrollAnimation } from '../lib/gsap-init';

const integrations = [
  {
    icon: CreditCard,
    name: 'NextWeb BillDesk',
    description: 'Payment & refund triggers',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Package,
    name: 'Inventory',
    description: 'Stock & order lookup',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: ShoppingCart,
    name: 'Commerce',
    description: 'Order history & returns',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Users,
    name: 'CRM',
    description: 'Customer data sync',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: MessageCircle,
    name: 'WhatsApp API',
    description: 'Business messaging',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Slack,
    name: 'Slack',
    description: 'Team notifications',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Webhook,
    name: 'Webhooks',
    description: 'Custom integrations',
    color: 'bg-gray-100 text-gray-600',
  },
  {
    icon: Database,
    name: 'API Access',
    description: 'Full REST API',
    color: 'bg-cyan-100 text-cyan-600',
  },
];

export default function Integrations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      initScrollAnimation(sectionRef.current, {
        y: 40,
        duration: 0.7,
      });
    }
  }, []);

  return (
    <section id="integrations" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Integrates with your stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect support to billing, inventory, commerce, and communication tools
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-all text-center"
              >
                <div className={`w-14 h-14 ${integration.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">{integration.name}</h3>
                <p className="text-xs text-gray-600">{integration.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom integration?</p>
          <a
            href="#contact"
            className="inline-block border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition-all"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
