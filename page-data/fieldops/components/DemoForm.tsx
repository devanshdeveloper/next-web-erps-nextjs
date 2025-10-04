import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { X, CheckCircle, Phone, Building, Users, MapPin } from 'lucide-react';

interface DemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  technicians: string;
  useCase: string;
  city: string;
  consent: boolean;
}

const schema =  yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  company: yup.string().required('Company name is required'),
  phone: yup.string().required('Phone number is required').matches(/^[6-9]\d{9}$/, 'Enter a valid Indian mobile number'),
  email: yup.string().required('Email is required').email('Enter a valid email address'),
  technicians: yup.string().required('Please select number of technicians'),
  useCase: yup.string().required('Please select your use case'),
  city: yup.string().required('City is required'),
  consent: yup.boolean().required('You must agree to the terms').oneOf([true], 'You must agree to the terms')
});

const DemoForm: React.FC<DemoFormProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission - replace with actual webhook/API call
      console.log('Form submitted:', data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      reset();
      
      // Auto-close after success message
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const useCaseOptions = [
    'Appliance Repair & Service',
    'HVAC Maintenance',
    'Telecom Installation',
    'Plumbing Services',
    'Electrical Services',
    'Home Services',
    'Logistics & Delivery',
    'Multi-Service Operations',
    'Other'
  ];

  const technicianOptions = [
    '1-5 technicians',
    '6-15 technicians',
    '16-50 technicians',
    '50+ technicians'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success State */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-teal-500 " />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We've received your demo request. Our team will contact you within 24 hours.
                  </p>
                  <div className="text-sm text-gray-500">
                    Expect a call from +91 98765 43210
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            {!isSubmitted && (
              <>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-2">
                    Request a Demo
                  </h3>
                  <p className="text-gray-600">
                    See how NextWeb FieldOps can transform your field operations. 
                    Get a personalized 30-minute demo.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                        errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Company & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        <Building className="w-4 h-4 inline mr-1" />
                        Company *
                      </label>
                      <input
                        {...register('company')}
                        type="text"
                        id="company"
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                          errors.company ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                        placeholder="Company name"
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Mobile *
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                          errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                        placeholder="9876543210"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                        errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Technicians & City */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="technicians" className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="w-4 h-4 inline mr-1" />
                        Team Size *
                      </label>
                      <select
                        {...register('technicians')}
                        id="technicians"
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                          errors.technicians ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white`}
                      >
                        <option value="">Select team size</option>
                        {technicianOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      {errors.technicians && (
                        <p className="text-red-500 text-sm mt-1">{errors.technicians.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        City *
                      </label>
                      <input
                        {...register('city')}
                        type="text"
                        id="city"
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                          errors.city ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                        placeholder="Mumbai, Delhi, etc."
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Use Case */}
                  <div>
                    <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Use Case *
                    </label>
                    <select
                      {...register('useCase')}
                      id="useCase"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                        errors.useCase ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white`}
                    >
                      <option value="">Select your industry</option>
                      {useCaseOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.useCase && (
                      <p className="text-red-500 text-sm mt-1">{errors.useCase.message}</p>
                    )}
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-3">
                    <input
                      {...register('consent')}
                      type="checkbox"
                      id="consent"
                      className="mt-1 w-4 h-4 text-blue-500 border-2 border-gray-300 rounded focus:ring-blue-500/20 focus:ring-2"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I agree to receive product updates and demo scheduling calls from NextWeb FieldOps. 
                      You can unsubscribe anytime. *
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-red-500 text-sm">{errors.consent.message}</p>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-orange-500/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Request...
                      </>
                    ) : (
                      'Schedule My Demo'
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    Our team will call within 24 hours. Demo takes ~30 minutes.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoForm;