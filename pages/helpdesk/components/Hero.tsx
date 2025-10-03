import { useEffect, useRef } from 'react';
import { Mail, MessageSquare, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from '../lib/gsap-init';

interface HeroProps {
  onDemoClick: () => void;
  onTrialClick: () => void;
}

export default function Hero({ onDemoClick, onTrialClick }: HeroProps) {
  const inboxRef = useRef<HTMLDivElement>(null);
  const slaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gsap || typeof window === 'undefined') return;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !inboxRef.current || !slaRef.current) return;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.from('.message-item', {
      opacity: 0,
      x: -30,
      stagger: 0.2,
      duration: 0.6,
      ease: 'power2.out',
    });

    tl.from(
      slaRef.current,
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
      },
      '-=0.3'
    );

    const slaCounter = slaRef.current.querySelector('.sla-time');
    if (slaCounter) {
      const obj = { value: 180 };
      gsap.to(obj, {
        value: 120,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          const minutes = Math.floor(obj.value / 60);
          const seconds = Math.floor(obj.value % 60);
          slaCounter.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        },
      });
    }
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
              A single inbox for customer support — tickets, SLAs & automation
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Email, WhatsApp, chat and phone — unified ticketing, SLA tracking and analytics for faster, more organized support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onDemoClick}
                className="bg-orange-500 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-orange/90 transition-all hover:scale-105"
              >
                Request Demo
              </button>
              <button
                onClick={onTrialClick}
                className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all"
              >
                Start Free Trial
              </button>
            </div>
          </motion.div>

          <div className="relative" ref={inboxRef}>
            <div className="bg-white rounded-lg shadow-2xl p-6 space-y-3">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Unified Inbox</h3>
                <span className="text-xs bg-cyan-500/10 text-cyan-500 px-3 py-1 rounded-full font-medium text-gray-900">
                  12 New
                </span>
              </div>

              <motion.div
                className="message-item flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-gray-900">WhatsApp - Priya Sharma</span>
                    <span className="text-xs text-gray-500">2m ago</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">Order delivery status for #12345</p>
                </div>
              </motion.div>

              <motion.div
                className="message-item flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-gray-900">Email - Rajesh Kumar</span>
                    <span className="text-xs text-gray-500">15m ago</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">Request for refund processing</p>
                </div>
              </motion.div>

              <motion.div
                className="message-item flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-gray-900">Phone - Aisha Patel</span>
                    <span className="text-xs text-gray-500">1h ago</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">Product inquiry and pricing</p>
                </div>
              </motion.div>
            </div>

            <div
              ref={slaRef}
              className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-4 border-2 border-cyan"
            >
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-cyan" />
                <div>
                  <div className="text-xs text-gray-500 mb-1">SLA Timer</div>
                  <div className="sla-time text-2xl font-bold text-cyan">2:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
