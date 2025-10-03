import { motion } from 'framer-motion';
import { Check, Bell, FileText, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function ProductTour() {
  const [activeScene, setActiveScene] = useState(0);

  const scenes = [
    {
      icon: Check,
      title: 'Quick Attendance',
      description: 'Mark attendance for entire class in seconds',
      color: 'from-green-400 to-green-600',
      demo: (
        <div className="bg-white rounded-lg p-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b">
            <span className="font-semibold">Class 10-A</span>
            <span className="text-sm text-gray-600">Present: 28/30</span>
          </div>
          {['Aarav Kumar', 'Diya Sharma', 'Rohan Patel'].map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center justify-between p-3 bg-green-50 rounded-lg"
            >
              <span className="font-medium">{name}</span>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.2 + 0.3, type: 'spring' }}
                className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
              >
                <Check className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      icon: Bell,
      title: 'Parent Notifications',
      description: 'Instant WhatsApp alerts for fees and attendance',
      color: 'from-orange-400 to-orange-600',
      demo: (
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <div className="bg-white rounded-2xl p-4 shadow-lg max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900">St. Mary's School</div>
                <div className="text-xs text-gray-500">Today 9:42 AM</div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-lg p-3 text-sm"
            >
              <p className="mb-2">Dear Parent,</p>
              <p>Aarav Kumar was marked present today at 8:30 AM.</p>
              <p className="mt-2 text-xs text-gray-600">Fee balance: ₹5,000</p>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      icon: FileText,
      title: 'GST Receipts',
      description: 'Generate compliant fee receipts instantly',
      color: 'from-blue-400 to-blue-600',
      demo: (
        <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-lg">Fee Receipt</div>
                <div className="text-sm text-gray-600">Receipt #2024-001234</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Date</div>
                <div className="font-medium">15 Jan 2024</div>
              </div>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between mb-2">
                <span>Tuition Fee</span>
                <span>₹10,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>GST (18%)</span>
                <span>₹1,800</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span>₹11,800</span>
              </div>
            </div>
            <div className="bg-green-500 text-white text-center py-2 rounded-md font-semibold">
              PAID
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      icon: TrendingUp,
      title: 'Real-time Insights',
      description: 'Track performance across all metrics',
      color: 'from-purple-400 to-purple-600',
      demo: (
        <div className="bg-white rounded-lg p-6">
          <div className="space-y-4">
            {[
              { label: 'Fee Collection', value: 85, color: 'bg-green-500' },
              { label: 'Attendance Rate', value: 92, color: 'bg-blue-500' },
              { label: 'Student Satisfaction', value: 88, color: 'bg-orange-500' },
            ].map((metric, i) => (
              <div key={metric.label}>
                <div className="flex justify-between mb-1 text-sm">
                  <span className="font-medium">{metric.label}</span>
                  <span className="font-bold">{metric.value}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.value}%` }}
                    transition={{ duration: 1, delay: i * 0.2, ease: 'easeOut' }}
                    className={`h-full ${metric.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-100 to-white" >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            See it in action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore key features through interactive demos
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {scenes.map((scene, index) => (
            <button
              key={index}
              onClick={() => setActiveScene(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                activeScene === index
                  ? 'bg-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <scene.icon size={20} />
              <span className="hidden sm:inline">{scene.title}</span>
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={activeScene}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 text-gray-900"
          >
            <div className="text-center mb-6 ">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                {scenes[activeScene].title}
              </h3>
              <p className="text-gray-600">{scenes[activeScene].description}</p>
            </div>
            {scenes[activeScene].demo}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
