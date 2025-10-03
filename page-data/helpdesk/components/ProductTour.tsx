import { useEffect, useRef } from 'react';
import { MessageSquare, UserPlus, Clock, CheckCircle2, Star } from 'lucide-react';
import { gsap, ScrollTrigger } from '../lib/gsap-init';

export default function ProductTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ticketCardRef = useRef<HTMLDivElement>(null);
  const assignRef = useRef<HTMLDivElement>(null);
  const slaRef = useRef<HTMLDivElement>(null);
  const resolveRef = useRef<HTMLDivElement>(null);
  const csatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gsap || typeof window === 'undefined') return;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(ticketCardRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.6,
        ease: 'power2.out',
      })
        .from(
          assignRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: 'back.out(1.7)',
          },
          '+=0.3'
        )
        .from(
          slaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          '+=0.2'
        )
        .from(
          resolveRef.current,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
          },
          '+=0.2'
        )
        .from(
          csatRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          '+=0.2'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="product" ref={containerRef} className="py-16 md:py-24 bg-gradient-to-b from-blue-500 to-blue-500/90 text-white overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            See it in action
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Watch how a WhatsApp message becomes a resolved ticket in seconds
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div ref={ticketCardRef} className="bg-white rounded-lg p-6 text-gray-900">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">WhatsApp - Priya Sharma</span>
                  <span className="text-xs bg-cyan-500/10 text-cyan-500 px-3 py-1 rounded-full font-medium">
                    New Ticket #2847
                  </span>
                </div>
                <p className="text-gray-600 mb-3">
                  Hi, I ordered a kurta set yesterday (Order #12345) but haven't received tracking details yet. Can you help?
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                    High Priority
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    Orders
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div ref={assignRef} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-3">
              <UserPlus className="w-6 h-6 text-cyan" />
              <div>
                <div className="font-semibold mb-1">Auto-assigned to Rahul (Orders team)</div>
                <div className="text-sm text-white/80">Based on tags and availability rules</div>
              </div>
            </div>
          </div>

          <div ref={slaRef} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="font-semibold mb-1">SLA Timer Started</div>
                  <div className="text-sm text-white/80">Response due in 30 minutes</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-yellow-400">29:45</div>
            </div>
          </div>

          <div ref={resolveRef} className="bg-white rounded-lg p-6 text-gray-900">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="font-semibold mb-2">Resolved by Rahul</div>
                <div className="bg-green-50 border border-green-100 rounded p-3 mb-3">
                  <p className="text-sm text-gray-700">
                    Hi Priya! Your tracking number is TRK789456. You can track it here: [link]. Your order will arrive by tomorrow evening. Thanks for your patience!
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Response time: 8 minutes</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  <span className="text-green-600 font-medium">SLA met ✓</span>
                </div>
              </div>
            </div>
          </div>

          <div ref={csatRef} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <div>
                  <div className="font-semibold mb-1">CSAT Survey Sent</div>
                  <div className="text-sm text-white/80">Customer rated 5 stars — "Very helpful!"</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
