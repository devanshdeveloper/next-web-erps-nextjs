import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProductTour = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const payrollSceneRef = useRef<HTMLDivElement>(null);
  const attendanceSceneRef = useRef<HTMLDivElement>(null);
  const performanceSceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Payroll Run Animation
    if (payrollSceneRef.current) {
      const payrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: payrollSceneRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse',
        }
      });

      payrollTL
        .fromTo('.payroll-step', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.3 })
        .fromTo('.progress-bar', { scaleX: 0 }, { scaleX: 1, duration: 1.2 }, '-=0.8');
    }

    // Attendance Scene Animation
    if (attendanceSceneRef.current) {
      const attendanceTL = gsap.timeline({
        scrollTrigger: {
          trigger: attendanceSceneRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse',
        }
      });

      attendanceTL
        .fromTo('.attendance-device', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo('.scan-line', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .to('.scan-line', { y: -20, repeat: 2, yoyo: true, duration: 0.8 });
    }

    // Performance Scene Animation
    if (performanceSceneRef.current) {
      const performanceTL = gsap.timeline({
        scrollTrigger: {
          trigger: performanceSceneRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse',
        }
      });

      performanceTL
        .fromTo('.performance-chart', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8 })
        .fromTo('.chart-bar', { scaleY: 0 }, { scaleY: 1, duration: 0.6, stagger: 0.1 }, '-=0.4');
    }
  }, []);

  return (
    <section id="product-tour" ref={sectionRef} className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            See NextWeb People in action
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Watch how our platform streamlines your most important HR processes.
          </motion.p>
        </div>

        <div className="space-y-20">
          {/* Payroll Run Demo */}
          <div ref={payrollSceneRef} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                GST-Compliant Payroll Processing
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Process payroll for your entire team in minutes. Our engine automatically calculates 
                PF, ESI, professional tax, and GST deductions while ensuring statutory compliance.
              </p>
              
              <div className="space-y-4">
                <div className="payroll-step flex items-center gap-3 opacity-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">1</div>
                  <span className="text-gray-700">Import attendance data</span>
                </div>
                <div className="payroll-step flex items-center gap-3 opacity-0">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">2</div>
                  <span className="text-gray-700">Calculate salaries & deductions</span>
                </div>
                <div className="payroll-step flex items-center gap-3 opacity-0">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">3</div>
                  <span className="text-gray-700">Generate payslips & reports</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Processing Payroll</span>
                  <span className="text-sm text-teal-500 ">156 employees</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="progress-bar bg-teal-500 h-2 rounded-full origin-left transform scale-x-0"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-gray-600">Basic Salary</span>
                  <span className="text-sm font-semibold">₹12,50,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-gray-600">PF Deduction</span>
                  <span className="text-sm font-semibold text-red-600">-₹1,50,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-gray-600">ESI Deduction</span>
                  <span className="text-sm font-semibold text-red-600">-₹28,125</span>
                </div>
                <div className="flex justify-between items-center py-2 bg-green-50 px-3 rounded">
                  <span className="text-sm font-semibold text-green-800">Net Payout</span>
                  <span className="text-sm font-bold text-green-800">₹10,71,875</span>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Demo */}
          <div ref={attendanceSceneRef} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real-Time Attendance Tracking
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Biometric integration, mobile check-ins, and real-time attendance data 
                sync directly with payroll for accurate salary calculations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Biometric device integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Mobile app check-in/check-out</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Automatic overtime calculation</span>
                </div>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="attendance-device bg-white rounded-2xl p-6 shadow-lg opacity-0">
                <div className="text-center mb-6">
                  <div className="w-24 h-32 bg-gray-800 rounded-lg mx-auto mb-4 relative overflow-hidden">
                    <div className="scan-line w-full h-1 bg-teal-500 opacity-0 absolute top-1/2"></div>
                  </div>
                  <p className="text-sm text-gray-600">Biometric Scanner</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-semibold">Priya Singh</p>
                      <p className="text-xs text-gray-600">Check-in: 9:15 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-semibold">Rahul Kumar</p>
                      <p className="text-xs text-gray-600">Check-in: 9:30 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Demo */}
          <div ref={performanceSceneRef} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Performance Management & Reviews
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Set goals, track progress, conduct 360-degree reviews, and identify 
                top performers with comprehensive analytics and reporting.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">4.2/5</div>
                  <div className="text-sm text-gray-600">Avg Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-500 ">87%</div>
                  <div className="text-sm text-gray-600">Goals Met</div>
                </div>
              </div>
            </div>

            <div className="performance-chart bg-white rounded-2xl p-6 shadow-lg opacity-0">
              <h4 className="font-semibold mb-4">Team Performance Overview</h4>
              <div className="space-y-4">
                {['Excellence', 'Good', 'Satisfactory', 'Needs Improvement'].map((label, index) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-24">{label}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                      <div
                        className={`chart-bar h-3 rounded-full origin-left transform scale-y-0 ${
                          index === 0 ? 'bg-green-500' :
                          index === 1 ? 'bg-blue-500' :
                          index === 2 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${[75, 60, 45, 15][index]}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold w-8">{[75, 60, 45, 15][index]}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Ready to experience NextWeb People for your business?
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Schedule Live Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductTour;