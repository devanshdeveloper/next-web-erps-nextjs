import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Demo', href: '#demo' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'API Documentation', href: '#' },
      { label: 'Mobile Apps', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Partner Program', href: '#' },
      { label: 'Affiliate Program', href: '#' },
      { label: 'Contact Us', href: '#contact' }
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Video Tutorials', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'Community', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR Compliance', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Status Page', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">NW</span>
                  </div>
                  <span className="text-2xl font-bold">NextWeb Commerce</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  The complete e-commerce ERP solution built specifically for Indian SMBs. 
                  Manage inventory, orders, and billing seamlessly across all your sales channels.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <MapPin className="mr-3 text-blue-500 flex-shrink-0" size={18} />
                  <span>Bangalore, Karnataka, India</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="mr-3 text-blue-500 flex-shrink-0" size={18} />
                  <span>+91 80 4567 8901</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="mr-3 text-blue-500 flex-shrink-0" size={18} />
                  <span>hello@nextwebcommerce.com</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest features and e-commerce tips delivered to your inbox.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 bg-gray-700 rounded-l-lg focus:outline-none focus:bg-gray-600 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors"
                  >
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-gray-400 text-sm">
                © 2025 NextWeb Commerce. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {footerLinks.legal.slice(0, 3).map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-blue-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center z-40"
        >
          <ArrowRight className="transform -rotate-90" size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;