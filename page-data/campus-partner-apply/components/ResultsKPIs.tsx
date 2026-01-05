"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, TrendingUp, Clock, Award } from 'lucide-react';

const metrics = [
  {
    icon: Calendar,
    value: '15–30',
    suffix: 'days',
    label: 'Time to first school onboarding',
    description: 'Partners typically onboard their first school within this timeframe',
  },
  {
    icon: Users,
    value: '40',
    suffix: '+',
    label: 'Active partner districts',
    description: 'Across multiple states in India',
  },
  {
    icon: TrendingUp,
    value: '92',
    suffix: '%',
    label: 'Partner retention rate',
    description: 'Partners who continue beyond their first year',
  },
  {
    icon: Clock,
    value: '4',
    suffix: 'hrs',
    label: 'Average support response',
    description: 'For partner queries during business hours',
  },
  {
    icon: Award,
    value: '85',
    suffix: '%',
    label: 'School retention rate',
    description: 'Schools continue using the platform year-over-year',
  },
];

function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
          const duration = 1500;
          const steps = 60;
          const increment = numericValue / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setDisplayValue(numericValue);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const isRange = value.includes('–');

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-blue-600">
      {isRange ? value : displayValue}
      <span className="text-2xl">{suffix}</span>
    </div>
  );
}

export default function ResultsKPIs() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real-World Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Grounded metrics from our partner network. 
            Actual results vary based on region and involvement.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.slice(0, 3).map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 text-center hover:bg-slate-100 transition-colors"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-7 h-7 text-blue-600" />
              </div>
              <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              <div className="font-semibold text-gray-900 mt-2 mb-1">{metric.label}</div>
              <p className="text-gray-500 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
          {metrics.slice(3).map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 text-center hover:bg-slate-100 transition-colors"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-7 h-7 text-blue-600" />
              </div>
              <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              <div className="font-semibold text-gray-900 mt-2 mb-1">{metric.label}</div>
              <p className="text-gray-500 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-12 max-w-2xl mx-auto"
        >
          * Metrics are based on aggregate data from our partner network. Individual results 
          depend on region, effort, and market conditions. We do not guarantee specific earnings or outcomes.
        </motion.p>
      </div>
    </section>
  );
}
