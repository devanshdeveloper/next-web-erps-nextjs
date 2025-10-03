import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does implementation typically take?",
      answer: "Implementation usually takes 4-12 weeks depending on your plant complexity and customization requirements. We provide dedicated project managers and training throughout the process."
    },
    {
      question: "Can NextWeb Plant integrate with our existing ERP system?",
      answer: "Yes, NextWeb Plant offers pre-built connectors for major ERP systems including SAP, Oracle, and Tally. We also provide custom API development for proprietary systems."
    },
    {
      question: "Is training provided for our operators and supervisors?",
      answer: "Comprehensive training is included with all plans. We offer on-site training, video tutorials, and ongoing support to ensure your team is comfortable with the system."
    },
    {
      question: "What mobile devices are supported?",
      answer: "NextWeb Plant works on Android devices, tablets, and supports barcode/RFID scanners from major manufacturers like Zebra, Honeywell, and Datalogic."
    },
    {
      question: "How does pricing work for multiple plants?",
      answer: "Our Growth and Enterprise plans support multiple plants with consolidated reporting. Pricing scales based on the number of plants and concurrent users."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We offer 24/7 local support in India, regular system updates, and access to our customer success team. Enterprise customers get dedicated support managers."
    },
    {
      question: "Can we customize workflows for our specific processes?",
      answer: "Yes, NextWeb Plant is highly configurable. You can customize workflows, forms, reports, and approval processes to match your specific manufacturing requirements."
    },
    {
      question: "How secure is our manufacturing data?",
      answer: "We use enterprise-grade security including data encryption, role-based access control, and regular security audits. Your data is hosted in secure Indian data centers with full compliance."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>
          <p className="text-xl text-slate-600">
            Get answers to common questions about NextWeb Plant
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-semibold text-slate-800 text-lg pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="text-blue-500" size={24} />
                  ) : (
                    <ChevronDown className="text-slate-600" size={24} />
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
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
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
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-6">
            Still have questions? Our team is here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;