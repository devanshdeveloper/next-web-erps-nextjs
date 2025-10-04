import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "NextWeb FieldOps transformed our AC service business. We've reduced missed appointments by 30% and our customers love getting real-time updates via WhatsApp.",
      author: "Rajesh Patel",
      role: "Owner, Cool Air Services",
      location: "Mumbai",
      rating: 5,
      metric: "30% fewer missed visits"
    },
    {
      quote: "The mobile app works perfectly even in areas with poor network. Our technicians can complete jobs offline and sync later. Game changer for rural installations.",
      author: "Priya Sharma",
      role: "Operations Manager, TechConnect",
      location: "Bangalore",
      rating: 5,
      metric: "40% faster job completion"
    },
    {
      quote: "Route optimization has saved us ₹50,000 monthly in fuel costs alone. Plus the automatic invoicing through BillDesk has improved our cash flow significantly.",
      author: "Mohammed Khan",
      role: "Director, Metro Maintenance",
      location: "Delhi",
      rating: 5,
      metric: "₹50k monthly savings"
    }
  ];

  const logos = [
    'Cool Air Services',
    'TechConnect Solutions', 
    'Metro Maintenance',
    'QuickFix Pro',
    'ServiceMax India',
    'FieldForce'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Loved by service businesses across India
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how field service companies are improving efficiency and customer satisfaction with NextWeb FieldOps.
          </p>
        </motion.div>

        {/* Customer Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 relative"
            >
              <div className="absolute top-4 right-4 text-blue-500/20">
                <Quote className="w-8 h-8" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-teal-500 ">
                      {testimonial.metric}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 mb-8">Trusted by 500+ service businesses</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                <span className="text-xs text-gray-500">{logo}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-teal rounded-2xl p-8 text-white mt-16"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-poppins font-bold text-3xl mb-2">500+</div>
              <div className="text-gray-100">Happy Customers</div>
            </div>
            <div>
              <div className="font-poppins font-bold text-3xl mb-2">15K+</div>
              <div className="text-gray-100">Jobs Completed Daily</div>
            </div>
            <div>
              <div className="font-poppins font-bold text-3xl mb-2">25%</div>
              <div className="text-gray-100">Average Cost Reduction</div>
            </div>
            <div>
              <div className="font-poppins font-bold text-3xl mb-2">99.9%</div>
              <div className="text-gray-100">Uptime Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;