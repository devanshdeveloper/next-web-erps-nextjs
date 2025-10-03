import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface StickyMobileCTAProps {
  onCTAClick: () => void;
}

export default function StickyMobileCTA({ onCTAClick }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t-2 border-gray-200 shadow-2xl p-4"
    >
      <button
        onClick={onCTAClick}
        className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange/90 transition-all shadow-lg"
      >
        Request Demo
      </button>
    </motion.div>
  );
}
