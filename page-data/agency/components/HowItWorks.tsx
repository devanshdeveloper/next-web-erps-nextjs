import { motion } from 'framer-motion';
import { Target, FileCheck, Rocket, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Target,
      title: 'Capture Leads',
      description: 'Add prospects to your pipeline, track interactions, and qualify opportunities with custom fields.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FileCheck,
      title: 'Send Proposals',
      description: 'Create beautiful proposals from templates, get approvals, and convert them to signed agreements.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Rocket,
      title: 'Plan & Execute',
      description: 'Assign resources, track time, manage milestones, and keep clients updated through the portal.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      title: 'Bill & Analyze',
      description: 'Generate invoices from time or milestones, collect payments, and analyze project profitability.',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Simple workflow, powerful results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four steps from lead to payment — streamline your entire agency operation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-400 mb-2">Step {index + 1}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -translate-x-4" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
