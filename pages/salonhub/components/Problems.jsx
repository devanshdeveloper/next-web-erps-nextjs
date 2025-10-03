import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Calendar, Package, FileText } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: Calendar,
      title: "Double Bookings & No-Shows",
      description: "Messy appointment scheduling leads to frustrated clients and lost revenue. Manual booking systems create confusion and missed opportunities."
    },
    {
      icon: Package,
      title: "Inventory Chaos",
      description: "Running out of products mid-service or overstocking expensive items. No visibility into stock levels or supplier management."
    },
    {
      icon: FileText,
      title: "Manual Invoicing & GST Issues",
      description: "Time-consuming manual billing, GST compliance headaches, and no proper financial reporting for business growth insights."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>Common Salon Challenges</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            Problems that slow down your salon
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Most salons struggle with outdated systems that create more work instead of streamlining operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-slate-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-2">
              The cost of inefficiency
            </h3>
            <p className="text-slate-600">Average losses per salon per month</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">₹25,000</div>
              <div className="text-slate-600">Lost due to no-shows</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">₹18,000</div>
              <div className="text-slate-600">Inventory wastage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">40 hours</div>
              <div className="text-slate-600">Manual admin work</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;