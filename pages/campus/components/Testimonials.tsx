import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'NextWeb Campus transformed our fee collection. We went from 60% on-time payments to 92% within three months. The WhatsApp reminders work like magic.',
      author: 'Priya Mehta',
      role: 'Principal',
      institution: 'Sunshine Academy, Mumbai',
      image: '👩‍💼',
    },
    {
      quote:
        'Managing attendance across 15 batches was a nightmare. Now teachers mark it on their phones in seconds, and parents get instant notifications. Game changer.',
      author: 'Rajesh Kumar',
      role: 'Director',
      institution: 'Excellence Coaching Centre, Pune',
      image: '👨‍💼',
    },
    {
      quote:
        'The reporting dashboard gives me visibility across all three campuses. I can see fee collection, attendance trends, and staff performance at a glance.',
      author: 'Anita Desai',
      role: 'Administrator',
      institution: 'Delhi Public School Network',
      image: '👩‍🏫',
    },
  ];

  const logos = [
    { name: 'School 1', initial: 'SA' },
    { name: 'School 2', initial: 'EC' },
    { name: 'School 3', initial: 'DPS' },
    { name: 'School 4', initial: 'RIS' },
    { name: 'School 5', initial: 'KV' },
    { name: 'School 6', initial: 'DIS' },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-blue-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by institutions across India
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Join hundreds of schools and coaching centers already using NextWeb Campus
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all"
            >
              <span className="font-bold text-xl">{logo.initial}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
            >
              <Quote className="w-10 h-10 text-orange-500 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-blue-50 leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-blue-200">
                    {testimonial.role}, {testimonial.institution}
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
