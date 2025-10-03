import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, TrendingDown, Package, FileText } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: <TrendingDown className="text-red-500" size={32} />,
      title: "Multiple tools, messy data",
      description: "Managing inventory on Excel, orders on WhatsApp, and billing separately leads to chaos."
    },
    {
      icon: <Package className="text-red-500" size={32} />,
      title: "Stock-outs and overselling",
      description: "No real-time inventory sync across channels means losing sales and unhappy customers."
    },
    {
      icon: <FileText className="text-red-500" size={32} />,
      title: "GST compliance headaches",
      description: "Manual invoicing and GST calculations take hours and are prone to errors."
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle className="text-green-500" size={24} />,
      title: "Unified commerce platform",
      description: "Orders, inventory, and billing work together seamlessly"
    },
    {
      icon: <CheckCircle className="text-green-500" size={24} />,
      title: "Real-time inventory sync",
      description: "Never oversell again with automatic stock updates"
    },
    {
      icon: <CheckCircle className="text-green-500" size={24} />,
      title: "Automated GST invoicing",
      description: "Generate compliant invoices in seconds, not hours"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Common pain points for <span className="text-blue-500">Indian SMBs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the challenges you face. Here's how NextWeb Commerce solves them.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-8">
              <AlertTriangle className="text-red-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">The Problems</h3>
            </div>
            
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-red-50 border border-red-100 rounded-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  {problem.icon}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h4>
                    <p className="text-gray-600">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-8">
              <CheckCircle className="text-green-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">The Solutions</h3>
            </div>
            
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-green-50 border border-green-100 rounded-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  {solution.icon}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {solution.title}
                    </h4>
                    <p className="text-gray-600">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;