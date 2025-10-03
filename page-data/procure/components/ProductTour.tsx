import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

let ScrollTrigger: any;
const ProductTour = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scenesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    (async () => {
    if (typeof window === "undefined") return;
    ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
    if (sectionRef.current) {
      // Create timeline for scroll-triggered animations
      const scenes = scenesRef.current.filter(Boolean);
      
      scenes.forEach((scene, index) => {
        gsap.fromTo(scene,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: scene,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Animate comparison bars
      gsap.fromTo('.comparison-bar',
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.comparison-scene',
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Counter animation for savings
      gsap.fromTo('.savings-counter',
        { textContent: 0 },
        {
          textContent: 65,
          duration: 2,
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: '.savings-counter',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  })();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See NextWeb Procure in action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how leading businesses transform their procurement workflows
          </p>
        </motion.div>

        <div className="space-y-24 text-gray-900">
          {/* Scene 1: Quote Comparison */}
          <div 
        ref={(el) => { if (el) scenesRef.current[0] = el; }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center comparison-scene"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Smart Quote Comparison
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Compare vendor quotes side-by-side with intelligent recommendations. 
                Our AI highlights the best value considering price, delivery time, and vendor reliability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Automatic price comparison</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Delivery time analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Vendor reliability scores</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">RFQ: Office Supplies</h4>
                
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border-2 border-green-500">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Vendor A</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Best Value</span>
                    </div>
                    <div className="comparison-bar bg-green-500 h-2 rounded-full transform origin-left"></div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span>₹45,000</span>
                      <span>3 days</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Vendor B</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">Good</span>
                    </div>
                    <div className="comparison-bar bg-yellow-500 h-2 rounded-full w-4/5 transform origin-left"></div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span>₹48,000</span>
                      <span>2 days</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Vendor C</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">High Cost</span>
                    </div>
                    <div className="comparison-bar bg-red-500 h-2 rounded-full w-3/5 transform origin-left"></div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span>₹52,000</span>
                      <span>5 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scene 2: Approval Workflow */}
          <div 
            ref={(el) => { if (el) scenesRef.current[1] = el; }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Automated Approval Workflows
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Set up multi-level approval rules based on amount, category, or vendor. 
                Track approvals in real-time and get notifications for pending requests.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl savings-counter font-bold text-blue-500">0</span>
                  <span className="text-gray-700">% faster approvals</span>
                </div>
                <p className="text-sm text-gray-600">Compared to manual approval processes</p>
              </div>
            </div>
            <div className="lg:order-1 bg-gray-50 rounded-2xl p-8">
              <div className="space-y-6">
                <h4 className="font-semibold text-gray-900">PO Approval Flow</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                    <div>
                      <p className="font-medium text-gray-900">Department Head</p>
                      <p className="text-sm text-green-600">Approved • 2 min ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">⏳</div>
                    <div>
                      <p className="font-medium text-gray-900">Finance Manager</p>
                      <p className="text-sm text-orange-600">Pending approval • Notified</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-bold">—</div>
                    <div>
                      <p className="font-medium text-gray-500">CEO</p>
                      <p className="text-sm text-gray-500">Awaiting previous approval</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-sm text-gray-600 mb-2">PO Amount: ₹1,25,000</p>
                  <p className="text-sm text-gray-600">Auto-routed based on approval rules</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scene 3: GRN & Matching */}
          <div 
            ref={(el) => { if (el) scenesRef.current[2] = el; }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                GRN & 3-Way Invoice Matching
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Scan goods receipts, match with POs and invoices automatically. 
                Flag discrepancies before payment to prevent costly errors.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-teal-500 ">99.2%</div>
                  <div className="text-sm text-teal-700">Matching Accuracy</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-500">2 sec</div>
                  <div className="text-sm text-blue-700">Avg Match Time</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-6">
                <h4 className="font-semibold text-gray-900">3-Way Match Status</h4>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Purchase Order</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">✓ Matched</span>
                    </div>
                    <p className="text-sm text-gray-600">PO-2024-001 • ₹45,000</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Goods Receipt</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">✓ Matched</span>
                    </div>
                    <p className="text-sm text-gray-600">GRN-2024-001 • Qty: 100 units</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Invoice</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">✓ Matched</span>
                    </div>
                    <p className="text-sm text-gray-600">INV-2024-001 • ₹45,000</p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="font-medium text-green-800">Ready for Payment</p>
                  <p className="text-sm text-green-600">All documents matched successfully</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTour;