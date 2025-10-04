import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Bell, 
  MessageSquare, 
  CreditCard, 
  Package, 
  UserCheck, 
  Gift,
  BarChart3,
  Smartphone,
  Building2,
  Clock
} from 'lucide-react';
import { animateFeatures } from '../lib/gsap-init';

const Features = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      animateFeatures();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "Smart Booking System",
      description: "Online & walk-in appointments with real-time availability. Prevent double bookings and optimize schedules.",
      color: "blue-500"
    },
    {
      icon: Users,
      title: "Staff & Shift Management",
      description: "Manage stylist schedules, track performance, and optimize staff allocation across services.",
      color: "pink-500"
    },
    {
      icon: Clock,
      title: "Waitlists & Calendar Sync",
      description: "Automatic waitlist management and seamless integration with Google Calendar and other scheduling apps.",
      color: "orange-500"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & SMS Reminders",
      description: "Automated appointment reminders via WhatsApp and SMS to reduce no-shows by up to 80%.",
      color: "blue-500"
    },
    {
      icon: CreditCard,
      title: "GST-Compliant POS",
      description: "Complete billing system with GST compliance, multiple payment methods, and automatic receipt generation.",
      color: "pink-500"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track products, retail items, and supplies. Get alerts for low stock and manage suppliers efficiently.",
      color: "orange-500"
    },
    {
      icon: UserCheck,
      title: "Client Profiles & History",
      description: "Detailed client records with service history, preferences, and notes for personalized experiences.",
      color: "blue-500"
    },
    {
      icon: Gift,
      title: "Loyalty & Packages",
      description: "Built-in loyalty programs, service packages, and membership plans to increase client retention.",
      color: "pink-500"
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Revenue reports, stylist performance metrics, and insights to grow your salon business.",
      color: "orange-500"
    },
    {
      icon: Building2,
      title: "Multi-Location Support",
      description: "Manage multiple salon locations from one dashboard with centralized reporting and control.",
      color: "blue-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Dedicated apps for stylists and clients with booking, notifications, and service management.",
      color: "pink-500"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Intelligent alerts for appointments, payments, inventory, and important business events.",
      color: "orange-500"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue-500':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'pink-500':
        return 'bg-pink-500/10 text-pink-500 border-pink-500/20';
      case 'orange-500':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      default:
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4" />
            <span>Complete Solution</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            Everything your salon needs in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
              one platform
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From appointment booking to inventory management, we've got every aspect of your salon business covered
          </p>
        </motion.div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-slate-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 border ${getColorClasses(feature.color)} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-slate-900 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 rounded-3xl p-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                Ready to transform your salon?
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join thousands of salon owners who have streamlined their operations with SalonHub
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-500/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-500 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;