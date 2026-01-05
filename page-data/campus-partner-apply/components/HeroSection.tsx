"use client";

import { motion } from 'framer-motion';
import { Shield, Users, MapPin, Calendar, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onApplyClick: () => void;
}

const trustIndicators = [
  { icon: Shield, label: 'Used by real schools across India' },
  { icon: Users, label: 'Transparent payouts & clear terms' },
  { icon: MapPin, label: 'Human onboarding, not automated approvals' },
  { icon: Calendar, label: 'Long-term, recurring partnership model' },
];

export default function HeroSection({ onApplyClick }: HeroSectionProps) {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Limited partnerships available per district
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Apply to Partner with{' '}
            <span className="text-blue-600">Next Web Campus</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            We work with a limited number of partners in each region to ensure long-term value, 
            clarity, and trust. If you already work with schools or educational institutions, 
            this partnership is designed to fit naturally into what you do.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <button
              onClick={onApplyClick}
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Start Your Application
            </button>
            <p className="text-sm text-gray-500 mt-3">
              No fees required at any stage
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {trustIndicators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm text-gray-700 text-left font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
