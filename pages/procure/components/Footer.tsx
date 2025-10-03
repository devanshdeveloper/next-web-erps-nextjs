import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Youtube } from 'lucide-react';
import DemoForm from './DemoForm';

const Footer = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API Documentation', href: '#' },
    ],
    Solutions: [
      { name: 'Retail Chains', href: '#' },
      { name: 'Manufacturing', href: '#' },
      { name: 'Restaurants', href: '#' },
      { name: 'FMCG Distribution', href: '#' },
    ],
    Resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Procurement Guide', href: '#' },
      { name: 'Best Practices', href: '#' },
      { name: 'Webinars', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Building className="h-8 w-8 text-blue-500" />
                <div className="flex items-center">
                  <span className="text-xl font-bold">NextWeb</span>
                  <span className="ml-1 text-lg font-semibold text-teal-500 ">Procure</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-lg">
                Simplify purchase orders, vendor management, and supplier workflows for Indian SMBs. 
                Built for modern businesses that value efficiency and compliance.
              </p>

              {/* Newsletter Signup */}
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Get procurement insights</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Monthly tips on supplier management, cost optimization, and compliance.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </form>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-4">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-teal-500 transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-500 " />
                <div>
                  <p className="text-sm text-gray-400">Email us</p>
                  <p className="font-medium">sales@nextweb.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-500 " />
                <div>
                  <p className="text-sm text-gray-400">Call us</p>
                  <p className="font-medium">+91 99999 99999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-teal-500 " />
                <div>
                  <p className="text-sm text-gray-400">Visit us</p>
                  <p className="font-medium">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-500 to-teal rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to streamline your procurement?
            </h3>
            <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
              Join hundreds of Indian businesses who've transformed their supplier management with NextWeb Procure.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDemoForm(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Your Demo
            </motion.button>
            <p className="text-blue-100 text-sm mt-4">
              No credit card required • Demo in 24 hours • GST-ready
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2025 NextWeb Technologies. All rights reserved.
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-gray-400 hover:text-teal-500 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-gray-400 hover:text-teal-500 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-gray-400 hover:text-teal-500 transition-colors duration-200"
                >
                  <Youtube className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <DemoForm isOpen={showDemoForm} onClose={() => setShowDemoForm(false)} />
    </>
  );
};

export default Footer;