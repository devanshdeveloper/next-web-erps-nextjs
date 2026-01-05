"use client";

import { motion } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';

interface FinalCTAProps {
  onApplyClick: () => void;
}

export default function FinalCTA({ onApplyClick }: FinalCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Partnership Journey?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            This is a long-term partnership built on trust, not a quick signup. 
            We onboard limited partners per district to ensure quality and focus.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              onClick={onApplyClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              <ArrowUp className="w-5 h-5" />
              Go to Application Form
            </motion.button>
            <a
              href="https://wa.me/919999999999?text=Hi, I have a question about the partnership program"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 hover:border-slate-500 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Ask on WhatsApp
            </a>
          </div>

          {/* Trust Points */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">Human Review</div>
              <p className="text-slate-400 text-sm">Every application is personally reviewed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">Limited Spots</div>
              <p className="text-slate-400 text-sm">We onboard carefully, not quickly</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">Zero Fees</div>
              <p className="text-slate-400 text-sm">No charges at any stage</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
