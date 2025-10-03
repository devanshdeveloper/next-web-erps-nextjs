import { motion } from 'framer-motion';
import { School, BookOpen, Building2, Users as Users2 } from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      icon: School,
      title: 'Private K-12 Schools',
      benefit: 'Streamline admissions, automate attendance, and improve parent engagement',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: BookOpen,
      title: 'Coaching Centres',
      benefit: 'Track batch-wise attendance, manage course fees, and monitor student performance',
      color: 'from-green-50 to-green-600',
    },
    {
      icon: Users2,
      title: 'Pre-schools & Play Schools',
      benefit: 'Daily activity updates, simplified fee collection, and photo sharing with parents',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Building2,
      title: 'Small Colleges',
      benefit: 'Department-wise management, semester fee tracking, and academic reporting',
      color: 'from-purple-500 to-purple-600',
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
            Built for every campus
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you run a school, coaching center, or college — we have you covered
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 h-full hover:border-blue-500 transition-all hover:shadow-xl">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
                >
                  <useCase.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
