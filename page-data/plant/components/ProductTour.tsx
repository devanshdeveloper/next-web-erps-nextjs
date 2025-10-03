import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Smartphone, BarChart3, Settings } from 'lucide-react';
import gsap from '../lib/gsap-init';

const ProductTour: React.FC = () => {
  const tourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = tourRef.current;
    if (!element) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      }
    });

    // Animate the screens
    tl.fromTo('.tour-screen-1', 
      { opacity: 0.3, scale: 0.9, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1 }
    )
    .fromTo('.tour-screen-2',
      { opacity: 0.3, scale: 0.9, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1 },
      '-=0.5'
    )
    .fromTo('.tour-screen-3',
      { opacity: 0.3, scale: 0.9, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1 },
      '-=0.5'
    );

  }, []);

  const tourSteps = [
    {
      icon: <Settings className="text-blue-500" size={24} />,
      title: "Create Work Order",
      description: "Set up production orders with BOMs, routings, and resource requirements",
      screen: "tour-screen-1"
    },
    {
      icon: <Smartphone className="text-green-500" size={24} />,
      title: "Mobile Scanning",
      description: "Operators scan materials and update work progress using mobile terminals",
      screen: "tour-screen-2"
    },
    {
      icon: <BarChart3 className="text-orange-500" size={24} />,
      title: "Real-Time Analytics",
      description: "Monitor OEE, throughput, and quality metrics with live dashboards",
      screen: "tour-screen-3"
    }
  ];

  return (
    <section id="product-tour" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Play className="text-orange-500 mr-2" size={32} />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Product <span className="text-orange-500">Tour</span>
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how NextWeb Plant transforms your manufacturing operations
          </p>
        </motion.div>

        <div ref={tourRef} className="relative">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {tourSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`${step.screen} relative`}
              >
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white/10 rounded-lg mr-3">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  
                  <p className="text-slate-300 mb-6">{step.description}</p>
                  
                  {/* Mock screen */}
                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-slate-400">NextWeb Plant</div>
                    </div>
                    
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-3 bg-slate-700 rounded animate-pulse" style={{
                          animationDelay: `${i * 0.2}s`
                        }}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step indicator */}
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTour;