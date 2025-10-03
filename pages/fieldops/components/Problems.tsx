import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, FileX, EyeOff } from 'lucide-react';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Missed appointments & poor first-time-fix rates',
      description: 'Lack of real-time coordination leads to frustrated customers and repeated visits, hurting your bottom line.',
      color: 'text-red-500'
    },
    {
      icon: FileX,
      title: 'Paper-based work orders and delayed billing',
      description: 'Manual paperwork slows down invoicing, creates errors, and makes it hard to track job profitability.',
      color: 'text-orange-500'
    },
    {
      icon: EyeOff,
      title: 'No live visibility of technicians & parts',
      description: 'Without real-time tracking, you can\'t optimize routes, manage inventory, or provide accurate ETAs to customers.',
      color: 'text-amber-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Field service challenges holding you back?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Most field service teams struggle with coordination, visibility, and manual processes. 
            Here's what we help you solve:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4 ${problem.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;