import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is NextWeb People compliant with Indian payroll regulations?',
      answer: 'Yes, NextWeb People is fully compliant with Indian payroll regulations including PF, ESI, professional tax, and GST requirements. Our system automatically calculates statutory deductions and generates compliance reports.',
    },
    {
      question: 'Can I integrate biometric devices with the system?',
      answer: 'Absolutely! We support integration with popular biometric devices from Matrix, eSSL, and other major brands. We also offer mobile attendance tracking through our Android app for remote workers.',
    },
    {
      question: 'What kind of support do you provide during implementation?',
      answer: 'We provide comprehensive implementation support including data migration, system setup, team training, and dedicated account management. Our support team is available via phone, email, and chat.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 30-day free trial with full access to all features. No credit card required to start. You can onboard your team and test all functionalities during the trial period.',
    },
    {
      question: 'How does pricing work for growing teams?',
      answer: 'Our pricing is per employee per month, with different tiers based on your team size and feature requirements. You only pay for active employees, and you can upgrade or downgrade your plan anytime.',
    },
    {
      question: 'Can employees access payslips and apply for leaves on mobile?',
      answer: 'Yes, our mobile app allows employees to view payslips, apply for leaves, check attendance records, and update their profiles. The app works on both Android and iOS devices.',
    },
    {
      question: 'How secure is our company data?',
      answer: 'We use enterprise-grade security with SSL encryption, regular data backups, and comply with data protection standards. Your data is stored in secure Indian data centers with 99.9% uptime guarantee.',
    },
    {
      question: 'Do you provide training for our HR team?',
      answer: 'Yes, we provide comprehensive training including live sessions, documentation, video tutorials, and ongoing support. Our customer success team ensures your HR team is comfortable using all features.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about NextWeb People and how it works.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
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
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Still have questions? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Schedule a Call
            </button>
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;