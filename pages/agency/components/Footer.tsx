import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onRequestDemo: () => void;
}

export default function Footer({ onRequestDemo }: FooterProps) {
  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Roadmap', href: '#roadmap' },
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Case Studies', href: '#customers' },
      { name: 'API', href: '#api' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
      { name: 'Partners', href: '#partners' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Security', href: '#security' },
      { name: 'GDPR', href: '#gdpr' },
    ],
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-display font-bold">NextWeb</span>
                  <span className="text-xs px-2 py-0.5 bg-indigo-500 rounded-full">Agency</span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              The complete CRM and project management platform built for agencies in India. Win more clients, deliver predictably, and get paid faster.
            </p>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a href="mailto:hello@nextweb.agency" className="hover:text-white transition-colors">
                  hello@nextweb.agency
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3 mb-6">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} NextWeb Agency. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              {links.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
            Ready to transform your agency operations?
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Join hundreds of agencies already using NextWeb to win more, deliver better, and grow faster.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRequestDemo}
            className="px-8 py-4 bg-orange-500 text-white rounded-md font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg"
          >
            Request a Demo
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
