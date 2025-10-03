import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, MapPin, Clock, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';

interface HeroProps {
  onRequestDemo: () => void;
  onSeeFeatures: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRequestDemo, onSeeFeatures }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const technicianRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const ctx = gsap.context(() => {
        // Animate technician path
        gsap.fromTo('.route-path', 
          { strokeDasharray: 1000, strokeDashoffset: 1000 },
          { strokeDashoffset: 0, duration: 3, ease: 'power2.inOut', delay: 0.5 }
        );

        // Animate technician markers
        gsap.fromTo('.technician-marker',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, stagger: 0.5, delay: 1 }
        );

        // Animate status updates
        gsap.fromTo('.status-update',
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.8, delay: 1.5 }
        );
      }, mapRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" className="absolute top-0 left-0 w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue/10 rounded-full text-blue-500 text-sm font-medium ">
                <MapPin className="w-4 h-4 mr-2" />
                Made for Indian Field Teams
              </div>

              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Manage field teams, service jobs, and site operations{' '}
                <span className="text-blue-500">easily</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Schedule, dispatch, track and invoice — mobile-first field service management 
                software built for Indian SMBs. Reduce missed visits, cut paperwork, and 
                boost your first-time-fix rates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onRequestDemo}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Request Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onSeeFeatures}
                  className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  See Features
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                  Offline-first mobile app
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                  WhatsApp integration
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                  Real-time GPS tracking
                </div>
              </div>
            </motion.div>
          </div>

          {/* Animated Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            ref={mapRef}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              {/* Map Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Live Field Operations</h3>
                <div className="flex items-center text-teal-500 text-sm">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></div>
                  5 Active Technicians
                </div>
              </div>

              {/* Map Area */}
              <div className="relative bg-gray-50 rounded-xl p-8 h-80 overflow-hidden">
                {/* Route SVG */}
                <svg viewBox="0 0 300 200" className="absolute inset-0 w-full h-full">
                  <path
                    className="route-path"
                    d="M50 50 Q150 20 250 60 Q280 100 230 150 Q180 180 120 160 Q80 140 50 50"
                    fill="none"
                    stroke="#0EA5A4"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="5,5"
                  />
                </svg>

                {/* Technician Markers */}
                <div className="technician-marker absolute top-8 left-12 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="technician-marker absolute top-12 right-16 bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="technician-marker absolute bottom-16 left-20 bg-teal-500 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Status Updates */}
              <div className="space-y-3 mt-6">
                <div className="status-update flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">Rajesh K. - Job completed</span>
                  </div>
                  <span className="text-xs text-gray-500">2 min ago</span>
                </div>
                <div className="status-update flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">Priya S. - En route to site</span>
                  </div>
                  <span className="text-xs text-gray-500">5 min ago</span>
                </div>
                <div className="status-update flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">Amit M. - Job started</span>
                  </div>
                  <span className="text-xs text-gray-500">8 min ago</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;