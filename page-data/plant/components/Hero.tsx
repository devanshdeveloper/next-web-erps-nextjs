import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

interface HeroProps {
  onDemoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  const scrollToTour = () => {
    document.getElementById('product-tour')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-16 lg:pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm font-semibold mb-6"
            >
              <Zap size={16} className="mr-2" />
              Real-Time Manufacturing Control
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Plan, produce and track your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                factory operations
              </span>{' '}
              in real time
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-slate-600 mb-8 max-w-2xl"
            >
              Work orders, BOMs, scheduling, quality & maintenance — all on a single plant floor platform designed for Indian manufacturers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={onDemoClick}
                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Demo
                <ArrowRight size={20} className="ml-2" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTour}
                className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Play size={20} className="mr-2" />
                See Product Tour
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center lg:justify-start items-center space-x-8 mt-12"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">500+</div>
                <div className="text-sm text-slate-600">Plants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">98%</div>
                <div className="text-sm text-slate-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">35%</div>
                <div className="text-sm text-slate-600">Less Downtime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="space-y-4"
              >
                {/* Dashboard header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <h3 className="font-semibold text-slate-800">Plant Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Live</span>
                  </div>
                </div>

                {/* Production metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <TrendingUp size={20} className="text-green-500" />
                      <span className="text-xs text-slate-500">OEE</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mt-1">87.5%</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <Users size={20} className="text-blue-500" />
                      <span className="text-xs text-slate-500">Active</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mt-1">24</div>
                  </div>
                </div>

                {/* Work orders */}
                <div className="space-y-3">
                  <h4 className="font-medium text-slate-700">Active Work Orders</h4>
                  {[
                    { id: 'WO-2024-001', status: 'In Progress', progress: 75 },
                    { id: 'WO-2024-002', status: 'Quality Check', progress: 90 },
                    { id: 'WO-2024-003', status: 'Setup', progress: 25 },
                  ].map((order, index) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                    >
                      <div>
                        <div className="font-medium text-sm text-slate-800">{order.id}</div>
                        <div className="text-xs text-slate-600">{order.status}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${order.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-slate-600">{order.progress}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 bg-orange-500 text-white p-3 rounded-lg shadow-lg"
            >
              <TrendingUp size={24} />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-lg shadow-lg"
            >
              <Users size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;