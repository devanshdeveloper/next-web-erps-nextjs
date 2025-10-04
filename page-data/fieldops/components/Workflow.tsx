import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Users, 
  Play, 
  CheckCircle 
} from 'lucide-react';

const Workflow: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Plus,
      title: 'Receive Job',
      description: 'Customer requests come via phone, WhatsApp, or web portal. System auto-creates work orders with all details.',
      color: 'bg-blue-500'
    },
    {
      number: '02', 
      icon: Users,
      title: 'Assign & Route',
      description: 'Smart dispatch assigns the right technician based on skills, location, and availability. Route optimization reduces travel time.',
      color: 'bg-orange-500'
    },
    {
      number: '03',
      icon: Play,
      title: 'Execute & Capture Proof',
      description: 'Technician completes job using mobile app, captures photos, gets customer signature, and updates status in real-time.',
      color: 'bg-teal-500'
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Close & Invoice',
      description: 'Auto-generate invoice with parts used, send to customer via WhatsApp/SMS, and track payment status.',
      color: 'bg-green-500'
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
            How it works — 4 simple steps
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Streamlined workflow from job creation to payment collection. 
            Designed to reduce manual work and improve customer satisfaction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-blue-500"
                    />
                  </div>
                )}

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg ${step.color} flex items-center justify-center mr-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-poppins font-bold text-2xl text-gray-300">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl text-white"
        >
          <h3 className="font-poppins font-bold text-2xl mb-2">
            Ready to streamline your field operations?
          </h3>
          <p className="text-gray-100 mb-6">
            See how NextWeb FieldOps can reduce your operational complexity and boost customer satisfaction.
          </p>
          <motion.a
            href="#demo-form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;