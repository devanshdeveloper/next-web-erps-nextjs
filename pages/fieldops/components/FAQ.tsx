import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does the offline mobile app work?',
      answer: 'Our mobile app stores job data locally and syncs automatically when internet connection is restored. Technicians can complete jobs, take photos, capture signatures, and update status even without network coverage.'
    },
    {
      question: 'Can I integrate with my existing CRM or ERP system?',
      answer: 'Yes, NextWeb FieldOps provides REST APIs and supports integrations with popular CRM/ERP systems. Our team assists with the integration setup and data migration to ensure smooth transition.'
    },
    {
      question: 'What kind of customer support do you provide?',
      answer: 'We offer 24/7 technical support via phone, email, and WhatsApp. Enterprise customers get dedicated account managers and priority support with guaranteed response times.'
    },
    {
      question: 'How does the WhatsApp integration work?',
      answer: 'We integrate with WhatsApp Business API to send automated job updates, ETAs, invoices, and reminders to customers. You can also customize message templates and use your own business WhatsApp number.'
    },
    {
      question: 'Is there a minimum contract period?',
      answer: 'No, we offer month-to-month billing with no long-term contracts. You can cancel anytime. However, annual plans come with significant discounts and additional features.'
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer: 'We use bank-grade encryption (AES-256) for data protection, maintain SOC 2 compliance, and store data in Indian data centers. All location tracking requires explicit user consent and follows local privacy laws.'
    },
    {
      question: 'Can I track parts and inventory consumption?',
      answer: 'Yes, our parts tracking module integrates with NextWeb Inventory or your existing inventory system. Technicians can scan barcodes, update stock levels, and automatically generate reorder alerts.'
    },
    {
      question: 'What happens during the free trial?',
      answer: 'You get full access to all features for 30 days, including mobile apps, integrations, and support. Our team provides setup assistance, data migration, and training to ensure you experience the full value of the platform.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about NextWeb FieldOps features, 
            pricing, and implementation.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-semibold text-lg text-gray-900 pr-4">
                  {faq.question}
                </h3>
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
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-white rounded-xl p-8 shadow-sm border border-gray-100"
        >
          <h3 className="font-poppins font-bold text-xl text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you choose the right plan and get started with NextWeb FieldOps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue/90 transition-colors duration-200"
            >
              Call: +91 98765 43210
            </motion.a>
            <motion.a
              href="mailto:support@nextweb.co.in"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-200"
            >
              Email Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;