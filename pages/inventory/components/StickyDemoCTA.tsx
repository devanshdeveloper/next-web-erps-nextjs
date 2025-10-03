import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const StickyDemoCTA = ({ onClick }) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-4 left-4 right-4 z-40 lg:hidden"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold shadow-2xl flex items-center justify-center space-x-2"
      >
        <Calendar className="w-5 h-5" />
        <span>Request Demo</span>
      </motion.button>
    </motion.div>
  );
};

export default StickyDemoCTA;