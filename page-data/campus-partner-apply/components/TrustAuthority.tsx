"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Target, Heart, Shield } from 'lucide-react';

const trustPoints = [
  {
    icon: GraduationCap,
    title: 'Built for Indian Schools',
    description: 'NextWeb Campus is designed specifically for the Indian education context—from fee structures to exam patterns to parent communication preferences.',
  },
  {
    icon: Target,
    title: 'Used Daily by Real Schools',
    description: 'Our platform handles real operations: attendance marking, fee collection, parent notifications, and administrative workflows—every single day.',
  },
  {
    icon: Heart,
    title: 'Long-term Vision',
    description: 'We are building for the next decade, not the next quarter. Our partnerships are designed to grow and evolve with the education landscape.',
  },
  {
    icon: Shield,
    title: 'Product-First Approach',
    description: 'We invest in our product quality, not aggressive marketing. Schools stay because the product works, which means partners earn sustainably.',
  },
];

export default function TrustAuthority() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Trust Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why We Built This Partnership Program
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Next Web Campus started with a simple observation: schools in India deserve 
              better software. Not expensive enterprise solutions, but thoughtful tools that 
              understand local realities.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We realized early that the best way to reach schools isn't through ads or 
              cold calls—it's through people who already have relationships in education. 
              Teachers, consultants, local service providers who understand their communities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That's why our partnerships are selective. We'd rather work with fewer, 
              committed partners than many who don't align with our values: <strong>transparency, 
              quality, and long-term thinking</strong>.
            </p>
          </motion.div>

          {/* Right: Trust Points */}
          <div className="grid sm:grid-cols-2 gap-6">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
