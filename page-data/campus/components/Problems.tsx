import { motion } from 'framer-motion';
import { AlertCircle, Clock, MessageSquareOff } from 'lucide-react';

export default function Problems() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Manual fee collection & delayed payments',
      description: 'Tracking payments across multiple classes and following up on dues is time-consuming and error-prone',
    },
    {
      icon: Clock,
      title: 'Poor attendance tracking & slow reporting',
      description: 'Paper registers and manual tallies delay insights and make parent communication difficult',
    },
    {
      icon: MessageSquareOff,
      title: 'Fragmented communication with parents & staff',
      description: 'Using multiple channels without a unified system leads to missed messages and confusion',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Common challenges we solve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Running a school or coaching center shouldn't mean drowning in paperwork
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-red-50 border border-red-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <problem.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="font-semibold text-xl text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
