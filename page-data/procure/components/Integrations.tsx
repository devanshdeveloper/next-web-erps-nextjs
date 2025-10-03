import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
let ScrollTrigger: any;

const Integrations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
      }
      if (sectionRef.current) {
        gsap.fromTo(
          ".integration-card",
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    })();
  }, []);

  const integrations = [
    {
      name: "NextWeb Inventory",
      description: "Automatic reorder triggers",
      category: "Core",
      color: "bg-blue-500",
      icon: "📦",
    },
    {
      name: "NextWeb Finance",
      description: "Invoice & payment reconciliation",
      category: "Core",
      color: "bg-green-500",
      icon: "💰",
    },
    {
      name: "BillDesk",
      description: "Payment processing",
      category: "Payments",
      color: "bg-purple-500",
      icon: "💳",
    },
    {
      name: "Tally",
      description: "Accounting sync",
      category: "Accounting",
      color: "bg-orange-500",
      icon: "📊",
    },
    {
      name: "QuickBooks",
      description: "Financial data sync",
      category: "Accounting",
      color: "bg-blue-600",
      icon: "📈",
    },
    {
      name: "Zoho Books",
      description: "Accounting integration",
      category: "Accounting",
      color: "bg-red-500",
      icon: "📋",
    },
    {
      name: "SMS Gateway",
      description: "Vendor notifications",
      category: "Communication",
      color: "bg-teal-500",
      icon: "📱",
    },
    {
      name: "Email API",
      description: "PO & RFQ sending",
      category: "Communication",
      color: "bg-indigo-500",
      icon: "📧",
    },
    {
      name: "GST Filing",
      description: "Compliance reports",
      category: "Compliance",
      color: "bg-yellow-500",
      icon: "🏛️",
    },
  ];

  const categories = [
    "All",
    "Core",
    "Accounting",
    "Payments",
    "Communication",
    "Compliance",
  ];

  return (
    <section id="integrations" ref={sectionRef} className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seamless integrations with your existing tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NextWeb Procure works with your favorite business tools and
            accounting software
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors duration-200 font-medium"
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="integration-card bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 ${integration.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {integration.icon}
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  {integration.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors duration-300">
                {integration.name}
              </h3>
              <p className="text-gray-600 text-sm">{integration.description}</p>
            </motion.div>
          ))}
        </div>

        {/* API Information */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 border border-gray-200"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a custom integration?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Our REST API and webhooks make it easy to connect NextWeb Procure
              with any system. Comprehensive documentation and developer support
              included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200"
              >
                View API Docs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md font-semibold transition-all duration-200"
              >
                Contact Developer Support
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
