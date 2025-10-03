import { Dumbbell, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="w-8 h-8 text-orange-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-heading font-bold">NextWeb</span>
                <span className="text-xs text-gray-400">FitHub</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Complete gym and studio management software built for Indian fitness businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-orange-500 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-orange-500 transition-colors">Pricing</a></li>
              <li><a href="#integrations" className="hover:text-orange-500 transition-colors">Integrations</a></li>
              <li><a href="#customers" className="hover:text-orange-500 transition-colors">Customers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#careers" className="hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@nextweb.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} NextWeb FitHub. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-orange-500 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
