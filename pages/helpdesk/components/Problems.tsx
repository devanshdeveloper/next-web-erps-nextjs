import { useEffect, useRef } from 'react';
import { AlertCircle, Clock, BarChart3 } from 'lucide-react';
import { initScrollAnimation } from '../lib/gsap-init';

const problems = [
  {
    icon: AlertCircle,
    title: 'Lost tickets across channels',
    description: 'Messages scattered across email, WhatsApp, chat and phone — nothing gets tracked properly.',
  },
  {
    icon: Clock,
    title: 'Slow response times',
    description: 'Customers wait too long while support teams struggle to prioritize urgent issues.',
  },
  {
    icon: BarChart3,
    title: 'No metrics or accountability',
    description: 'No SLA tracking, no resolution times, no way to measure or improve support quality.',
  },
];

export default function Problems() {
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Sound familiar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Support teams face the same challenges every day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-red-50 border border-red-100 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
