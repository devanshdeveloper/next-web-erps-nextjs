import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Search } from 'lucide-react';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: <AlertTriangle className="text-red-500" size={24} />,
      problem: "Long changeovers & machine downtime",
      solution: "Predictive maintenance & planned PMs",
      color: "from-red-50 to-red-100"
    },
    {
      icon: <Search className="text-amber-500" size={24} />,
      problem: "Invisible WIP & late orders",
      solution: "Real-time work order tracking & scheduling",
      color: "from-amber-50 to-amber-100"
    },
    {
      icon: <Clock className="text-blue-500" size={24} />,
      problem: "Manual routing and quality errors",
      solution: "Digitized routing, QC checks & traceability",
      color: "from-blue-50 to-blue-100"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Manufacturing Challenges <span className="text-blue-500">Solved</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform common production pain points into competitive advantages with NextWeb Plant
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl bg-gradient-to-br ${item.color} border border-white shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                {item.icon}
                <div className="ml-3 w-full">
                  <div className="h-1 bg-gradient-to-r from-slate-300 to-slate-200 rounded-full">
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-green rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-slate-800 mb-2">{item.problem}</h3>
              <div className="flex items-center">
                <span className="text-sm text-slate-600 mr-2">Solution:</span>
                <span className="text-sm font-medium text-blue-500">{item.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;