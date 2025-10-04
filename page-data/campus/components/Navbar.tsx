import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onDemoClick: () => void;
}

export default function Navbar({ onDemoClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Product', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Customers', href: '#testimonials' },
    { label: 'Resources', href: '#faq' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
      >
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-blue-500" aria-hidden="true" />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl sm:text-2xl font-bold text-blue-500">
                  NextWeb
                </span>
                <span className="text-xs text-gray-600 -mt-1">Campus</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={onDemoClick}
                className="bg-orange-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-orange-500/90 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Request Demo
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-4 space-y-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-700 hover:text-blue-500 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onDemoClick();
                  }}
                  className="w-full bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-500/90 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Request Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-lg p-4">
        <button
          onClick={onDemoClick}
          className="w-full bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-500/90 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Request Demo
        </button>
      </div>
    </>
  );
}
