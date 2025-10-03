import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone, Mail, User, Building, Globe } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    businessType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        businessType: '',
        message: ''
      });
      onClose();
    }, 3000);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  if (isSubmitted) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              variants={modalVariants}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <X className="text-white transform rotate-45" size={16} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank you!</h3>
              <p className="text-gray-600 mb-6">
                We've received your demo request. Our team will reach out to you within 24 hours to schedule your personalized demo.
              </p>
              <p className="text-sm text-gray-500">
                This window will close automatically in a few seconds.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Request a Demo</h2>
                <p className="text-gray-600 mt-2">
                  See NextWeb Commerce in action with a personalized demo
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </motion.button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Business Email *"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number *"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <Building className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name *"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <Globe className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="Website (optional)"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white"
                  >
                    <option value="">Business Type *</option>
                    <option value="fashion">Fashion & Apparel</option>
                    <option value="electronics">Electronics & Gadgets</option>
                    <option value="home">Home & Decor</option>
                    <option value="health">Health & Beauty</option>
                    <option value="books">Books & Stationery</option>
                    <option value="food">Food & Beverages</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your current setup and what you'd like to see in the demo..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="bg-gray-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Calendar className="mr-2 text-blue-500" size={20} />
                  What happens next?
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• We'll call you within 24 hours to schedule your demo</li>
                  <li>• 30-minute personalized demo focused on your business needs</li>
                  <li>• Q&A session with our product experts</li>
                  <li>• Custom pricing discussion based on your requirements</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  className="flex-1 bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Schedule My Demo'
                  )}
                </motion.button>
                
                <motion.button
                  type="button"
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 sm:flex-none sm:px-8 border-2 border-gray-300 text-gray-700 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-200"
                >
                  Maybe Later
                </motion.button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service. 
                We'll only use your information to schedule and conduct your demo.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;