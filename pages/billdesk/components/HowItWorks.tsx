import { motion } from 'framer-motion';
import { FileText, Send, CreditCard, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Create Invoice',
      description: 'Build GST-compliant invoices in seconds with templates, HSN codes, and line items.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Send,
      title: 'Send Payment Link',
      description: 'Generate and send UPI or gateway payment links instantly via WhatsApp or email.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: CreditCard,
      title: 'Customer Pays',
      description: 'Customers pay securely through their preferred method—UPI, cards, or net banking.',
      color: 'text-green',
      bgColor: 'bg-green-100',
    },
    {
      icon: CheckCircle2,
      title: 'Auto-Reconcile & Report',
      description: 'Payments match automatically with invoices. Export GST reports and close books faster.',
      color: 'text-orange',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <section id="product" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto">
            From invoice to reconciliation in four simple steps.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center">
                  <div className={`${step.bgColor} w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className={`h-8 w-8 lg:h-10 lg:w-10 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-700">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
