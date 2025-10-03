import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  cta = "Learn more",
  className = ""
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`feature-card bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue/10 rounded-lg mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      <motion.button
        whileHover={{ x: 5 }}
        className="inline-flex items-center text-blue-500 font-medium hover:text-blue/80 transition-colors"
      >
        {cta}
        <ArrowRight size={16} className="ml-2" />
      </motion.button>
    </motion.div>
  );
};

export default FeatureCard;