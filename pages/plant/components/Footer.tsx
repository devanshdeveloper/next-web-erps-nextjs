import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onDemoClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onDemoClick }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Use Cases', href: '#use-cases' }
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Support Center', href: '#' },
      { label: 'Training Videos', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter signup */}
      <div className="bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Manufacturing?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a personalized demo and see how NextWeb Plant can optimize your production operations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onDemoClick}
              className="bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-colors"
            >
              Schedule Your Demo
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NW</span>
              </div>
              <span className="text-xl font-bold">NextWeb</span>
              <span className="text-orange-500 font-semibold">Plant</span>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Complete manufacturing ERP & MES solution designed for Indian manufacturers. 
              From planning to dispatch, manage your entire production workflow in real-time.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <Mail size={18} className="mr-3 text-blue-500" />
                <span>sales@nextwebplant.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone size={18} className="mr-3 text-blue-500" />
                <span>+91 80 4040 5000</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin size={18} className="mr-3 text-blue-500" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Footer links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} NextWeb Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-blue-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;