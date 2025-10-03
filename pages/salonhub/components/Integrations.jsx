import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  MessageCircle, 
  Calendar, 
  FileText, 
  Printer, 
  Package,
  Smartphone,
  Zap
} from 'lucide-react';

const Integrations = () => {
  const integrationCategories = [
    {
      title: "Payment Gateways",
      icon: CreditCard,
      color: "blue-500",
      integrations: [
        { name: "Razorpay", description: "India's leading payment gateway", logo: "💳" },
        { name: "PayU", description: "Secure online payments", logo: "💰" },
        { name: "Cashfree", description: "Digital payment solutions", logo: "💸" },
        { name: "Paytm", description: "UPI and wallet payments", logo: "📱" }
      ]
    },
    {
      title: "Communication",
      icon: MessageCircle,
      color: "pink-500",
      integrations: [
        { name: "WhatsApp Business", description: "Automated appointment reminders", logo: "💬" },
        { name: "SMS Gateway", description: "Text message notifications", logo: "📲" },
        { name: "MSG91", description: "Bulk SMS and OTP services", logo: "📧" },
        { name: "Twilio", description: "Global communications platform", logo: "🌐" }
      ]
    },
    {
      title: "Calendar & Scheduling",
      icon: Calendar,
      color: "orange-500",
      integrations: [
        { name: "Google Calendar", description: "Sync appointments with Google", logo: "📅" },
        { name: "Outlook Calendar", description: "Microsoft calendar integration", logo: "📆" },
        { name: "iCal", description: "Universal calendar format", logo: "🗓️" },
        { name: "Apple Calendar", description: "iOS calendar synchronization", logo: "🍎" }
      ]
    },
    {
      title: "Accounting & Finance",
      icon: FileText,
      color: "blue-500",
      integrations: [
        { name: "NextWeb BillDesk", description: "Comprehensive billing solution", logo: "🧾" },
        { name: "Tally", description: "Popular accounting software", logo: "📊" },
        { name: "QuickBooks", description: "Small business accounting", logo: "💼" },
        { name: "Zoho Books", description: "Online accounting software", logo: "📚" }
      ]
    },
    {
      title: "Hardware & POS",
      icon: Printer,
      color: "pink-500",
      integrations: [
        { name: "Thermal Printers", description: "Receipt and bill printing", logo: "🖨️" },
        { name: "Barcode Scanners", description: "Product scanning for inventory", logo: "📊" },
        { name: "Card Readers", description: "EMV and contactless payments", logo: "💳" },
        { name: "Cash Drawers", description: "Secure cash management", logo: "💰" }
      ]
    },
    {
      title: "Business Tools",
      icon: Package,
      color: "orange-500",
      integrations: [
        { name: "Google My Business", description: "Local business visibility", logo: "🏪" },
        { name: "Facebook Pages", description: "Social media booking", logo: "📘" },
        { name: "Instagram Business", description: "Social commerce integration", logo: "📷" },
        { name: "Email Marketing", description: "Customer engagement", logo: "✉️" }
      ]
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue-500':
        return 'bg-blue/10 text-blue-500 border-blue/20';
      case 'pink-500':
        return 'bg-pink-500/10 text-pink-500 border-pink-500/20';
      case 'orange-500':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      default:
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <section id="integrations" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Seamless Integrations</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            Connects with tools{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
              you already use
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            SalonHub integrates seamlessly with popular payment gateways, communication tools, and business applications to create a unified ecosystem for your salon
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-slate-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl border flex items-center justify-center ${getColorClasses(category.color)}`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-slate-900">
                  {category.title}
                </h3>
              </div>

              {/* Integrations List */}
              <div className="space-y-4">
                {category.integrations.map((integration, integrationIndex) => (
                  <motion.div
                    key={integrationIndex}
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (integrationIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-2xl flex-shrink-0">
                      {integration.logo}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 group-hover:text-blue-500 transition-colors">
                        {integration.name}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {integration.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* API Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-12 text-center">
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Smartphone className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                Need a custom integration?
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Our robust API allows you to connect SalonHub with any third-party application. 
                Our development team can help you build custom integrations to meet your specific needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View API Documentation
                </motion.button>
                <motion.button
                  className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-500 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Custom Integration
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: "50+", label: "Integrations" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" },
            { number: "< 1min", label: "Setup Time" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;