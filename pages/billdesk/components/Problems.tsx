import { motion } from 'framer-motion';
import { AlertCircle, Clock, FileQuestion } from 'lucide-react';

export default function Problems() {
  const problems = [
    {
      icon: Clock,
      title: 'Manual invoicing & late payments',
      description: 'Chasing customers, delayed collections, and cash flow headaches.',
    },
    {
      icon: AlertCircle,
      title: 'Reconciliation headaches',
      description: 'Mismatched payments, bank statement chaos, and endless spreadsheets.',
    },
    {
      icon: FileQuestion,
      title: 'Compliance pain during GST filing',
      description: 'Missing invoices, incorrect HSN codes, and last-minute scrambles.',
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10 lg:mb-16"
        >
          Problems We Solve
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-gray-100 p-6 lg:p-8 rounded-xl"
            >
              <problem.icon className="h-10 w-10 lg:h-12 lg:w-12 text-orange-500 mb-4" />
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-sm lg:text-base text-gray-700">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
