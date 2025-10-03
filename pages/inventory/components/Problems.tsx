import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, FileX, Layers } from 'lucide-react';
import { gsap } from '../lib/gsap-init';

const Problems = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".problem-card", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      icon: AlertTriangle,
      title: "Stock-outs & Lost Sales",
      description: "Manual tracking leads to unexpected stock-outs, disappointing customers and losing revenue."
    },
    {
      icon: TrendingDown,
      title: "Overstocking & Dead Inventory",
      description: "Without real-time visibility, you overstock slow-moving items, tying up working capital."
    },
    {
      icon: FileX,
      title: "Spreadsheet Chaos",
      description: "Multiple disconnected spreadsheets create errors, version conflicts, and wasted time."
    },
    {
      icon: Layers,
      title: "Multi-location Confusion",
      description: "Managing inventory across warehouses and stores without unified visibility is a nightmare."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
            Inventory Problems That <span className="text-blue-500">Kill Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indian SMBs lose millions every year due to poor inventory management. Sound familiar?
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-4">
            <strong>Stop losing money to inventory chaos.</strong> See how NextWeb Inventory solves these problems.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            See Our Solution
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;