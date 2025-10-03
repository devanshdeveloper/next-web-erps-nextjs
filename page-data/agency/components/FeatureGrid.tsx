import { motion } from 'framer-motion';
import {
  Users, FileText, Kanban, Calendar, Clock,
  DollarSign, TrendingUp, FolderOpen, Plug, BarChart3
} from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: Users,
      title: 'Lead & Pipeline CRM',
      description: 'Track leads through your pipeline with custom stages, automated follow-ups, and complete client history.',
      badge: 'CRM',
    },
    {
      icon: FileText,
      title: 'Proposal & Quotation Builder',
      description: 'Generate professional proposals with templates, approval workflows, and e-signature-ready PDFs.',
      badge: 'Proposals',
    },
    {
      icon: Kanban,
      title: 'Project Operations',
      description: 'Kanban boards, Gantt timelines, and milestone tracking to keep every project on schedule.',
      badge: 'Projects',
    },
    {
      icon: Calendar,
      title: 'Resource & Capacity Planning',
      description: 'View team availability, book resources across projects, and optimize utilization rates.',
      badge: 'Resources',
    },
    {
      icon: Clock,
      title: 'Time Tracking & Timesheets',
      description: 'Mobile and desktop time capture with approval workflows and project-level time reports.',
      badge: 'Time',
    },
    {
      icon: DollarSign,
      title: 'Billing & Retainers',
      description: 'Generate GST-compliant invoices from milestones or tracked time. Support for retainer and recurring billing.',
      badge: 'Billing',
    },
    {
      icon: TrendingUp,
      title: 'Profitability & Project P&L',
      description: 'Real-time margin tracking, budget vs. actuals, and profitability analysis per project.',
      badge: 'Analytics',
    },
    {
      icon: FolderOpen,
      title: 'Client Portal',
      description: 'Share deliverables, collect feedback, manage approvals — give clients visibility without the chaos.',
      badge: 'Client Access',
    },
    {
      icon: Plug,
      title: 'Integrations',
      description: 'Connect with Google Drive, Slack, QuickBooks, Tally, and payment gateways for seamless workflows.',
      badge: 'Integrations',
    },
    {
      icon: BarChart3,
      title: 'Reports & Dashboards',
      description: 'Pipeline conversion, team utilization, AR aging, and executive dashboards — all in real-time.',
      badge: 'Reporting',
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 text-blue-500 rounded-full text-sm font-medium mb-6">
            Complete Agency Operations Platform
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Everything your agency needs in one place
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From first contact to final invoice — manage every aspect of your agency operations with purpose-built tools.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
