import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      business: "Glamour Studio, Mumbai",
      role: "Salon Owner",
      content: "SalonHub transformed our operations completely. We reduced no-shows by 70% with automated WhatsApp reminders and our monthly revenue increased by ₹35,000. The inventory management saves us hours every week.",
      rating: 5,
      metric: "70% reduction in no-shows",
      avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Rajesh Patel", 
      business: "Elegance Spa Chain",
      role: "Franchise Owner",
      content: "Managing 4 locations was a nightmare before SalonHub. Now I can see real-time analytics from all locations, track staff performance, and ensure consistent service quality. ROI was achieved in just 2 months.",
      rating: 5,
      metric: "4 locations managed seamlessly",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Kavita Nair",
      business: "Beauty Bliss, Bangalore", 
      role: "Manager",
      content: "The mobile app is a game-changer for our stylists. They can access client history, update services, and process payments instantly. Our customer satisfaction scores improved by 40% since implementation.",
      rating: 5,
      metric: "40% increase in satisfaction",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Amit Kumar",
      business: "Style Studio, Delhi",
      role: "Salon Owner", 
      content: "GST compliance was always a headache until SalonHub. Now all invoices are automatically compliant, and the detailed reports help during tax filing. The loyalty program boosted repeat customers by 55%.",
      rating: 5,
      metric: "55% increase in repeat customers",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="customers" className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Customer Success</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            Loved by salon owners{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
              across India
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Join thousands of satisfied salon owners who have transformed their business with SalonHub
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-pink-500" />
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Avatar & Info */}
                <div className="text-center md:text-left">
                  <motion.div
                    className="w-24 h-24 mx-auto md:mx-0 mb-4 rounded-full overflow-hidden shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <h4 className="font-poppins font-bold text-xl text-slate-900 mb-2">
                    {testimonials[currentIndex].name}
                  </h4>
                  
                  <div className="text-blue-500 font-semibold mb-1">
                    {testimonials[currentIndex].business}
                  </div>
                  
                  <div className="text-slate-600 text-sm mb-4">
                    {testimonials[currentIndex].role}
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center md:justify-start space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Metric */}
                  <div className="inline-flex items-center bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonials[currentIndex].metric}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                  <motion.blockquote
                    className="text-lg md:text-xl text-slate-700 leading-relaxed italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-blue-500 transition-colors" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-pink-500' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-blue-500 transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Customer Logos */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <p className="text-slate-600 font-medium">Trusted by leading salons and spas</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "Naturals", "VLCC", "Lakme", "Jawed Habib", "Green Trends", "Looks"
            ].map((brand, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                <div className="bg-slate-100 rounded-lg p-4 font-semibold text-slate-600 hover:bg-blue/10 hover:text-blue-500 transition-colors duration-200">
                  {brand}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;