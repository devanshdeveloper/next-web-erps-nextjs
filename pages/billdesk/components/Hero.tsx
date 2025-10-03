import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FileText, Send, CreditCard, CheckCircle } from "lucide-react";

interface HeroProps {
  onRequestDemo: () => void;
  onStartTrial: () => void;
}

let ScrollTrigger:any;

export default function Hero({ onRequestDemo, onStartTrial }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
      }

      if (!gsap || typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion || !flowRef.current) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: flowRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        });

        tl.fromTo(
          ".flow-step",
          { opacity: 0.3, scale: 0.9 },
          { opacity: 1, scale: 1, stagger: 0.3, ease: "power2.out" }
        );
      }, flowRef);
      return () => ctx.revert();
    })();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight"
          >
            Invoice faster. Collect payments.{" "}
            <span className="text-blue-500">Reconcile automatically.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 lg:mb-10 max-w-3xl mx-auto"
          >
            GST-ready invoices, e-invoicing support, payment links and
            auto-reconciliation for Indian businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 lg:mb-16"
          >
            <button
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-orange-500 text-white rounded-md font-semibold text-base lg:text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Request Demo
            </button>
            <button
              onClick={onStartTrial}
              className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 border-2 border-blue-500 text-blue-500 rounded-md font-semibold text-base lg:text-lg hover:bg-blue-500 hover:text-white transition-all"
            >
              Start Free Trial
            </button>
          </motion.div>

          <div
            ref={flowRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12 lg:mt-16"
          >
            <motion.div
              className="flow-step bg-white p-4 lg:p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <FileText className="h-8 w-8 lg:h-10 lg:w-10 text-blue-500 mx-auto mb-3" />
              <p className="text-xs lg:text-sm font-semibold text-gray-900">
                Create Invoice
              </p>
            </motion.div>

            <motion.div
              className="flow-step bg-white p-4 lg:p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <Send className="h-8 w-8 lg:h-10 lg:w-10 text-blue-500 mx-auto mb-3" />
              <p className="text-xs lg:text-sm font-semibold text-gray-900">
                Send Payment Link
              </p>
            </motion.div>

            <motion.div
              className="flow-step bg-white p-4 lg:p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <CreditCard className="h-8 w-8 lg:h-10 lg:w-10 text-green-500 mx-auto mb-3" />
              <p className="text-xs lg:text-sm font-semibold text-gray-900">
                Customer Pays
              </p>
            </motion.div>

            <motion.div
              className="flow-step bg-white p-4 lg:p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <CheckCircle className="h-8 w-8 lg:h-10 lg:w-10 text-green-500 mx-auto mb-3" />
              <p className="text-xs lg:text-sm font-semibold text-gray-900">
                Auto-Reconcile
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
