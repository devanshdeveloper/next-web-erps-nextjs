import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FileText, Send, CreditCard, CheckCircle2 } from "lucide-react";

let ScrollTrigger: any;

export default function ProductTour() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

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
      if (prefersReducedMotion || !sectionRef.current) return;

      const ctx = gsap.context(() => {
        stepsRef.current.forEach((step, index) => {
          gsap.fromTo(
            step,
            { opacity: 0.2, x: -50 },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: step,
                start: "top 80%",
                end: "top 30%",
                scrub: 1,
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    })();
  }, []);

  const steps = [
    {
      icon: FileText,
      title: "Build Your Invoice",
      description:
        "Choose from templates, add GST line items with HSN/SAC codes, apply taxes automatically, and preview your professional invoice instantly.",
      color: "bg-blue-500",
    },
    {
      icon: Send,
      title: "Create Payment Link",
      description:
        "Generate instant payment links for UPI, cards, or net banking. Share via WhatsApp, email, or SMS with one click.",
      color: "bg-purple-500",
    },
    {
      icon: CreditCard,
      title: "Customer Pays Securely",
      description:
        "Customers complete payment through their preferred method. Get instant notifications and payment confirmations.",
      color: "bg-green-500",
    },
    {
      icon: CheckCircle2,
      title: "Auto-Match & Reconcile",
      description:
        "Payments automatically match with invoices. Bank statements reconcile in real-time. Export GST reports and close books faster.",
      color: "bg-orange-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto">
            From invoice creation to automatic reconciliation—watch how BillDesk
            simplifies your billing workflow.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12 lg:space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) stepsRef.current[index] = el;
              }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 lg:gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div
                      className={`${step.color} w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mr-4`}
                    >
                      <step.icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-700">
                        STEP {index + 1}
                      </span>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm lg:text-base text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-video flex items-center justify-center shadow-lg">
                  <div className="text-center p-6">
                    <step.icon
                      className={`h-16 w-16 lg:h-20 lg:w-20 mx-auto mb-4 ${step.color.replace(
                        "bg-",
                        "text-"
                      )}`}
                    />
                    <p className="text-sm text-gray-700">Demo visualization</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
