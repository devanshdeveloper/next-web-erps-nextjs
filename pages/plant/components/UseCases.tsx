import React from 'react';
import { motion } from 'framer-motion';
import { Car, Package, Cpu, Wrench } from 'lucide-react';

const UseCases: React.FC = () => {
  const industries = [
    {
      icon: <Car className="text-blue-500" size={32} />,
      title: "Auto Components",
      benefit: "Reduced lead time by 28%",
      description: "Precision manufacturing with full traceability for automotive parts and assemblies"
    },
    {
      icon: <Package className="text-green-500" size={32} />,
      title: "FMCG Packaging",
      benefit: "Increased throughput by 35%",
      description: "High-volume packaging operations with quality control and batch management"
    },
    {
      icon: <Cpu className="text-orange-500" size={32} />,
      title: "Electronics Assembly",
      benefit: "Quality defects reduced by 45%",
      description: "Complex assembly processes with component traceability and testing workflows"
    },
    {
      icon: <Wrench className="text-purple-500" size={32} />,
      title: "Job Shops",
      benefit: "Machine utilization up 32%",
      description: "Custom manufacturing with flexible routing and capacity optimization"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Industry <span className="text-blue-500">Use Cases</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proven results across diverse manufacturing sectors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-slate-50 rounded-2xl mb-4">
                  {industry.icon}
                </div>
                
                <h3 className="font-bold text-xl text-slate-800 mb-2">{industry.title}</h3>
                
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {industry.benefit}
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready for Your Industry?
            </h3>
            <p className="text-slate-600 mb-6">
              NextWeb Plant adapts to your specific manufacturing processes, whether you're in discrete manufacturing, process industries, or hybrid operations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Discuss Your Use Case
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;