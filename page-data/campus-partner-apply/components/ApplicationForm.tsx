"use client";

import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, Controller, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  User, MapPin, Briefcase, School, Handshake, MessageSquare, 
  ArrowLeft, ArrowRight, Check, Send, Loader2 
} from 'lucide-react';
import { API_URL } from '../../../env';

// Indian states for dropdown
const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu and Kashmir', 'Ladakh',
];

const professionOptions = [
  'Teacher',
  'Tuition / Coaching Owner',
  'School Staff / Admin',
  'Education Consultant',
  'IT / Service Provider',
  'Freelancer',
  'Other',
];

const experienceOptions = [
  'Less than 1 year',
  '1–3 years',
  '3–5 years',
  '5+ years',
];

const schoolCountOptions = [
  '1–5',
  '6–10',
  '11–25',
  '25+',
];

const partnershipPreferences = [
  { value: 'district-operator', label: 'District Operator' },
  { value: 'referral-partner', label: 'Referral Partner' },
  { value: 'not-sure', label: 'Not sure (guide me)' },
];

// Form validation schema
const schema = yup.object({
  // Step 1: Personal Info
  fullName: yup.string().required('Full name is required').min(3, 'Name must be at least 3 characters'),
  phone: yup.string().required('Phone number is required').matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  email: yup.string().email('Enter a valid email').optional(),
  
  // Step 2: Location
  state: yup.string().required('Please select your state'),
  district: yup.string().required('District/City is required'),
  
  // Step 3: Professional Background
  profession: yup.string().required('Please select your profession'),
  experience: yup.string().required('Please select your experience'),
  
  // Step 4: School Network
  interactsWithSchools: yup.string().required('Please answer this question'),
  schoolCount: yup.string().when('interactsWithSchools', {
    is: 'yes',
    then: (schema) => schema.required('Please select the number of schools'),
    otherwise: (schema) => schema.optional(),
  }),
  
  // Step 5: Partnership Preference
  partnershipType: yup.string().required('Please select your preference'),
  
  // Step 6: Additional Context
  additionalContext: yup.string().optional(),
  
  // Consent
  consent: yup.boolean().oneOf([true], 'You must agree to the terms'),
});

type FormData = yup.InferType<typeof schema>;

const steps = [
  { id: 1, title: 'Personal Information', icon: User },
  { id: 2, title: 'Location Details', icon: MapPin },
  { id: 3, title: 'Professional Background', icon: Briefcase },
  { id: 4, title: 'School Network', icon: School },
  { id: 5, title: 'Partnership Preference', icon: Handshake },
  { id: 6, title: 'Additional Context', icon: MessageSquare },
];

export interface ApplicationFormRef {
  scrollToForm: () => void;
}

interface ApplicationFormProps {
  onSubmitSuccess?: () => void;
}

const ApplicationForm = forwardRef<ApplicationFormRef, ApplicationFormProps>(
  ({ onSubmitSuccess }, ref) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
      control,
      handleSubmit,
      watch,
      trigger,
      formState: { errors },
    } = useForm<FormData>({
      resolver: yupResolver(schema) as unknown as Resolver<FormData>,
      mode: 'onChange',
      defaultValues: {
        fullName: '',
        phone: '',
        email: '',
        state: '',
        district: '',
        profession: '',
        experience: '',
        interactsWithSchools: '',
        schoolCount: '',
        partnershipType: '',
        additionalContext: '',
        consent: false,
      },
    });

    const interactsWithSchools = watch('interactsWithSchools');

    useImperativeHandle(ref, () => ({
      scrollToForm: () => {
        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
      },
    }));

    const validateStep = async (step: number): Promise<boolean> => {
      let fieldsToValidate: (keyof FormData)[] = [];
      
      switch (step) {
        case 1:
          fieldsToValidate = ['fullName', 'phone'];
          break;
        case 2:
          fieldsToValidate = ['state', 'district'];
          break;
        case 3:
          fieldsToValidate = ['profession', 'experience'];
          break;
        case 4:
          fieldsToValidate = interactsWithSchools === 'yes' 
            ? ['interactsWithSchools', 'schoolCount'] 
            : ['interactsWithSchools'];
          break;
        case 5:
          fieldsToValidate = ['partnershipType'];
          break;
        case 6:
          fieldsToValidate = ['consent'];
          break;
      }
      
      return await trigger(fieldsToValidate);
    };

    const handleNext = async () => {
      const isValid = await validateStep(currentStep);
      if (isValid && currentStep < 6) {
        setCurrentStep(currentStep + 1);
      }
    };

    const handlePrev = () => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
    };

    const onSubmit = async (data: FormData) => {
      setIsSubmitting(true);
      setError(null);

      const payload = {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || undefined,
        state: data.state,
        district: data.district,
        profession: data.profession,
        experience: data.experience,
        interactsWithSchools: data.interactsWithSchools,
        schoolCount: data.interactsWithSchools === 'yes' ? data.schoolCount : undefined,
        partnershipType: data.partnershipType,
        additionalContext: data.additionalContext || undefined,
        consent: data.consent,
      };

      try {
        const response = await fetch(`${API_URL}/api/partner-request/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Failed to submit application');
        }

        setIsSuccess(true);
        onSubmitSuccess?.();
      } catch (err) {
        console.error('Submit error:', err);
        setError('Something went wrong. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

    if (isSuccess) {
      return (
        <section id="application-form" className="py-16 sm:py-24 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Application Submitted!
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                Thank you for your interest in partnering with us. Our team will review 
                your application and contact you within 2-3 business days.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 max-w-md mx-auto">
                <p className="text-blue-800 text-sm">
                  <strong>What happens next?</strong><br />
                  Our team will verify your details and check region availability. 
                  If shortlisted, we'll schedule a brief onboarding call.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      );
    }

    return (
      <section id="application-form" className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Apply to Become a Partner
            </h2>
            <p className="text-lg text-gray-600">
              Please fill in the details below. All applications are reviewed manually.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      step.id < currentStep
                        ? 'bg-green-500 text-white'
                        : step.id === currentStep
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.id < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`text-xs mt-2 hidden sm:block ${
                    step.id === currentStep ? 'text-blue-600 font-medium' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            {/* Progress Bar */}
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                          <User className="w-5 h-5 text-blue-600" />
                          Personal Information
                        </h3>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="fullName"
                          control={control}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="Enter your legal name as per ID"
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 ${
                                errors.fullName ? 'border-red-500' : 'border-gray-300'
                              }`}
                            />
                          )}
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field }) => (
                            <div className="flex">
                              <span className="inline-flex items-center px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500">
                                +91
                              </span>
                              <input
                                {...field}
                                type="tel"
                                placeholder="9876543210"
                                className={`flex-1 px-4 py-3 border rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 ${
                                  errors.phone ? 'border-red-500' : 'border-gray-300'
                                }`}
                              />
                            </div>
                          )}
                        />
                        <p className="text-gray-500 text-xs mt-1">We will use this for verification and communication</p>
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-gray-400">(Optional)</span>
                        </label>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="email"
                              placeholder="your@email.com"
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                              }`}
                            />
                          )}
                        />
                        <p className="text-gray-500 text-xs mt-1">Recommended for updates and documents</p>
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Location Details */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-blue-600" />
                          Location Details
                        </h3>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="state"
                          control={control}
                          render={({ field }) => (
                            <select
                              {...field}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 ${
                                errors.state ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              <option value="">Select State</option>
                              {indianStates.map((state) => (
                                <option key={state} value={state}>{state}</option>
                              ))}
                            </select>
                          )}
                        />
                        {errors.state && (
                          <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          District / City <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="district"
                          control={control}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="Your primary area of operation"
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 ${
                                errors.district ? 'border-red-500' : 'border-gray-300'
                              }`}
                            />
                          )}
                        />
                        {errors.district && (
                          <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Professional Background */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-blue-600" />
                          Professional Background
                        </h3>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Profession <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="profession"
                          control={control}
                          render={({ field }) => (
                            <select
                              {...field}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 ${
                                errors.profession ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              <option value="">Select Profession</option>
                              {professionOptions.map((profession) => (
                                <option key={profession} value={profession}>{profession}</option>
                              ))}
                            </select>
                          )}
                        />
                        {errors.profession && (
                          <p className="text-red-500 text-sm mt-1">{errors.profession.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Years of Experience <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="experience"
                          control={control}
                          render={({ field }) => (
                            <select
                              {...field}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 ${
                                errors.experience ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              <option value="">Select Experience</option>
                              {experienceOptions.map((exp) => (
                                <option key={exp} value={exp}>{exp}</option>
                              ))}
                            </select>
                          )}
                        />
                        {errors.experience && (
                          <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: School Network */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                          <School className="w-5 h-5 text-blue-600" />
                          School Network
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">Help us understand your school connections</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Do you currently interact with schools? <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="interactsWithSchools"
                          control={control}
                          render={({ field }) => (
                            <div className="flex gap-4">
                              <label className={`flex items-center gap-3 flex-1 p-4 border rounded-lg cursor-pointer transition-all ${
                                field.value === 'yes' 
                                  ? 'border-blue-500 bg-blue-50' 
                                  : 'border-gray-300 hover:border-gray-400'
                              }`}>
                                <input
                                  type="radio"
                                  {...field}
                                  value="yes"
                                  checked={field.value === 'yes'}
                                  className="w-4 h-4 text-blue-600"
                                />
                                <span className="font-medium text-gray-900">Yes</span>
                              </label>
                              <label className={`flex items-center gap-3 flex-1 p-4 border rounded-lg cursor-pointer transition-all ${
                                field.value === 'no' 
                                  ? 'border-blue-500 bg-blue-50' 
                                  : 'border-gray-300 hover:border-gray-400'
                              }`}>
                                <input
                                  type="radio"
                                  {...field}
                                  value="no"
                                  checked={field.value === 'no'}
                                  className="w-4 h-4 text-blue-600"
                                />
                                <span className="font-medium text-gray-900">No</span>
                              </label>
                            </div>
                          )}
                        />
                        {errors.interactsWithSchools && (
                          <p className="text-red-500 text-sm mt-1">{errors.interactsWithSchools.message}</p>
                        )}
                      </div>

                      {interactsWithSchools === 'yes' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Approximate number of schools you are connected with <span className="text-red-500">*</span>
                          </label>
                          <Controller
                            name="schoolCount"
                            control={control}
                            render={({ field }) => (
                              <select
                                {...field}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 ${
                                  errors.schoolCount ? 'border-red-500' : 'border-gray-300'
                                }`}
                              >
                                <option value="">Select Range</option>
                                {schoolCountOptions.map((count) => (
                                  <option key={count} value={count}>{count}</option>
                                ))}
                              </select>
                            )}
                          />
                          <p className="text-gray-500 text-xs mt-1">This helps us understand region capacity. This is not a commitment.</p>
                          {errors.schoolCount && (
                            <p className="text-red-500 text-sm mt-1">{errors.schoolCount.message}</p>
                          )}
                        </motion.div>
                      )}

                      {interactsWithSchools === 'no' && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="bg-amber-50 border border-amber-200 rounded-lg p-4"
                        >
                          <p className="text-amber-800 text-sm">
                            <strong>Note:</strong> School connections are important for this partnership. 
                            You can still apply, and we'll discuss options during the onboarding call.
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  )}

                  {/* Step 5: Partnership Preference */}
                  {currentStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                          <Handshake className="w-5 h-5 text-blue-600" />
                          Partnership Preference
                        </h3>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Which partnership are you interested in? <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="partnershipType"
                          control={control}
                          render={({ field }) => (
                            <div className="space-y-3">
                              {partnershipPreferences.map((pref) => (
                                <label
                                  key={pref.value}
                                  className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                                    field.value === pref.value 
                                      ? 'border-blue-500 bg-blue-50' 
                                      : 'border-gray-300 hover:border-gray-400'
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    {...field}
                                    value={pref.value}
                                    checked={field.value === pref.value}
                                    className="w-4 h-4 text-blue-600"
                                  />
                                  <span className="font-medium text-gray-900">{pref.label}</span>
                                </label>
                              ))}
                            </div>
                          )}
                        />
                        {errors.partnershipType && (
                          <p className="text-red-500 text-sm mt-1">{errors.partnershipType.message}</p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 6: Additional Context & Consent */}
                  {currentStep === 6 && (
                    <motion.div
                      key="step6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                          <MessageSquare className="w-5 h-5 text-blue-600" />
                          Additional Context
                        </h3>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Anything you would like us to know? <span className="text-gray-400">(Optional)</span>
                        </label>
                        <Controller
                          name="additionalContext"
                          control={control}
                          render={({ field }) => (
                            <textarea
                              {...field}
                              rows={4}
                              placeholder="Share context about your background, region, or any questions you have..."
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 resize-none"
                            />
                          )}
                        />
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-4">Consent & Confirmation</h4>
                        <Controller
                          name="consent"
                          control={control}
                          render={({ field }) => (
                            <label className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                              field.value ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                            }`}>
                              <input
                                type="checkbox"
                                checked={field.value}
                                onChange={field.onChange}
                                className="w-5 h-5 text-blue-600 mt-0.5 rounded"
                              />
                              <span className="text-gray-700 text-sm">
                                I confirm that the information provided is accurate and understand that 
                                this is a <strong>partnership application, not a job offer</strong>. 
                                I agree to be contacted regarding this application.
                              </span>
                            </label>
                          )}
                        />
                        {errors.consent && (
                          <p className="text-red-500 text-sm mt-2">{errors.consent.message}</p>
                        )}
                      </div>

                      {/* Final Note */}
                      <div className="bg-slate-50 rounded-lg p-4 text-sm text-gray-600">
                        <strong className="text-gray-900">Final Note Before Submission</strong>
                        <p className="mt-1">
                          We review every application carefully to ensure the partnership is beneficial 
                          on both sides. If shortlisted, our team will contact you directly.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      currentStep === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </button>

                  {currentStep < 6 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Application
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ApplicationForm.displayName = 'ApplicationForm';

export default ApplicationForm;
