import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
let ScrollTrigger: any;
const ProductTour: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
      }

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
          });

          // Animate progress bar
          timeline.to(".progress-fill", {
            width: "100%",
            duration: 1,
            ease: "power2.out",
          });

          // Animate step indicators
          timeline.to(
            ".step-indicator",
            {
              scale: 1.2,
              backgroundColor: "#0EA5A4",
              stagger: 0.2,
              duration: 0.3,
              ease: "back.out(1.7)",
            },
            0.2
          );

          // Animate mockup transitions
          timeline.to(
            ".mockup-slide",
            {
              x: "-25%",
              opacity: 0.7,
              stagger: 0.3,
              duration: 0.5,
            },
            0.5
          );
        }, sectionRef);

        return () => ctx.revert();
      }
    })();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            See NextWeb FieldOps in action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow a complete job lifecycle from creation to payment collection
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute top-8 left-0 w-full h-1 bg-gray-200 rounded-full">
            <div className="progress-fill h-full bg-teal-500 rounded-full w-0"></div>
          </div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            {[
              { label: "Job Created", desc: "Customer request via WhatsApp" },
              { label: "Dispatched", desc: "Auto-assigned to nearest tech" },
              { label: "In Progress", desc: "Live tracking & updates" },
              { label: "Completed", desc: "Invoice sent & paid" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="step-indicator w-4 h-4 bg-gray-300 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold text-sm text-gray-900">
                  {step.label}
                </h4>
                <p className="text-xs text-gray-600 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mockup Slides */}
          <div className="relative h-96 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
            {[1, 2, 3, 4].map((slide) => (
              <div
                key={slide}
                className={`mockup-slide absolute inset-0 bg-white rounded-xl shadow-lg border border-gray-200 p-8 transform translate-x-${
                  (slide - 1) * 25
                }`}
              >
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-500">
                        #{slide}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Step {slide} Demo
                    </h3>
                    <p className="text-gray-600">Interactive mockup content</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { metric: "25%", label: "Fewer missed visits" },
            { metric: "40%", label: "Faster invoicing" },
            { metric: "60%", label: "Better first-time fix" },
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-poppins font-bold text-blue-500 mb-2">
                {benefit.metric}
              </div>
              <div className="text-gray-600">{benefit.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductTour;
