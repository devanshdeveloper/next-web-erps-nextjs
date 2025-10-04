import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      company: "Precision Auto Parts Ltd",
      logo: "PA",
      industry: "Automotive",
      metric: "Reduced lead time by 28%",
      quote: "NextWeb Plant transformed our production planning. Real-time visibility across all work orders has eliminated bottlenecks.",
      author: "Rajesh Kumar",
      role: "Plant Manager"
    },
    {
      company: "FreshPack Industries",
      logo: "FP",
      industry: "FMCG",
      metric: "Downtime reduced by 35%", 
      quote: "The mobile-first approach means our supervisors can update production status from anywhere on the floor.",
      author: "Priya Sharma",
      role: "Operations Head"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Customer <span className="text-blue-500">Success Stories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how manufacturing leaders are transforming their operations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 text-blue-500/20" size={32} />
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-xl mr-4">
                  {testimonial.logo}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">{testimonial.company}</h3>
                  <div className="flex items-center">
                    <span className="text-slate-600 text-sm mr-3">{testimonial.industry}</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                      {testimonial.metric}
                    </span>
                  </div>
                </div>
              </div>

              <blockquote className="text-slate-700 mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.author}</div>
                  <div className="text-slate-600 text-sm">{testimonial.role}</div>
                </div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "500+", label: "Manufacturing Plants" },
              { metric: "98%", label: "System Uptime" },
              { metric: "35%", label: "Avg. Downtime Reduction" },
              { metric: "24/7", label: "Local Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-500">{stat.metric}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;