import { motion } from 'framer-motion';
import {
  Users,
  Calendar,
  UserCheck,
  Smartphone,
  CreditCard,
  Package,
  Bell,
  Lock,
  BarChart3,
  Building2,
} from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Member Management',
    description: 'Complete profiles, membership status tracking, and automated access control for your members.',
    tag: 'Core',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Class & Studio Scheduling',
    description: 'Smart timetables, waitlists, recurring classes, and capacity management that just works.',
    tag: 'Core',
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: 'Trainer Management & Payroll',
    description: 'Track attendance, calculate commissions, manage schedules and automate trainer payouts.',
    tag: 'Popular',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Booking & Check-in',
    description: 'QR code scanning, mobile check-in, kiosk mode, and seamless member entry experience.',
    tag: 'Core',
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'POS & Payments',
    description: 'UPI, Razorpay, cards, wallets — all integrated with automatic GST-compliant receipts.',
    tag: 'India-ready',
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Packages, Passes & Add-ons',
    description: 'Flexible pricing with membership packs, trial passes, drop-ins, and upsell opportunities.',
    tag: 'Revenue',
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Automated Notifications',
    description: 'SMS, WhatsApp and email reminders for bookings, renewals, and class updates.',
    tag: 'India-ready',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Attendance & Access Control',
    description: 'Integrate with turnstiles, RFID readers, and QR scanners for secure facility access.',
    tag: 'Security',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Analytics & Revenue Reports',
    description: 'Real-time dashboards showing revenue per class, capacity utilization, and growth trends.',
    tag: 'Insights',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Multi-location & Franchise',
    description: 'Central dashboard with role-based access for chains, franchises, and multi-studio operations.',
    tag: 'Enterprise',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to run your fitness business
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From member onboarding to revenue reports — one powerful platform built for Indian gyms and studios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  index: number;
}

function FeatureCard({ icon, title, description, tag, index }: FeatureCardProps) {
  const tagColors: Record<string, string> = {
    Core: 'bg-blue/10 text-blue',
    Popular: 'bg-orange/10 text-orange',
    'India-ready': 'bg-emerald/10 text-emerald',
    Revenue: 'bg-purple-100 text-purple-700',
    Security: 'bg-red-100 text-red-700',
    Insights: 'bg-blue-100 text-blue-700',
    Enterprise: 'bg-gray-200 text-gray-700',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)' }}
      className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-blue-500 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="bg-blue/10 text-blue-500 p-3 rounded-lg">{icon}</div>
        <span className={`${tagColors[tag]} text-xs font-semibold px-2 py-1 rounded-full`}>
          {tag}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
