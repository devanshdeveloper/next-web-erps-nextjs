import { motion } from 'framer-motion';
import { Building, Users as Users2, UserCheck, Heart } from 'lucide-react';

const useCases = [
  {
    icon: <Building className="w-8 h-8" />,
    title: 'Boutique Studios',
    description: 'Perfect for yoga, pilates, and specialty fitness studios with class-focused operations.',
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: 'Multi-branch Gyms',
    description: 'Centralized management for chains with role-based access and unified reporting.',
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: 'PT Chains',
    description: 'Trainer scheduling, commission tracking, and client management for personal training businesses.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Wellness Centers',
    description: 'Holistic fitness and wellness facilities with diverse class offerings and member programs.',
  },
];

export default function UseCases() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for every type of fitness business
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="bg-blue-500/10 text-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
