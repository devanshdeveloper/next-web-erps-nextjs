import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "NextWeb Agency reduced our proposal turnaround time from 3 days to 4 hours. We're closing 40% more deals simply because we can respond faster.",
      author: 'Priya Sharma',
      role: 'Founder & CEO',
      company: 'Digital Craft Studios',
      metric: '40% more wins',
    },
    {
      quote: "Before NextWeb, we had no idea which projects were profitable. Now we can see margins in real-time and make smarter decisions about resource allocation.",
      author: 'Rahul Mehta',
      role: 'Operations Director',
      company: 'Brand Vision Agency',
      metric: '25% margin improvement',
    },
    {
      quote: "The client portal has been a game-changer. Our clients love the transparency, and we've cut back-and-forth emails by 60%. Everyone knows exactly what's happening.",
      author: 'Anita Desai',
      role: 'Account Lead',
      company: 'Creative Collective',
      metric: '60% fewer emails',
    },
  ];

  const logos = [
    'Digital Craft Studios',
    'Brand Vision Agency',
    'Creative Collective',
    'NextGen Marketing',
    'Studio Artisan',
    'Velocity Digital',
  ];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="customers" className="py-16 lg:py-24 bg-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Trusted by leading agencies
          </h2>
          <p className="text-xl text-gray-600">
            See how agencies are growing with NextWeb
          </p>
        </motion.div>

        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <span className="text-gray-600 font-medium text-sm">{logo}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl relative"
            >
              <Quote className="absolute top-6 left-6 text-blue/20" size={48} />

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                    {testimonials[activeIndex].metric}
                  </div>
                  <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                    {testimonials[activeIndex].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-blue-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-blue-500 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-blue-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
