import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDemo: React.FC = () => {
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    {
      title: "Dashboard Overview",
      description: "Get a complete view of your business performance at a glance",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Order Management",
      description: "Process orders efficiently with automated workflows",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Inventory Control",
      description: "Keep track of stock levels across all your sales channels",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "GST Invoicing",
      description: "Generate compliant invoices with automated tax calculations",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const nextDemo = () => {
    setCurrentDemo((prev) => (prev + 1) % demos.length);
  };

  const prevDemo = () => {
    setCurrentDemo((prev) => (prev - 1 + demos.length) % demos.length);
  };

  return (
    <section id="demo" className="demo-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            See NextWeb Commerce <span className="text-blue-500">in action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our intuitive interface designed specifically for Indian SMBs
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Demo Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {demos.map((demo, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentDemo(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentDemo === index
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {demo.title}
              </motion.button>
            ))}
          </div>

          {/* Demo Display */}
          <motion.div
            className="demo-mockup relative bg-gray-900 rounded-2xl p-4 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Browser Chrome */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 bg-gray-700 text-gray-300 px-4 py-1 rounded text-sm flex-1">
                  app.nextwebcommerce.com
                </div>
              </div>

              {/* Demo Content */}
              <div className="bg-white rounded-lg overflow-hidden aspect-video relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDemo}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={demos[currentDemo].image}
                      alt={demos[currentDemo].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">{demos[currentDemo].title}</h3>
                      <p className="text-gray-200 max-w-lg">{demos[currentDemo].description}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevDemo}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextDemo}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Play Button Overlay */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:bg-orange-600 transition-colors"
                >
                  <Play size={24} className="ml-1" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Demo Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {demos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDemo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentDemo === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;