import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'HR Manager',
      company: 'TechCorp Solutions',
      content: 'NextWeb People transformed our payroll process. What used to take 2 days now takes 2 hours. The GST compliance features are exactly what we needed as a growing tech company.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Founder',
      company: 'Kumar Manufacturing',
      content: 'The biometric integration works flawlessly with our factory setup. Attendance tracking is now accurate and our workers love the mobile payslip feature. Highly recommended for manufacturing.',
      rating: 5,
    },
    {
      name: 'Anita Desai',
      role: 'Operations Head',
      company: 'Retail Plus Chain',
      content: 'Managing 8 store locations was a nightmare before NextWeb People. Now I can track attendance, process payroll, and manage performance reviews across all stores from one dashboard.',
      rating: 5,
    },
  ];

  const customerLogos = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'Kumar Mfg', logo: 'KM' },
    { name: 'Retail Plus', logo: 'RP' },
    { name: 'GlobalSoft', logo: 'GS' },
    { name: 'NexGen', logo: 'NG' },
    { name: 'SmartBiz', logo: 'SB' },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by growing businesses across India
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how companies are streamlining their HR processes with NextWeb People.
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <StarIcon key={starIndex} className="w-5 h-5 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm text-gray-900">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer logos */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-8">Trusted by 500+ companies</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {customerLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-bold text-gray-600 text-sm">{logo.logo}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Join hundreds of businesses already using NextWeb People.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Start Your Success Story
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;