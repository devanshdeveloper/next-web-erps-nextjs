import { motion } from 'framer-motion';
import { XCircle, AlertTriangle, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: <XCircle className="w-8 h-8" />,
    title: 'No-shows & Manual Scheduling',
    description: 'Members forget classes, manual attendance wastes time, double-bookings hurt experience.',
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: 'Messy Membership Billing',
    description: 'Tracking renewals, packages, and add-ons in spreadsheets leads to revenue leaks.',
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Trainer Payroll Headaches',
    description: 'Calculating commissions, class splits, and attendance manually is error-prone and slow.',
  },
];

export default function Problems() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Running a gym shouldn't be this hard
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We solve the three biggest pain points fitness business owners face every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-red-50 border-2 border-red-100 rounded-xl p-6 md:p-8"
            >
              <div className="text-red-600 mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
