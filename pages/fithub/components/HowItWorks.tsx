import { motion } from 'framer-motion';
import { UserPlus, CalendarCheck, Repeat } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: 'Attract',
    description: 'Members discover, book trials, and sign up through your website or front desk.',
    color: 'blue-500',
  },
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: 'Book & Check-in',
    description: 'Automated reminders, QR check-ins, and real-time class capacity tracking.',
    color: 'emerald',
  },
  {
    icon: <Repeat className="w-8 h-8" />,
    title: 'Retain & Bill',
    description: 'Smart renewals, package upsells, automated billing with GST-compliant receipts.',
    color: 'orange-500',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your gym operations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald to-orange-500 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className={`bg-${step.color} text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                  {step.icon}
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 transition-all">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
