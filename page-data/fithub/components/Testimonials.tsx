import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Owner, PowerFit Gym',
    location: 'Mumbai',
    quote: 'NextWeb FitHub reduced our no-shows by 40% with automated reminders. The UPI integration made billing seamless for our members.',
    metric: '40% fewer no-shows',
  },
  {
    name: 'Priya Sharma',
    role: 'Director, YogaFlow Studios',
    location: 'Bangalore',
    quote: 'Managing three locations was a nightmare before FitHub. Now I see everything in one dashboard — bookings, revenue, trainer schedules.',
    metric: '3x operational efficiency',
  },
  {
    name: 'Amit Patel',
    role: 'Founder, Elite Fitness Chain',
    location: 'Delhi',
    quote: 'The trainer commission calculation alone saves us 10 hours every month. GST receipts are automatic. This is exactly what Indian gyms need.',
    metric: '₹2L+ monthly revenue increase',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="customers" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by fitness professionals across India
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed">
                "{testimonials[current].quote}"
              </blockquote>

              <div className="bg-emerald/10 text-emerald px-4 py-2 rounded-lg inline-block mb-6 font-semibold">
                {testimonials[current].metric}
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonials[current].name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonials[current].role} • {testimonials[current].location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prev}
              className="bg-white border-2 border-gray-300 p-3 rounded-full hover:border-blue-500 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current ? 'bg-blue-500 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="bg-white border-2 border-gray-300 p-3 rounded-full hover:border-blue-500 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
