"use client";

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const suitableCriteria = [
  'Regularly interact with schools or educators',
  'Are based in or deeply familiar with your local district',
  'Prefer long-term recurring income over one-time commissions',
  'Value transparency and structured processes',
];

const notSuitableCriteria = [
  'Are looking for instant or guaranteed earnings',
  'Do not have any connection with schools',
  'Prefer online affiliate-style promotions',
  'Are unwilling to go through a short verification process',
];

export default function WhoShouldApply() {
  return (
    <section id="who-should-apply" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Is This Partnership Right for You?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe in transparency. This partnership works best for people who meet 
            specific criteria. Please review before applying.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Suitable */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 border border-green-100 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                This partnership is suitable if you
              </h3>
            </div>
            <ul className="space-y-4">
              {suitableCriteria.map((criteria, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{criteria}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not Suitable */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-50 border border-red-100 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                This may not be suitable if you
              </h3>
            </div>
            <ul className="space-y-4">
              {notSuitableCriteria.map((criteria, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-gray-700">{criteria}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
