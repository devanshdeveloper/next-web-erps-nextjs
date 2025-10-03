import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface HeroProps {
  onDemoClick: () => void;
}

export default function Hero({ onDemoClick }: HeroProps) {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              One system for admissions, attendance & fee collection
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Centralize admin, reduce paperwork, and keep parents informed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onDemoClick}
                className="bg-orange-500 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-orange/90 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg"
              >
                Request Demo
              </button>
              <button className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2">
                <Download size={20} />
                Download Brochure
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl p-8 transform rotate-1">
              <div className="bg-white rounded-lg p-6 transform -rotate-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <h3 className="font-semibold text-gray-900">Dashboard Overview</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-500">1,243</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-500">94%</div>
                      <div className="text-sm text-gray-600">Attendance</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-500">₹8.2L</div>
                      <div className="text-sm text-gray-600">Collected</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">68</div>
                      <div className="text-sm text-gray-600">Staff</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-semibold">
                        P
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">Parent Notification</div>
                        <div className="text-gray-600">Fee reminder sent via WhatsApp</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
