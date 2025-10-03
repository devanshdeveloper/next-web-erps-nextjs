import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div
      className="border border-gray-200 rounded-lg overflow-hidden"
      initial={false}
    >
      <motion.button
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <h3 className="font-semibold text-gray-900 pr-8">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <Minus className="text-blue-500 flex-shrink-0" size={24} />
          ) : (
            <Plus className="text-blue-500 flex-shrink-0" size={24} />
          )}
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 bg-gray-50">
              <p className="text-gray-700 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can I get started with NextWeb Commerce?",
      answer: "You can be up and running in under 30 minutes. Simply sign up, import your products (CSV supported), and start taking orders. Our setup wizard guides you through each step, and our support team is available to help."
    },
    {
      question: "Is NextWeb Commerce compliant with Indian GST regulations?",
      answer: "Yes, absolutely. NextWeb Commerce is fully GST-compliant and generates invoices that meet all Indian tax requirements. We automatically calculate GST rates, handle HSN codes, and provide all necessary reports for filing returns."
    },
    {
      question: "Can I integrate with marketplaces like Amazon and Flipkart?",
      answer: "Yes, we offer direct integrations with all major Indian marketplaces including Amazon, Flipkart, Myntra, Meesho, and many others. Orders and inventory sync automatically across all channels."
    },
    {
      question: "What payment gateways do you support?",
      answer: "We integrate with all popular Indian payment gateways including Razorpay, PayU, Paytm, Cashfree, Instamojo, and CCAvenue. You can offer your customers multiple payment options including UPI, cards, net banking, and wallets."
    },
    {
      question: "Do you provide customer support in Hindi?",
      answer: "Yes, our customer support team provides assistance in both English and Hindi. We understand the needs of Indian businesses and offer phone, email, and chat support during business hours."
    },
    {
      question: "Can I migrate my existing data from other platforms?",
      answer: "Absolutely. We provide free data migration services for your products, customers, and order history from platforms like Shopify, WooCommerce, Magento, or even Excel sheets. Our team handles the entire migration process."
    },
    {
      question: "What are the transaction fees?",
      answer: "NextWeb Commerce doesn't charge transaction fees. You only pay the monthly subscription and any fees charged by your chosen payment gateway or shipping partner. This helps keep your costs predictable and low."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently asked <span className="text-blue-500">questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? Reach out to our support team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help. Get in touch and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-200"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;