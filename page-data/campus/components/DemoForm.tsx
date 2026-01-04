import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { API_URL } from '../../../env';

interface DemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

// Map student count range to approximate number
const studentCountMap: Record<string, number> = {
  '0-50': 50,
  '51-200': 200,
  '201-500': 500,
  '501-1000': 1000,
  '1000+': 1500,
};

// Map demo time values to backend enum
const demoTimeMap: Record<string, string> = {
  'morning': 'Morning (9 AM - 12 PM)',
  'afternoon': 'Afternoon (12 PM - 3 PM)',
  'evening': 'Evening (3 PM - 6 PM)',
};

export default function DemoForm({ isOpen, onClose }: DemoFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = e.currentTarget;
    const nameParts = (formData.fullName as unknown as HTMLInputElement).value.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const payload = {
      // Core contact information
      firstName,
      lastName,
      email: (formData.email as unknown as HTMLInputElement).value,
      phone: (formData.phone as unknown as HTMLInputElement).value,
      contactRole: (formData.role as unknown as HTMLSelectElement).value,

      // Institute context
      instituteName: (formData.institution as unknown as HTMLInputElement).value,
      noOfStudents: studentCountMap[(formData.students as unknown as HTMLSelectElement).value] || undefined,
      preferredDemoTime: demoTimeMap[(formData.demoTime as unknown as HTMLSelectElement).value] || undefined,

      // Address
      address: {
        city: (formData.city as unknown as HTMLInputElement).value,
      },

      // Product & Intent
      interestedProducts: ['NextWeb Campus'],

      // Lead source
      source: 'product_page' as const,
      landingPage: typeof window !== 'undefined' ? window.location.href : '',

      // Industry context
      industry: 'education' as const,
    };

    try {
      const response = await fetch(`${API_URL}/api/super-admin-lead/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-form-title"
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                <h2 id="demo-form-title" className="font-display text-2xl font-bold text-gray-900">
                  Request a Demo
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Close dialog"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              <div className="p-6">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                      Thank you!
                    </h3>
                    <p className="text-gray-600">
                      We'll contact you shortly to schedule your personalized demo.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-500"
                          placeholder="Rajesh Kumar"
                        />
                      </div>

                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-900 mb-2">
                          Role *
                        </label>
                        <select
                          id="role"
                          name="role"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                        >
                          <option value="">Select role</option>
                          <option value="principal">Principal</option>
                          <option value="director">Director</option>
                          <option value="admin">Administrator</option>
                          <option value="owner">Owner</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="institution" className="block text-sm font-medium text-gray-900 mb-2">
                        School/Institute Name *
                      </label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-500"
                        placeholder="Sunshine Academy"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="students" className="block text-sm font-medium text-gray-900 mb-2">
                          Number of Students *
                        </label>
                        <select
                          id="students"
                          name="students"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                        >
                          <option value="">Select range</option>
                          <option value="0-50">0-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="501-1000">501-1000</option>
                          <option value="1000+">1000+</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-900 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-500"
                          placeholder="Mumbai"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-500"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-500"
                          placeholder="rajesh@school.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="demoTime" className="block text-sm font-medium text-gray-900 mb-2">
                        Preferred Demo Time
                      </label>
                      <select
                        id="demoTime"
                        name="demoTime"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                        <option value="evening">Evening (3 PM - 6 PM)</option>
                      </select>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="mt-1 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to receive communication from NextWeb Campus regarding the demo and product
                        information. I understand my data will be processed as per the privacy policy.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Request Demo
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
