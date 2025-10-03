import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight } from 'lucide-react';

export default function Problems() {
  const problems = [
    'Juggling fragmented tools for CRM, proposals, and project tracking',
    'Scope creep eating into project margins',
    'Manual billing and invoice generation taking hours',
    'No visibility into resource utilization or project profitability',
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium mb-6">
              <AlertCircle size={16} />
              The Agency Operations Problem
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
              Running an agency shouldn't feel like chaos
            </h2>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  <p className="text-lg">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-8 lg:p-12 text-white"
          >
            <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6">
              NextWeb Agency centralizes everything
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <ArrowRight className="flex-shrink-0 mt-1" size={20} />
                <p className="text-lg">Single platform for pipeline, scope, time tracking & billing</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="flex-shrink-0 mt-1" size={20} />
                <p className="text-lg">Built-in approval workflows prevent scope creep</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="flex-shrink-0 mt-1" size={20} />
                <p className="text-lg">GST-ready invoicing from tracked time & milestones</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="flex-shrink-0 mt-1" size={20} />
                <p className="text-lg">Real-time visibility into utilization & margins</p>
              </div>
            </div>
            <div className="text-sm opacity-90">
              Built specifically for Indian agencies with retainer & milestone billing workflows
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
