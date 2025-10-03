import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can we get started with NextWeb Agency?',
      answer: 'Most teams are up and running within a day. Our onboarding process includes data migration assistance, training sessions, and ready-to-use templates for proposals, projects, and invoices.',
    },
    {
      question: 'Is NextWeb Agency suitable for remote or distributed teams?',
      answer: 'Absolutely. NextWeb Agency is cloud-based and accessible from anywhere. With mobile apps for time tracking and real-time updates, your team can collaborate seamlessly regardless of location.',
    },
    {
      question: 'How does billing work with retainer clients?',
      answer: 'You can set up recurring retainer invoices that automatically generate monthly. Track time against retainer hours, carry over unused hours, and create top-up invoices when needed — all with GST compliance built in.',
    },
    {
      question: 'Can we customize workflows and approval processes?',
      answer: 'Yes. You can define custom stages for your pipeline, create approval workflows for proposals and timesheets, and configure project templates that match your agency methodology.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'All plans include email support with 24-hour response time. Growth and Agency Pro plans get priority support. Agency Pro customers also receive a dedicated account manager and custom onboarding.',
    },
    {
      question: 'Is our data secure and backed up?',
      answer: 'Security is our top priority. We use bank-grade encryption, regular automated backups, and comply with international data protection standards. Your data is stored in secure data centers with 99.9% uptime SLA.',
    },
    {
      question: 'Can we try it before committing?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. Our team is available to help you evaluate if NextWeb Agency is the right fit.',
    },
    {
      question: 'Do you offer data migration from other tools?',
      answer: 'Yes, we provide migration support for most common CRM and project management tools. Our team will help you import clients, projects, and historical data to ensure a smooth transition.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about NextWeb Agency
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:underline text-lg"
          >
            Contact our team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
