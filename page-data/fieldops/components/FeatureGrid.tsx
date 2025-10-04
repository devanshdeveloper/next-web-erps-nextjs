import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Route, 
  Smartphone, 
  Camera, 
  Package, 
  Clock, 
  MapPin, 
  MessageSquare, 
  CreditCard, 
  BarChart3 
} from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Job Scheduling & Dispatch',
      description: 'Smart auto-dispatch rules, drag-drop scheduling, and skill-based technician matching.',
      badge: 'Core'
    },
    {
      icon: Route,
      title: 'Route Optimization & ETA',
      description: 'Multi-stop routing with real-time traffic data and accurate customer ETAs.',
      badge: 'Popular'
    },
    {
      icon: Smartphone,
      title: 'Technician Mobile App',
      description: 'Offline-first mobile app with job notes, checklists, and digital forms.',
      badge: 'Essential'
    },
    {
      icon: Camera,
      title: 'Proof of Service',
      description: 'Photos, OTP verification, digital signatures, and instant invoice generation.',
      badge: 'Premium'
    },
    {
      icon: Package,
      title: 'Spare Parts Management',
      description: 'Real-time inventory tracking, parts consumption, and automatic restocking alerts.',
      badge: null
    },
    {
      icon: Clock,
      title: 'SLA & Escalations',
      description: 'Automated SLA monitoring, escalation workflows, and performance alerts.',
      badge: null
    },
    {
      icon: MapPin,
      title: 'Live Location & Geofencing',
      description: 'Real-time GPS tracking, geofenced job verification, and location history.',
      badge: null
    },
    {
      icon: MessageSquare,
      title: 'Customer Notifications',
      description: 'WhatsApp templates, SMS reminders, and automated status updates.',
      badge: 'Popular'
    },
    {
      icon: CreditCard,
      title: 'Billing & Invoicing',
      description: 'Seamless integration with NextWeb BillDesk and automated payment tracking.',
      badge: null
    },
    {
      icon: BarChart3,
      title: 'Reporting & KPIs',
      description: 'First-time fix rates, utilization metrics, MTTR analytics, and SLA dashboards.',
      badge: null
    }
  ];

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case 'Core': return 'bg-blue-500 text-white';
      case 'Popular': return 'bg-orange-500 text-white';
      case 'Essential': return 'bg-teal-500 text-white';
      case 'Premium': return 'bg-purple-500 text-white';
      default: return '';
    }
  };

  return (
    <section id="capabilities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Complete field service management platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to run efficient field operations — from job scheduling 
            to payment collection, all in one integrated platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  {feature.badge && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(feature.badge)}`}>
                      {feature.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#demo-form"
            className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-500/90 transition-colors duration-200"
          >
            See All Features in Action
            <BarChart3 className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;