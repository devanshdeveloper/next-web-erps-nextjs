import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to set up NextWeb Campus?',
      answer:
        'Most institutions are up and running within 2-3 days. Our team helps with data migration, staff training, and initial setup. Small schools can start even faster with our quick-start templates.',
    },
    {
      question: 'Do you provide training for our staff?',
      answer:
        'Yes, we provide comprehensive training for all staff members including administrators, teachers, and front office. Training is available via video calls, on-site visits, and our detailed documentation portal.',
    },
    {
      question: 'Are GST-compliant receipts automatically generated?',
      answer:
        'Absolutely. All fee receipts are GST-compliant with your institution\'s GSTIN, proper tax breakdowns, and sequential numbering. You can customize receipt templates with your logo and branding.',
    },
    {
      question: 'Can parents access the system?',
      answer:
        'Yes, parents get their own mobile app and web portal to view attendance, fees, report cards, and communicate with teachers. They also receive WhatsApp and SMS notifications for important updates.',
    },
    {
      question: 'What happens to our existing data?',
      answer:
        'We handle complete data migration from Excel sheets, other software, or paper records. Our team ensures all student, staff, and financial data is accurately transferred with zero data loss.',
    },
    {
      question: 'Is the system suitable for coaching centers?',
      answer:
        'Yes, NextWeb Campus is designed for K-12 schools, coaching centers, and small colleges. We support batch-wise management, course enrollment, and flexible fee structures perfect for coaching institutes.',
    },
    {
      question: 'What payment methods are supported for fee collection?',
      answer:
        'We integrate with all major payment gateways including Razorpay, Paytm, and bank transfers. Parents can pay online via UPI, cards, net banking, or wallets. Cash and cheque payments can also be recorded.',
    },
    {
      question: 'Do you offer customer support in regional languages?',
      answer:
        'Yes, our support team can assist in Hindi, Marathi, Tamil, Telugu, and other major Indian languages. The software interface is currently in English with multi-language support coming soon.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers. Can't find what you're looking for? Chat with our team.
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
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-500" />
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
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
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
