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
  ];

  return (
    <>
      {/* Top Utility Bar - Contact Info */}
      <div className="py-2 text-sm" style={{backgroundColor: '#ae485e', color: '#ffffff'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center lg:justify-end items-center space-x-6">
            <a 
              href="tel:7074624038" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              style={{color: '#ffffff'}}
            >
              <svg className="w-4 h-4" fill="#ffffff" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span style={{color: '#ffffff'}}>(707) 462-4038</span>
            </a>
            <span className="hidden sm:inline" style={{color: 'rgba(255,255,255,0.6)'}}>|</span>
            <a 
              href="mailto:hospice.ukiah@gmail.com" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              style={{color: '#ffffff'}}
            >
              <svg className="w-4 h-4" fill="#ffffff" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="hidden sm:inline" style={{color: '#ffffff'}}>hospice.ukiah@gmail.com</span>
              <span className="sm:hidden" style={{color: '#ffffff'}}>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-primary hover:no-underline flex items-center space-x-3 h-full">
              <Image 
                src="/hospice-ukiah-icon.png" 
                alt="Hospice of Ukiah" 
                width={40} 
                height={40}
                className="rounded-lg shadow-sm"
              />
              <div className="flex items-center h-full">
                <span className="text-lg sm:text-2xl font-serif font-bold text-primary leading-none m-0 p-0" style={{margin: '0', padding: '0', lineHeight: '1'}}>
                  Hospice of Ukiah
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 h-full">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-50 flex items-center h-full"
              >
                {link.name}
              </Link>
            ))}
            {/* Donate Button - Special styling */}
            <div className="ml-6 flex items-center h-full">
              <Link
                href="/donate"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center"
                style={{color: 'white !important'}}
              >
                Donate
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center h-full">
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
                  style={{color: 'white !important'}}
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
    </>
  );
};

export default Header;
