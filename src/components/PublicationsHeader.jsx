'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiShoppingBag, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

// Publications-specific cart button
const PublicationsCartButton = () => {
  const { setIsCartOpen, getCartCount } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
      aria-label="Open cart"
    >
      <FiShoppingBag className="w-5 h-5" />
      {getCartCount() > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-gray-900 text-white text-xs font-medium  flex items-center justify-center">
          {getCartCount()}
        </span>
      )}
    </button>
  );
};

export default function PublicationsHeader({
  scrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  currentQuoteIndex,
  setCurrentQuoteIndex,
  rotatingQuotes
}) {
  const pathname = usePathname();

  // Calculate header top position based on scroll
  // Calculate header top position based on scroll
  // dynamicHeaderTop is no longer needed with sticky positioning + height animation

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Quote Banner */}
      <div
        className="bg-gray-900 text-white overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: scrolled ? '0px' : '48px',
          paddingTop: scrolled ? '0px' : '8px',
          paddingBottom: scrolled ? '0px' : '8px',
          opacity: scrolled ? 0 : 1
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between w-full h-full">
          <button
            onClick={() => setCurrentQuoteIndex((prev) => (prev - 1 + rotatingQuotes.length) % rotatingQuotes.length)}
            className="p-1 hover:bg-gray-800 transition-colors duration-200"
            aria-label="Previous quote"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex-1 text-center px-4 flex items-center justify-center">
            <p className="flex items-center align-center justify-center font-merriweather text-sm not-italic font-semibold text-center leading-tight">
              {rotatingQuotes[currentQuoteIndex].text}
              <Link
                href={rotatingQuotes[currentQuoteIndex].link}
                className="inline-flex items-center ml-2 hover:bg-gray-800 transition-colors duration-200 flex-shrink-0"
                aria-label="Navigate to related page"
              >
                <svg className="w-4 h-4 align-baseline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6L14 10L10 14" stroke="white" strokeOpacity="0.8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10H1" stroke="white" strokeOpacity="0.6" />
                </svg>
              </Link>
            </p>
          </div>

          <button
            onClick={() => setCurrentQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length)}
            className="p-1 hover:bg-gray-800 transition-colors duration-200"
            aria-label="Next quote"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Header */}
      <header
        className="bg-white border-b border-gray-200 relative"
      >
        {/* Top Bar - Logo and Cart */}
        <div className="max-w-6xl mx-auto px-8 pt-4 pb-4 relative h-24 lg:h-36 flex items-center justify-between">
          {/* Left - Mobile Menu Button */}
          <button
            className="lg:hidden absolute left-8 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6 text-gray-800" /> : <FiMenu className="w-6 h-6 text-gray-800" />}
          </button>
          <div className="hidden lg:block w-12"></div>

          {/* Center - Logo */}
          <div className="flex items-center justify-center flex-1">
            <Link href="/publications" className="flex items-center no-underline text-gray-900">
              <Image
                src="/image/logo_silver.png"
                alt="Antwi-Boasiako Publications"
                width={500}
                height={500}
                className="w-24 h-24 lg:w-36 lg:h-36 object-cover cursor-pointer"
              />
            </Link>
          </div>

          {/* Right - Search and Cart */}
          <div className="lg:hidden absolute right-8 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
            <button className="p-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">
              <FiSearch className="w-5 h-5" />
            </button>
            <PublicationsCartButton />
          </div>

          {/* Desktop Search and Cart */}
          <div className="hidden lg:flex items-center gap-2">
            <button className="p-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">
              <FiSearch className="w-5 h-5" />
            </button>
            <PublicationsCartButton />
          </div>
        </div>

        {/* Navigation Bar - Desktop Only */}
        <nav className="hidden lg:block border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center h-12">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href="/publications/all-books"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/all-books' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    All Books
                  </span>
                </Link>
                <Link
                  href="/publications/events"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/events' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    Events
                  </span>
                </Link>
                <Link
                  href="/publications/author"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/author' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    Author
                  </span>
                </Link>
                <Link
                  href="/publications/gallery"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/gallery' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    Gallery
                  </span>
                </Link>
                <Link
                  href="/publications/about"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/about' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    About
                  </span>
                </Link>
                <Link
                  href="/publications/contact"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/contact' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    Contact Us
                  </span>
                </Link>
                <Link
                  href="/publications/policies"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/policies' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    Policies
                  </span>
                </Link>
                <Link
                  href="/publications/csr"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/csr' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    CSR
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="space-y-2">
                <Link
                  href="/publications/all-books"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={`inline-block relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/all-books' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    All Books
                  </span>
                </Link>

                <Link
                  href="/publications/events"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={`inline-block relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/events' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    Events
                  </span>
                </Link>
                <Link
                  href="/publications/author"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={`inline-block relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/author' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    Author
                  </span>
                </Link>
                <Link
                  href="/publications/gallery"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={`inline-block relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/gallery' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    Gallery
                  </span>
                </Link>
                <Link
                  href="/publications/about"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={`inline-block relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/about' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    About
                  </span>
                </Link>
                <Link
                  href="/publications/contact"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={`inline-block relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/contact' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    Contact Us
                  </span>
                </Link>
                <Link
                  href="/publications/policies"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={`inline-block relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/policies' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    Policies
                  </span>
                </Link>
                <Link
                  href="/publications/csr"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={`inline-block relative after:content-[''] after:absolute after:h-[1px] after:bg-gray-900 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/csr' ? 'after:w-full' : 'after:w-0'
                    }`}>
                    CSR
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
