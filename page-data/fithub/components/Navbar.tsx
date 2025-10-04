import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';

interface NavbarProps {
  onCTAClick: () => void;
}

export default function Navbar({ onCTAClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Product', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Customers', href: '#customers' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <Dumbbell className="w-8 h-8 text-blue-500" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-heading font-bold text-blue-500">NextWeb</span>
              <span className="text-xs text-gray-600">FitHub</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-900 hover:text-blue-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onCTAClick}
              className="bg-orange-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-orange-500/90 transition-all hover:scale-105"
            >
              Request Demo
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

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
                className="block text-base font-medium text-gray-900 hover:text-blue-500 py-2"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onCTAClick();
              }}
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-md font-semibold"
            >
              Request Demo
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
