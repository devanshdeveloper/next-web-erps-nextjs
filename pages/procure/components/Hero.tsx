import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import DemoForm from './DemoForm';

const Hero = () => {
  const [showDemoForm, setShowDemoForm] = React.useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && flowRef.current) {
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.fromTo('.hero-animation', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
      );

      // Animate the workflow flow
      gsap.fromTo('.workflow-step',
        { opacity: 0, scale: 0.8, y: 20 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.3,
          delay: 1.2,
          ease: "back.out(1.7)"
        }
      );

      // Animate connecting lines
      gsap.fromTo('.workflow-line',
        { scaleX: 0 },
        { 
          scaleX: 1, 
          duration: 0.4, 
          stagger: 0.2,
          delay: 2,
          ease: "power2.out"
        }
      );
    }
  }, []);

  const workflowSteps = [
    { title: "Create PO", icon: "📝", color: "bg-blue-500" },
    { title: "Send RFQ", icon: "📤", color: "bg-purple-500" },
    { title: "Compare Quotes", icon: "📊", color: "bg-green-500" },
    { title: "Approve & Generate", icon: "✅", color: "bg-orange-500" },
    { title: "GRN & Match", icon: "📦", color: "bg-teal-500" }
  ];

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 pt-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#0047AB" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="hero-animation text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Simplify purchase orders &{' '}
                <span className="gradient-text">supplier workflows</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="hero-animation text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Create POs, compare quotes, approve purchases and reconcile receipts — all in one place.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hero-animation flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 153, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDemoForm(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold text-lg flex items-center justify-center space-x-2 transition-colors duration-200"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-md font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-200"
                >
                  <Play className="h-5 w-5" />
                  <span>See Features</span>
                </motion.button>
              </motion.div>

              {/* Trust indicators */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="hero-animation text-sm text-gray-600"
              >
                No credit card required • Demo in 24 hours • GST-ready
              </motion.p>
            </div>

            {/* Animated Workflow */}
            <div ref={flowRef} className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                  Complete Procurement Flow
                </h3>
                
                <div className="space-y-4">
                  {workflowSteps.map((step, index) => (
                    <div key={index} className="relative">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="workflow-step flex items-center space-x-4 p-4 bg-gray-50 rounded-lg cursor-pointer"
                      >
                        <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white text-xl`}>
                          {step.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{step.title}</h4>
                          <p className="text-sm text-gray-600">Step {index + 1}</p>
                        </div>
                      </motion.div>
                      
                      {index < workflowSteps.length - 1 && (
                        <div className="workflow-line absolute left-6 top-16 w-px h-4 bg-gradient-to-b from-gray-300 to-transparent transform origin-top"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          >
            <div className="scroll-indicator">
              <ChevronDown className="h-6 w-6 text-gray-600 mx-auto" />
              <p className="text-sm text-gray-600 mt-2">Scroll to explore</p>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoForm isOpen={showDemoForm} onClose={() => setShowDemoForm(false)} />
    </>
  );
};

export default Hero;