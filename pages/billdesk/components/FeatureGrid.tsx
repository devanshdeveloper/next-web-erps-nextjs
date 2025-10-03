import { motion } from 'framer-motion';
import {
  FileText,
  Globe,
  Link,
  GitMerge,
  RefreshCw,
  Receipt,
  Building2,
  FileImage,
  Download,
  Shield,
} from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: FileText,
      title: 'Quick Invoice Builder',
      description: 'Pre-built templates with GST line items, HSN/SAC codes, and instant generation.',
      tag: 'Core',
    },
    {
      icon: Globe,
      title: 'E-Invoicing Support',
      description: 'IRN generation support for applicable businesses under GST regulations.',
      tag: 'Compliance',
    },
    {
      icon: Link,
      title: 'Payment Links & Integrations',
      description: 'UPI, Razorpay, PayU, and bank payment links sent directly to customers.',
      tag: 'Payments',
    },
    {
      icon: GitMerge,
      title: 'Auto-Reconciliation',
      description: 'Bank statement and webhook-driven matching to close books faster.',
      tag: 'Automation',
    },
    {
      icon: RefreshCw,
      title: 'Recurring Invoices',
      description: 'Set up subscriptions and repeat invoices for predictable revenue.',
      tag: 'Revenue',
    },
    {
      icon: Receipt,
      title: 'Expense & Credit Management',
      description: 'Track expenses, issue credit notes, and manage refunds seamlessly.',
      tag: 'Accounting',
    },
    {
      icon: Building2,
      title: 'Multi-Branch Support',
      description: 'Handle multiple locations and entities with separate GST numbers.',
      tag: 'Enterprise',
    },
    {
      icon: FileImage,
      title: 'Branded PDF Templates',
      description: 'Professional, customizable invoice and receipt designs with your logo.',
      tag: 'Branding',
    },
    {
      icon: Download,
      title: 'GST & Accounting Exports',
      description: 'Export to Tally, Zoho, Excel, and generate GST-ready reports instantly.',
      tag: 'Integration',
    },
    {
      icon: Shield,
      title: 'Audit Trail & Access Controls',
      description: 'Complete activity logs and role-based permissions for your team.',
      tag: 'Security',
    },
  ];

  return (
    <section id="features" className="py-12 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Run Billing
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto">
            From invoice generation to reconciliation, all the tools your business needs in one platform.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <feature.icon className="h-8 w-8 lg:h-10 lg:w-10 text-blue-500 flex-shrink-0" />
                <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-500 rounded">
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm lg:text-base text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
