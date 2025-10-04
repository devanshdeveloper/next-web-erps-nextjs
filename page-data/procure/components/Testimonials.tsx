import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Operations Manager",
      company: "FreshMart Retail Chain",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "NextWeb Procure helped us cut PO turnaround time by 60% across our 25 stores. The automated approval workflows are a game-changer.",
      metric: "60% faster PO processing",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Procurement Head",
      company: "TechManuf Industries",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "The 3-way invoice matching feature saved us from costly payment errors. We've prevented over ₹50 lakh in discrepancies this year.",
      metric: "₹50L+ errors prevented",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Finance Manager", 
      company: "Spice Route Restaurants",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "Managing 200+ suppliers was overwhelming. NextWeb Procure's vendor performance tracking helps us work with only the most reliable partners.",
      metric: "200+ vendors managed",
      rating: 5
    }
  ];

  const customerLogos = [
    { name: "TechCorp", logo: "🏢" },
    { name: "RetailMax", logo: "🏪" },
    { name: "FoodChain", logo: "🍽️" },
    { name: "ManufaCo", logo: "🏭" },
    { name: "TradeHub", logo: "📦" },
    { name: "ServicePro", logo: "⚙️" }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by procurement teams across India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers say about their transformation with NextWeb Procure
          </p>
        </motion.div>

        {/* Customer Logos */}
        <div className="mb-16">
          <p className="text-center text-gray-600 mb-8 font-medium">Trusted by leading businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {customerLogos.map((customer, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex items-center space-x-2 text-2xl font-bold text-gray-700"
              >
                <span className="text-3xl">{customer.logo}</span>
                <span className="text-lg">{customer.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200"
            >
              <div className="flex items-start justify-between mb-6">
                <Quote className="h-12 w-12 text-blue-500/20 flex-shrink-0" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-500/10"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-blue-500 font-medium">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
                
                <div className="bg-teal-500/10 px-4 py-2 rounded-lg">
                  <p className="text-teal-500 font-semibold text-sm text-gray-900">
                    {testimonials[currentIndex].metric}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors duration-200"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors duration-200"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;