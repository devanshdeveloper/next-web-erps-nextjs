import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is NextWeb BillDesk GST-compliant?',
      answer:
        'Yes, absolutely. BillDesk generates GST-compliant invoices with accurate GSTIN, HSN/SAC codes, and tax calculations. We support e-invoicing (IRN generation) for applicable businesses and provide export-ready GST reports.',
    },
    {
      question: 'Which payment gateways do you support?',
      answer:
        'We integrate with Razorpay, PayU, and support direct UPI payment links. You can also connect bank APIs for statement-based reconciliation. Custom gateway integrations are available on Enterprise plans.',
    },
    {
      question: 'How does auto-reconciliation work?',
      answer:
        'BillDesk matches incoming payments from bank statements or payment gateway webhooks with your invoices automatically. Any mismatches are flagged for review, reducing manual work by up to 90%.',
    },
    {
      question: 'Can I use this for multiple business locations?',
      answer:
        'Yes! The Business and Enterprise plans support multi-branch operations with separate GST numbers, invoice series, and reconciliation flows for each location.',
    },
    {
      question: 'Do you offer a free trial?',
      answer:
        'Yes, we offer a 14-day free trial on all plans with no credit card required. You get full access to features so you can test everything before committing.',
    },
    {
      question: 'Can I export data to Tally or Zoho Books?',
      answer:
        'Yes, BillDesk provides ready exports for Tally, Zoho Books, and Excel. You can also generate GST-ready reports (GSTR-1, GSTR-3B formats) for easy filing.',
    },
    {
      question: 'What if I need e-invoicing support?',
      answer:
        'E-invoicing (IRN generation) is available on Business and Enterprise plans. We support e-invoicing for applicable businesses as per GST regulations. Please consult your tax advisor for specific compliance requirements.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Security is our top priority. We use bank-grade encryption, maintain complete audit trails, and offer role-based access controls. Enterprise plans include 99.9% uptime SLA and optional on-premise deployment.',
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto">
            Everything you need to know about NextWeb BillDesk.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-200 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-base lg:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-blue-500 flex-shrink-0" />
                )}
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
                    <div className="px-6 pb-4 text-sm lg:text-base text-gray-700">
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
