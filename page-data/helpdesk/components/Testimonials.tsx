import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { initScrollAnimation } from '../lib/gsap-init';

const testimonials = [
  {
    quote: 'Our response time dropped from 4 hours to 15 minutes. SLA compliance went from 60% to 95%. Customers are happier and our team is less stressed.',
    author: 'Meera Reddy',
    role: 'Support Manager',
    company: 'FashionHub India',
    metric: '95% SLA compliance',
  },
  {
    quote: 'WhatsApp integration alone saved us 2 hours per day. Having all messages in one inbox means nothing falls through the cracks anymore.',
    author: 'Arjun Kapoor',
    role: 'Operations Head',
    company: 'QuickServe Logistics',
    metric: '2 hours saved daily',
  },
  {
    quote: 'The automation features are incredible. Canned replies and auto-routing let our small team handle 3x more tickets without hiring more agents.',
    author: 'Sneha Gupta',
    role: 'Customer Success Lead',
    company: 'BeautyBox',
    metric: '3x ticket volume',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      initScrollAnimation(sectionRef.current, {
        y: 40,
        duration: 0.7,
      });
    }
  }, []);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Loved by support teams
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how teams across India are transforming their customer support
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-500/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{testimonials[current].quote}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg text-gray-900">{testimonials[current].author}</div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[current].role}, {testimonials[current].company}
                    </div>
                  </div>
                  <div className="bg-cyan-500/10 text-cyan-500 px-4 py-2 rounded-full font-semibold text-sm ">
                    {testimonials[current].metric}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-500/90 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current ? 'bg-blue-500 w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-500/90 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
