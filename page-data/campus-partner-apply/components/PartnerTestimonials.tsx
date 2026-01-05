"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The process felt professional and transparent. There was no pressure, and everything was clearly explained. I knew exactly what to expect before I even made my first introduction.",
    author: "Amit Sharma",
    role: "Education Consultant",
    location: "Indore, MP",
    initials: "AS",
  },
  {
    quote: "I didn't need to sell anything aggressively. I just introduced schools I already knew and trusted. The product speaks for itself once schools start using it.",
    author: "Neha Jain",
    role: "Former Teacher",
    location: "Bhopal, MP",
    initials: "NJ",
  },
  {
    quote: "The best part is clarity. I always know what I'll earn and why. No surprises, no complicated calculations. Just straightforward, predictable partnership.",
    author: "Rajesh Verma",
    role: "Tuition Center Owner",
    location: "Jabalpur, MP",
    initials: "RV",
  },
];

export default function PartnerTestimonials() {
  return (
    <section className="py-16 sm:py-24 bg-blue-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Hear from partners who have been through the process and are actively working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
            >
              <Quote className="w-10 h-10 text-blue-200 mb-4" />
              <p className="text-blue-50 leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-blue-200">
                    {testimonial.role}, {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
