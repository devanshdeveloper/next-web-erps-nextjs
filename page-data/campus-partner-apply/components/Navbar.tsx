"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Handshake } from 'lucide-react';

interface NavbarProps {
  onApplyClick: () => void;
}

export default function Navbar({ onApplyClick }: NavbarProps) {
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
    { label: 'Who Should Apply', href: '#who-should-apply' },
    { label: 'Partnership Types', href: '#partnership-types' },
    { label: 'Process', href: '#process' },
    { label: 'FAQs', href: '#faq' },
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
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="/campus" className="flex items-center space-x-2">
              <Handshake className="w-8 h-8 text-blue-600" aria-hidden="true" />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl sm:text-2xl font-bold text-gray-900">
                  NextWeb
                </span>
                <span className="text-xs text-gray-500 -mt-1">Partnership</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={onApplyClick}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Start Application
              </button>
            </div>

            {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
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
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onApplyClick();
                  }}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Start Application
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-lg p-4">
        <button
          onClick={onApplyClick}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Start Application
        </button>
      </div>
    </>
  );
}
