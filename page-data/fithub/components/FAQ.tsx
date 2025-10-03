import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Does NextWeb FitHub work for single-location studios?',
    answer: 'Yes! Our Starter plan is designed specifically for boutique studios and single-location gyms. You get all core features including class scheduling, member management, and payment processing.',
  },
  {
    question: 'Are GST receipts and UPI payments supported?',
    answer: 'Absolutely. FitHub is built for India. Every transaction generates GST-compliant receipts automatically, and we integrate with Razorpay, PayU, and direct UPI for seamless Indian payment processing.',
  },
  {
    question: 'Can I manage multiple gym locations from one account?',
    answer: 'Yes, our Growth and Enterprise plans include multi-location dashboards with centralized reporting, role-based access, and unified member management across all your branches.',
  },
  {
    question: 'How does trainer commission calculation work?',
    answer: 'FitHub automatically tracks trainer attendance, class participation, and custom commission rules. Monthly payouts are calculated automatically based on your predefined splits and rates.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a 14-day free trial with full access to all Starter plan features. No credit card required to start.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'All plans include email support. Growth plans get priority support, and Enterprise customers receive a dedicated account manager plus on-site training.',
  },
  {
    question: 'Can members book classes through their mobile phones?',
    answer: 'Yes, members can book classes, view schedules, and check in via mobile browser or our mobile app (coming soon). They receive WhatsApp/SMS reminders automatically.',
  },
  {
    question: 'Is my data secure and backed up?',
    answer: 'Security is our top priority. Your data is encrypted, hosted on secure servers in India, and backed up daily. We follow industry best practices for data protection.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about NextWeb FitHub.
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
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-6 text-left transition-all border-2 border-transparent hover:border-blue-500"
                aria-expanded={openIndex === index}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
