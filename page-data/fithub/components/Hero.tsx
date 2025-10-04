import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Calendar, Users, CreditCard, TrendingUp } from 'lucide-react';

interface HeroProps {
  onPrimaryClick: () => void;
}

export default function Hero({ onPrimaryClick }: HeroProps) {
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mockupRef.current) {
      gsap.fromTo(
        mockupRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );

      gsap.to(mockupRef.current, {
        y: -20,
        scrollTrigger: {
          trigger: mockupRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white via-gray-100 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Run your gym smoothly —<br />
            <span className="text-blue-500">members, classes, payments</span> in one app
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Class scheduling, memberships, trainer management, POS & GST receipts — made for Indian fitness businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={onPrimaryClick}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500/90 transition-all hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              Request Demo
            </button>
            <button className="bg-white text-blue-500 border-2 border-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all w-full sm:w-auto">
              Start Free Trial
            </button>
          </motion.div>
        </div>

        <div ref={mockupRef} className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <MockupCard
                icon={<Calendar className="w-6 h-6 text-blue-500" />}
                title="Today's Classes"
                value="24"
                subtitle="12 ongoing • 8 upcoming"
                color="blue"
              />
              <MockupCard
                icon={<Users className="w-6 h-6 text-emerald" />}
                title="Active Members"
                value="1,247"
                subtitle="89% attendance rate"
                color="green"
              />
              <MockupCard
                icon={<CreditCard className="w-6 h-6 text-orange-500" />}
                title="Today's Revenue"
                value="₹42,680"
                subtitle="+18% vs yesterday"
                color="orange"
              />
              <MockupCard
                icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
                title="Capacity"
                value="78%"
                subtitle="Peak hours: 6-8 PM"
                color="purple"
              />
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Upcoming: Yoga with Priya</span>
                <span className="bg-emerald/10 text-emerald px-3 py-1 rounded-full font-medium">
                  18/20 booked
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MockupCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
}

function MockupCard({ icon, title, value, subtitle, color }: MockupCardProps) {
  const bgColors = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    orange: 'bg-orange-50',
    purple: 'bg-purple-50',
  };

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      className={`${bgColors[color]} rounded-xl p-4 md:p-6 transition-all`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>{icon}</div>
      </div>
      <div className="text-sm text-gray-600 mb-1">{title}</div>
      <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-xs text-gray-600">{subtitle}</div>
    </motion.div>
  );
}
