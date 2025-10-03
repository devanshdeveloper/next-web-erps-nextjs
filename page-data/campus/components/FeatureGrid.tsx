import { motion } from 'framer-motion';
import {
  UserPlus,
  CheckSquare,
  CreditCard,
  Calendar,
  MessageCircle,
  FileText,
  Users,
  BarChart3,
} from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: UserPlus,
      title: 'Admissions & Student Lifecycle',
      description: 'Track enquiries, applications, and admissions through to alumni management in one unified system',
      tag: 'Core',
    },
    {
      icon: CheckSquare,
      title: 'Attendance Management',
      description: 'Class-wise digital attendance with biometric and mobile app support, real-time parent notifications',
      tag: 'Core',
    },
    {
      icon: CreditCard,
      title: 'Fee Management & GST Receipts',
      description: 'Automated fee collection, installment tracking, concessions, and GST-compliant receipt generation',
      tag: 'Core',
    },
    {
      icon: Calendar,
      title: 'Timetable & Substitutions',
      description: 'Build class schedules, manage substitutions, and handle teacher availability with automated conflict resolution',
      tag: 'Planning',
    },
    {
      icon: MessageCircle,
      title: 'Parent & Teacher Communication',
      description: 'Automated SMS and WhatsApp notifications for attendance, fees, events, and announcements',
      tag: 'Engagement',
    },
    {
      icon: FileText,
      title: 'Report Cards & Exams',
      description: 'Digital grade entry, mark sheets, progress reports, and automated report card generation',
      tag: 'Academics',
    },
    {
      icon: Users,
      title: 'Staff & Payroll',
      description: 'Employee records, leave management, and basic payroll integration for complete HR tracking',
      tag: 'HR',
    },
    {
      icon: BarChart3,
      title: 'Multi-Campus Analytics',
      description: 'Role-based dashboards, custom reports, and cross-campus insights for data-driven decisions',
      tag: 'Analytics',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to run your campus
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From admissions to alumni, one integrated platform handles all aspects of campus management
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <feature.icon className="w-10 h-10 text-blue-500" />
                <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-1 rounded">
                  {feature.tag}
                </span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
