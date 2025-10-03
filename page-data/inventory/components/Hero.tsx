import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Star, Shield, Zap } from 'lucide-react';
import { gsap } from '../lib/gsap-init';
import { trackCTAClick } from '../lib/analytics';

const Hero = ({ onOpenDemoForm }) => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero image parallax effect
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Star, value: "4.8/5", label: "User Rating" },
    { icon: Shield, value: "99.9%", label: "Uptime" },
    { icon: Zap, value: "50%", label: "Faster Ops" }
  ];

  const scrollToDemoForm = () => {
    trackCTAClick('hero', 'Request Demo');
    onOpenDemoForm();
  };

  const scrollToFeatures = () => {
    trackCTAClick('hero', 'See Features');
    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
      
      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-green/10 text-green-500 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              <span>GST-Ready • Trusted by 500+ SMBs</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-gray-900 mb-6 leading-tight"
            >
              Real-time inventory across locations —{' '}
              <span className="text-blue-500">zero stock surprises</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              GST-compliant inventory ERP with barcode scanning, batch tracking, and Android device compatibility for Indian retailers and distributors.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 153, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToDemoForm}
                className="bg-orange-500 text-white px-8 py-4 rounded-md font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-orange-600 transition-all duration-200 shadow-lg"
              >
                <span>Request Demo</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, borderColor: "#0047AB" }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToFeatures}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md font-semibold text-lg flex items-center justify-center space-x-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-200"
              >
                <Play className="w-5 h-5" />
                <span>See Features</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                  <stat.icon className="w-4 h-4 text-blue-500" />
                  <span className="font-semibold text-gray-900">{stat.value}</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div ref={imageRef} className="relative">
              {/* Mock Dashboard */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">Live Inventory Dashboard</h3>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Live</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="text-2xl font-bold text-blue-500">2,847</div>
                      <div className="text-sm text-gray-600">Total Items</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <div className="text-2xl font-bold text-green-500">₹12.4L</div>
                      <div className="text-sm text-gray-600">Stock Value</div>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-black">Low Stock Alerts</span>
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">23</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
              >
                <Shield className="w-6 h-6" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-3 rounded-full shadow-lg"
              >
                <Zap className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;