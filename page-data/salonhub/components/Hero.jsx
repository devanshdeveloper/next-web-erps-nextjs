import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Calendar, Users, CreditCard } from 'lucide-react';
import { animateHero } from '../lib/gsap-init';

const Hero = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      animateHero();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              className="inline-flex items-center space-x-2 bg-pink-500/10 text-pink-500 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <CheckCircle className="w-4 h-4" />
              <span>Trusted by 1000+ salons across India</span>
            </motion.div>

            <h1 className="hero-title font-poppins font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-slate-900 mb-6">
              Run your salon{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                smoothly
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-medium text-slate-700">
                bookings, billing & happy clients
              </span>
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Appointment booking, inventory, POS and client CRM — built for salons and spas in India. 
              Increase bookings, reduce no-shows, and run billing smoothly with GST compliance.
            </p>

            <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                className="bg-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-500/90 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero-mockup relative">
            <motion.div 
              className="relative max-w-lg mx-auto"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Main Phone Mockup */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-2">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 space-y-4">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
                    <span>9:41 AM</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-4 h-2 bg-slate-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-semibold text-slate-900">Today's Schedule</h3>
                      <p className="text-sm text-slate-600">15 appointments</p>
                    </div>
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Appointment Cards */}
                  <motion.div 
                    className="space-y-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.3
                        }
                      }
                    }}
                  >
                    {[
                      { time: '10:00 AM', client: 'Priya Sharma', service: 'Hair Cut & Color', stylist: 'Maya', status: 'confirmed' },
                      { time: '11:30 AM', client: 'Anita Gupta', service: 'Manicure & Pedicure', stylist: 'Ravi', status: 'in-progress' },
                      { time: '1:00 PM', client: 'Kavya Patel', service: 'Facial Treatment', stylist: 'Priya', status: 'upcoming' }
                    ].map((appointment, index) => (
                      <motion.div
                        key={index}
                        className={`p-4 rounded-xl border-l-4 ${
                          appointment.status === 'confirmed' ? 'bg-green-50 border-green-500' :
                          appointment.status === 'in-progress' ? 'bg-pink-500/10 border-pink-500' :
                          'bg-orange-500/10 border-orange-500'
                        }`}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-sm font-medium text-slate-900">{appointment.time}</span>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                appointment.status === 'in-progress' ? 'bg-pink-500/20 text-pink-500' :
                                'bg-orange-500/20 text-orange-500/80'
                              }`}>
                                {appointment.status.replace('-', ' ')}
                              </span>
                            </div>
                            <p className="font-medium text-slate-900 text-sm">{appointment.client}</p>
                            <p className="text-xs text-slate-600">{appointment.service}</p>
                            <div className="flex items-center space-x-1 mt-1">
                              <Users className="w-3 h-3 text-slate-400" />
                              <span className="text-xs text-slate-600">{appointment.stylist}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-500">₹12,500</div>
                      <div className="text-xs text-slate-600">Today's Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-pink-500">15</div>
                      <div className="text-xs text-slate-600">Appointments</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">4.8★</div>
                      <div className="text-xs text-slate-600">Avg Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-3"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-xs font-medium text-slate-900">Payment Received</div>
                    <div className="text-xs text-blue-500">₹2,500</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-6 bg-pink-500 text-white rounded-xl shadow-lg p-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-xs font-medium">New Booking!</div>
                <div className="text-xs opacity-90">Salon Express - 3:00 PM</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;