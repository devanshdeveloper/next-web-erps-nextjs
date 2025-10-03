import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ShoppingCart, BarChart3, Package } from 'lucide-react';

interface HeroProps {
  onDemoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  const scrollToFeatures = () => {
    const element = document.querySelector('#features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section className="hero-section relative pt-24 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              Run your online store —{' '}
              <span className="text-blue-500">inventory, orders & billing</span>{' '}
              — on one platform.
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-lg"
            >
              Complete e-commerce ERP built for Indian SMBs. GST-ready, multi-channel sync, and scales with your business.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onDemoClick}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Request Demo</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToFeatures}
                className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Play size={20} />
                <span>See Features</span>
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-8 text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>GST Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Multi-channel Ready</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Product Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-1">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ShoppingCart className="text-blue-500 mb-2" size={24} />
                    <div className="text-2xl font-bold text-gray-900">1,234</div>
                    <div className="text-sm text-gray-600">Orders</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <Package className="text-orange-500 mb-2" size={24} />
                    <div className="text-2xl font-bold text-gray-900">856</div>
                    <div className="text-sm text-gray-600">Products</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <BarChart3 className="text-green-600 mb-2" size={24} />
                    <div className="text-2xl font-bold text-gray-900">₹2.4L</div>
                    <div className="text-sm text-gray-600">Revenue</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-orange-500 rounded-full w-1/2 animate-pulse"></div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full w-5/6 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
            >
              <BarChart3 size={20} />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-3 rounded-full shadow-lg"
            >
              <ShoppingCart size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;