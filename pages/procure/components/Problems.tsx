import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TriangleAlert as AlertTriangle,
  Clock,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";
let ScrollTrigger: any;
const Problems = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
      }
      if (sectionRef.current) {
        gsap.fromTo(
          ".problem-card",
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    })();
  }, []);

  const problems = [
    {
      icon: AlertTriangle,
      problem: "Multiple vendor quotes in spreadsheets",
      solution: "Compare & choose best quickly",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: Clock,
      problem: "Slow approvals & lost POs",
      solution: "Automated approval workflows & audit trails",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: DollarSign,
      problem: "Mismatched receipts & invoices",
      solution: "GRN & 3-way match to prevent payment errors",
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Stop wrestling with procurement chaos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Common procurement headaches that slow down Indian SMBs — and how
            NextWeb Procure solves them
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className={`problem-card ${item.bgColor} ${item.borderColor} border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 ${item.bgColor} rounded-full mb-6`}
              >
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Problem:
                  </h3>
                  <p className="text-gray-700">{item.problem}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <ArrowRight className="h-5 w-5 text-teal-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-teal-500 mb-1">
                      Solution:
                    </h4>
                    <p className="text-gray-700">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
