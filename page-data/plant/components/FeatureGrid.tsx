import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  GitBranch,
  Smartphone,
  BarChart3,
  Shield,
  Wrench,
  Package,
  TrendingUp,
  ClipboardCheck
} from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="text-blue-500" size={24} />,
      title: "Production Planning & Scheduling",
      description: "Gantt charts and finite capacity scheduling for optimal resource allocation",
      badge: "Core"
    },
    {
      icon: <GitBranch className="text-green-500" size={24} />,
      title: "BOM & Routing Management",
      description: "Multi-level BOMs with detailed routing and operation sequences",
      badge: "Essential"
    },
    {
      icon: <Smartphone className="text-orange-500" size={24} />,
      title: "Work Orders & Shopfloor Execution",
      description: "Mobile terminals for real-time work order tracking and updates",
      badge: "Mobile-First"
    },
    {
      icon: <BarChart3 className="text-purple-500" size={24} />,
      title: "MES Data Capture",
      description: "Barcode/RFID scanning, Android terminals, and basic IoT/PLC integration",
      badge: "Smart"
    },
    {
      icon: <Shield className="text-red-500" size={24} />,
      title: "Quality Management",
      description: "QC checks, NCRs, hold & release workflows with full traceability",
      badge: "Compliance"
    },
    {
      icon: <Wrench className="text-amber-500" size={24} />,
      title: "Maintenance Management",
      description: "Preventive maintenance scheduling and breakdown management",
      badge: "Preventive"
    },
    {
      icon: <Package className="text-indigo-500" size={24} />,
      title: "Inventory & Material Issue",
      description: "Kitting, batch/lot traceability, and material flow tracking",
      badge: "Traceability"
    },
    {
      icon: <TrendingUp className="text-green-500" size={24} />,
      title: "Capacity Planning & OEE",
      description: "Real-time OEE dashboard with capacity utilization insights",
      badge: "Analytics"
    },
    {
      icon: <ClipboardCheck className="text-blue-500" size={24} />,
      title: "Analytics & Reports",
      description: "Throughput, yield, scrap rates, and performance reporting",
      badge: "Insights"
    }
  ];

  return (
    <section id="capabilities" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Complete <span className="text-blue-500">Manufacturing Suite</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to manage your plant floor operations, from planning to dispatch
          </p>
        </motion.div>

        <div className="features-section grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="feature-card bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-slate-50 rounded-lg mr-3">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 text-lg">{feature.title}</h3>
                  </div>
                </div>
                <span className="bg-blue-500/10 text-blue-500 text-xs px-2 py-1 rounded-full font-medium">
                  {feature.badge}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;