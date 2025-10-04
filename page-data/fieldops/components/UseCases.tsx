import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Wifi, 
  Wind, 
  Droplets, 
  Truck, 
  Settings 
} from 'lucide-react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: Wrench,
      title: 'Appliance Service',
      description: 'AC repair, washing machine service, refrigerator maintenance — track parts, manage warranties, and ensure customer satisfaction.',
      benefits: ['25% faster repairs', 'Real-time parts tracking', 'Digital service records']
    },
    {
      icon: Wifi,
      title: 'Telecom Installation',
      description: 'Broadband setup, cable installation, network troubleshooting — optimize routes and improve first-time fix rates.',
      benefits: ['Route optimization', 'OTP verification', 'Installation proof']
    },
    {
      icon: Wind,
      title: 'HVAC Maintenance',
      description: 'Regular maintenance contracts, emergency repairs, seasonal servicing — manage recurring schedules and SLAs.',
      benefits: ['SLA monitoring', 'Preventive scheduling', 'Parts consumption']
    },
    {
      icon: Droplets,
      title: 'Plumbing Services',
      description: 'Emergency repairs, installation work, maintenance contracts — dispatch nearest available plumber with required tools.',
      benefits: ['Emergency dispatch', 'Live location sharing', 'Digital estimates']
    },
    {
      icon: Truck,
      title: 'Delivery & Logistics',
      description: 'Last-mile delivery, installation services, pickup & returns — optimize routes and provide accurate delivery windows.',
      benefits: ['Delivery tracking', 'Proof of delivery', 'Route efficiency']
    },
    {
      icon: Settings,
      title: 'Multi-Service Operations',
      description: 'Companies offering multiple services — unified platform to manage different service types with specialized workflows.',
      benefits: ['Unified dashboard', 'Service-specific forms', 'Cross-selling opportunities']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Built for every type of field service
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you run appliance repair, telecom installations, or multi-service operations, 
            NextWeb FieldOps adapts to your specific industry needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-gray-200"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-500" />
                </div>
                
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {useCase.description}
                </p>

                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-500 to-teal rounded-2xl p-8 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-poppins font-bold text-2xl mb-4">
                Join 500+ service businesses across India
              </h3>
              <p className="text-gray-100 mb-6">
                From single-city operations to multi-location service chains, 
                NextWeb FieldOps scales with your business growth.
              </p>
              <motion.a
                href="#demo-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-white text-blue-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Free Trial
              </motion.a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: '15K+', label: 'Jobs completed daily' },
                { metric: '2K+', label: 'Active technicians' },
                { metric: '98%', label: 'Uptime guarantee' },
                { metric: '24/7', label: 'Support available' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="font-poppins font-bold text-2xl mb-1">{stat.metric}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;