import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Package2, Cog, CheckCircle, ArrowRight } from 'lucide-react';

const Workflow: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardList className="text-white" size={32} />,
      title: "Plan",
      description: "Create work orders, schedule resources, and generate material requirements",
      color: "bg-blue-500"
    },
    {
      icon: <Package2 className="text-white" size={32} />,
      title: "Issue Materials",
      description: "Kit materials, scan barcodes, and track lot/batch movements to workstations",
      color: "bg-green-500"
    },
    {
      icon: <Cog className="text-white" size={32} />,
      title: "Execute on Shopfloor",
      description: "Mobile terminals guide operators through work instructions and capture data",
      color: "bg-orange-500"
    },
    {
      icon: <CheckCircle className="text-white" size={32} />,
      title: "Inspect & Dispatch",
      description: "Quality checks, final inspection, and automated dispatch with full traceability",
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="workflow" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            How Manufacturing <span className="text-blue-500">Flow Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From planning to finished goods — a seamless production workflow
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green via-orange-500 to-purple-600"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="workflow-step relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    {step.icon}
                  </motion.div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 bg-white border-2 border-slate-200 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-slate-600">
                    {index + 1}
                  </div>

                  {/* Arrow for larger screens */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + 0.3 }}
                      viewport={{ once: true }}
                      className="hidden lg:block absolute top-8 -right-4 text-slate-400"
                    >
                      <ArrowRight size={24} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;