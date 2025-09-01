'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Grief Support', href: '/grief-support' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Contact', href: '/contact' },
    { name: 'Future Features', href: '/future-functionalities' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-primary hover:no-underline flex items-center space-x-4">
              <Image 
                src="/hospice-ukiah-icon.png" 
                alt="Hospice of Ukiah" 
                width={48} 
                height={48}
                className="rounded-lg shadow-sm"
              />
              <div className="hidden sm:flex items-center">
                <h1 className="text-2xl font-serif font-bold text-primary leading-none">
                  Hospice of Ukiah
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            {/* Donate Button - Special styling */}
            <div className="ml-6">
              <Link
                href="/donate"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Donate
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100 shadow-lg rounded-b-lg">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:text-primary font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/donate"
                  className="block px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 text-center shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
