export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">NW</span>
              </div>
              <span className="text-xl font-bold">NextWeb ERPs</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Business automation made simple for Indian SMBs. Transform your operations 
              with our comprehensive ERP suite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Products</h3>
            <ul className="space-y-2">
              <li><a href="/campus" className="text-gray-400 hover:text-white transition-colors">NextWeb Campus</a></li>
              <li><a href="/commerce" className="text-gray-400 hover:text-white transition-colors">NextWeb Commerce</a></li>
              <li><a href="/finance" className="text-gray-400 hover:text-white transition-colors">NextWeb Finance</a></li>
              <li><a href="/people" className="text-gray-400 hover:text-white transition-colors">NextWeb People</a></li>
              <li><a href="/inventory" className="text-gray-400 hover:text-white transition-colors">NextWeb Inventory</a></li>
              <li><a href="/analytics" className="text-gray-400 hover:text-white transition-colors">NextWeb Analytics</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/partners" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/press" className="text-gray-400 hover:text-white transition-colors">Press Kit</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/docs" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="/api" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="/status" className="text-gray-400 hover:text-white transition-colors">System Status</a></li>
              <li><a href="/security" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Contact Us</h4>
              <p className="text-gray-400 text-sm">support@nextweb.com</p>
              <p className="text-gray-400 text-sm">+91-80-1234-5678</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 NextWeb ERPs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}