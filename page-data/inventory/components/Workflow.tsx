import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Package, Warehouse, Truck, BarChart } from 'lucide-react';
import { gsap } from '../lib/gsap-init';

const Workflow = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate workflow steps
      gsap.fromTo(".workflow-step", 
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
          }
        }
      );

      // Animate connecting lines
      gsap.fromTo(".workflow-line", 
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: Package,
      title: "Receive",
      description: "Scan barcodes to receive inventory with batch tracking and automatic bin assignment.",
      color: "bg-blue-500"
    },
    {
      icon: Warehouse,
      title: "Store",
      description: "Organize inventory across warehouses with optimized bin locations and FIFO management.",
      color: "bg-green-500"
    },
    {
      icon: Truck,
      title: "Pick & Ship",
      description: "Mobile-guided picking, automatic stock allocation, and real-time inventory updates.",
      color: "bg-orange-500"
    },
    {
      icon: BarChart,
      title: "Reconcile",
      description: "Automated stock reconciliation, GST reports, and analytics for continuous optimization.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="workflow" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
            How NextWeb Inventory <span className="text-blue-500">Streamlines Operations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From receiving to reporting — see how our workflow eliminates manual errors and saves hours every day.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between relative">
            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2 z-0">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`workflow-line absolute h-full bg-gradient-to-r from-blue-500 to-blue-400 origin-left`}
                  style={{
                    left: `${(index * 33.33)}%`,
                    width: `${33.33}%`
                  }}
                ></div>
              ))}
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="workflow-step relative z-10 flex flex-col items-center max-w-xs"
              >
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center shadow-lg mb-4`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`workflow-step flex items-center space-x-4 ${index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-md flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            The Results Speak for Themselves
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">75%</div>
              <div className="text-gray-600">Reduction in Stockouts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">3 Hours</div>
              <div className="text-gray-600">Daily Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">99.8%</div>
              <div className="text-gray-600">Inventory Accuracy</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;