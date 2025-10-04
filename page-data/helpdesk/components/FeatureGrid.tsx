import { useEffect, useRef } from 'react';
import {
  Inbox,
  Ticket,
  Timer,
  Zap,
  BookOpen,
  Users,
  TrendingUp,
  Paperclip,
  Link2,
  Shield,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { initScrollAnimation } from '../lib/gsap-init';

const features = [
  {
    icon: Inbox,
    title: 'Unified Inbox',
    description: 'Email, WhatsApp, chat, web forms — all customer messages in one place.',
    badge: 'Multi-channel',
  },
  {
    icon: Ticket,
    title: 'Ticketing & Workflow',
    description: 'Tags, priorities, custom queues and automated routing for organized support.',
    badge: 'Smart routing',
  },
  {
    icon: Timer,
    title: 'SLA Management',
    description: 'Set SLA timers, track compliance, and auto-escalate overdue tickets.',
    badge: 'Auto-escalate',
  },
  {
    icon: Zap,
    title: 'Automation & Macros',
    description: 'Canned replies, auto-assign rules, and smart follow-ups save time.',
    badge: 'Time-saver',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'Self-service KB articles and public help center reduce ticket volume.',
    badge: 'Self-service',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Mentions, internal notes, and seamless SLA handoffs between agents.',
    badge: 'Team-ready',
  },
  {
    icon: TrendingUp,
    title: 'CSAT & Reporting',
    description: 'Track response times, SLA compliance, and volume by channel.',
    badge: 'Analytics',
  },
  {
    icon: Paperclip,
    title: 'Ticket History',
    description: 'Link orders, invoices, returns and full context to every ticket.',
    badge: 'Context-rich',
  },
  {
    icon: Link2,
    title: 'Deep Integrations',
    description: 'BillDesk, Inventory, Commerce, CRM, WhatsApp API — all connected.',
    badge: 'Connected',
  },
  {
    icon: Shield,
    title: 'Security & Roles',
    description: 'RBAC, audit logs, and data encryption keep support data secure.',
    badge: 'Enterprise-grade',
  },
];

export default function FeatureGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      initScrollAnimation(sectionRef.current, {
        y: 40,
        duration: 0.7,
      });
    }
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Everything you need for world-class support
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From ticket management to SLA tracking, automation to analytics — NextWeb HelpDesk has it all
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  {feature.badge && (
                    <span className="text-xs bg-cyan-500/10 text-cyan-500 px-2 py-1 rounded-full font-medium">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
