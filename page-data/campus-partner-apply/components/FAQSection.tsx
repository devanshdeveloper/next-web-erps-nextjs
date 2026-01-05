"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Is there any fee to become a partner?',
    answer: 'No. There are no joining fees, registration fees, or any upfront costs. You only invest your time and existing relationships. We believe in earning through value creation, not charging partners to join.',
  },
  {
    question: 'How do payouts work?',
    answer: 'Payouts are calculated based on active school subscriptions in your network. You receive recurring commissions as long as schools remain active. Payments are processed monthly via bank transfer, with clear statements showing each school\'s contribution.',
  },
  {
    question: 'Is this a job? Will I be employed by NextWeb?',
    answer: 'No, this is a partnership, not employment. You work independently, at your own pace, with no fixed hours or reporting requirements. You are essentially a business partner who earns based on the value you create.',
  },
  {
    question: 'Can I do this part-time alongside my current work?',
    answer: 'Absolutely. Many of our partners are working professionals—teachers, consultants, or IT service providers—who do this alongside their primary occupation. The Referral Partner model is especially suited for part-time involvement.',
  },
  {
    question: 'What support is provided after I become a partner?',
    answer: 'You get access to a partner dashboard, marketing materials, product training, and dedicated partner support. We handle all demos, onboarding, and customer support for schools. You focus on introductions and relationships.',
  },
  {
    question: 'What if my district already has a partner?',
    answer: 'We limit partnerships per district to avoid conflicts. During the verification stage, we check region availability. If your district is already covered, we may suggest alternative arrangements or add you to a waitlist.',
  },
  {
    question: 'How long does the approval process take?',
    answer: 'Most applications are reviewed within 2-3 business days. The verification and onboarding call are usually scheduled within a week of application. You can be fully active within 2 weeks of applying.',
  },
  {
    question: 'What if I have no sales experience?',
    answer: 'You don\'t need sales experience. If you have genuine relationships with schools and can make trusted introductions, that\'s what matters. We handle the product demos, negotiations, and technical setup.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions from prospective partners. Still have questions? 
            Reach out on WhatsApp.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
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
      </div>
    </section>
  );
}
