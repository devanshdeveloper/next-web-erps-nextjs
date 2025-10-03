import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap, ScrollTrigger } from '../lib/gsap-init';
import { ArrowRight, CheckCircle2, Users, FileText, Calendar, DollarSign } from 'lucide-react';

interface HeroProps {
  onRequestDemo: () => void;
}

export default function Hero({ onRequestDemo }: HeroProps) {
  const workflowRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gsap || typeof window === 'undefined') return;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !workflowRef.current || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.workflow-step', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const workflowSteps = [
    { icon: Users, label: 'Pipeline', color: 'from-blue-500 to-blue-600' },
    { icon: FileText, label: 'Proposal', color: 'from-indigo-500 to-indigo-600' },
    { icon: Calendar, label: 'Project', color: 'from-purple-500 to-purple-600' },
    { icon: DollarSign, label: 'Invoice', color: 'from-green-500 to-green-600' },
  ];

  return (
    <section ref={heroRef} className="relative bg-gradient-to-b from-gray-100 to-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Win clients. Run projects.{' '}
              <span className="text-blue-500">Get paid</span> — all in one platform.
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              CRM, proposals, resourcing, timesheets and GST-ready billing for agencies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onRequestDemo}
                className="px-8 py-4 bg-orange-500 text-white rounded-md font-semibold text-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-lg"
              >
                Request Demo
                <ArrowRight size={20} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#pricing"
                className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-md font-semibold text-lg hover:bg-blue-500 hover:text-white transition-colors"
              >
                Start Free Trial
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-600" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-600" />
                <span>14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-600" />
                <span>GST ready</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            ref={workflowRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="space-y-6">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.label}
                      className="workflow-step flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{step.label}</div>
                        <div className="text-sm text-gray-500">Step {index + 1}</div>
                      </div>
                      {index < workflowSteps.length - 1 && (
                        <ArrowRight className="text-gray-300" size={20} />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
