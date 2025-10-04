import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Calendar, 
  Smartphone, 
  RefreshCw, 
  BarChart3, 
  Shield,
  QrCode,
  AlertCircle
} from 'lucide-react';
import { gsap } from '../lib/gsap-init';

const FeatureGrid = ({ onOpenDemoForm }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".feature-card", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Building2,
      title: "Multi-warehouse Management",
      description: "Track inventory across unlimited warehouses, stores, and locations with real-time visibility.",
      tag: "Core"
    },
    {
      icon: Calendar,
      title: "Batch & Expiry Tracking",
      description: "FIFO/LIFO management with automatic expiry alerts to minimize waste and ensure compliance.",
      tag: "Essential"
    },
    {
      icon: Smartphone,
      title: "Mobile Barcode Scanning",
      description: "Android-compatible barcode scanning for quick receiving, transfers, and cycle counts.",
      tag: "Mobile"
    },
    {
      icon: RefreshCw,
      title: "Automated Stock Transfers",
      description: "Seamless stock transfers between locations with approval workflows and tracking.",
      tag: "Automation"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboards, inventory reports, and insights to optimize stock levels and reduce costs.",
      tag: "Analytics"
    },
    {
      icon: Shield,
      title: "GST-Ready Stock Valuation",
      description: "Automated GST tagging, stock valuation reports, and compliance-ready documentation.",
      tag: "Compliance"
    },
    {
      icon: QrCode,
      title: "Serial & IMEI Tracking",
      description: "Track individual items with serial numbers and IMEI for electronics and high-value goods.",
      tag: "Advanced"
    },
    {
      icon: AlertCircle,
      title: "Smart Reorder Points",
      description: "Automated purchase order triggers based on reorder points, lead times, and demand patterns.",
      tag: "Smart"
    }
  ];

  const getTagColor = (tag) => {
    const colors = {
      Core: "bg-blue-500 text-white",
      Essential: "bg-green-500 text-white",
      Mobile: "bg-orange-500 text-white",
      Automation: "bg-purple-500 text-white",
      Analytics: "bg-indigo-500 text-white",
      Compliance: "bg-emerald-500 text-white",
      Advanced: "bg-cyan-500 text-white",
      Smart: "bg-pink-500 text-white"
    };
    return colors[tag] || "bg-gray-500 text-white";
  };

  return (
    <section id="capabilities" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
            Complete Inventory Control, <span className="text-blue-500">Built for India</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature designed for Indian SMBs — from GST compliance to mobile barcode scanning on Android devices.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="feature-card bg-white border border-gray-200 p-6 rounded-xl hover:border-blue-500/20 transition-all duration-300 group"
            >
              {/* Tag */}
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mb-4 ${getTagColor(feature.tag)}`}>
                {feature.tag}
              </div>
              
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 bg-gray-50 rounded-lg mb-4 group-hover:bg-blue-500/5 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-blue-500" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-500 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Inventory Management?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              See how these features work together to give you complete control over your inventory operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenDemoForm}
                className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-200"
              >
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors duration-200"
              >
                See How It Works
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;