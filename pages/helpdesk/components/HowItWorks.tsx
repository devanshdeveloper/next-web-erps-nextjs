import { useEffect, useRef } from 'react';
import { Mail, Filter, CheckCircle2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { initScrollAnimation } from '../lib/gsap-init';

const steps = [
  {
    icon: Mail,
    number: '01',
    title: 'Receive',
    description: 'Messages from all channels flow into your unified inbox automatically.',
  },
  {
    icon: Filter,
    number: '02',
    title: 'Triage',
    description: 'Smart routing, tags, priorities, and SLA timers organize every ticket.',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Resolve',
    description: 'Use automation, KB articles, and team collaboration to close tickets fast.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Measure',
    description: 'Track SLA compliance, CSAT, and resolution times to improve continuously.',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      initScrollAnimation(sectionRef.current, {
        y: 40,
        duration: 0.7,
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four simple steps to transform your customer support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform -translate-x-1/2" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
