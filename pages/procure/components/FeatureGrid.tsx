import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, ChartBar as BarChart3, CircleCheck as CheckCircle, Package, RefreshCw, TrendingUp, Link, Shield } from 'lucide-react';
import { gsap } from 'gsap';
let ScrollTrigger: any;
const FeatureGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      if (typeof window === "undefined") return;
      ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      if (sectionRef.current) {
        gsap.fromTo('.feature-card-gsap',
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    })();
    }, []);
    
    const features = [
      {
      icon: FileText,
      title: "PO Creation & Templates",
      description: "Create single or mass POs with customizable templates. Auto-populate from inventory data.",
      tag: "Core"
    },
    {
      icon: Users,
      title: "Vendor Catalog & Onboarding",
      description: "Centralized vendor database with KYC attachments, ratings, and performance tracking.",
      tag: "Management"
    },
    {
      icon: BarChart3,
      title: "RFQ & Quote Comparison",
      description: "Send RFQs to multiple vendors and compare quotes side-by-side with smart recommendations.",
      tag: "Intelligence"
    },
    {
      icon: CheckCircle,
      title: "Approval Workflows",
      description: "Multi-level, rules-based approvals with automated routing and email notifications.",
      tag: "Automation"
    },
    {
      icon: Package,
      title: "GRN & 3-Way Matching",
      description: "Match PO-GRN-Invoice automatically to prevent payment errors and ensure accuracy.",
      tag: "Validation"
    },
    {
      icon: RefreshCw,
      title: "Auto PO Triggers",
      description: "Automatic PO generation based on reorder points from your inventory system.",
      tag: "Smart"
    },
    {
      icon: TrendingUp,
      title: "Supplier Performance",
      description: "Track delivery times, quality metrics, and vendor reliability with detailed dashboards.",
      tag: "Analytics"
    },
    {
      icon: Link,
      title: "ERP Integration",
      description: "Seamless integration with NextWeb modules, Tally, QuickBooks, and other systems.",
      tag: "Connected"
    },
    {
      icon: Shield,
      title: "GST-Ready Audit Logs",
      description: "Complete audit trails and GST-compliant purchase records for easy compliance.",
      tag: "Compliance"
    }
  ];

  const tagColors: { [key: string]: string } = {
    "Core": "bg-blue-100 text-blue-800",
    "Management": "bg-purple-100 text-purple-800",
    "Intelligence": "bg-green-100 text-green-800",
    "Automation": "bg-orange-100 text-orange-800",
    "Validation": "bg-teal-100 text-teal-800",
    "Smart": "bg-indigo-100 text-indigo-800",
    "Analytics": "bg-pink-100 text-pink-800",
    "Connected": "bg-yellow-100 text-yellow-800",
    "Compliance": "bg-gray-100 text-gray-800"
  };

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Complete procurement suite in one platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Every tool you need to streamline vendor management, reduce costs, and maintain compliance
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="feature-card-gsap feature-card bg-white rounded-2xl p-8 border border-gray-200 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue/10 rounded-xl group-hover:bg-blue/20 transition-colors duration-300">
                  <feature.icon className="h-7 w-7 text-blue-500" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[feature.tag]}`}>
                  {feature.tag}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-500 hover:bg-teal-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors duration-200"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;