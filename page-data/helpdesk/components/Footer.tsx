import { HelpCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Integrations', 'Pricing', 'Security', 'Roadmap'],
    Resources: ['Documentation', 'API Reference', 'Help Center', 'Blog', 'Case Studies'],
    Company: ['About Us', 'Careers', 'Contact', 'Partners', 'Press Kit'],
    Legal: ['Privacy Policy', 'Terms of Service', 'SLA', 'GDPR', 'Data Processing'],
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-10 h-10 text-cyan" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none">NextWeb</span>
                <span className="text-sm text-gray-400 leading-none">HelpDesk</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Unified ticketing, SLAs, and customer support workflows for Indian SMBs. Fast, organized support for
              every channel.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:support@nextweb.in" className="hover:text-white transition-colors">
                  support@nextweb.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} NextWeb Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
