import { motion } from 'framer-motion';
import { UserPlus, GraduationCap, CreditCard, BarChart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Enquire & Admit',
      description: 'Capture enquiries online, track applications, and convert admissions with digital forms',
    },
    {
      icon: GraduationCap,
      title: 'Run Classes & Track',
      description: 'Manage timetables, record attendance, track academic progress and engage students',
    },
    {
      icon: CreditCard,
      title: 'Billing & Collection',
      description: 'Generate fee invoices, send reminders, collect payments and issue GST-compliant receipts',
    },
    {
      icon: BarChart,
      title: 'Insights & Reports',
      description: 'View real-time dashboards, export custom reports and make data-driven decisions',
    },
  ];

  return (
    <section id="product" className="py-16 sm:py-24 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple workflow that covers your entire campus lifecycle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg relative z-10"
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>
                <div className="absolute top-8 -right-4 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm z-20">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
