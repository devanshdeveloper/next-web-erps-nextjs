import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can we get started with NextWeb Procure?",
      answer: "Most businesses are up and running within 48 hours. Our onboarding team helps with data migration, user setup, and workflow configuration. For enterprises, implementation typically takes 1-2 weeks including training and custom integrations."
    },
    {
      question: "Does NextWeb Procure integrate with Indian accounting software?",
      answer: "Yes! We have direct integrations with Tally, Zoho Books, QuickBooks India, and other popular accounting systems. We also support custom integrations via API for enterprise customers using specialized ERP systems."
    },
    {
      question: "Is the software GST-compliant?",
      answer: "Absolutely. NextWeb Procure generates GST-compliant purchase records, maintains proper audit trails, and supports GSTR filing requirements. All reports can be exported in formats accepted by GST authorities."
    },
    {
      question: "Can we manage multiple locations from one account?",
      answer: "Yes, our Growth and Enterprise plans support multi-location management. You can set location-specific approval workflows, track inventory per location, and generate consolidated or location-wise reports."
    },
    {
      question: "What kind of vendor information can we track?",
      answer: "You can store complete vendor profiles including KYC documents, GST certificates, bank details, performance ratings, payment terms, and delivery history. Our vendor scorecard helps you identify the most reliable suppliers."
    },
    {
      question: "How does the approval workflow work?",
      answer: "You can set up multi-level approval rules based on PO amount, category, or vendor. Approvals can be routed automatically via email/SMS, and approvers can approve directly from their mobile phones. All approvals are logged for audit purposes."
    },
    {
      question: "What support is included?",
      answer: "All plans include email support and knowledge base access. Growth plan customers get priority support, while Enterprise customers receive dedicated account management and phone support. We also provide free training sessions for your team."
    },
    {
      question: "Can we try NextWeb Procure before purchasing?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. Our team will also provide a personalized demo to show how NextWeb Procure fits your specific business needs. No credit card required for the trial."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about NextWeb Procure
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-6 w-6 text-gray-600" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our procurement experts are here to help you find the right solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md font-semibold transition-all duration-200"
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;