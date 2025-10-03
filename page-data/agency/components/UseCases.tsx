import { motion } from 'framer-motion';
import { Palette, Globe, Briefcase, Users } from 'lucide-react';

export default function UseCases() {
  const cases = [
    {
      icon: Globe,
      title: 'Digital Agencies',
      description: 'Manage SEO, PPC, social media projects with time tracking and performance-based billing.',
    },
    {
      icon: Palette,
      title: 'Creative Studios',
      description: 'Track design revisions, manage brand projects, and bill by milestone or retainer.',
    },
    {
      icon: Briefcase,
      title: 'Brand Consultancies',
      description: 'Organize strategy deliverables, client workshops, and multi-phase engagements.',
    },
    {
      icon: Users,
      title: 'Freelance Collectives',
      description: 'Coordinate distributed teams, track contributions, and split revenue transparently.',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            Built for agencies of all types
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're a boutique studio or a growing agency, NextWeb Agency adapts to your workflow
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
