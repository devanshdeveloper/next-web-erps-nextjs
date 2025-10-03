import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does SalonHub help reduce no-shows?",
      answer: "SalonHub sends automated WhatsApp and SMS reminders 24 hours and 2 hours before appointments. Clients can confirm, reschedule, or cancel directly through the messages. This system typically reduces no-shows by 60-80%. We also offer waitlist management to fill any last-minute cancellations."
    },
    {
      question: "Is SalonHub compliant with GST regulations?",
      answer: "Yes, SalonHub is fully GST-compliant. All invoices automatically include correct GST calculations based on service types, generate proper GST invoices with required details, and provide detailed GST reports for easy filing. The system stays updated with the latest GST rules and regulations."
    },
    {
      question: "Can I manage multiple salon locations?",
      answer: "Absolutely! Our Growth and Enterprise plans support multiple locations. You can view consolidated reports, manage staff across locations, maintain consistent pricing and services, and track performance metrics for each location from a single dashboard."
    },
    {
      question: "How does the inventory management work?",
      answer: "Our inventory system tracks all products and supplies in real-time. It automatically deducts items when sold, sends low-stock alerts, helps manage suppliers and purchase orders, and provides detailed inventory reports. You can also set reorder points to never run out of essential items."
    },
    {
      question: "What payment methods does the POS support?",
      answer: "SalonHub POS supports cash, credit/debit cards, UPI payments (PhonePe, Google Pay, Paytm), digital wallets, and installment payments through partners like Bajaj Finserv. All transactions are automatically recorded and reconciled."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes! We provide comprehensive onboarding including free setup assistance, staff training sessions (online/on-site), video tutorials and documentation, and ongoing 24/7 customer support. Our team ensures you're comfortable using all features before going live."
    },
    {
      question: "Can clients book appointments online?",
      answer: "Yes, SalonHub provides a beautiful online booking portal that you can share with clients or embed on your website. Clients can view available slots, select preferred stylists, choose services, and book instantly. They'll receive automatic confirmations and can manage their bookings online."
    },
    {
      question: "Is my salon data secure and backed up?",
      answer: "Absolutely. We use enterprise-grade security with SSL encryption, regular automated backups stored in multiple locations, compliance with data protection standards, and restricted access controls. Your data is more secure with us than on local computers or basic software."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 text-pink-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            Got questions? We've got{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
              answers
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about SalonHub and how it can transform your salon business
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ x: 5 }}
                >
                  <h3 className="font-poppins font-semibold text-lg text-slate-900 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-pink-500" />
                    ) : (
                      <Plus className="w-6 h-6 text-slate-400" />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-slate-100 pt-4">
                          <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Still have questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our salon experts are here to help you find the perfect solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
              <motion.button
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;