import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        'BillDesk cut our payment collection time from 45 days to 18 days. The auto-reconciliation alone saves us 10 hours every week.',
      author: 'Rajesh Kumar',
      role: 'Owner, Kumar Electronics',
      metric: '60% faster collections',
    },
    {
      quote:
        'E-invoicing compliance was a nightmare until we found BillDesk. IRN generation is instant, and GST filing is now stress-free.',
      author: 'Priya Sharma',
      role: 'Finance Manager, ShopKart',
      metric: '100% GST compliant',
    },
    {
      quote:
        'The payment link feature is a game-changer. Our customers love paying via UPI, and we get instant confirmations.',
      author: 'Amit Patel',
      role: 'Founder, Patel Trading Co.',
      metric: '₹2.5Cr processed monthly',
    },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-12 lg:py-20 bg-blue-500 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 lg:mb-16"
        >
          Trusted by Indian Businesses
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-6 lg:p-10 rounded-xl"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg lg:text-xl mb-6 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-base lg:text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm lg:text-base text-white/80">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
                <div className="bg-orange-500 px-4 py-2 rounded-lg">
                  <p className="text-sm lg:text-base font-semibold">
                    {testimonials[currentIndex].metric}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
