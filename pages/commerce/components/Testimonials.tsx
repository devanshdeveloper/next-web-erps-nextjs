import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  name, 
  role, 
  company, 
  content, 
  rating,
  image 
}) => {
  return (
    <div className="testimonial-card bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Quote className="text-blue-500/20" size={48} />
        <div className="flex ml-auto">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-current" size={20} />
          ))}
        </div>
      </div>
      
      <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
        "{content}"
      </p>
      
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600">{role}</p>
          <p className="text-blue-500 font-medium">{company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: TestimonialProps[] = [
    {
      name: "Rajesh Kumar",
      role: "Founder",
      company: "StyleCraft Fashion",
      content: "NextWeb Commerce transformed our business completely. We went from managing everything manually to having a fully automated system. Our sales increased by 40% in just 3 months!",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager", 
      company: "HomeCraft Decor",
      content: "The GST compliance features saved us countless hours. What used to take our accountant 2 days now happens automatically. The multi-channel sync is incredible too.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Arjun Patel",
      role: "CEO",
      company: "TechGadgets Plus",
      content: "Being able to sell on our website, Amazon, and Flipkart while having everything sync perfectly has been a game-changer. Inventory management was our biggest headache, now it's completely automated.",
      rating: 5,
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="customers" className="testimonials-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What our customers <span className="text-blue-500">say about us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied Indian SMBs who have transformed their e-commerce operations
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <TestimonialCard {...testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-full transition-colors duration-200"
            >
              <ChevronLeft size={24} />
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
              className="p-3 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-full transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by businesses across India</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">5000+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">₹100Cr+</div>
                <div className="text-gray-600">GMV Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">4.9★</div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;