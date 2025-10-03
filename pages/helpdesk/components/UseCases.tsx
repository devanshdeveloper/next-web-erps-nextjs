import { useEffect, useRef } from 'react';
import { ShoppingBag, Scissors, Truck, Store } from 'lucide-react';
import { motion } from 'framer-motion';
import { initScrollAnimation } from '../lib/gsap-init';

const useCases = [
  {
    icon: ShoppingBag,
    title: 'E-commerce Sellers',
    description: 'Handle order inquiries, returns, and refunds faster with linked order context.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Scissors,
    title: 'Salons & Spas',
    description: 'Manage appointment questions, rescheduling, and service feedback seamlessly.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Truck,
    title: 'Logistics & Delivery',
    description: 'Track shipment queries and delivery issues with real-time ticket updates.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Store,
    title: 'Retail & Distributors',
    description: 'Support dealer networks with multi-channel ticketing and inventory checks.',
    color: 'from-green-500 to-green-600',
  },
];

export default function UseCases() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Built for Indian SMBs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`bg-gradient-to-br ${useCase.color} p-6 text-white`}>
                  <Icon className="w-12 h-12 mb-3" />
                  <h3 className="font-semibold text-lg">{useCase.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
