import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Mobile Apps', href: '#mobile' },
      { label: 'API Documentation', href: '/docs' }
    ],
    company: [
      { label: 'About NextWeb', href: 'https://nextweb.co.in/about' },
      { label: 'Blog', href: 'https://nextweb.co.in/blog' },
      { label: 'Careers', href: 'https://nextweb.co.in/careers' },
      { label: 'Press Kit', href: 'https://nextweb.co.in/press' },
      { label: 'Contact Us', href: 'https://nextweb.co.in/contact' }
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'Training Videos', href: '/training' },
      { label: 'System Status', href: '/status' },
      { label: 'Community Forum', href: '/community' },
      { label: 'WhatsApp Support', href: 'https://wa.me/919876543210' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Data Security', href: '/security' },
      { label: 'GDPR Compliance', href: '/gdpr' },
      { label: 'Cookie Policy', href: '/cookies' }
    ]
  };

  const nextWebProducts = [
    { name: 'NextWeb Inventory', desc: 'Stock & warehouse management' },
    { name: 'NextWeb BillDesk', desc: 'Invoicing & payment collection' },
    { name: 'NextWeb CRM', desc: 'Customer relationship management' },
    { name: 'NextWeb Analytics', desc: 'Business intelligence & reporting' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-poppins font-bold text-xl">NextWeb</div>
                <div className="text-gray-400 text-sm -mt-1">FieldOps</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Field service management software built for Indian SMBs. Schedule, dispatch, 
              track, and invoice — all from one platform that works offline.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <a href="mailto:support@nextweb.co.in" className="hover:text-white transition-colors">
                  support@nextweb.co.in
                </a>
              </div>
              <div className="flex items-start text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  NextWeb Technologies<br />
                  Bangalore, Karnataka 560001<br />
                  India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'YouTube', 'WhatsApp'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                  aria-label={`Follow us on ${platform}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NextWeb Product Suite */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="font-semibold text-white mb-6">NextWeb Product Suite</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {nextWebProducts.map((product) => (
              <motion.a
                key={product.name}
                href="#"
                whileHover={{ y: -2 }}
                className="group bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
              >
                <h5 className="font-medium text-white group-hover:text-blue-500 transition-colors mb-1">
                  {product.name}
                </h5>
                <p className="text-gray-400 text-sm">{product.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 NextWeb Technologies Pvt Ltd. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                All systems operational
              </div>
              <span>•</span>
              <span>Made in India 🇮🇳</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;