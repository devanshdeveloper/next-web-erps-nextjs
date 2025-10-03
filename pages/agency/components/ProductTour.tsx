import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap, ScrollTrigger } from '../lib/gsap-init';
import { Filter, Sparkles, CalendarCheck, Receipt } from 'lucide-react';

export default function ProductTour() {
  const tourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gsap || typeof window === 'undefined') return;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !tourRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.tour-scene').forEach((scene, index) => {
        gsap.from(scene, {
          scrollTrigger: {
            trigger: scene,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
          y: 100,
          opacity: 0,
          scale: 0.95,
        });

        const counter = scene.querySelector('.counter');
        if (counter) {
          gsap.from(counter, {
            scrollTrigger: {
              trigger: scene,
              start: 'top 70%',
            },
            textContent: 0,
            duration: 2,
            ease: 'power1.inOut',
            snap: { textContent: 1 },
          });
        }
      });
    }, tourRef);

    return () => ctx.revert();
  }, []);

  const scenes = [
    {
      icon: Filter,
      title: 'Pipeline Filtering',
      description: 'Instantly filter and segment your leads by stage, value, source, or custom fields. See what matters most.',
      metric: { label: 'Win Rate', value: '42', suffix: '%' },
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Sparkles,
      title: 'Proposal Generation',
      description: 'Choose a template, customize scope and pricing, generate a beautiful PDF — all in minutes.',
      metric: { label: 'Avg. Proposal Time', value: '12', suffix: ' min' },
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: CalendarCheck,
      title: 'Resource Booking',
      description: 'Drag and drop team members across projects. See conflicts, utilization, and availability at a glance.',
      metric: { label: 'Team Utilization', value: '78', suffix: '%' },
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Receipt,
      title: 'Invoice Creation',
      description: 'Convert tracked time or milestones into GST-compliant invoices with one click. No manual data entry.',
      metric: { label: 'Invoicing Time Saved', value: '85', suffix: '%' },
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section ref={tourRef} className="py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            See NextWeb Agency in action
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powerful features that adapt to how your agency works
          </p>
        </motion.div>

        <div className="space-y-12 lg:space-y-20">
          {scenes.map((scene, index) => {
            const Icon = scene.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={scene.title}
                className="tour-scene grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative bg-gradient-to-br ${scene.color} rounded-2xl p-8 lg:p-12 shadow-2xl`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={32} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Feature Spotlight</div>
                        <h3 className="text-2xl font-bold">{scene.title}</h3>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                      <div className="text-sm opacity-80 mb-2">{scene.metric.label}</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold counter">{scene.metric.value}</span>
                        <span className="text-2xl opacity-80">{scene.metric.suffix}</span>
                      </div>
                    </div>

                    <motion.div
                      className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/10 rounded-2xl blur-2xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </div>

                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-sm font-semibold text-gray-400 mb-4">
                      Step {index + 1} of {scenes.length}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                      {scene.title}
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {scene.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
