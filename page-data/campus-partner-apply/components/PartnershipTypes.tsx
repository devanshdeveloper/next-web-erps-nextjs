"use client";

import { motion } from 'framer-motion';
import { Building2, UserPlus, Clock, TrendingUp, Users, Zap } from 'lucide-react';

const partnershipTypes = [
  {
    id: 'district-operator',
    title: 'District Operator',
    subtitle: 'For those ready to lead in their district',
    description: 'Manage partnerships across your entire district. You coordinate school onboarding, build relationships, and grow a sustainable territory.',
    features: [
      { icon: Building2, text: 'Manage multiple schools in your district' },
      { icon: Users, text: 'Coordinate onboarding and support' },
      { icon: TrendingUp, text: 'Slab-based recurring commissions' },
      { icon: Clock, text: 'Requires dedicated time commitment' },
    ],
    color: 'blue',
    recommended: true,
  },
  {
    id: 'referral-partner',
    title: 'Referral Partner',
    subtitle: 'For those with school connections',
    description: 'Simply introduce schools you already know. No demos, no support responsibility. Earn on every school that stays active.',
    features: [
      { icon: UserPlus, text: 'Just introduce schools you know' },
      { icon: Zap, text: 'No demos or support required' },
      { icon: TrendingUp, text: 'Fixed recurring commissions' },
      { icon: Clock, text: 'Flexible, part-time friendly' },
    ],
    color: 'emerald',
    recommended: false,
  },
];

export default function PartnershipTypes() {
  return (
    <section id="partnership-types" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Two Ways to Partner
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the partnership model that fits your availability and goals. 
            You can indicate your preference in the application form.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-lg ${
                type.color === 'blue' 
                  ? 'border-blue-200 hover:border-blue-300' 
                  : 'border-emerald-200 hover:border-emerald-300'
              }`}
            >
              {type.recommended && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {type.title}
                </h3>
                <p className={`text-sm font-medium ${
                  type.color === 'blue' ? 'text-blue-600' : 'text-emerald-600'
                }`}>
                  {type.subtitle}
                </p>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {type.description}
              </p>

              <ul className="space-y-4">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      type.color === 'blue' ? 'bg-blue-50' : 'bg-emerald-50'
                    }`}>
                      <feature.icon className={`w-4 h-4 ${
                        type.color === 'blue' ? 'text-blue-600' : 'text-emerald-600'
                      }`} />
                    </div>
                    <span className="text-gray-700 text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500 mt-8 text-sm"
        >
          Not sure which to choose? Select "Not sure (guide me)" in the application form.
        </motion.p>
      </div>
    </section>
  );
}
