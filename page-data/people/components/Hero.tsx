import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { PlayIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import DemoForm from './DemoForm';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

  useEffect(() => {
    if (!mockupRef.current) return;

    // Animate hero mockup on load
    gsap.fromTo(mockupRef.current,
      { 
        opacity: 0, 
        scale: 0.9,
        y: 50 
      },
      { 
        opacity: 1, 
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.6 
      }
    );

    // Floating animation for mockup
    gsap.to(mockupRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });
  }, []);

  const scrollToProductTour = () => {
    const element = document.querySelector('#product-tour');
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: element,
        ease: 'power2.inOut'
      });
    }
  };

  return (
    <>
      <section ref={heroRef} className="relative pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-br from-gray-100 to-white overflow-hidden text-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6">
                  Hire, pay and grow your people — from one simple platform
                </h1>
              </motion.div>

              <motion.p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Payroll (PF/ESI), attendance, hiring and appraisals — GST & India-ready for growing businesses.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button
                  onClick={() => setIsDemoFormOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center gap-2 group"
                >
                  Request Demo
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={scrollToProductTour}
                  className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <PlayIcon className="w-5 h-5" />
                  Watch Tour
                </button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="mt-12 flex items-center gap-8 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  GST Compliant
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  PF/ESI Ready
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  Mobile First
                </div>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div ref={mockupRef} className="relative">
                {/* Main Dashboard Mockup */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Payroll Dashboard</h3>
                      <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">March 2024</span>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-blue-500">156</div>
                        <div className="text-xs text-gray-600">Employees</div>
                      </div>
                      <div className="bg-teal-500/10 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-teal-500 ">₹18.5L</div>
                        <div className="text-xs text-gray-600">Total Payout</div>
                      </div>
                      <div className="bg-orange-500/10 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-orange-500">98.2%</div>
                        <div className="text-xs text-gray-600">Attendance</div>
                      </div>
                    </div>
                    
                    {/* Recent Actions */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700">Recent Actions</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Payroll processed for March</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>PF/ESI filed successfully</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span>5 leave approvals pending</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-3 border"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-xs text-gray-600">Attendance</div>
                  <div className="text-lg font-bold text-green-600">98.2%</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-8 bg-white rounded-lg shadow-lg p-3 border"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <div className="text-xs text-gray-600">New Hire</div>
                  <div className="text-sm font-semibold">Priya Singh</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-500/5 to-transparent pointer-events-none" />
      </section>

      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </>
  );
};

export default Hero;