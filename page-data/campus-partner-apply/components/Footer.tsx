"use client";

import { motion } from 'framer-motion';
import { Handshake, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Handshake className="w-8 h-8 text-blue-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold text-white">NextWeb</span>
                <span className="text-xs text-slate-400 -mt-1">Partnership</span>
              </div>
            </div>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Partnering with educators and local experts to bring better software to Indian schools.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#who-should-apply" className="hover:text-blue-400 transition-colors">
                  Who Should Apply
                </a>
              </li>
              <li>
                <a href="#partnership-types" className="hover:text-blue-400 transition-colors">
                  Partnership Types
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-blue-400 transition-colors">
                  Application Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#application-form" className="hover:text-blue-400 transition-colors">
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/campus" className="hover:text-blue-400 transition-colors">
                  NextWeb Campus
                </a>
              </li>
              <li>
                <a href="/campus#features" className="hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/campus#pricing" className="hover:text-blue-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/campus#testimonials" className="hover:text-blue-400 transition-colors">
                  Customer Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:partners@nextweb.in" className="hover:text-blue-400 transition-colors">
                  partners@nextweb.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+919999999999" className="hover:text-blue-400 transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Indore, Madhya Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-xl p-6 mb-8 text-center"
        >
          <p className="text-slate-300 italic">
            "Next Web Campus partnerships are built on long-term collaboration, not short-term incentives."
          </p>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} NextWeb Campus. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Extra padding for mobile sticky CTA */}
      <div className="h-20 md:h-0" />
    </footer>
  );
}
