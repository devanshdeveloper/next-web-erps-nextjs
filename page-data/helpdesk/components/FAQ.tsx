import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { initScrollAnimation } from '../lib/gsap-init';

const faqs = [
  {
    question: 'How does the unified inbox work with WhatsApp?',
    answer:
      'NextWeb HelpDesk integrates with WhatsApp Business API. Messages from WhatsApp automatically create tickets in your unified inbox alongside email, chat, and phone inquiries. You can reply directly from the platform, and responses sync back to WhatsApp.',
  },
  {
    question: 'Can we set different SLA rules for different ticket types?',
    answer:
      'Yes. You can create custom SLA rules based on priority, channel, tags, or customer segments. For example, high-priority tickets can have a 30-minute response SLA while general inquiries have 4 hours. The system automatically tracks compliance and sends escalation alerts.',
  },
  {
    question: 'What integrations are included in the Growth plan?',
    answer:
      'The Growth plan includes integrations with NextWeb BillDesk (payments), Inventory (stock checks), Commerce (order history), WhatsApp Business API, and webhooks for custom integrations. Enterprise plans add CRM sync, phone systems, and dedicated API access.',
  },
  {
    question: 'How does automation save time for support teams?',
    answer:
      'Automation features include canned replies (save common responses), auto-assignment rules (route tickets to the right agent), follow-up reminders, and macros (apply multiple actions with one click). Teams report saving 2-3 hours per agent per day.',
  },
  {
    question: 'Is there a free trial? Do we need a credit card?',
    answer:
      'Yes, we offer a 14-day free trial with full access to all features in the Growth plan. No credit card required to start. You can invite your team, connect channels, and test the platform risk-free.',
  },
  {
    question: 'Can we migrate existing tickets from another helpdesk?',
    answer:
      'Yes. Our team will help you migrate tickets, customer data, and KB articles from platforms like Zendesk, Freshdesk, or custom solutions. Migration is included with Enterprise plans and available as a paid service for other plans.',
  },
  {
    question: 'What reporting and analytics are available?',
    answer:
      'You get real-time dashboards showing response time, resolution time, SLA compliance, ticket volume by channel, agent performance, CSAT scores, and trends over time. Export reports as CSV or schedule automated email reports.',
  },
  {
    question: 'Is customer data secure? Do you support GDPR compliance?',
    answer:
      'Yes. All data is encrypted at rest and in transit. We support GDPR, SOC 2 Type II standards, and provide audit logs, RBAC, and data retention controls. Enterprise plans include custom data residency and compliance support.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      initScrollAnimation(sectionRef.current, {
        y: 40,
        duration: 0.7,
      });
    }
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="resources" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about NextWeb HelpDesk
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-200 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-blue-500" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500/90 transition-all"
          >
            Contact our team
          </a>
        </div>
      </div>
    </section>
  );
}
